const fs = require('fs');

const files = [
    'c:/Users/Kalyanraman VK/Downloads/d16/d16/app.js',
    'c:/Users/Kalyanraman VK/Downloads/d16/d16/content.js',
    'c:/Users/Kalyanraman VK/Downloads/d16/d16/style.css'
];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');

        // Replace any color: var(--primary) with color: var(--accent) to fix dark mode contrast
        // Because primary is Navy, which is invisible on dark backgrounds.
        content = content.replace(/color:\s*var\(--primary\)/g, 'color: var(--accent)');
        
        // Also replace any hardcoded color: #1E3A5F with color: var(--accent) if it's meant to be text.
        // Navy text on dark surfaces is the root cause.
        content = content.replace(/color:\s*#1E3A5F/gi, 'color: var(--accent)');

        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated contrast colors in ${file}`);
    }
});
