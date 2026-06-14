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

async function scrapeBook(id) {
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

    console.log('--- BOOK CONTENT ---');
    const titleMatch = pageRes.body.match(/<title>([^<]+)<\/title>/);
    console.log('Book Title:', titleMatch ? titleMatch[1].trim() : 'Unknown');

    // Moodle book content is usually inside div with class "book_content" or class "no-overflow"
    const bookContentRegex = /<div[^>]*class="[^"]*book_content[^"]*"[^>]*>([\s\S]*?)<\/div>/i;
    const contentMatch = pageRes.body.match(bookContentRegex);

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
        console.log('Could not parse book_content container via regex.');
    }

    // Let's print out the table of contents (TOC) of the book to see other chapters.
    // TOC is usually in a list or div with class "booktoc" or similar.
    console.log('\n--- BOOK TABLE OF CONTENTS ---');
    const tocRegex = /class="booktoc"[^>]*>([\s\S]*?)<\/div>/i
        || /class="block_booktoc"[^>]*>([\s\S]*?)<\/div>/i;
    const tocMatch = pageRes.body.match(tocRegex);
    if (tocMatch) {
        const tocText = tocMatch[1]
            .replace(/<[^>]*>/g, '\n')
            .replace(/\n\s*\n/g, '\n')
            .trim();
        console.log(tocText);
    } else {
        // Search page for /mod/book/view.php?id=30&chapterid=XX links
        const chapLinkRegex = /href="[^"]*\/mod\/book\/view\.php\?id=\d+&amp;chapterid=(\d+)"[^>]*>([\s\S]*?)<\/a>/gi;
        let cMatch;
        let chapCount = 0;
        while ((cMatch = chapLinkRegex.exec(pageRes.body)) !== null) {
            chapCount++;
            const cleanTitle = cMatch[2].replace(/<[^>]*>/g, '').trim();
            console.log(`Chapter ${chapCount} (ID: ${cMatch[1]}): "${cleanTitle}"`);
        }
    }
}

const targetId = process.argv[2] || '30';
scrapeBook(targetId).catch(console.error);
