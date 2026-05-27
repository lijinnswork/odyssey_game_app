const fs = require('fs');

// Read content.js
let code = fs.readFileSync('content.js', 'utf8');

// We need to evaluate content.js in this context
const script = `
    let window = {};
    ${code}
    module.exports = {
        generate: generateLevelQuestions,
        raw: rawExistingContent
    };
`;

const mod = { exports: {} };
eval(`(function(module, window){${script}})(mod, {})`);

const generate = mod.exports.generate;

let output = '';

// Generate Chapter 2 (1 to 5)
for (let l = 0; l < 5; l++) {
    const qs = generate('chapter2', l);
    output += `const chapter2Level${l + 1}Questions = ${JSON.stringify(qs.map(q => q.activities[0]), null, 4)};\n\n`;
}

// Generate Chapter 3 (1 to 5)
for (let l = 0; l < 5; l++) {
    const qs = generate('chapter3', l);
    output += `const chapter3Level${l + 1}Questions = ${JSON.stringify(qs.map(q => q.activities[0]), null, 4)};\n\n`;
}

fs.writeFileSync('new_arrays.js', output);
console.log('Saved newly baked question arrays to new_arrays.js');
