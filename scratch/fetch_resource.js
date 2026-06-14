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

async function scrapeResource(id) {
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

    // 3. Fetch specific activity by ID
    const url = `https://community.sangamdlc.org/mod/page/view.php?id=${id}`;
    console.log(`Fetching activity content for page ID ${id}...`);
    const pageRes = await makeRequest(url, {
        headers: { 'Cookie': authCookie, 'User-Agent': 'Mozilla/5.0' }
    });

    // Extract page title
    const titleMatch = pageRes.body.match(/<title>([^<]+)<\/title>/);
    console.log('\n========================================');
    console.log('Activity Title:', titleMatch ? titleMatch[1].trim() : 'Unknown');
    console.log('========================================');

    // Moodle page resource content is typically inside div with class "modified" or "box" or class "no-overflow" or class "generalbox" or role="main"
    // Let's print out text paragraphs inside the main content area.
    // We can extract everything inside <div role="main"> or <section id="region-main">
    const mainContentRegex = /<section\s+id="region-main"[^>]*>([\s\S]*?)<\/section>/i
        || /<div\s+role="main"[^>]*>([\s\S]*?)<\/div>/i;
    const contentMatch = pageRes.body.match(mainContentRegex);

    if (contentMatch) {
        const bodyText = contentMatch[1]
            .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
            .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
            .replace(/<[^>]*>/g, '\n')
            .replace(/&nbsp;/g, ' ')
            .replace(/\n\s*\n/g, '\n')
            .trim();
        console.log(bodyText.substring(0, 1500));
        if (bodyText.length > 1500) {
            console.log('\n... [truncated] ...');
        }
    } else {
        console.log('Could not parse main content container via regex.');
    }
}

// Let's read Page ID 56: "How we built and trained AI assistant Niya"
const targetId = process.argv[2] || '56';
scrapeResource(targetId).catch(console.error);
