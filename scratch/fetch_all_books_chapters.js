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

// Helper to extract chapter links and titles from book page
function parseBookChapters(html, bookId) {
    const chapters = [];
    
    // Look for links like view.php?id=BOOK_ID&amp;chapterid=CHAP_ID
    // Moodle Remui TOC matches: <a title="TITLE" class="..." href="view.php?id=BOOK_ID&amp;chapterid=CHAP_ID">TITLE</a>
    // Let's use a regex to extract these
    const linkRegex = /href="view\.php\?id=\d+&amp;chapterid=(\d+)"[^>]*>([\s\S]*?)<\/a>/gi;
    let match;
    const seenChapters = new Set();

    // The first chapter (chapter 1) might not be a link but active text (like <strong class="">1. Chapter Title</strong>)
    const activeRegex = /<strong[^>]*>([\s\S]*?)<\/strong>/gi;
    let activeMatch;
    // Let's find all li or active elements in the TOC
    const tocRegex = /class="book_toc[^"]*"[^>]*>([\s\S]*?)<\/div>/i;
    const tocMatch = html.match(tocRegex);
    
    if (tocMatch) {
        const tocHtml = tocMatch[1];
        // Parse list items
        const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
        let liMatch;
        let cIdx = 1;
        while ((liMatch = liRegex.exec(tocHtml)) !== null) {
            const liContent = liMatch[1];
            // Check if it's a link
            const linkM = liContent.match(/href="view\.php\?id=\d+&amp;chapterid=(\d+)"/i);
            const titleClean = liContent.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
            if (linkM) {
                chapters.push({ id: linkM[1], title: titleClean });
            } else {
                // Active chapter
                chapters.push({ id: '1', title: titleClean, isActive: true });
            }
        }
    } else {
        // Fallback simple link parser
        while ((match = linkRegex.exec(html)) !== null) {
            const id = match[1];
            if (!seenChapters.has(id)) {
                seenChapters.add(id);
                const title = match[2].replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
                chapters.push({ id, title });
            }
        }
    }
    return chapters;
}

async function scrapeAllBooks() {
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

    const books = [
        { id: '93', module: 'Module 2: Use Cases', title: 'Professor Vasanthi Srinivasan' },
        { id: '94', module: 'Module 2: Use Cases', title: 'Professor Rahul' },
        { id: '114', module: 'Module 3: AI Tools', title: 'Sumedha' }
    ];

    for (const book of books) {
        console.log(`\n======================================================================`);
        console.log(`BOOK: "${book.title}" (ID: ${book.id}) | ${book.module}`);
        console.log(`======================================================================`);
        
        // Fetch book page to get TOC
        const bookUrl = `https://community.sangamdlc.org/mod/book/view.php?id=${book.id}`;
        const bookPageRes = await makeRequest(bookUrl, {
            headers: { 'Cookie': authCookie, 'User-Agent': 'Mozilla/5.0' }
        });

        const chapters = parseBookChapters(bookPageRes.body, book.id);
        console.log(`Chapters detected: ${chapters.length}`);
        
        for (const chap of chapters) {
            console.log(`\n  -> CHAPTER: ${chap.title} (Chapter ID: ${chap.id})`);
            
            // If the chapter is active, we already have the HTML content in bookPageRes.body
            // Otherwise, we must fetch the specific chapter URL
            let chapHtml = '';
            if (chap.isActive) {
                chapHtml = bookPageRes.body;
            } else {
                const chapUrl = `https://community.sangamdlc.org/mod/book/view.php?id=${book.id}&chapterid=${chap.id}`;
                const chapRes = await makeRequest(chapUrl, {
                    headers: { 'Cookie': authCookie, 'User-Agent': 'Mozilla/5.0' }
                });
                chapHtml = chapRes.body;
            }

            const mainContentRegex = /<section\s+id="region-main"[^>]*>([\s\S]*?)<\/section>/i
                || /<div\s+role="main"[^>]*>([\s\S]*?)<\/div>/i;
            const contentMatch = chapHtml.match(mainContentRegex);

            if (contentMatch) {
                const htmlContent = contentMatch[1];
                
                // Check for vimeo video
                const vimeoMatch = htmlContent.match(/player\.vimeo\.com\/video\/(\d+)(?:\?[^"]*)?/);
                if (vimeoMatch) {
                    console.log(`     [VIMEO VIDEO]: https://vimeo.com/${vimeoMatch[1]}`);
                }

                // Check for youtube video
                const ytMatch = htmlContent.match(/(?:youtube\.com\/embed\/|youtu\.be\/)([a-zA-Z0-9_-]+)/);
                if (ytMatch) {
                    console.log(`     [YOUTUBE VIDEO]: https://youtube.com/watch?v=${ytMatch[1]}`);
                }

                // Check for H5P embed or other iframes
                const iframeRegex = /<iframe[^>]*src="([^"]+)"/gi;
                let iframeMatch;
                while ((iframeMatch = iframeRegex.exec(htmlContent)) !== null) {
                    if (!iframeMatch[1].includes('vimeo') && !iframeMatch[1].includes('youtube')) {
                        console.log(`     [EMBEDDED IFRAME]: ${iframeMatch[1]}`);
                    }
                }

                // Extract text
                const textContent = htmlContent
                    .replace(/<div\s+class="activity-navigation"[\s\S]*?<\/div>/gi, '')
                    .replace(/<form\s+method="post"\s+action="[^"]*jumpto\.php"[\s\S]*?<\/form>/gi, '')
                    .replace(/<ul\s+class="nav\s+more-nav[\s\S]*?<\/ul>/gi, '')
                    .replace(/<div\s+class="book_toc[\s\S]*?<\/div>/gi, '')
                    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                    .replace(/<[^>]*>/g, '\n')
                    .replace(/&nbsp;/g, ' ')
                    .replace(/\n\s*\n/g, '\n')
                    .trim();

                console.log(`     TEXT PREVIEW:`);
                console.log('     ' + textContent.substring(0, 500).replace(/\n/g, '\n     '));
                if (textContent.length > 500) {
                    console.log('     ... [truncated] ...');
                }
            } else {
                console.log('     Could not parse content.');
            }
        }
    }
}

scrapeAllBooks().catch(console.error);
