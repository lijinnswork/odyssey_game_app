const { neon } = require('@neondatabase/serverless');

// Audit Logging Helper
async function auditLog(sql, admin, action, targetType, targetId, details = {}) {
    try {
        await sql`
            CREATE TABLE IF NOT EXISTS admin_logs (
                id SERIAL PRIMARY KEY,
                admin_username TEXT NOT NULL,
                action_type TEXT NOT NULL,
                target_type TEXT,
                target_id TEXT,
                details JSONB,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            )
        `;
        await sql`
            INSERT INTO admin_logs (admin_username, action_type, target_type, target_id, details)
            VALUES (${admin}, ${action}, ${targetType}, ${targetId}, ${details})
        `;
    } catch (e) {
        console.error('Audit Log Error:', e);
    }
}

exports.handler = async (event) => {
    // ... headers and preflight ...
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    };
    if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers, body: '' };
    if (event.httpMethod !== 'POST') return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method Not Allowed' }) };

    try {
        const payload = JSON.parse(event.body || '{}');
        const adminUser = payload.adminUser || 'unknown_admin';

        if (!payload || !payload.chapters) {
            return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid course data structure.' }) };
        }

        const sql = neon(process.env.DATABASE_URL);

        // Ensure tables exist
        await sql`
            CREATE TABLE IF NOT EXISTS course_content (
                id SERIAL PRIMARY KEY,
                version VARCHAR(50) UNIQUE NOT NULL,
                course_data JSONB NOT NULL,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;

        const jsonData = JSON.stringify(payload);

        await sql`
            INSERT INTO course_content (version, course_data)
            VALUES ('live', ${jsonData}::jsonb)
            ON CONFLICT (version) 
            DO UPDATE SET 
                course_data = ${jsonData}::jsonb,
                updated_at = NOW()
        `;

        // Log the publication
        await auditLog(sql, adminUser, 'PUBLISH_CONTENT', 'CURRICULUM', 'GLOBAL_LIVE_CONTENT', {
            chapterCount: payload.chapters.length,
            publishTimestamp: new Date().toISOString()
        });

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ success: true, message: 'Content published globally.' })
        };

    } catch (error) {
        console.error('Save Course Error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Database error', details: error.message })
        };
    }
};
