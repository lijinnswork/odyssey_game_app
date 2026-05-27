const { neon } = require('@neondatabase/serverless');
const crypto = require('crypto');

function verifyPassword(password, storedHash) {
    if (!storedHash) return false;
    const [salt, originalHash] = storedHash.split(':');
    if (!salt || !originalHash) return false;
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    return hash === originalHash;
}

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
        const { username, password } = JSON.parse(event.body || '{}');

        if (!username || !password) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Missing credentials' })
            };
        }

        const sql = neon(process.env.DATABASE_URL);

        // Fetch user + rank (reuse get-user logic for rank)
        const result = await sql`
            WITH ranked_users AS (
                SELECT username, 
                       RANK() OVER (ORDER BY xp DESC, array_length(completed_units, 1) DESC) as rank
                FROM users
            )
            SELECT u.*, r.rank
            FROM users u
            JOIN ranked_users r ON u.username = r.username
            WHERE u.username = ${username}
        `;

        if (result.length === 0) {
            return { statusCode: 401, headers, body: JSON.stringify({ error: 'User not found' }) };
        }

        const user = result[0];

        // Check password
        const isValid = verifyPassword(password, user.password_hash);
        if (!isValid) {
            return { statusCode: 401, headers, body: JSON.stringify({ error: 'Invalid password' }) };
        }

        // 2. Compute/Reset Streak (Device Agnostic)
        let streak = user.streak || 1;
        if (user.last_played_date) {
            const lastPlayed = new Date(user.last_played_date);
            const today = new Date();
            lastPlayed.setHours(0, 0, 0, 0);
            today.setHours(0, 0, 0, 0);

            const diffTime = today - lastPlayed;
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays === 1) {
                // If they hadn't already played today, we COULD increment here, 
                // but usually streaks increment when they actually complete a task.
                // However, for "Login Streak", we increment now.
                // Let's stick to "Play Streak" -> save-user.js will handle increment.
                // Here we only handle the RESET if they missed a day.
            } else if (diffDays > 1) {
                streak = 1;
                await sql`UPDATE users SET streak = 1 WHERE username = ${user.username}`;
            }
        }

        // Clean user object for frontend
        const userData = {
            username: user.username,
            xp: user.xp,
            streak: streak,
            unlockedLevels: user.unlocked_levels || [],
            unlockedChapters: user.unlocked_chapters || [],
            completedQuestions: user.completed_units || [],
            levelStats: (typeof user.level_stats === 'string') ? (() => { try { return JSON.parse(user.level_stats); } catch(e) { return {}; } })() : (user.level_stats || {}),
            demoCompleted: user.demo_completed || false,
            selectedIcon: user.selected_icon || null,
            lastPlayedDate: user.last_played_date,
            rank: user.rank
        };

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ success: true, user: userData })
        };

    } catch (error) {
        console.error('Login Error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Login failed' })
        };
    }
};
