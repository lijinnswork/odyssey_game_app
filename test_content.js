const fs = require('fs');
const content = fs.readFileSync('content.js', 'utf8');
const p1 = content.indexOf('const chapter1Level2Questions = [');
const p2 = content.indexOf('const chapter1Level3Questions = [');
console.log(content.substring(p1, p1 + 500));
console.log("...");
console.log(content.substring(p2 - 100, p2 + 100));
