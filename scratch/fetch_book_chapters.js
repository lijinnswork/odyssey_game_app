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

const chapters = [
    { id: '1', title: '1. What is AI?' },
    { id: '2', title: '2. Evolution of Technology' },
    { id: '18', title: '3. Activity - AI Word Search' },
    { id: '3', title: '4. History of AI' },
    { id: '4', title: '5. AI in the next 10 years' },
    { id: '55', title: '6. Activity - Fill in the Blanks' },
    { id: '5', title: '7. Why is AI relevant for Educators?' },
    { id: '6', title: '8. AI Ethics' },
    { id: '43', title: '9. Activity - Crossword' }
];

async function scrapeAllChapters() {
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

    console.log('Successfully authenticated. Starting chapter extraction...\n');

    for (const chap of chapters) {
        console.log(`\n========================================`);
        console.log(`CHAPTER: ${chap.title} (Chapter ID: ${chap.id})`);
        console.log(`========================================`);
        
        const url = `https://community.sangamdlc.org/mod/book/view.php?id=30&chapterid=${chap.id}`;
        const res = await makeRequest(url, {
            headers: { 'Cookie': authCookie, 'User-Agent': 'Mozilla/5.0' }
        });

        // Moodle book chapter content is inside a class name like "book_content" or similar. Let's find it.
        // Let's search for typical Remui or Moodle content elements: role="main" or section id="region-main"
        const mainContentRegex = /<section\s+id="region-main"[^>]*>([\s\S]*?)<\/section>/i
            || /<div\s+role="main"[^>]*>([\s\S]*?)<\/div>/i;
        const contentMatch = res.body.match(mainContentRegex);

        if (contentMatch) {
            const htmlContent = contentMatch[1];
            
            // Check for vimeo video
            const vimeoMatch = htmlContent.match(/player\.vimeo\.com\/video\/(\d+)(?:\?[^"]*)?/);
            if (vimeoMatch) {
                console.log(`[VIMEO VIDEO DETECTED]: https://vimeo.com/${vimeoMatch[1]}`);
            }

            // Check for youtube video
            const ytMatch = htmlContent.match(/(?:youtube\.com\/embed\/|youtu\.be\/)([a-zA-Z0-9_-]+)/);
            if (ytMatch) {
                console.log(`[YOUTUBE VIDEO DETECTED]: https://youtube.com/watch?v=${ytMatch[1]}`);
            }

            // Check for H5P embed or other iframes
            const iframeRegex = /<iframe[^>]*src="([^"]+)"/gi;
            let iframeMatch;
            while ((iframeMatch = iframeRegex.exec(htmlContent)) !== null) {
                if (!iframeMatch[1].includes('vimeo') && !iframeMatch[1].includes('youtube')) {
                    console.log(`[EMBEDDED IFRAME DETECTED]: ${iframeMatch[1]}`);
                }
            }

            // Extract plain text paragraphs
            const textContent = htmlContent
                // Remove navigation links and dropdown lists so they don't pollute chapter contents
                .replace(/<div\s+class="activity-navigation"[\s\S]*?<\/div>/gi, '')
                .replace(/<form\s+method="post"\s+action="[^"]*jumpto\.php"[\s\S]*?<\/form>/gi, '')
                .replace(/<ul\s+class="nav\s+more-nav[\s\S]*?<\/ul>/gi, '')
                // Remove block book TOC to avoid displaying entire list of chapters in each chapter
                .replace(/<div\s+class="book_toc[\s\S]*?<\/div>/gi, '')
                .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                .replace(/<[^>]*>/g, '\n')
                .replace(/&nbsp;/g, ' ')
                .replace(/\n\s*\n/g, '\n')
                .trim();

            console.log(textContent.substring(0, 800));
            if (textContent.length > 800) {
                console.log('... [truncated] ...');
            }
        } else {
            console.log('Could not parse content.');
        }
    }
}

scrapeAllChapters().catch(console.error);
