const fs = require('fs');
const path = require('path');

const files = [
    'c:/Users/Kalyanraman VK/Downloads/d16/d16/app.js',
    'c:/Users/Kalyanraman VK/Downloads/d16/d16/content.js',
    'c:/Users/Kalyanraman VK/Downloads/d16/d16/index.html'
];

// Color mapping strictly according to the approved list
const replacer = (content) => {
    let newContent = content;

    // Violet/Indigo/Blue to Navy/Cyan gradients in APP_LOGO
    newContent = newContent.replace(/stop-color="#8b5cf6"/g, 'stop-color="#143C63"');
    newContent = newContent.replace(/stop-color="#3b82f6"/g, 'stop-color="#1E3A5F"');
    newContent = newContent.replace(/stop-color="#06b6d4"/g, 'stop-color="#D1F6FF"');

    // Replace all generic hex colors
    // Yellow/Gold
    newContent = newContent.replace(/#FFD700|#facc15|#fbbf24|#fcd34d/gi, '#FF964A');
    // Purple/Indigo/Teal
    newContent = newContent.replace(/#818cf8|#a5b4fc|#6366f1|#7c3aed|#4B4CED|#22d3ee/gi, '#1E3A5F');
    // Pink/Coral/Red
    newContent = newContent.replace(/#ef4444|#f87171|#fca5a5|#FF6B6B|#FF4B60/gi, '#C73528');
    // Generic grey text/borders
    newContent = newContent.replace(/#475569|#64748b|#94a3b8|#6b7280/gi, '#1E3A5F');
    // Success green exception (00C896) 
    // Already some greens like #10b981
    newContent = newContent.replace(/#10b981/gi, '#00C896');

    // Replace rgba colors
    // Any red/pink based rgba
    newContent = newContent.replace(/rgba\(\s*239\s*,\s*68\s*,\s*68\s*,\s*([0-9.]+)\)/g, 'rgba(199, 53, 40, $1)');
    newContent = newContent.replace(/rgba\(\s*248\s*,\s*113\s*,\s*113\s*,\s*([0-9.]+)\)/g, 'rgba(199, 53, 40, $1)');
    newContent = newContent.replace(/rgba\(\s*255\s*,\s*75\s*,\s*75\s*,\s*([0-9.]+)\)/g, 'rgba(199, 53, 40, $1)');
    // Any indigo/purple/blue/teal rgba
    newContent = newContent.replace(/rgba\(\s*75\s*,\s*76\s*,\s*237\s*,\s*([0-9.]+)\)/g, 'rgba(30, 58, 95, $1)');
    newContent = newContent.replace(/rgba\(\s*99\s*,\s*102\s*,\s*241\s*,\s*([0-9.]+)\)/g, 'rgba(30, 58, 95, $1)');
    newContent = newContent.replace(/rgba\(\s*34\s*,\s*211\s*,\s*238\s*,\s*([0-9.]+)\)/g, 'rgba(30, 58, 95, $1)');
    newContent = newContent.replace(/rgba\(\s*6\s*,\s*182\s*,\s*212\s*,\s*([0-9.]+)\)/g, 'rgba(30, 58, 95, $1)');
    
    // Any generic white overlays that should be themed to glassmorphism or strict rgba
    // E.g. rgba(255,255,255,0.08) -> rgba(209, 246, 255, 0.08) if it's on dark bg
    newContent = newContent.replace(/rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*([0-9.]+)\)/g, 'rgba(209, 246, 255, $1)');

    // Any generic black overlays / shadows
    newContent = newContent.replace(/rgba\(\s*0\s*,\s*0\s*,\s*0\s*,\s*([0-9.]+)\)/g, 'rgba(20, 60, 99, $1)');
    
    // Gold/Yellow based rgba
    newContent = newContent.replace(/rgba\(\s*234\s*,\s*179\s*,\s*8\s*,\s*([0-9.]+)\)/g, 'rgba(255, 150, 74, $1)');

    return newContent;
};

files.forEach(file => {
    if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf8');
        const updated = replacer(content);
        fs.writeFileSync(file, updated, 'utf8');
        console.log(`Updated ${file}`);
    } else {
        console.error(`File not found: ${file}`);
    }
});
