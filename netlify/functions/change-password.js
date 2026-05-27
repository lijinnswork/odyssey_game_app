const { neon } = require('@neondatabase/serverless');
const crypto = require('crypto');

function verifyPassword(password, storedHash) {
    if (!storedHash) return false;
    const [salt, originalHash] = storedHash.split(':');
    if (!salt || !originalHash) return false;
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    return hash === originalHash;
}

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
        const { username, currentPassword, newPassword } = JSON.parse(event.body || '{}');

        if (!username || !currentPassword || !newPassword) {
            return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing required fields' }) };
        }

        if (newPassword.length < 6) {
            return { statusCode: 400, headers, body: JSON.stringify({ error: 'New password must be at least 6 characters' }) };
        }

        if (currentPassword === newPassword) {
            return { statusCode: 400, headers, body: JSON.stringify({ error: 'New password must be different from current password' }) };
        }

        const sql = neon(process.env.DATABASE_URL);

        // Fetch user
        const result = await sql`SELECT password_hash FROM users WHERE username = ${username}`;
        if (result.length === 0) {
            return { statusCode: 404, headers, body: JSON.stringify({ error: 'User not found' }) };
        }

        // Verify current password
        const isValid = verifyPassword(currentPassword, result[0].password_hash);
        if (!isValid) {
            return { statusCode: 401, headers, body: JSON.stringify({ error: 'Current password is incorrect' }) };
        }

        // Hash and update
        const newHash = hashPassword(newPassword);
        await sql`UPDATE users SET password_hash = ${newHash} WHERE username = ${username}`;

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ success: true })
        };

    } catch (error) {
        console.error('Change Password Error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Failed to change password' })
        };
    }
};
