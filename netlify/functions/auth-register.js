const { neon } = require('@neondatabase/serverless');
const crypto = require('crypto');

// Hashing helper
function hashPassword(password) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    return `${salt}:${hash}`;
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
            return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing fields' }) };
        }

        if (password.length < 6) {
            return { statusCode: 400, headers, body: JSON.stringify({ error: 'Password too short' }) };
        }

        const sql = neon(process.env.DATABASE_URL);

        // Check availability
        const existing = await sql`SELECT username FROM users WHERE username = ${username}`;
        if (existing.length > 0) {
            return { statusCode: 409, headers, body: JSON.stringify({ error: 'Username taken' }) };
        }

        // Hash and Create
        const passwordHash = hashPassword(password);

        // Defaults
        const xp = 0;
        const streak = 1;
        const currentLevel = 'c1-l1';
        const unlockedLevels = ['c1-l1'];
        const completedQuestions = [];
        const unlockedChapters = ['chapter1'];

        await sql`
            INSERT INTO users (username, password_hash, xp, streak, current_level, unlocked_levels, completed_units)
            VALUES (${username}, ${passwordHash}, ${xp}, ${streak}, ${currentLevel}, ${unlockedLevels}, ${completedQuestions})
        `;

        // Return user object immediately for auto-login
        const user = {
            username,
            xp,
            streak,
            unlockedLevels,
            unlockedChapters,
            completedQuestions,
            rank: '-'
        };

        return {
            statusCode: 201,
            headers,
            body: JSON.stringify({ success: true, user })
        };

    } catch (error) {
        console.error('Register Error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Registration failed' })
        };
    }
};
