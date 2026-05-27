const fs = require('fs');
const path = require('path');

const ALLOWED_COLORS = [
    { hex: '#143C63', r: 20, g: 60, b: 99 },    // Deep Navy
    { hex: '#1E3A5F', r: 30, g: 58, b: 95 },    // Navy
    { hex: '#D1F6FF', r: 209, g: 246, b: 255 }, // Cyan
    { hex: '#FF964A', r: 255, g: 150, b: 74 },  // Orange
    { hex: '#C73528', r: 199, g: 53, b: 40 },   // Crimson
    { hex: '#F5F5F5', r: 245, g: 245, b: 245 }, // Light Gray
    { hex: '#FFFFFF', r: 255, g: 255, b: 255 }, // White
    { hex: '#000000', r: 0, g: 0, b: 0 },       // Black
    { hex: '#00C896', r: 0, g: 200, b: 150 }    // Success Green
];

const hexToRgb = (hex) => {
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
        r = parseInt(hex[1] + hex[2], 16);
        g = parseInt(hex[3] + hex[4], 16);
        b = parseInt(hex[5] + hex[6], 16);
    }
    return { r, g, b };
};

const getClosestAllowedColor = (r, g, b) => {
    let minDiff = Infinity;
    let closest = ALLOWED_COLORS[0];
    
    // Ignore small differences specifically to detect exact match
    for (let c of ALLOWED_COLORS) {
        if (c.r === r && c.g === g && c.b === b) return c;
    }

    for (const color of ALLOWED_COLORS) {
        // Human perception weights (approximation)
        const diff = Math.sqrt(
            Math.pow((r - color.r) * 0.3, 2) +
            Math.pow((g - color.g) * 0.59, 2) +
            Math.pow((b - color.b) * 0.11, 2)
        );
        if (diff < minDiff) {
            minDiff = diff;
            closest = color;
        }
    }
    return closest;
};

const files = [
    'c:/Users/Kalyanraman VK/Downloads/d16/d16/app.js',
    'c:/Users/Kalyanraman VK/Downloads/d16/d16/content.js',
    'c:/Users/Kalyanraman VK/Downloads/d16/d16/index.html',
    'c:/Users/Kalyanraman VK/Downloads/d16/d16/style.css'
];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');

        // Hex replace
        content = content.replace(/#[0-9a-fA-F]{3,6}\b/g, (match) => {
            if (match.length !== 4 && match.length !== 7) return match;
            const targetColor = ALLOWED_COLORS.find(c => c.hex.toLowerCase() === match.toLowerCase());
            if (targetColor) return targetColor.hex; // Already exact allowed hex
            
            const rgb = hexToRgb(match);
            const closest = getClosestAllowedColor(rgb.r, rgb.g, rgb.b);
            return closest.hex;
        });

        // RGBA replace
        // Note: handles both rgb(r,g,b) and rgba(r,g,b,a)
        content = content.replace(/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*([0-9.]+)\s*)?\)/g, (match, p1, p2, p3, p4) => {
            const r = parseInt(p1, 10);
            const g = parseInt(p2, 10);
            const b = parseInt(p3, 10);
            
            // Allow exact matched approved RGBs (with or without A)
            const exactColor = ALLOWED_COLORS.find(c => c.r === r && c.g === g && c.b === b);
            if (exactColor) {
                return match; // Already approved color
            }

            const closest = getClosestAllowedColor(r, g, b);
            
            if (p4 !== undefined) {
                return `rgba(${closest.r}, ${closest.g}, ${closest.b}, ${p4})`;
            } else {
                return `rgb(${closest.r}, ${closest.g}, ${closest.b})`;
            }
        });

        fs.writeFileSync(file, content, 'utf8');
        console.log(`Processed ${file}`);
    }
});
