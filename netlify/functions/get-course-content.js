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
        const sql = neon(process.env.DATABASE_URL);

        // Ensure table exists
        await sql`
            CREATE TABLE IF NOT EXISTS course_content (
                id SERIAL PRIMARY KEY,
                version VARCHAR(50) UNIQUE NOT NULL,
                course_data JSONB NOT NULL,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;

        const result = await sql`
            SELECT course_data 
            FROM course_content 
            WHERE version = 'live' 
            LIMIT 1
        `;

        // If the database is empty, return a signal for the frontend to use local fallback
        if (result.length === 0) {
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ needsSeeding: true })
            };
        }

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(result[0].course_data)
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
