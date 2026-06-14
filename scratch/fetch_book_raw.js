const https = require('https');
const fs = require('fs');

function makeRequest(url, options = {}, postData = null) {
    return new Promise((resolve, reject) => {
        const req = https.request(url, options, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve({
                statusCode: res.statusCode,
                headers: res.headers,
                body: data
            }));
        });
        req.on('error', reject);
        if (postData) {
            req.write(postData);
        }
        req.end();
    });
}

async function scrapeBookRaw(id) {
    // 1. GET login page
    const getRes = await makeRequest('https://community.sangamdlc.org/login/index.php');
    
    // Extract MoodleSession cookie
    const setCookieHeaders = getRes.headers['set-cookie'] || [];
    let moodleSessionCookie = '';
    for (const cookie of setCookieHeaders) {
        if (cookie.startsWith('MoodleSession=')) {
            moodleSessionCookie = cookie.split(';')[0];
            break;
        }
    }
    
    // Extract logintoken
    const tokenMatch = getRes.body.match(/name="logintoken"\s+value="([^"]+)"/);
    if (!tokenMatch) return;
    const loginToken = tokenMatch[1];

    // 2. POST login credentials
    const postBody = `username=student01&password=Learning%402025&logintoken=${encodeURIComponent(loginToken)}`;
    const postRes = await makeRequest('https://community.sangamdlc.org/login/index.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cookie': moodleSessionCookie,
            'User-Agent': 'Mozilla/5.0'
        }
    }, postBody);

    let authCookie = moodleSessionCookie;
    const postSetCookies = postRes.headers['set-cookie'] || [];
    for (const cookie of postSetCookies) {
        if (cookie.startsWith('MoodleSession=')) {
            authCookie = cookie.split(';')[0];
            break;
        }
    }

    // 3. Fetch specific book by ID
    const url = `https://community.sangamdlc.org/mod/book/view.php?id=${id}`;
    const pageRes = await makeRequest(url, {
        headers: { 'Cookie': authCookie, 'User-Agent': 'Mozilla/5.0' }
    });

    console.log('--- INFO ---');
    console.log('Length of response:', pageRes.body.length);
    fs.writeFileSync('/Users/lijinns/.gemini/antigravity/brain/f882ee21-afac-4d5d-864f-16f7c1f78707/scratch/book_page_30.html', pageRes.body);
    console.log('Saved to scratch/book_page_30.html');
}

scrapeBookRaw('30').catch(console.error);
