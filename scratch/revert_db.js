const fs = require('fs');
const vm = require('vm');

const contentCode = fs.readFileSync('content.js', 'utf8');
const sandbox = { 
    window: { 
        location: { hostname: 'localhost', protocol: 'http:' } 
    }, 
    console: console 
};
vm.createContext(sandbox);

// We need to handle const declarations at top-level by adding them to sandbox
// Alternatively, since content.js has `const chapter1Level1Questions = ...` we can just run it in a loose context
// Or we wrap it in a function
const wrappedCode = `
${contentCode}
// Explicitly copy known consts to window
window.chapter1Level1Questions = typeof chapter1Level1Questions !== 'undefined' ? chapter1Level1Questions : [];
window.chapter1Level2Questions = typeof chapter1Level2Questions !== 'undefined' ? chapter1Level2Questions : [];
window.chapter1Level3Questions = typeof chapter1Level3Questions !== 'undefined' ? chapter1Level3Questions : [];
window.chapter1Level4Questions = typeof chapter1Level4Questions !== 'undefined' ? chapter1Level4Questions : [];
window.chapter1Level5Questions = typeof chapter1Level5Questions !== 'undefined' ? chapter1Level5Questions : [];
window.chapter1Level6Questions = typeof chapter1Level6Questions !== 'undefined' ? chapter1Level6Questions : [];
window.chapter2Level1Questions = typeof chapter2Level1Questions !== 'undefined' ? chapter2Level1Questions : [];
window.chapter2Level2Questions = typeof chapter2Level2Questions !== 'undefined' ? chapter2Level2Questions : [];
window.chapter2Level3Questions = typeof chapter2Level3Questions !== 'undefined' ? chapter2Level3Questions : [];
window.chapter2Level4Questions = typeof chapter2Level4Questions !== 'undefined' ? chapter2Level4Questions : [];
window.chapter2Level5Questions = typeof chapter2Level5Questions !== 'undefined' ? chapter2Level5Questions : [];
`;

vm.runInContext(wrappedCode, sandbox);

const courseData = sandbox.window.courseData;
const levelRules = sandbox.window.levelRules || {
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
    pools: {}
};

courseData.forEach((ch, cIdx) => {
    const chapNum = cIdx + 1;
    ch.levels.forEach((lvl, lIdx) => {
        const levelNum = lIdx + 1;
        const varName = `chapter${chapNum}Level${levelNum}Questions`;
        
        let pool = [];
        if (sandbox.window[varName]) pool = sandbox.window[varName];
        else if (sandbox[varName]) pool = sandbox[varName];
        
        // Inject Intro
        const introId = `${chapNum}-L${levelNum}-INTRO`;
        if (pool && !pool.some(q => String(q.original_id).includes('-INTRO'))) {
            const factualText = (sandbox.window.LEVEL_FACTS && sandbox.window.LEVEL_FACTS[`chapter${chapNum}`])
                ? sandbox.window.LEVEL_FACTS[`chapter${chapNum}`][levelNum - 1]
                : "No fact available.";

            pool.unshift({
                original_id: introId,
                type: "info_card",
                title: levelNum === 1 ? "Introduction" : `Welcome to Level ${levelNum - 1}`,
                text: `Did you know? ${factualText}\n\nComplete the challenges to master this topic!`,
                xp: 0,
                published: true
            });
        }
        
        payload.pools[varName] = pool;
    });
});

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
