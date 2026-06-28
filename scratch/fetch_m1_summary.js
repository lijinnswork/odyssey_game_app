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
    
    const deduped = [];
    for (const line of cleaned) {
        if (deduped.length === 0 || deduped[deduped.length - 1] !== line) {
            deduped.push(line);
        }
    }
    return deduped.join('\n');
}

async function processVideo(name, url) {
    console.log(`Processing: ${name}`);
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
        console.log(`- [${track.lang}] Label: ${track.label}, Kind: ${track.kind}`);
    }
    
    const enTrack = tracks.find(t => t.lang.startsWith('en')) || tracks[0];
    if (!enTrack) {
        console.log(`No text tracks available for ${name}`);
        return;
    }
    
    console.log(`Fetching captions track (${enTrack.label}) from: ${enTrack.url}`);
    const captionsRes = await makeRequest(enTrack.url, {
        headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    
    if (captionsRes.statusCode !== 200) {
        console.error(`Failed to fetch captions. Code: ${captionsRes.statusCode}`);
        return;
    }
    
    const cleanPath = `/Users/lijinns/Desktop/Notebook/AG/d30/scratch/m1_summary_cleaned.txt`;
    const cleanedText = cleanVTT(captionsRes.body);
    fs.writeFileSync(cleanPath, cleanedText);
    
    console.log(`Saved cleaned text to: ${cleanPath}`);
    console.log(`\n==================================================`);
    console.log(`FULL TEXT CONTENT OF SUMMARY:`);
    console.log(`==================================================`);
    console.log(cleanedText);
}

processVideo("M1: Summary", "https://player.vimeo.com/video/1174724080?h=c29f063c72").catch(console.error);
