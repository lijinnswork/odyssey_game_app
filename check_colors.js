const fs = require('fs');

const files = [
    'c:/Users/Kalyanraman VK/Downloads/d16/d16/app.js',
    'c:/Users/Kalyanraman VK/Downloads/d16/d16/content.js',
    'c:/Users/Kalyanraman VK/Downloads/d16/d16/index.html',
    'c:/Users/Kalyanraman VK/Downloads/d16/d16/style.css'
];

let allHex = new Set();
let allRgba = new Set();

files.forEach(file => {
    if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf8');
        const hexMatches = content.match(/#[0-9a-fA-F]{3,6}/g) || [];
        hexMatches.forEach(m => allHex.add(m.toUpperCase()));
        
        const rgbaMatches = content.match(/rgba?\([^)]+\)/g) || [];
        rgbaMatches.forEach(m => allRgba.add(m));
    }
});

console.log("Found Hex:");
console.log(Array.from(allHex).sort());

console.log("\nFound RGBA:");
console.log(Array.from(allRgba).sort());
