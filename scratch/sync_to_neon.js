const fs = require('fs');
const vm = require('vm');

const rawPool = JSON.parse(fs.readFileSync('processed_questions.json', 'utf8'));
const contentCode = fs.readFileSync('content.js', 'utf8');

const sandbox = { 
    window: { 
        location: { hostname: 'localhost', protocol: 'http:' },
    }, 
    console: console,
    Math: Math,
    Date: Date,
    JSON: JSON,
    rawPool: rawPool,
    Array: Array,
    String: String
};
vm.createContext(sandbox);

// Add rawPool into the global scope of the script
const wrappedCode = `
const rawPool = window.rawPool || ${JSON.stringify(rawPool)};
${contentCode}
`;

vm.runInContext(wrappedCode, sandbox);

const courseData = sandbox.window.courseData;
const levelRules = {
    totalQuestions: 10,
    quota: {
        micro_concept: 1,
        choice: 3,
        multiple_choice: 2,
        ordering: 1,
        matching: 2,
        fill_in_blanks: 2,
        task: 0
    }
};

const payload = {
    adminUser: 'lijinns',
    chapters: courseData,
    levelRules: levelRules,
    pools: {} // Not relying on hardcoded pools anymore since questions are inside courseData
};

console.log("Payload size:", JSON.stringify(payload).length);

fetch('https://game-iimbx.netlify.app/.netlify/functions/save-course-content', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
})
.then(res => res.json().then(data => ({status: res.status, data})))
.then(result => {
    console.log("Result:", result);
})
.catch(err => console.error("Error:", err));
