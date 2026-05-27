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
        let isAdmin = false;
        try {
            const body = JSON.parse(event.body || '{}');
            if (body.username === 'lijinns') isAdmin = true;
        } catch (e) { }

        const sql = neon(process.env.DATABASE_URL);

        // Limit to 10 for normal users, high number for admin
        const limit = isAdmin ? 1000 : 10;

        const users = await sql`
      SELECT username, xp, streak, current_level, 
             array_length(completed_units, 1) as units_completed
      FROM users
      WHERE username NOT IN ('lijinns', 'admin.iimbx')
      ORDER BY xp DESC, units_completed DESC
      LIMIT ${limit}
    `;

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(users.map(u => ({
                username: u.username,
                xp: u.xp,
                streak: u.streak,
                unitsCompleted: u.units_completed || 0
            })))
        };

    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Leaderboard fetch failed' })
        };
    }
};
