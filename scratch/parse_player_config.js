const fs = require('fs');

const html = fs.readFileSync('/Users/lijinns/Desktop/Notebook/AG/d30/scratch/vimeo_player_page.html', 'utf8');

const startIdx = html.indexOf('window.playerConfig = ');
if (startIdx !== -1) {
    const jsonStart = startIdx + 'window.playerConfig = '.length;
    // Find matching braces
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
        const config = JSON.parse(jsonStr);
        console.log('Successfully parsed playerConfig!');
        console.log('Video details:');
        console.log('Title:', config.video.title);
        console.log('Duration:', config.video.duration);
        console.log('Text Tracks:', JSON.stringify(config.request.text_tracks, null, 2));
    } catch (err) {
        console.error('JSON parse error:', err);
    }
} else {
    console.error('Could not find window.playerConfig');
}
