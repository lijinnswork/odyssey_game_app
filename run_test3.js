const fs = require('fs');
const content = fs.readFileSync('content.js', 'utf8');

const p2 = content.indexOf('const chapter1Level3Questions = [');
const p3 = content.indexOf('const chapter1Level4Questions = [');

if (p2 === -1 || p3 === -1) {
    console.error("Missing sections");
    process.exit(1);
}

// Check parsing format
console.log("Section 3 preview:", content.substring(p2, p2 + 500));
console.log("...");
console.log("Ending at next section:", content.substring(p3 - 100, p3 + 100));

