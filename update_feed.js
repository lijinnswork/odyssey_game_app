const fs = require('fs');

const contentPath = './content.js';
const feedbacksPath = './feedbacks.json';
let content = fs.readFileSync(contentPath, 'utf8');
const feedbacks = JSON.parse(fs.readFileSync(feedbacksPath, 'utf8'));

const startIndex = content.indexOf('const chapter1Level1Questions = [');
if (startIndex === -1) throw new Error('Could not find chapter1Level1Questions');

// Find the closing bracket. We have to be careful since there could be '];' inside the array
// but usually it is at the end of the declaration.
// Let's find the closing bracket matching the opening one.
const arrStart = content.indexOf('[', startIndex);
let braceCount = 0;
let arrEnd = -1;

for (let i = arrStart; i < content.length; i++) {
    if (content[i] === '[') braceCount++;
    else if (content[i] === ']') {
        braceCount--;
        if (braceCount === 0) {
            arrEnd = i;
            break;
        }
    }
}

if (arrEnd === -1) throw new Error('Could not find end of array');

const arrayStr = content.substring(arrStart, arrEnd + 1);

let questions;
try {
    eval('questions = ' + arrayStr);
} catch (e) {
    throw new Error('Failed to parse array: ' + e);
}

feedbacks.forEach(fb => {
    const q = questions.find(question => question.original_id === fb.id);
    if (q) {
        q.correctFeedback = fb.feedback_correct;
        q.incorrectFeedback = fb.feedback_incorrect;
        if (q.options) {
            q.options.forEach(opt => {
                if (opt.correct) {
                    opt.feedback = fb.feedback_correct;
                } else {
                    opt.feedback = fb.feedback_incorrect;
                }
            });
        }
    } else {
        console.warn(`Question ID ${fb.id} not found.`);
    }
});

const updatedArrayStr = JSON.stringify(questions, null, 4);

content = content.substring(0, arrStart) + updatedArrayStr + content.substring(arrEnd + 1);

fs.writeFileSync(contentPath, content, 'utf8');
console.log('Successfully updated content.js');
