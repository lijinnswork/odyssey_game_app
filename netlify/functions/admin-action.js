const { neon } = require('@neondatabase/serverless');
const crypto = require('crypto');

// Hashing helper (reused from auth-register)
function hashPassword(password) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    return `${salt}:${hash}`;
}

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
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    try {
        const { adminUser, action, targetUser, extraData } = JSON.parse(event.body || '{}');

        // SECURITY CHECK - ALLOW BOTH ADMINS
        if (!['lijinns', 'admin.iimbx'].includes(adminUser)) {
            return {
                statusCode: 403,
                headers,
                body: JSON.stringify({ error: 'Unauthorized: Admin access required' })
            };
        }

        const sql = neon(process.env.DATABASE_URL);

        if (action === 'RESET_ALL') {
            // Reset XP, levels, and progress for everyone except the admins
            const defaultLevels = ["c1-l1"];
            const defaultUnits = [];

            await sql`
                UPDATE users 
                SET 
                    xp = 0, 
                    unlocked_levels = ${defaultLevels}, 
                    unlocked_chapters = ARRAY['chapter1'],
                    level_stats = NULL,
                    completed_questions = ARRAY[]::text[],
                    completed_units = ${defaultUnits},
                    streak = 1,
                    demo_completed = FALSE
                WHERE username NOT IN ('lijinns', 'admin.iimbx')
            `;

            await auditLog(sql, adminUser, 'RESET_ALL', 'SYSTEM', 'ALL_USERS', { message: 'Reset all non-admin players' });

            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ success: true, message: 'All players reset successfully' })
            };
        }

        if (action === 'DELETE_USER') {
            if (!targetUser) {
                return { statusCode: 400, headers, body: JSON.stringify({ error: 'Target user required' }) };
            }
            if (['lijinns', 'admin.iimbx'].includes(targetUser)) {
                return { statusCode: 400, headers, body: JSON.stringify({ error: 'Cannot delete admin root accounts' }) };
            }

            await sql`DELETE FROM users WHERE username = ${targetUser}`;

            await auditLog(sql, adminUser, 'DELETE_USER', 'USER', targetUser);

            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ success: true, message: `User ${targetUser} deleted` })
            };
        }

        if (action === 'RESET_USER') {
            if (!targetUser) {
                return { statusCode: 400, headers, body: JSON.stringify({ error: 'Target user required' }) };
            }
            if (['lijinns', 'admin.iimbx'].includes(targetUser)) {
                return { statusCode: 400, headers, body: JSON.stringify({ error: 'Cannot reset progress for admin root accounts' }) };
            }

            const defaultLevels = ["c1-l1"];
            const defaultUnits = [];

            await sql`
                UPDATE users 
                SET 
                    xp = 0, 
                    unlocked_levels = ${defaultLevels}, 
                    unlocked_chapters = ARRAY['chapter1'],
                    level_stats = NULL,
                    completed_questions = ARRAY[]::text[],
                    completed_units = ${defaultUnits},
                    streak = 1,
                    demo_completed = FALSE
                WHERE username = ${targetUser}
            `;

            await auditLog(sql, adminUser, 'RESET_USER', 'USER', targetUser, { message: `Reset progress for player ${targetUser}` });

            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ success: true, message: `Progress reset for ${targetUser}` })
            };
        }

        if (action === 'CHANGE_PASSWORD') {
            if (!targetUser || !extraData) {
                return { statusCode: 400, headers, body: JSON.stringify({ error: 'Target user and new password required' }) };
            }

            const newHash = hashPassword(extraData);

            await sql`
                UPDATE users 
                SET password_hash = ${newHash}
                WHERE username = ${targetUser}
            `;

            await auditLog(sql, adminUser, 'CHANGE_PASSWORD', 'USER', targetUser);

            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ success: true, message: `Password for ${targetUser} has been reset.` })
            };
        }

        return {
            statusCode: 400,
            headers,
            body: JSON.stringify({ error: 'Invalid admin action' })
        };

    } catch (error) {
        console.error('Admin Error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Admin action failed: ' + error.message })
        };
    }
};
