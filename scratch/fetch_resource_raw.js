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

async function scrapeResourceRaw(id) {
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
    const pageRes = await makeRequest(url, {
        headers: { 'Cookie': authCookie, 'User-Agent': 'Mozilla/5.0' }
    });

    // Let's print out the content of the class="generalbox" or class="box" or look for typical moodle content divs.
    console.log('--- HTML DUMP SEARCH ---');
    const startIdx = pageRes.body.indexOf('<div role="main">');
    if (startIdx !== -1) {
        console.log('Found role="main":');
        console.log(pageRes.body.substring(startIdx, startIdx + 2500));
    } else {
        const altIdx = pageRes.body.indexOf('<div id="region-main"');
        if (altIdx !== -1) {
            console.log('Found id="region-main":');
            console.log(pageRes.body.substring(altIdx, altIdx + 2500));
        } else {
            console.log('Dump first 2000 chars of body:');
            const bodyIdx = pageRes.body.indexOf('<body');
            console.log(pageRes.body.substring(bodyIdx !== -1 ? bodyIdx : 0, (bodyIdx !== -1 ? bodyIdx : 0) + 2000));
        }
    }
}

const targetId = process.argv[2] || '110';
scrapeResourceRaw(targetId).catch(console.error);
