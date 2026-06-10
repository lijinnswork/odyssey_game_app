const https = require('https');

exports.handler = async (event) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method Not Allowed' })
        };
    }

    try {
        const { message, mascot, history } = JSON.parse(event.body || '{}');

        if (!message) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Message required' })
            };
        }

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            const isGarfield = mascot === 'garfield';
            const companionName = isGarfield ? 'Garfield' : 'Polly';
            const companionEmoji = isGarfield ? '🐾' : '✨';
            
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({
                    response: `Hey there! I'm ${companionName}, your AI companion. ${companionEmoji}\n\nIt looks like my developer hasn't configured the backend Gemini API key yet. Please add \`GEMINI_API_KEY\` to the Netlify environment variables to start chatting with me for real!`
                })
            };
        }

        let systemInstructionText = '';
        if (mascot === 'garfield') {
            systemInstructionText = "You are Garfield, a friendly, playful cat companion guiding the user through the Odyssey AI learning app. Maintain a balanced, semi-professional but casual and light tone. Keep responses short, direct, and concise (generally 1-3 sentences maximum). Avoid long paragraphs. Use cat/paw emojis (like 🐾, 🐱, 💤) sparingly. Refer to yourself as Garfield and never break character.";
        } else {
            systemInstructionText = "You are Polly the Parrot, an encouraging and wise AI learning companion guiding the user through the Odyssey AI learning app. Maintain a balanced, semi-professional but friendly and light tone. Keep responses short, direct, and concise (generally 1-3 sentences maximum). Avoid long paragraphs. Use bird/parrot/sparkle emojis (like 🦜, 🐦, ✨) sparingly. Refer to yourself as Polly and never break character.";
        }

        const contents = [];
        if (history && Array.isArray(history)) {
            history.forEach(item => {
                const role = (item.role === 'assistant' || item.role === 'model') ? 'model' : 'user';
                contents.push({
                    role: role,
                    parts: [{ text: item.text }]
                });
            });
        }

        if (contents.length === 0 || contents[contents.length - 1].role !== 'user') {
            contents.push({
                role: 'user',
                parts: [{ text: message }]
            });
        }

        const payload = JSON.stringify({
            contents: contents,
            systemInstruction: {
                parts: [{ text: systemInstructionText }]
            }
        });

        // Perform HTTPS POST request using standard Node.js https module
        const replyText = await new Promise((resolve, reject) => {
            const options = {
                hostname: 'generativelanguage.googleapis.com',
                path: `/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': Buffer.byteLength(payload)
                }
            };

            const req = https.request(options, (res) => {
                let body = '';
                res.setEncoding('utf8');
                res.on('data', (chunk) => {
                    body += chunk;
                });
                res.on('end', () => {
                    if (res.statusCode >= 200 && res.statusCode < 300) {
                        try {
                            const data = JSON.parse(body);
                            if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0]) {
                                resolve(data.candidates[0].content.parts[0].text);
                            } else {
                                reject(new Error('Invalid response structure from Gemini API'));
                            }
                        } catch (e) {
                            reject(new Error('Failed to parse Gemini response: ' + e.message));
                        }
                    } else {
                        reject(new Error(`Gemini API returned status ${res.statusCode}: ${body}`));
                    }
                });
            });

            req.on('error', (e) => {
                reject(e);
            });

            req.write(payload);
            req.end();
        });

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ response: replyText })
        };

    } catch (error) {
        console.error('Chat function error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Failed to generate chat response. Please try again later.' })
        };
    }
};
