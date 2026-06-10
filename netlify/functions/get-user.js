const { neon } = require('@neondatabase/serverless');

exports.handler = async (event) => {
    // CORS headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    };

    // Handle preflight
    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    try {
        const { username } = JSON.parse(event.body || '{}');

        if (!username || username.length < 3) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Username required (min 3 chars)' })
            };
        }

        const sql = neon(process.env.DATABASE_URL);

        // Get or create user and calculate rank
        const result = await sql`
            WITH ranked_users AS (
                SELECT username, 
                       RANK() OVER (ORDER BY xp DESC, array_length(completed_units, 1) DESC) as rank
                FROM users
                WHERE username NOT IN ('lijinns', 'admin.iimbx')
            )
            INSERT INTO users (username)
            VALUES (${username})
            ON CONFLICT (username) 
            DO UPDATE SET updated_at = NOW()
            RETURNING *, (SELECT rank FROM ranked_users WHERE username = ${username}) as current_rank
        `;

        const user = result[0];

        // Ensure column exists gracefully (migration safety)
        try {
            await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS last_played_date DATE`;
            await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS demo_completed BOOLEAN DEFAULT FALSE`;
            await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS selected_icon TEXT`;
            await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS selected_mascot TEXT`;
        } catch (mErr) {
            // ignore
        }

        // Streak check based on DB timestamp if available
        let computedStreak = user.streak || 1;
        if (user.last_played_date) {
            // Calculate day difference
            // Note: Postgres DATE is returned as a Date object from neon
            const lastPlayed = new Date(user.last_played_date);
            const today = new Date();
            // Reset to midnight to only compare days
            lastPlayed.setHours(0, 0, 0, 0);
            today.setHours(0, 0, 0, 0);

            const diffTime = Math.abs(today - lastPlayed);
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays === 1) {
                // Streak increment happens ONLY in save-user.js when they finish something, 
                // but if we wanted to increment it on GET we could. Usually, get just verifies 
                // it hasn't broken.
            } else if (diffDays > 1) {
                computedStreak = 1; // Broken streak
                // Update the DB immediately to reflect broken streak
                await sql`UPDATE users SET streak = 1 WHERE username = ${user.username}`;
            }
        }

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                username: user.username,
                xp: user.xp,
                streak: computedStreak,
                currentLevel: user.current_level,
                unlockedChapters: user.unlocked_chapters,
                unlockedLevels: user.unlocked_levels,
                completedQuestions: user.completed_units,
                levelStats: (typeof user.level_stats === 'string') ? (() => { try { return JSON.parse(user.level_stats); } catch(e) { return {}; } })() : (user.level_stats || {}),
                demoCompleted: user.demo_completed || false,
                selectedIcon: user.selected_icon || null,
                selectedMascot: user.selected_mascot || 'polly',
                lastPlayedDate: user.last_played_date,
                rank: user.current_rank
            })
        };

    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Database error' })
        };
    }
};
