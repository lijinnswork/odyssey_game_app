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
            // Friendly fallback instructions if API key is not configured yet
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

        // Set up system instructions based on chosen mascot
        let systemInstructionText = '';
        if (mascot === 'garfield') {
            systemInstructionText = "You are Garfield, a playful, slightly lazy, but extremely cute ginger cat companion who is guiding the user through the Odyssey AI learning app. Keep your responses short, helpful, casual, and a bit sleepy, using cat/paw emojis (like 🐾, 🐱, 💤, 🐈) occasionally. You should refer to yourself as Garfield. Never break character.";
        } else {
            systemInstructionText = "You are Polly the Parrot, a wise, encouraging, and vibrant AI learning companion who is guiding the user through the Odyssey AI learning app. Keep your responses encouraging, helpful, concise, and smart, using bird/parrot/sparkle emojis (like 🦜, 🐦, ✨, 🌟) occasionally. You should refer to yourself as Polly. Never break character.";
        }

        // Prepare contents history array for Gemini API
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

        // Ensure the latest message is added if not already in history
        if (contents.length === 0 || contents[contents.length - 1].role !== 'user') {
            contents.push({
                role: 'user',
                parts: [{ text: message }]
            });
        }

        // Call Gemini 1.5 Flash API
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: contents,
                systemInstruction: {
                    parts: [{ text: systemInstructionText }]
                }
            })
        });

        if (!response.ok) {
            const errText = await response.text();
            console.error('Gemini API Error Response:', errText);
            throw new Error(`Gemini API returned status ${response.status}`);
        }

        const data = await response.json();
        
        let replyText = '';
        if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0]) {
            replyText = data.candidates[0].content.parts[0].text;
        } else {
            throw new Error('Unexpected response structure from Gemini API');
        }

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
