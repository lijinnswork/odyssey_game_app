const https = require('https');

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

async function checkRahul() {
    const getRes = await makeRequest('https://community.sangamdlc.org/login/index.php');
    const setCookieHeaders = getRes.headers['set-cookie'] || [];
    let moodleSessionCookie = '';
    for (const cookie of setCookieHeaders) {
        if (cookie.startsWith('MoodleSession=')) {
            moodleSessionCookie = cookie.split(';')[0];
            break;
        }
    }
    const tokenMatch = getRes.body.match(/name="logintoken"\s+value="([^"]+)"/);
    if (!tokenMatch) return;
    const loginToken = tokenMatch[1];

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

    const url = 'https://community.sangamdlc.org/mod/book/view.php?id=94';
    const pageRes = await makeRequest(url, {
        headers: { 'Cookie': authCookie, 'User-Agent': 'Mozilla/5.0' }
    });

    console.log('--- RAHUL BOOK DUMP ---');
    console.log('HTML Length:', pageRes.body.length);
    
    // Check if Moodle shows a message like "No chapters have been created yet"
    const noChapters = pageRes.body.includes('No chapters') || pageRes.body.includes('yet');
    console.log('Contains "No chapters/yet" text?', noChapters);

    // Let's print out what is inside the main region
    const mainContentRegex = /<section\s+id="region-main"[^>]*>([\s\S]*?)<\/section>/i
        || /<div\s+role="main"[^>]*>([\s\S]*?)<\/div>/i;
    const contentMatch = pageRes.body.match(mainContentRegex);
    if (contentMatch) {
        console.log('Main Content Region HTML:');
        console.log(contentMatch[1].replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '').trim().substring(0, 1000));
    }
}

checkRahul().catch(console.error);
