const https = require('https');
const fs = require('fs');

function makeRequest(url, options = {}) {
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
        req.end();
    });
}

function parsePlayerConfig(html) {
    const startIdx = html.indexOf('window.playerConfig = ');
    if (startIdx === -1) return null;
    const jsonStart = startIdx + 'window.playerConfig = '.length;
    let braceCount = 0;
    let jsonEnd = jsonStart;
    let inString = false;
    let escape = false;
    
    for (let i = jsonStart; i < html.length; i++) {
        const char = html[i];
        if (escape) {
            escape = false;
            continue;
        }
        if (char === '\\') {
            escape = true;
            continue;
        }
        if (char === '"') {
            inString = !inString;
            continue;
        }
        if (!inString) {
            if (char === '{') {
                braceCount++;
            } else if (char === '}') {
                braceCount--;
                if (braceCount === 0) {
                    jsonEnd = i + 1;
                    break;
                }
            }
        }
    }
    const jsonStr = html.substring(jsonStart, jsonEnd);
    try {
        return JSON.parse(jsonStr);
    } catch (err) {
        console.error('Failed to parse playerConfig JSON:', err);
        return null;
    }
}

function cleanVTT(vttText) {
    const lines = vttText.split(/\r?\n/);
    const cleaned = [];
    
    for (let line of lines) {
        line = line.trim();
        if (line === 'WEBVTT') continue;
        if (!line) continue;
        if (line.match(/^\d+$/)) continue; // numeric IDs
        if (line.includes('-->')) continue; // timestamps
        
        const cleanLine = line.replace(/<[^>]*>/g, '');
        if (cleanLine) {
            cleaned.push(cleanLine);
        }
    }
    
    // Sometimes there are consecutive duplicates due to VTT chunking/highlighting.
    // Let's do a simple deduplication of adjacent identical lines.
    const deduped = [];
    for (const line of cleaned) {
        if (deduped.length === 0 || deduped[deduped.length - 1] !== line) {
            deduped.push(line);
        }
    }
    return deduped.join('\n');
}

async function processVideo(name, url) {
    console.log(`\n==================================================`);
    console.log(`Processing: ${name}`);
    console.log(`==================================================`);
    console.log(`Fetching player page from: ${url}`);
    
    const pageRes = await makeRequest(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Referer': 'https://community.sangamdlc.org/'
        }
    });
    
    if (pageRes.statusCode !== 200) {
        console.error(`Failed to fetch player page for ${name}. Code: ${pageRes.statusCode}`);
        return;
    }
    
    const config = parsePlayerConfig(pageRes.body);
    if (!config) {
        console.error(`Could not parse playerConfig for ${name}`);
        return;
    }
    
    console.log(`Video Title: ${config.video.title}`);
    console.log(`Duration: ${config.video.duration} seconds`);
    
    const tracks = config.request.text_tracks || [];
    console.log(`Text tracks found: ${tracks.length}`);
    for (const track of tracks) {
        console.log(`- [${track.lang}] Label: ${track.label}, Kind: ${track.kind}, URL: ${track.url}`);
    }
    
    // Fetch English track if exists, otherwise first track
    const enTrack = tracks.find(t => t.lang.startsWith('en')) || tracks[0];
    if (!enTrack) {
        console.log(`No text tracks available for ${name}`);
        return;
    }
    
    console.log(`Fetching captions track (${enTrack.label})...`);
    const captionsRes = await makeRequest(enTrack.url, {
        headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    
    if (captionsRes.statusCode !== 200) {
        console.error(`Failed to fetch captions from ${enTrack.url}. Code: ${captionsRes.statusCode}`);
        return;
    }
    
    const filenameBase = name.toLowerCase().replace(/[^a-z0-9]+/g, '_');
    const rawPath = `/Users/lijinns/Desktop/Notebook/AG/d30/scratch/${filenameBase}_raw.vtt`;
    const cleanPath = `/Users/lijinns/Desktop/Notebook/AG/d30/scratch/${filenameBase}_cleaned.txt`;
    
    fs.writeFileSync(rawPath, captionsRes.body);
    const cleanedText = cleanVTT(captionsRes.body);
    fs.writeFileSync(cleanPath, cleanedText);
    
    console.log(`Saved raw VTT to: ${rawPath}`);
    console.log(`Saved cleaned text to: ${cleanPath}`);
    console.log(`Preview of cleaned text (first 300 chars):`);
    console.log(cleanedText.substring(0, 300) + '...');
}

async function main() {
    const videos = [
        {
            name: "Introduction to Sangam",
            url: "https://player.vimeo.com/video/1175392225?h=3914191f9f"
        },
        {
            name: "What is AI?",
            url: "https://player.vimeo.com/video/1174724684?h=9005d5b2f8"
        }
    ];
    
    for (const video of videos) {
        await processVideo(video.name, video.url);
    }
}

main().catch(console.error);
