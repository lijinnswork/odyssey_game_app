const fs = require('fs');
const content = fs.readFileSync('content.js', 'utf8');
const p1 = content.indexOf('function generateLevelQuestions');
console.log(content.substring(p1, p1 + 1000));
