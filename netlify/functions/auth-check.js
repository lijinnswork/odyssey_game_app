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
        const { username } = JSON.parse(event.body || '{}');

        if (!username) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Username required' })
            };
        }

        const sql = neon(process.env.DATABASE_URL);

        // Just check if user exists
        const result = await sql`
            SELECT username, password_hash FROM users WHERE username = ${username}
        `;

        const exists = result.length > 0;
        const hasPassword = exists && !!result[0].password_hash;

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ exists, hasPassword })
        };

    } catch (error) {
        console.error('Auth Check Error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Check failed' })
        };
    }
};
