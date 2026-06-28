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

// Simple VTT parser to extract text
function cleanVTT(vttText) {
    const lines = vttText.split(/\r?\n/);
    const cleaned = [];
    
    let isHeader = true;
    for (let line of lines) {
        line = line.trim();
        if (line === 'WEBVTT') {
            continue;
        }
        // Skip empty lines, cue identifiers (numbers or UUIDs), and timestamp lines
        if (!line) continue;
        if (line.match(/^\d+$/)) continue; // numeric IDs
        if (line.includes('-->')) continue; // timestamps
        
        // Remove VTT styling tags if any (e.g. <c>...</c> or <v>)
        const cleanLine = line.replace(/<[^>]*>/g, '');
        if (cleanLine) {
            cleaned.push(cleanLine);
        }
    }
    
    // De-duplicate consecutive lines if vtt contains duplicates, and join them
    // Sometimes auto-generated vtt has overlapping lines, let's keep it simple first
    return cleaned.join('\n');
}

async function run() {
    const vttUrl = "https://captions.vimeo.com/captions/288822871.vtt?expires=1781592555&sig=da9635ef88fcb7631f93993825887ef88bf77aff";
    
    console.log('Fetching VTT from:', vttUrl);
    const res = await makeRequest(vttUrl, {
        headers: {
            'User-Agent': 'Mozilla/5.0'
        }
    });
    
    console.log('Status:', res.statusCode);
    if (res.statusCode !== 200) {
        console.error('Failed to fetch VTT. Body:', res.body);
        return;
    }
    
    // Save raw VTT
    fs.writeFileSync('/Users/lijinns/Desktop/Notebook/AG/d30/scratch/captions.vtt', res.body);
    console.log('Saved raw VTT to scratch/captions.vtt');
    
    // Clean and print/save
    const cleanedText = cleanVTT(res.body);
    fs.writeFileSync('/Users/lijinns/Desktop/Notebook/AG/d30/scratch/captions_cleaned.txt', cleanedText);
    console.log('Saved cleaned text to scratch/captions_cleaned.txt');
    console.log('\n==================================================');
    console.log('Cleaned captions preview (first 1000 chars):');
    console.log('==================================================');
    console.log(cleanedText.substring(0, 1000));
}

run().catch(console.error);
