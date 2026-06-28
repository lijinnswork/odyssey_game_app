const fs = require('fs');
const path = require('path');

const contentPath = '/Users/lijinns/Desktop/Notebook/AG/d30/content.js';
let content = fs.readFileSync(contentPath, 'utf8');

const startTarget = 'const chapter1Level2Questions = [';
const endTarget = 'const chapter1Level3Questions = [';

const startIdx = content.indexOf(startTarget);
const endIdx = content.indexOf(endTarget);

if (startIdx === -1) {
    console.error('Could not find start target in content.js');
    process.exit(1);
}
if (endIdx === -1) {
    console.error('Could not find end target in content.js');
    process.exit(1);
}

const newLevel2QuestionsCode = `const chapter1Level2Questions = [
    {
        "original_id": "chapter1-L2-INTRO-1-VIDEO",
        "type": "video",
        "title": "What is AI?",
        "subtitle": "Watch the video before starting the challenge",
        "videoUrl": "https://player.vimeo.com/video/1174724684?h=9005d5b2f8",
        "duration": "6 mins",
        "topic": "AI Fundamentals",
        "difficulty": "Beginner",
        "description": "Dive into the fundamental concepts of Artificial Intelligence. This module breaks down what AI is, how it differs from traditional programming, and its impact on modern technology.",
        "takeaways": [
            "Define Artificial Intelligence and its basic principles",
            "Differentiate between AI and standard software",
            "Identify common use cases of AI in everyday life"
        ],
        "xp": 0,
        "published": true
    },
    {
        "original_id": "chapter1-L2-INTRO-2",
        "type": "info_card",
        "title": "Welcome to Level 2",
        "subtitle": "AI Fundamentals",
        "text": "Now that you've watched the video, let's put your AI literacy to the test!\\n\\nRemember: modern AI is pattern-based, not understanding-based. Treat it as a capable but sometimes unreliable assistant that always needs human oversight.\\n\\nComplete the challenges to master this topic!",
        "buttonText": "Start Challenge",
        "xp": 0,
        "published": true
    },
    {
        "original_id": 1,
        "question": "In traditional programming, humans write step-by-step rules. How does Machine Learning 'flip the script'?",
        "correctFeedback": "Correct! Machine learning reverses traditional programming by using data and outcomes to discover the underlying patterns and rules.",
        "incorrectFeedback": "Try again. Machine learning learns patterns from examples and works backward, rather than relying on pre-programmed rules.",
        "xp": 10,
        "type": "choice",
        "options": [
            { "text": "It requires software developers to pre-write code for every single possible action.", "correct": false, "feedback": "Try again. Machine learning learns patterns from examples and works backward, rather than relying on pre-programmed rules." },
            { "text": "It uses data and answers to discover patterns and rules.", "correct": true, "feedback": "Correct! Machine learning reverses traditional programming by using data and outcomes to discover the underlying patterns and rules." },
            { "text": "It replaces statistical calculations with human intuition during live sessions.", "correct": false, "feedback": "Try again. Machine learning learns patterns from examples and works backward, rather than relying on pre-programmed rules." },
            { "text": "It generates random mathematical algorithms without relying on training datasets.", "correct": false, "feedback": "Try again. Machine learning learns patterns from examples and works backward, rather than relying on pre-programmed rules." }
        ]
    },
    {
        "original_id": 2,
        "question": "If a generative AI chatbot outputs a persuasive but factually incorrect explanation, what does this illustrate about its design?",
        "correctFeedback": "Correct! Generative AI predicts the most likely next word based on patterns. It prioritizes fluency and plausibility over factual accuracy.",
        "incorrectFeedback": "Incorrect. Chatbots predict words statistically to sound plausible, but they do not inherently check for factual correctness.",
        "xp": 10,
        "type": "choice",
        "options": [
            { "text": "It encountered an internal database search failure during execution.", "correct": false, "feedback": "Incorrect. Chatbots predict words statistically to sound plausible, but they do not inherently check for factual correctness." },
            { "text": "It achieved deep logical understanding of the user's specific context.", "correct": false, "feedback": "Incorrect. Chatbots predict words statistically to sound plausible, but they do not inherently check for factual correctness." },
            { "text": "It prioritizes sounding plausible over being factually correct.", "correct": true, "feedback": "Correct! Generative AI predicts the most likely next word based on patterns. It prioritizes fluency and plausibility over factual accuracy." },
            { "text": "It was programmed to deliberately deceive users for educational purposes.", "correct": false, "feedback": "Incorrect. Chatbots predict words statistically to sound plausible, but they do not inherently check for factual correctness." }
        ]
    },
    {
        "original_id": 3,
        "question": "Why are everyday tools like facial recognition, traffic maps, and grammar checkers classified as 'Narrow AI'?",
        "correctFeedback": "Correct! Narrow AI is specialized for specific domains, whereas General AI (broad, human-like intelligence) remains in the realm of science fiction.",
        "incorrectFeedback": "Remember, Narrow AI refers to systems specialized for dedicated tasks (like spam filters or spelling helpers), not all-purpose human intelligence.",
        "xp": 10,
        "type": "choice",
        "options": [
            { "text": "They display broad human-like capabilities across all subject matters.", "correct": false, "feedback": "Remember, Narrow AI refers to systems specialized for dedicated tasks (like spam filters or spelling helpers), not all-purpose human intelligence." },
            { "text": "They require constant high-speed cloud connections to operate at all.", "correct": false, "feedback": "Remember, Narrow AI refers to systems specialized for dedicated tasks (like spam filters or spelling helpers), not all-purpose human intelligence." },
            { "text": "They possess self-aware consciousness similar to advanced human minds.", "correct": false, "feedback": "Remember, Narrow AI refers to systems specialized for dedicated tasks (like spam filters or spelling helpers), not all-purpose human intelligence." },
            { "text": "They are specialized for single tasks.", "correct": true, "feedback": "Correct! Narrow AI is specialized for specific domains, whereas General AI (broad, human-like intelligence) remains in the realm of science fiction." }
        ]
    },
    {
        "original_id": 4,
        "question": "According to the video, which of the following are examples of 'invisible' AI that are already stitched into our everyday lives? (Select all that apply)",
        "correctFeedback": "Correct! Face unlock, traffic routing, and grammar assistance are real-world examples of Narrow AI quietly operating in the background.",
        "incorrectFeedback": "Not quite. Humanoid household chores robots are still mostly science fiction, but face unlock, traffic routing, and grammar helpers are real everyday AI.",
        "xp": 10,
        "type": "multiple_choice",
        "options": [
            { "text": "Unlocking your phone using facial recognition.", "correct": true, "feedback": "Correct! Face unlock, traffic routing, and grammar assistance are real-world examples of Narrow AI quietly operating in the background." },
            { "text": "A map app calculating the best route to dodge traffic.", "correct": true, "feedback": "Correct! Face unlock, traffic routing, and grammar assistance are real-world examples of Narrow AI quietly operating in the background." },
            { "text": "A digital grammar helper correcting typos as you type.", "correct": true, "feedback": "Correct! Face unlock, traffic routing, and grammar assistance are real-world examples of Narrow AI quietly operating in the background." },
            { "text": "A humanoid robot autonomously cleaning your home.", "correct": false, "feedback": "Not quite. Humanoid household chores robots are still mostly science fiction, but face unlock, traffic routing, and grammar helpers are real everyday AI." },
            { "text": "A self-writing notebook that attends school lectures for you.", "correct": false, "feedback": "Not quite. Humanoid household chores robots are still mostly science fiction, but face unlock, traffic routing, and grammar helpers are real everyday AI." }
        ]
    },
    {
        "original_id": 5,
        "question": "Which of the following are recognized strengths of modern AI tools in an educational setting? (Select all that apply)",
        "correctFeedback": "Correct! AI excels at pattern-finding and drafting support, but completely lacks human context, ethical judgment, and empathy.",
        "incorrectFeedback": "Try again. Remember that AI cannot replicate human empathy or mentorship, nor can it make ethical judgments.",
        "xp": 10,
        "type": "multiple_choice",
        "options": [
            { "text": "Automating repetitive tasks quickly.", "correct": true, "feedback": "Correct! AI excels at pattern-finding and drafting support, but completely lacks human context, ethical judgment, and empathy." },
            { "text": "Providing genuine empathy and mentorship to students.", "correct": false, "feedback": "Try again. Remember that AI cannot replicate human empathy or mentorship, nor can it make ethical judgments." },
            { "text": "Serving as a starting point for drafts and summaries.", "correct": true, "feedback": "Correct! AI excels at pattern-finding and drafting support, but completely lacks human context, ethical judgment, and empathy." },
            { "text": "Making final ethical and moral grading decisions.", "correct": false, "feedback": "Try again. Remember that AI cannot replicate human empathy or mentorship, nor can it make ethical judgments." },
            { "text": "Replacing human teaching staff entirely to cut costs.", "correct": false, "feedback": "Try again. Remember that AI cannot replicate human empathy or mentorship, nor can it make ethical judgments." }
        ]
    },
    {
        "original_id": 6,
        "question": "Arrange the steps of AI's core loop in the correct sequence, starting from receiving input to taking action:",
        "correctFeedback": "Correct! The loop is: Perceive → Learn → Reason → Act.",
        "incorrectFeedback": "Not quite. The correct sequence is: Perceive (data input) → Learn (patterns) → Reason (decision) → Act (execution).",
        "xp": 10,
        "type": "ordering",
        "items": [
            "Perceive",
            "Act",
            "Learn",
            "Reason"
        ],
        "correct_order": [
            0,
            2,
            3,
            1
        ]
    },
    {
        "original_id": 7,
        "question": "Match each AI term with its correct definition:",
        "correctFeedback": "Correct! You successfully matched the key terms to their descriptions.",
        "incorrectFeedback": "Check your matches. Remember, General AI is broad and human-like, Narrow AI is task-specific, Machine Learning extracts rules from data, and Generative AI builds new content.",
        "xp": 10,
        "type": "matching",
        "pairs": [
            { "left": "Narrow AI", "right": "AI specialized for specific, defined tasks" },
            { "left": "General AI", "right": "Hypothetical broad human-like intelligence" },
            { "left": "Machine Learning", "right": "Systems that find patterns in data to learn rules" },
            { "left": "Generative AI", "right": "Systems that create new content from scratch" }
        ],
        "shuffledRight": [
            "Hypothetical broad human-like intelligence",
            "Systems that find patterns in data to learn rules",
            "AI specialized for specific, defined tasks",
            "Systems that create new content from scratch"
        ]
    },
    {
        "original_id": 8,
        "question": "Match each AI capability or limitation to its real-world classroom scenario:",
        "correctFeedback": "Correct! You've matched the classroom scenarios with the correct AI limitations and roles.",
        "incorrectFeedback": "Some matches are incorrect. Remember that editing questions represents human supervision, and hallucinating reflects prioritizing fluency over accuracy.",
        "xp": 10,
        "type": "matching",
        "pairs": [
            { "left": "Human Supervisor", "right": "An educator editing AI quiz questions before use" },
            { "left": "Fluency over Accuracy", "right": "A chatbot writing a fluent but incorrect response" },
            { "left": "Data Distribution Dependency", "right": "An AI failing when introduced to new student data" },
            { "left": "No Ethical Judgment", "right": "An AI unable to replace teacher mentorship" }
        ],
        "shuffledRight": [
            "A chatbot writing a fluent but incorrect response",
            "An AI unable to replace teacher mentorship",
            "An educator editing AI quiz questions before use",
            "An AI failing when introduced to new student data"
        ]
    },
    {
        "original_id": 9,
        "question": "Fill in the blank",
        "correctFeedback": "Correct! As emphasized in the video, AI is a capable but sometimes unreliable assistant, and humans must verify its outputs for truth.",
        "incorrectFeedback": "Incorrect. The video advises us to treat AI as a 'capable but sometimes unreliable assistant' and never as the final word on 'truth' or judgment.",
        "xp": 10,
        "type": "fill_in_blanks",
        "text": "Treat AI like a very [capable] but sometimes [unreliable] assistant. It is a tool that can help you, but it should never be treated as the final word on [truth] or judgment.",
        "wordBank": [
            "capable",
            "unreliable",
            "truth",
            "perfect",
            "useless",
            "error"
        ]
    },
    {
        "original_id": 10,
        "question": "Fill in the blank",
        "correctFeedback": "Correct! The goal of the course is to build AI literacy, which includes recognizing both the power and limits of these systems.",
        "incorrectFeedback": "Try again. The goal is building 'AI literacy' by understanding how AI works and understanding its 'limits'.",
        "xp": 10,
        "type": "fill_in_blanks",
        "text": "For most educators, the goal is not to become a programmer, but to build [AI literacy]. This means having a good gut feeling for what AI is, how it works, and knowing where its [limits] are.",
        "wordBank": [
            "AI literacy",
            "limits",
            "programming",
            "strengths",
            "algorithms",
            "intelligence"
        ]
    }
];

`;

const updatedContent = content.substring(0, startIdx) + newLevel2QuestionsCode + content.substring(endIdx);
fs.writeFileSync(contentPath, updatedContent, 'utf8');
console.log('Successfully updated content.js!');
