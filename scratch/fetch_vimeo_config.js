const https = require('https');

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

async function run() {
    const url = 'https://player.vimeo.com/video/1174724684?h=9005d5b2f8';
    console.log('Fetching player page...');
    const res = await makeRequest(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Referer': 'https://community.sangamdlc.org/'
        }
    });
    console.log('Status:', res.statusCode);
    // Let's print out lines containing "config" or "text_tracks" or ".vtt"
    const lines = res.body.split('\n');
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('text_tracks') || lines[i].includes('config') || lines[i].includes('vtt') || lines[i].includes('tracks')) {
            console.log(`Line ${i}:`, lines[i].substring(0, 1000));
        }
    }
    
    // Save body to a file to inspect if needed
    require('fs').writeFileSync('/Users/lijinns/Desktop/Notebook/AG/d30/scratch/vimeo_player_page.html', res.body);
    console.log('Saved player html to scratch/vimeo_player_page.html');
}

run().catch(console.error);
