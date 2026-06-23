const { neon } = require('@neondatabase/serverless');

exports.handler = async (event) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    try {
        const data = JSON.parse(event.body || '{}');
        const { username, xp, streak, unlockedLevels, unlockedChapters, completedQuestions, levelStats, demoCompleted, selectedIcon, selectedMascot } = data;

        if (!username) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Username required' })
            };
        }

        const sql = neon(process.env.DATABASE_URL);

        // Auto-migrate column if missing
        try {
            await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS last_played_date DATE`;
            await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS unlocked_chapters TEXT[]`;
            await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS level_stats JSONB`;
            await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS demo_completed BOOLEAN DEFAULT FALSE`;
            await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS selected_icon TEXT`;
            await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS selected_mascot TEXT`;
        } catch (mErr) {
            // ignore if it already exists or if user lacks alter privileges
        }

        const result = await sql`
            WITH ranked_users AS (
                SELECT username, 
                       RANK() OVER (ORDER BY xp DESC, array_length(completed_units, 1) DESC) as rank
                FROM users
                WHERE username NOT IN ('lijinns', 'admin.iimbx')
            ),
            updated_user AS (
                UPDATE users
                SET 
                    xp = ${xp || 0},
                    streak = ${streak || 1},
                    unlocked_levels = ${unlockedLevels || ['c1-l1']},
                    unlocked_chapters = ${unlockedChapters || ['chapter1']},
                    completed_units = ${completedQuestions || []},
                    level_stats = ${levelStats && Object.keys(levelStats).length > 0 ? levelStats : null},
                    demo_completed = ${demoCompleted || false},
                    selected_icon = ${selectedIcon || null},
                    selected_mascot = ${selectedMascot || 'milo'},
                    last_played_date = CURRENT_DATE,
                    updated_at = NOW()
                WHERE username = ${username}
                RETURNING username
            )
            SELECT rank FROM ranked_users WHERE username = (SELECT username FROM updated_user)
        `;

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ success: true, rank: result[0]?.rank })
        };

    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Save failed' })
        };
    }
};
