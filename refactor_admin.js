const fs = require('fs');
let code = fs.readFileSync('/Users/lijinns/Desktop/Notebook/AG/d13/app.js', 'utf8');

const regex = /window\.renderGodModeEditor\s*=\s*function\s*\(\)\s*\{([\s\S]*?)app\.innerHTML\s*=\s*html;\n\}/;
const match = code.match(regex);

if (!match) {
    console.log("Could not find renderGodModeEditor");
    process.exit(1);
}

// Instead of regex replacing the body, let's just replace from line 2896 to 3330.
// But it's safer to use the AST or just regex since we know the exact string.

let originalFunc = match[0];

console.log("Found function length: " + originalFunc.length);
