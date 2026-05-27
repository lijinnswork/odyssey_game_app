const { neon } = require('@neondatabase/serverless');

exports.handler = async (event) => {
    try {
        const sql = neon(process.env.DATABASE_URL);
        await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS password_hash TEXT`;
        return { statusCode: 200, body: "Migration successful: password_hash column added." };
    } catch (error) {
        return { statusCode: 500, body: JSON.stringify(error) };
    }
};
