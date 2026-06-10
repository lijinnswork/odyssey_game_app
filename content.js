// Enhanced Course Data with Chapter -> Level -> Question Structure
// Target: 3 Chapters, 5 Levels/Chapter, 10 Questions/Level

const rawExistingContent = {
    foundations: [
        { type: "micro_concept", text: "Welcome to the Era of AI. It's not just robots and sci-fi. It's the invisible engine powering the future. Let's see what makes it tick.", xp: 10 },
        { type: "choice", question: "How does AI fit into technology's evolution?", options: [{ text: "AI replaces everything before it", correct: false, feedback: "AI didn't appear from nowhere - it built on decades of progress." }, { text: "AI is the next step built on data, computing, and the internet", correct: true, feedback: "Exactly! AI is built on computers, big data, and connectivity." }], xp: 10 },
        { type: "choice", question: "True or False: AI means machines that learn from data and do tasks requiring human intelligence.", options: [{ text: "True", correct: true, feedback: "Yes! AI learns from data to perform intelligent tasks." }, { text: "False", correct: false, feedback: "Actually, AI does learn from data and simulate human intelligence." }], xp: 10 },
        { type: "choice", question: "Why is AI especially relevant for educators today?", options: [{ text: "It supports personalized learning and efficiency", correct: true, feedback: "Correct. AI helps tailor learning and saves educators time." }, { text: "It replaces textbooks", correct: false, feedback: "AI supports teachers; it does not replace teaching or textbooks." }], xp: 10 },
        { type: "task", prompt: "In one sentence, what is Artificial Intelligence?", placeholder: "Type your answer here...", xp: 10 },
        { type: "choice", question: "A school is adding AI tools after using smart boards. What's the best teacher mindset?", options: [{ text: "Avoid AI until it replaces teachers", correct: false, feedback: "AI should support teaching, not replace it." }, { text: "Adopt AI thoughtfully, aligned with learning goals", correct: true, feedback: "Perfect! Teachers guide meaningful AI use." }], xp: 10 },
        { type: "multiple_choice", question: "Which AI tools might educators already use? (Select all)", options: [{ text: "Auto-grading quizzes", correct: true }, { text: "Voice assistants like Siri", correct: true }, { text: "Traditional whiteboards", correct: false }, { text: "Learning platform recommendations", correct: true }], xp: 10 },
        { type: "ordering", question: "Put these AI milestones in order:", items: ["Early computer algorithms", "Development of machine learning", "Growth of big data", "Generative AI"], correct_order: [0, 1, 2, 3], xp: 10 }
    ],
    practice: [
        { type: "choice", question: "A university plans to use AI tutors. What's most responsible?", options: [{ text: "Replace faculty with AI", correct: false, feedback: "AI works best with human expertise." }, { text: "Use AI to support educators", correct: true, feedback: "Exactly! AI enhances teaching." }], xp: 20 },
        { type: "task", prompt: "Name one way AI can help a teacher in the classroom.", placeholder: "Type here...", xp: 20 },
        { type: "choice", question: "True or False: Only CS teachers need to learn about AI.", options: [{ text: "True", correct: false, feedback: "AI impacts all subjects." }, { text: "False", correct: true, feedback: "Correct! AI affects everyone." }], xp: 20 },
        { type: "choice", question: "Which is a benefit of AI in grading?", options: [{ text: "It removes the need for teachers", correct: false, feedback: "Teachers are still needed for nuance." }, { text: "It saves time on repetitive tasks", correct: true, feedback: "Yes, efficiency is key." }], xp: 20 }
    ],
    ethics: [
        { type: "choice", question: "What is a key ethical concern?", options: [{ text: "Data privacy", correct: true, feedback: "Protecting data is critical." }, { text: "Internet speed", correct: false, feedback: "That's infrastructure, not ethics." }], xp: 30 },
        { type: "multiple_choice", question: "Which practices are ethical?", options: [{ text: "Transparency", correct: true }, { text: "Ignoring bias", correct: false }, { text: "Protecting data", correct: true }], xp: 30 },
        { type: "task", prompt: "Why is bias in AI dangerous?", placeholder: "Explain here...", xp: 30 },
        { type: "choice", question: "Who is responsible for AI ethics?", options: [{ text: "Only developers", correct: false, feedback: "Everyone involved plays a role." }, { text: "All stakeholders including educators", correct: true, feedback: "Yes, it's a shared responsibility." }], xp: 30 }
    ]
};

window.LEVEL_FACTS = {
    "chapter1": [
        "AI is the simulation of human intelligence by machines, replicating functions like learning and problem-solving.",
        "The Turing Test, proposed by Alan Turing in 1950, was the first real attempt to define machine intelligence.",
        "Modern AI requires massive amounts of data (Big Data) to find the patterns it needs to make decisions.",
        "An algorithm is a set of logical rules; AI uses them to process data and 'learn' without explicit programming.",
        "Deep Learning is a subset of AI inspired by the brain, using multiple layers of processing to handle complex data.",
        "Neural Networks consist of interconnected nodes (neurons) that pass information to recognize speech or images.",
        "Training is the phase where an AI model is fed data repeatedly until it can accurately predict outcomes.",
        "Inference is the 'action' phase where a finished AI model applies its training to new, real-world data.",
        "AI applications are already everywhere - from your Netflix recommendations to the fraud alerts on your bank card.",
        "The ultimate goal of AI is to solve massive human challenges, from curing diseases to managing climate change."
    ],
    "chapter2": [
        "AI in education enables personalized learning paths that adapt to each student's unique pace and needs.",
        "In healthcare, AI can scan thousands of medical images to find signs of disease faster than human doctors.",
        "Financial AI systems analyze millions of transactions per second to detect and stop fraud instantly.",
        "Self-driving vehicles use AI and computer vision to navigate roads and avoid obstacles in real-time.",
        "Generative AI can create entirely new art, music, narratives, and even code from simple human prompts.",
        "Scientific AI is accelerating drug discovery, finding new life-saving medicines in months rather than decades.",
        "Environmental AI helps optimize energy grids and track deforestation using satellite imagery and sensors.",
        "AI accessibility tools like real-time captioning help bridge the gap for people with hearing or vision loss.",
        "AI co-pilots handle repetitive digital tasks, allowing humans to focus on higher-level creative problem solving.",
        "The future of work involves a partnership where humans use AI as a tool to expand their own capabilities."
    ],
    "chapter3": [
        "AI bias occurs when training data contains human prejudices, leading to unfair or discriminatory results.",
        "Privacy is a major concern as AI systems often require access to sensitive personal data to function effectively.",
        "AI can be a powerful shield for cybersecurity, detecting threats much faster than any human security team.",
        "Automation is reshaping the economy by handling repetitive labor, requiring humans to learn new, unique skills.",
        "Human-AI collaboration, or the 'Centaur' model, often performs better than either a human or an AI alone.",
        "Governments are developing new regulations, like the EU AI Act, to ensure technology is used safely and fairly.",
        "Sustainability is a challenge, as training large AI models requires significant electricity and water for cooling.",
        "The Digital Divide warns that if only wealthy nations have AI, global inequality could increase drastically.",
        "Consciousness in AI is a philosophical debate; current AI processes information but does not 'feel' or 'know'.",
        "The Singularity is a theoretical future point where AI might become self-improving and exceed human control."
    ]
};

const chapter1Level1Questions = [
    {
        "original_id": 1,
        "question": "Which statement best distinguishes Artificial Intelligence from traditional rule-based software?",
        "correctFeedback": "Artificial Intelligence systems typically learn patterns from data rather than following only fixed rule-based instructions.",
        "incorrectFeedback": "Modern AI systems rely on statistical pattern learning rather than predefined rule-based programming.",
        "xp": 10,
        "type": "choice",
        "options": [
            {
                "text": "AI systems operate without any human input",
                "correct": false,
                "feedback": "Modern AI systems rely on statistical pattern learning rather than predefined rule-based programming."
            },
            {
                "text": "AI systems rely on statistical pattern learning rather than fixed rules",
                "correct": true,
                "feedback": "Artificial Intelligence systems typically learn patterns from data rather than following only fixed rule-based instructions."
            },
            {
                "text": "AI systems always function autonomously once deployed",
                "correct": false,
                "feedback": "Modern AI systems rely on statistical pattern learning rather than predefined rule-based programming."
            },
            {
                "text": "AI systems primarily store and retrieve structured data and information",
                "correct": false,
                "feedback": "Modern AI systems rely on statistical pattern learning rather than predefined rule-based programming."
            }
        ]
    },
    {
        "original_id": 2,
        "question": "A grammar correction tool improves over time by analyzing large amounts of writing data. What enables this improvement?",
        "correctFeedback": "Machine learning systems improve performance by learning statistical relationships from large collections of examples.",
        "incorrectFeedback": "Improvement in machine learning systems occurs through statistical learning from large numbers of examples.",
        "xp": 10,
        "type": "choice",
        "options": [
            {
                "text": "Manual rule updates by programmers",
                "correct": false,
                "feedback": "Improvement in machine learning systems occurs through statistical learning from large numbers of examples."
            },
            {
                "text": "Statistical learning from examples",
                "correct": true,
                "feedback": "Machine learning systems improve performance by learning statistical relationships from large collections of examples."
            },
            {
                "text": "Built-in emotional sensitivity",
                "correct": false,
                "feedback": "Improvement in machine learning systems occurs through statistical learning from large numbers of examples."
            },
            {
                "text": "Real-time internet fact-checking",
                "correct": false,
                "feedback": "Improvement in machine learning systems occurs through statistical learning from large numbers of examples."
            }
        ]
    },
    {
        "original_id": 3,
        "question": "Which statement most accurately reflects the AI systems currently used in education?",
        "correctFeedback": "Most AI systems in education today are narrow systems designed to perform specific tasks rather than general reasoning.",
        "incorrectFeedback": "Current educational AI systems are examples of narrow AI that specialize in defined tasks without broad understanding.",
        "xp": 10,
        "type": "choice",
        "options": [
            {
                "text": "They simulate broad human reasoning across domains",
                "correct": false,
                "feedback": "Current educational AI systems are examples of narrow AI that specialize in defined tasks without broad understanding."
            },
            {
                "text": "They specialize in specific tasks without general understanding",
                "correct": true,
                "feedback": "Most AI systems in education today are narrow systems designed to perform specific tasks rather than general reasoning."
            },
            {
                "text": "They independently define their own learning goals",
                "correct": false,
                "feedback": "Current educational AI systems are examples of narrow AI that specialize in defined tasks without broad understanding."
            },
            {
                "text": "They replace human judgment in complex decisions",
                "correct": false,
                "feedback": "Current educational AI systems are examples of narrow AI that specialize in defined tasks without broad understanding."
            }
        ]
    },
    {
        "original_id": 4,
        "question": "When a generative AI system produces a paragraph, it primarily:",
        "correctFeedback": "Generative AI models produce text by predicting the most probable sequence of words based on patterns learned during training.",
        "incorrectFeedback": "Generative language models generate responses by predicting statistically likely word sequences.",
        "xp": 10,
        "type": "choice",
        "options": [
            {
                "text": "Retrieves a stored paragraph from an attached database",
                "correct": false,
                "feedback": "Generative language models generate responses by predicting statistically likely word sequences."
            },
            {
                "text": "Predicts the most statistically likely sequence of words",
                "correct": true,
                "feedback": "Generative AI models produce text by predicting the most probable sequence of words based on patterns learned during training."
            },
            {
                "text": "Verifies each statement against trusted sources",
                "correct": false,
                "feedback": "Generative language models generate responses by predicting statistically likely word sequences."
            },
            {
                "text": "Applies ethical and moral reasoning before responding",
                "correct": false,
                "feedback": "Generative language models generate responses by predicting statistically likely word sequences."
            }
        ]
    },
    {
        "original_id": 5,
        "question": "Why can AI systems produce responses that sound convincing but contain errors?",
        "correctFeedback": "AI systems often prioritize linguistic plausibility, which can result in fluent but factually incorrect outputs.",
        "incorrectFeedback": "Language models optimize for plausible and coherent responses rather than guaranteed factual accuracy.",
        "xp": 10,
        "type": "choice",
        "options": [
            {
                "text": "They prioritize linguistic plausibility over factuality",
                "correct": true,
                "feedback": "AI systems often prioritize linguistic plausibility, which can result in fluent but factually incorrect outputs."
            },
            {
                "text": "They intentionally introduce uncertainty for creativity",
                "correct": false,
                "feedback": "Language models optimize for plausible and coherent responses rather than guaranteed factual accuracy."
            },
            {
                "text": "They lack access to real-time data",
                "correct": false,
                "feedback": "Language models optimize for plausible and coherent responses rather than guaranteed factual accuracy."
            },
            {
                "text": "They simplify complex ideas to improve user readability",
                "correct": false,
                "feedback": "Language models optimize for plausible and coherent responses rather than guaranteed factual accuracy."
            }
        ]
    },
    {
        "original_id": 6,
        "question": "Which perspective best supports responsible AI use in education?",
        "correctFeedback": "Responsible AI use in education treats AI as a drafting or assistance tool while retaining human oversight and judgment.",
        "incorrectFeedback": "Responsible academic use of AI maintains human oversight while using AI primarily for assistance or drafting.",
        "xp": 10,
        "type": "choice",
        "options": [
            {
                "text": "Treat AI outputs as authoritative if they appear coherent",
                "correct": false,
                "feedback": "Responsible academic use of AI maintains human oversight while using AI primarily for assistance or drafting."
            },
            {
                "text": "Avoid AI entirely to protect academic standards",
                "correct": false,
                "feedback": "Responsible academic use of AI maintains human oversight while using AI primarily for assistance or drafting."
            },
            {
                "text": "Use AI as a draft assistant retaining human oversight",
                "correct": true,
                "feedback": "Responsible AI use in education treats AI as a drafting or assistance tool while retaining human oversight and judgment."
            },
            {
                "text": "Allow AI to automate evaluative decisions for consistency",
                "correct": false,
                "feedback": "Responsible academic use of AI maintains human oversight while using AI primarily for assistance or drafting."
            }
        ]
    },
    {
        "original_id": 7,
        "question": "Which capabilities are central to most modern AI systems?",
        "correctFeedback": "Modern AI systems recognize patterns in data, learn from examples, and generate predictions based on learned relationships.",
        "incorrectFeedback": "Core AI capabilities involve pattern recognition, learning from examples, and generating predictions.",
        "xp": 10,
        "type": "multiple_choice",
        "options": [
            {
                "text": "Recognizing patterns in data",
                "correct": true,
                "feedback": "Modern AI systems recognize patterns in data, learn from examples, and generate predictions based on learned relationships."
            },
            {
                "text": "Learning from examples",
                "correct": true,
                "feedback": "Modern AI systems recognize patterns in data, learn from examples, and generate predictions based on learned relationships."
            },
            {
                "text": "Experiencing human emotions",
                "correct": false,
                "feedback": "Core AI capabilities involve pattern recognition, learning from examples, and generating predictions."
            },
            {
                "text": "Generating predictions",
                "correct": true,
                "feedback": "Modern AI systems recognize patterns in data, learn from examples, and generate predictions based on learned relationships."
            }
        ]
    },
    {
        "original_id": 8,
        "question": "Which statements accurately describe Narrow AI?",
        "correctFeedback": "Narrow AI refers to systems designed for specific tasks and is the form most commonly used in present-day tools.",
        "incorrectFeedback": "Narrow AI describes systems specialized for defined tasks and commonly used in current applications.",
        "xp": 10,
        "type": "multiple_choice",
        "options": [
            {
                "text": "Designed for specific, bounded tasks",
                "correct": true,
                "feedback": "Narrow AI refers to systems designed for specific tasks and is the form most commonly used in present-day tools."
            },
            {
                "text": "Equivalent to human-level reasoning",
                "correct": false,
                "feedback": "Narrow AI describes systems specialized for defined tasks and commonly used in current applications."
            },
            {
                "text": "Common in current educational tools",
                "correct": true,
                "feedback": "Narrow AI refers to systems designed for specific tasks and is the form most commonly used in present-day tools."
            },
            {
                "text": "Capable of independent ethical judgment",
                "correct": false,
                "feedback": "Narrow AI describes systems specialized for defined tasks and commonly used in current applications."
            }
        ]
    },
    {
        "original_id": 9,
        "question": "Which factors contributed significantly to the rapid growth of modern AI?",
        "correctFeedback": "Modern AI growth has been driven by the availability of large datasets, improved computing power, and advances in machine learning algorithms.",
        "incorrectFeedback": "The expansion of AI was enabled by large datasets, increased computational power, and improvements in machine learning methods.",
        "xp": 10,
        "type": "multiple_choice",
        "options": [
            {
                "text": "Increased availability of large datasets",
                "correct": true,
                "feedback": "Modern AI growth has been driven by the availability of large datasets, improved computing power, and advances in machine learning algorithms."
            },
            {
                "text": "Improved computational power",
                "correct": true,
                "feedback": "Modern AI growth has been driven by the availability of large datasets, improved computing power, and advances in machine learning algorithms."
            },
            {
                "text": "Development of conscious machines",
                "correct": false,
                "feedback": "The expansion of AI was enabled by large datasets, increased computational power, and improvements in machine learning methods."
            },
            {
                "text": "Advances in machine learning algorithms",
                "correct": true,
                "feedback": "Modern AI growth has been driven by the availability of large datasets, improved computing power, and advances in machine learning algorithms."
            }
        ]
    },
    {
        "original_id": 10,
        "question": "Which are recognized strengths of AI systems?",
        "correctFeedback": "AI systems excel at rapidly processing large volumes of information, applying learned patterns consistently, and automating repetitive tasks.",
        "incorrectFeedback": "Key strengths of AI include rapid data processing, consistent pattern application, and automation of repetitive processes.",
        "xp": 10,
        "type": "multiple_choice",
        "options": [
            {
                "text": "Rapid processing of large volumes of information",
                "correct": true,
                "feedback": "AI systems excel at rapidly processing large volumes of information, applying learned patterns consistently, and automating repetitive tasks."
            },
            {
                "text": "Consistent application of learned patterns",
                "correct": true,
                "feedback": "AI systems excel at rapidly processing large volumes of information, applying learned patterns consistently, and automating repetitive tasks."
            },
            {
                "text": "Deep contextual understanding of human situations",
                "correct": false,
                "feedback": "Key strengths of AI include rapid data processing, consistent pattern application, and automation of repetitive processes."
            },
            {
                "text": "Automation of repetitive processes",
                "correct": true,
                "feedback": "AI systems excel at rapidly processing large volumes of information, applying learned patterns consistently, and automating repetitive tasks."
            }
        ]
    },
    {
        "original_id": 11,
        "question": "Which reflect limitations of AI systems?",
        "correctFeedback": "AI systems may generate fabricated information, rely heavily on training data patterns, and lack independent ethical reasoning.",
        "incorrectFeedback": "Common AI limitations include hallucinated information, dependence on training data, and absence of ethical reasoning.",
        "xp": 10,
        "type": "multiple_choice",
        "options": [
            {
                "text": "Susceptibility to producing fabricated information",
                "correct": true,
                "feedback": "AI systems may generate fabricated information, rely heavily on training data patterns, and lack independent ethical reasoning."
            },
            {
                "text": "Inability to independently evaluate ethical consequences",
                "correct": true,
                "feedback": "AI systems may generate fabricated information, rely heavily on training data patterns, and lack independent ethical reasoning."
            },
            {
                "text": "Dependence on training data patterns",
                "correct": true,
                "feedback": "AI systems may generate fabricated information, rely heavily on training data patterns, and lack independent ethical reasoning."
            },
            {
                "text": "Guaranteed objectivity in decision-making",
                "correct": false,
                "feedback": "Common AI limitations include hallucinated information, dependence on training data, and absence of ethical reasoning."
            }
        ]
    },
    {
        "original_id": 12,
        "question": "Which elements are part of AI literacy for educators?",
        "correctFeedback": "AI literacy involves understanding core AI concepts, recognizing system limitations, and critically evaluating generated outputs.",
        "incorrectFeedback": "AI literacy requires conceptual understanding of AI systems, awareness of their limitations, and critical evaluation of outputs.",
        "xp": 10,
        "type": "multiple_choice",
        "options": [
            {
                "text": "Understanding core AI concepts",
                "correct": true,
                "feedback": "AI literacy involves understanding core AI concepts, recognizing system limitations, and critically evaluating generated outputs."
            },
            {
                "text": "Recognizing AI limitations",
                "correct": true,
                "feedback": "AI literacy involves understanding core AI concepts, recognizing system limitations, and critically evaluating generated outputs."
            },
            {
                "text": "Delegating final decisions to AI tools",
                "correct": false,
                "feedback": "AI literacy requires conceptual understanding of AI systems, awareness of their limitations, and critical evaluation of outputs."
            },
            {
                "text": "Evaluating outputs critically",
                "correct": true,
                "feedback": "AI literacy involves understanding core AI concepts, recognizing system limitations, and critically evaluating generated outputs."
            }
        ]
    },
    {
        "original_id": 13,
        "question": "Arrange the core AI loop in logical sequence:",
        "correctFeedback": "AI systems typically perceive input, learn patterns from data, reason about possible responses, and then act by producing outputs.",
        "incorrectFeedback": "The AI cycle begins with perceiving data, followed by learning patterns, reasoning about possibilities, and finally acting.",
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
        "original_id": 14,
        "question": "Arrange the Machine Learning workflow:",
        "correctFeedback": "Machine learning workflows begin with training data, then identify patterns from examples before making predictions.",
        "incorrectFeedback": "Machine learning starts with providing data, collecting examples, identifying patterns, and then generating predictions.",
        "xp": 10,
        "type": "ordering",
        "items": [
            "Identify patterns",
            "Collect labeled examples",
            "Make predictions",
            "Provide training data"
        ],
        "correct_order": [
            3,
            1,
            0,
            2
        ]
    },
    {
        "original_id": 15,
        "question": "Arrange responsible AI use in academic work:",
        "correctFeedback": "Responsible academic use of AI begins with draft generation but requires verification, human judgment, and revision.",
        "incorrectFeedback": "Responsible academic workflows involve generating drafts, verifying claims, applying human judgment, and revising content.",
        "xp": 10,
        "type": "ordering",
        "items": [
            "Revise content",
            "Generate draft",
            "Verify key claims",
            "Apply human judgment"
        ],
        "correct_order": [
            1,
            2,
            3,
            0
        ]
    },
    {
        "original_id": 16,
        "question": "Arrange conceptual AI evolution:",
        "correctFeedback": "AI development progressed from rule-based programming to machine learning and later to modern generative systems.",
        "incorrectFeedback": "AI evolution moved from rule-based programming toward machine learning, pattern prediction, and generative models.",
        "xp": 10,
        "type": "ordering",
        "items": [
            "Rule-based programming",
            "Machine learning",
            "Pattern-based prediction",
            "Generative AI"
        ],
        "correct_order": [
            0,
            1,
            2,
            3
        ]
    },
    {
        "original_id": 17,
        "question": "Arrange steps before relying on AI output:",
        "correctFeedback": "Evaluating AI output requires interpreting responses, recognizing limitations, and verifying important claims.",
        "incorrectFeedback": "Safe use of AI outputs includes interpreting the response, identifying possible limitations, and verifying factual accuracy.",
        "xp": 10,
        "type": "ordering",
        "items": [
            "Interpret response",
            "Generate response",
            "Check for limitations",
            "Cross-verify facts"
        ],
        "correct_order": [
            1,
            0,
            2,
            3
        ]
    },
    {
        "original_id": 18,
        "question": "Arrange safe classroom AI integration:",
        "correctFeedback": "Effective classroom AI integration begins with understanding the tool\u2019s purpose, followed by cautious introduction and monitoring.",
        "incorrectFeedback": "Responsible classroom adoption starts with understanding the tool, introducing it carefully, monitoring outcomes, and reflecting on impact.",
        "xp": 10,
        "type": "ordering",
        "items": [
            "Understand tool purpose",
            "Monitor outcomes",
            "Introduce cautiously",
            "Reflect on impact"
        ],
        "correct_order": [
            0,
            2,
            1,
            3
        ]
    },
    {
        "original_id": 19,
        "question": "Match the concept to its description:",
        "correctFeedback": "Narrow AI performs specific tasks, General AI is hypothetical broad intelligence, Machine Learning identifies patterns from data, and Generative AI creates new content.",
        "incorrectFeedback": "Narrow AI refers to task-specific systems, machine learning identifies patterns in data, generative AI produces new content, and general AI remains hypothetical.",
        "xp": 10,
        "type": "matching",
        "pairs": [
            {
                "left": "Narrow AI",
                "right": "AI specialized for defined tasks"
            },
            {
                "left": "General AI",
                "right": "Hypothetical broad human-like intelligence"
            },
            {
                "left": "Machine Learning",
                "right": "Systems trained on data to identify patterns"
            },
            {
                "left": "Generative AI",
                "right": "Systems that create new content"
            }
        ],
        "shuffledRight": [
            "Hypothetical broad human-like intelligence",
            "Systems trained on data to identify patterns",
            "AI specialized for defined tasks",
            "Systems that create new content"
        ]
    },
    {
        "original_id": 20,
        "question": "Match AI strength to example:",
        "correctFeedback": "AI strengths include recognizing patterns, making predictions, automating processes, and processing language tasks.",
        "incorrectFeedback": "Pattern detection powers spam filters, prediction suggests recommendations, automation schedules tasks, and language processing generates summaries.",
        "xp": 10,
        "type": "matching",
        "pairs": [
            {
                "left": "Pattern detection",
                "right": "Spam filtering"
            },
            {
                "left": "Prediction",
                "right": "Suggesting next video"
            },
            {
                "left": "Automation",
                "right": "Scheduling reminders"
            },
            {
                "left": "Language processing",
                "right": "Auto-generating summaries"
            }
        ],
        "shuffledRight": [
            "Spam filtering",
            "Suggesting next video",
            "Auto-generating summaries",
            "Scheduling reminders"
        ]
    },
    {
        "original_id": 21,
        "question": "Match limitation to implication:",
        "correctFeedback": "AI limitations include statistical guessing, lack of empathy, dependence on data patterns, and absence of ethical reasoning.",
        "incorrectFeedback": "Statistical outputs can produce fluent errors, lack of empathy limits mentorship roles, and dependence on data may reproduce biases.",
        "xp": 10,
        "type": "matching",
        "pairs": [
            {
                "left": "Statistical guessing",
                "right": "Can produce fluent but incorrect outputs"
            },
            {
                "left": "Lack of empathy",
                "right": "Cannot replace mentorship"
            },
            {
                "left": "Data dependency",
                "right": "May reproduce biases"
            },
            {
                "left": "No ethical reasoning",
                "right": "Requires human oversight"
            }
        ],
        "shuffledRight": [
            "Requires human oversight",
            "May reproduce biases",
            "Cannot replace mentorship",
            "Can produce fluent but incorrect outputs"
        ]
    },
    {
        "original_id": 22,
        "question": "Match process stage:",
        "correctFeedback": "In the AI loop, systems perceive incoming data, learn patterns, reason about possible actions, and act by producing outputs.",
        "incorrectFeedback": "Perception involves interpreting input data, learning analyzes patterns, reasoning determines the next step, and action executes output.",
        "xp": 10,
        "type": "matching",
        "pairs": [
            {
                "left": "Perceive",
                "right": "Interpret incoming data"
            },
            {
                "left": "Learn",
                "right": "Analyze patterns"
            },
            {
                "left": "Reason",
                "right": "Decide next step"
            },
            {
                "left": "Act",
                "right": "Execute output"
            }
        ],
        "shuffledRight": [
            "Execute output",
            "Analyze patterns",
            "Interpret incoming data",
            "Decide next step"
        ]
    },
    {
        "original_id": 23,
        "question": "Match term with educational implication:",
        "correctFeedback": "AI literacy means understanding AI capabilities and limits, while hallucinations refer to confident but incorrect outputs.",
        "incorrectFeedback": "AI literacy involves awareness of system strengths and limits, and hallucinations refer to confident but incorrect generation.",
        "xp": 10,
        "type": "matching",
        "pairs": [
            {
                "left": "AI literacy",
                "right": "Awareness of AI strengths and limits"
            },
            {
                "left": "Hallucination",
                "right": "Confident but incorrect generation"
            },
            {
                "left": "Narrow AI",
                "right": "Task-specific system"
            },
            {
                "left": "Automation",
                "right": "Reducing repetitive manual effort"
            }
        ],
        "shuffledRight": [
            "Confident but incorrect generation",
            "Awareness of AI strengths and limits",
            "Task-specific system",
            "Reducing repetitive manual effort"
        ]
    },
    {
        "original_id": 24,
        "question": "Match use-case with suitability:",
        "correctFeedback": "AI is useful for brainstorming and summarization, while final academic judgment and ethical grading require human authority.",
        "incorrectFeedback": "AI assistance suits idea generation and drafting tasks, whereas evaluative decisions require human judgment.",
        "xp": 10,
        "type": "matching",
        "pairs": [
            {
                "left": "Brainstorming ideas",
                "right": "Appropriate AI assistance"
            },
            {
                "left": "Ethical grading decisions",
                "right": "Requires human authority"
            },
            {
                "left": "Draft summarization",
                "right": "Appropriate AI assistance"
            },
            {
                "left": "Final academic judgment",
                "right": "Requires human authority"
            }
        ],
        "shuffledRight": [
            "Appropriate AI assistance",
            "Requires human authority",
            "Appropriate AI assistance",
            "Requires human authority"
        ]
    },
    {
        "original_id": 25,
        "question": "Fill in the blank",
        "correctFeedback": "Artificial intelligence systems rely on statistical patterns rather than fixed rule-based instructions.",
        "incorrectFeedback": "AI systems operate by identifying patterns in data instead of relying solely on predefined rules.",
        "xp": 10,
        "type": "fill_in_blanks",
        "text": "Artificial Intelligence systems rely on statistical [patterns] rather than fixed [rules].",
        "wordBank": [
            "patterns",
            "rules",
            "emotions",
            "intentions"
        ]
    },
    {
        "original_id": 26,
        "question": "Fill in the blank",
        "correctFeedback": "Modern AI models learn from large datasets and improve through exposure to numerous examples.",
        "incorrectFeedback": "Machine learning systems improve by training on large datasets and learning from examples.",
        "xp": 10,
        "type": "fill_in_blanks",
        "text": "Modern AI systems learn from large amounts of [data] and improve through exposure to [examples].",
        "wordBank": [
            "data",
            "examples",
            "instincts",
            "hardware"
        ]
    },
    {
        "original_id": 27,
        "question": "Fill in the blank",
        "correctFeedback": "Most AI used today is narrow AI designed to perform specific tasks rather than general intelligence.",
        "incorrectFeedback": "Current AI tools are narrow systems built for specific tasks rather than broad human-like reasoning.",
        "xp": 10,
        "type": "fill_in_blanks",
        "text": "The AI used today in classrooms is considered [narrow] AI because it is designed for [specific] tasks.",
        "wordBank": [
            "narrow",
            "specific",
            "general",
            "unlimited"
        ]
    },
    {
        "original_id": 28,
        "question": "Fill in the blank",
        "correctFeedback": "Generative AI creates new content by predicting likely sequences of words based on learned patterns.",
        "incorrectFeedback": "Generative models produce content by predicting probable word sequences.",
        "xp": 10,
        "type": "fill_in_blanks",
        "text": "Generative AI produces new [content] by predicting likely [word] sequences.",
        "wordBank": [
            "content",
            "word",
            "emotional",
            "hardware"
        ]
    },
    {
        "original_id": 29,
        "question": "Fill in the blank",
        "correctFeedback": "AI responses are optimized to sound plausible, which means they may occasionally be incorrect.",
        "incorrectFeedback": "Language models aim for plausible responses even when factual correctness is uncertain.",
        "xp": 10,
        "type": "fill_in_blanks",
        "text": "AI systems aim to produce responses that sound [plausible], even if they are not always [correct].",
        "wordBank": [
            "plausible",
            "correct",
            "conscious",
            "neutral"
        ]
    },
    {
        "original_id": 30,
        "question": "Fill in the blank",
        "correctFeedback": "Responsible AI use combines human oversight with critical evaluation of generated outputs.",
        "incorrectFeedback": "Effective AI use requires human oversight and critical evaluation of outputs.",
        "xp": 10,
        "type": "fill_in_blanks",
        "text": "Responsible AI use requires human [oversight] and critical [evaluation].",
        "wordBank": [
            "oversight",
            "evaluation",
            "automation",
            "delegation"
        ]
    }
];

const chapter1Level2Questions = [
    {
        "original_id": 1,
        "question": "An educator uses AI to generate quiz questions and then edits them before use. What role is the educator primarily playing?",
        "correctFeedback": "Correct. Human supervision ensures AI outputs are reviewed and refined before use.",
        "incorrectFeedback": "Editing and validating AI-generated content reflects oversight of AI outputs rather than training or autonomous evaluation.",
        "xp": 10,
        "type": "choice",
        "options": [
            {
                "text": "Data annotator",
                "correct": false,
                "feedback": "Editing and validating AI-generated content reflects oversight of AI outputs rather than training or autonomous evaluation."
            },
            {
                "text": "System trainer",
                "correct": false,
                "feedback": "Editing and validating AI-generated content reflects oversight of AI outputs rather than training or autonomous evaluation."
            },
            {
                "text": "Human supervisor",
                "correct": true,
                "feedback": "Correct. Human supervision ensures AI outputs are reviewed and refined before use."
            },
            {
                "text": "Autonomous evaluator",
                "correct": false,
                "feedback": "Editing and validating AI-generated content reflects oversight of AI outputs rather than training or autonomous evaluation."
            }
        ]
    },
    {
        "original_id": 2,
        "question": "A predictive AI model performs poorly after being introduced to a new type of student data. What is the most likely reason?",
        "correctFeedback": "Correct. AI models rely on patterns learned from their training data.",
        "incorrectFeedback": "Model performance often declines when new input data differs significantly from the distribution of the training dataset.",
        "xp": 10,
        "type": "choice",
        "options": [
            {
                "text": "The model lacks emotional calibration",
                "correct": false,
                "feedback": "Model performance often declines when new input data differs significantly from the distribution of the training dataset."
            },
            {
                "text": "The new data differs from its training distribution",
                "correct": true,
                "feedback": "Correct. AI models rely on patterns learned from their training data."
            },
            {
                "text": "The algorithm stopped updating automatically",
                "correct": false,
                "feedback": "Model performance often declines when new input data differs significantly from the distribution of the training dataset."
            },
            {
                "text": "The interface is not optimized",
                "correct": false,
                "feedback": "Model performance often declines when new input data differs significantly from the distribution of the training dataset."
            }
        ]
    },
    {
        "original_id": 3,
        "question": "Why is AI often described as 'pattern-based' rather than 'understanding-based'?",
        "correctFeedback": "Correct. AI identifies statistical relationships between patterns in data.",
        "incorrectFeedback": "Most AI systems detect correlations in data rather than interpreting meaning with contextual awareness.",
        "xp": 10,
        "type": "choice",
        "options": [
            {
                "text": "It encodes symbolic reasoning rules to process information",
                "correct": false,
                "feedback": "Most AI systems detect correlations in data rather than interpreting meaning with contextual awareness."
            },
            {
                "text": "It relies on correlations without contextual awareness",
                "correct": true,
                "feedback": "Correct. AI identifies statistical relationships between patterns in data."
            },
            {
                "text": "It simulates conscious reflection",
                "correct": false,
                "feedback": "Most AI systems detect correlations in data rather than interpreting meaning with contextual awareness."
            },
            {
                "text": "It adapts goals based on feedback",
                "correct": false,
                "feedback": "Most AI systems detect correlations in data rather than interpreting meaning with contextual awareness."
            }
        ]
    },
    {
        "original_id": 4,
        "question": "If a generative AI creates a persuasive but factually incorrect explanation, this illustrates:",
        "correctFeedback": "Correct. Generative AI produces fluent responses by predicting language patterns.",
        "incorrectFeedback": "Generative models generate likely word sequences and do not inherently verify factual accuracy.",
        "xp": 10,
        "type": "choice",
        "options": [
            {
                "text": "Overfitting to training data",
                "correct": false,
                "feedback": "Generative models generate likely word sequences and do not inherently verify factual accuracy."
            },
            {
                "text": "Deterministic bias",
                "correct": false,
                "feedback": "Generative models generate likely word sequences and do not inherently verify factual accuracy."
            },
            {
                "text": "Statistical fluency without verification",
                "correct": true,
                "feedback": "Correct. Generative AI produces fluent responses by predicting language patterns."
            },
            {
                "text": "Incomplete dataset indexing",
                "correct": false,
                "feedback": "Generative models generate likely word sequences and do not inherently verify factual accuracy."
            }
        ]
    },
    {
        "original_id": 5,
        "question": "Which scenario best demonstrates responsible AI integration in teaching?",
        "correctFeedback": "Correct. AI can support preparation while educators retain instructional authority.",
        "incorrectFeedback": "Responsible AI integration supports instructional tasks but does not replace human judgment or classroom interaction.",
        "xp": 10,
        "type": "choice",
        "options": [
            {
                "text": "Using AI-generated grades without review",
                "correct": false,
                "feedback": "Responsible AI integration supports instructional tasks but does not replace human judgment or classroom interaction."
            },
            {
                "text": "Using AI summaries as preparation before class discussion",
                "correct": true,
                "feedback": "Correct. AI can support preparation while educators retain instructional authority."
            },
            {
                "text": "Replacing classroom interaction with AI tutoring",
                "correct": false,
                "feedback": "Responsible AI integration supports instructional tasks but does not replace human judgment or classroom interaction."
            },
            {
                "text": "Delegating all assessment design to AI",
                "correct": false,
                "feedback": "Responsible AI integration supports instructional tasks but does not replace human judgment or classroom interaction."
            }
        ]
    },
    {
        "original_id": 6,
        "question": "When AI suggests a personalized learning pathway, what underlying mechanism enables this?",
        "correctFeedback": "Correct. Personalized recommendations emerge from patterns identified in prior learner data.",
        "incorrectFeedback": "AI personalization systems analyze historical learner behavior and performance to detect patterns that guide recommendations.",
        "xp": 10,
        "type": "choice",
        "options": [
            {
                "text": "Emotional profiling",
                "correct": false,
                "feedback": "AI personalization systems analyze historical learner behavior and performance to detect patterns that guide recommendations."
            },
            {
                "text": "Predefined academic rules",
                "correct": false,
                "feedback": "AI personalization systems analyze historical learner behavior and performance to detect patterns that guide recommendations."
            },
            {
                "text": "Pattern recognition from prior data",
                "correct": true,
                "feedback": "Correct. Personalized recommendations emerge from patterns identified in prior learner data."
            },
            {
                "text": "Independent pedagogical reasoning",
                "correct": false,
                "feedback": "AI personalization systems analyze historical learner behavior and performance to detect patterns that guide recommendations."
            }
        ]
    },
    {
        "original_id": 7,
        "question": "Which characteristics distinguish Machine Learning systems from traditional programs?",
        "correctFeedback": "Correct. Machine learning systems adapt through data exposure and optimize statistical models.",
        "incorrectFeedback": "Machine learning systems update their behavior through statistical learning from data rather than relying only on manually coded rules.",
        "xp": 10,
        "type": "multiple_choice",
        "options": [
            {
                "text": "Adaptation based on data exposure",
                "correct": true
            },
            {
                "text": "Fixed logical decision trees",
                "correct": false
            },
            {
                "text": "Statistical optimization",
                "correct": true
            },
            {
                "text": "Explicit manual rule encoding",
                "correct": false
            }
        ]
    },
    {
        "original_id": 8,
        "question": "Which risks emerge when AI systems are deployed without sufficient oversight?",
        "correctFeedback": "Correct. Lack of oversight can amplify bias and increase dependence on automated decisions.",
        "incorrectFeedback": "Unmonitored AI systems can reproduce biases present in data and shift decision responsibility away from human oversight.",
        "xp": 10,
        "type": "multiple_choice",
        "options": [
            {
                "text": "Reinforcement of hidden biases",
                "correct": true
            },
            {
                "text": "Reduced human accountability",
                "correct": true
            },
            {
                "text": "Improved contextual sensitivity",
                "correct": false
            },
            {
                "text": "Overreliance on automated outputs",
                "correct": true
            }
        ]
    },
    {
        "original_id": 9,
        "question": "Which elements influence the quality of AI-generated responses?",
        "correctFeedback": "Correct. Response quality depends on the training data, model design, and the clarity of prompts.",
        "incorrectFeedback": "AI output quality is determined by factors such as training data diversity, model structure, and how clearly prompts guide the model.",
        "xp": 10,
        "type": "multiple_choice",
        "options": [
            {
                "text": "Training data diversity",
                "correct": true
            },
            {
                "text": "Prompt clarity",
                "correct": true
            },
            {
                "text": "Hardware casing design",
                "correct": false
            },
            {
                "text": "Model architecture",
                "correct": true
            }
        ]
    },
    {
        "original_id": 10,
        "question": "Which scenarios reflect appropriate AI assistance rather than replacement?",
        "correctFeedback": "Correct. AI can assist with idea generation and drafting tasks.",
        "incorrectFeedback": "High-stakes academic evaluation and ethical decisions require human authority, while early-stage thinking and drafting tasks can be supported by AI.",
        "xp": 10,
        "type": "multiple_choice",
        "options": [
            {
                "text": "Brainstorming research angles",
                "correct": true
            },
            {
                "text": "Final grading of dissertations",
                "correct": false
            },
            {
                "text": "Draft structuring support",
                "correct": true
            },
            {
                "text": "Automated ethical adjudication",
                "correct": false
            }
        ]
    },
    {
        "original_id": 11,
        "question": "Which statements about AI limitations are accurate?",
        "correctFeedback": "Correct. AI systems generate probabilistic outputs and may generalize patterns beyond their training data.",
        "incorrectFeedback": "AI outputs are generated through probability-based predictions and pattern generalization rather than intentional or independent reasoning.",
        "xp": 10,
        "type": "multiple_choice",
        "options": [
            {
                "text": "AI lacks intrinsic intent",
                "correct": true
            },
            {
                "text": "AI responses are probabilistic",
                "correct": true
            },
            {
                "text": "AI evaluates moral trade-offs independently",
                "correct": false
            },
            {
                "text": "AI may generalize patterns inaccurately",
                "correct": true
            }
        ]
    },
    {
        "original_id": 12,
        "question": "Which factors can reduce hallucination risk?",
        "correctFeedback": "Correct. Clear prompts, verification, and domain constraints improve reliability.",
        "incorrectFeedback": "Hallucination risk decreases when outputs are constrained, prompts are clear, and responses are verified against reliable information.",
        "xp": 10,
        "type": "multiple_choice",
        "options": [
            {
                "text": "Clear prompting",
                "correct": true
            },
            {
                "text": "Cross-verification",
                "correct": true
            },
            {
                "text": "Blind trust in fluent output",
                "correct": false
            },
            {
                "text": "Domain-specific constraints",
                "correct": true
            }
        ]
    },
    {
        "original_id": 13,
        "question": "Arrange steps in evaluating AI-generated content:",
        "correctFeedback": "Correct. Evaluation progresses from understanding the response to verifying accuracy before approval.",
        "incorrectFeedback": "Evaluation of AI output typically begins with reviewing the response, followed by fact-checking, corrections, and final approval.",
        "xp": 10,
        "type": "ordering",
        "items": [
            "Cross-check claims",
            "Revise inaccuracies",
            "Assess coherence",
            "Approve for use"
        ],
        "correct_order": [
            2,
            0,
            1,
            3
        ]
    },
    {
        "original_id": 14,
        "question": "Arrange the AI adaptation cycle:",
        "correctFeedback": "Correct. AI systems adapt through deployment, data collection, parameter adjustment, and evaluation.",
        "incorrectFeedback": "AI improvement cycles begin with real-world deployment, followed by data collection, model adjustment, and performance evaluation.",
        "xp": 10,
        "type": "ordering",
        "items": [
            "Collect new data",
            "Evaluate performance",
            "Deploy model",
            "Adjust internal parameters"
        ],
        "correct_order": [
            2,
            0,
            3,
            1
        ]
    },
    {
        "original_id": 15,
        "question": "Arrange responsible AI classroom implementation:",
        "correctFeedback": "Correct. Effective AI integration begins with objectives and ends with evaluation of impact.",
        "incorrectFeedback": "Responsible implementation typically starts with defining the learning goal, followed by tool selection, pilot testing, and reviewing outcomes.",
        "xp": 10,
        "type": "ordering",
        "items": [
            "Identify objective",
            "Pilot in controlled context",
            "Review impact",
            "Select appropriate tool"
        ],
        "correct_order": [
            0,
            3,
            1,
            2
        ]
    },
    {
        "original_id": 16,
        "question": "Arrange generative output formation conceptually:",
        "correctFeedback": "Correct. Generative models transform prompts into probability distributions and produce responses from predicted sequences.",
        "incorrectFeedback": "Generative models first interpret the prompt, then calculate token probabilities, choose the most likely sequence, and output the response.",
        "xp": 10,
        "type": "ordering",
        "items": [
            "Produce response",
            "Generate token probabilities",
            "Process prompt",
            "Select likely sequence"
        ],
        "correct_order": [
            2,
            1,
            3,
            0
        ]
    },
    {
        "original_id": 17,
        "question": "Arrange risk mitigation steps:",
        "correctFeedback": "Correct. Risk mitigation begins with identifying bias and introducing safeguards before monitoring and adjusting systems.",
        "incorrectFeedback": "Risk mitigation generally starts by identifying possible bias, followed by safeguards, monitoring real-world usage, and adjusting deployment.",
        "xp": 10,
        "type": "ordering",
        "items": [
            "Implement safeguards",
            "Adjust deployment",
            "Identify potential bias",
            "Monitor usage patterns"
        ],
        "correct_order": [
            2,
            0,
            3,
            1
        ]
    },
    {
        "original_id": 18,
        "question": "Arrange increasing abstraction:",
        "correctFeedback": "Correct. AI systems transform raw data into patterns, predictions, and ultimately decisions.",
        "incorrectFeedback": "Information processing typically moves from raw data to patterns, then predictions, and finally decision-making.",
        "xp": 10,
        "type": "ordering",
        "items": [
            "Decisions",
            "Data points",
            "Predictions",
            "Patterns"
        ],
        "correct_order": [
            1,
            3,
            2,
            0
        ]
    },
    {
        "original_id": 19,
        "question": "Match concept to implication:",
        "correctFeedback": "Correct. Probabilistic outputs create variability, training distribution shapes relevance, human oversight reduces risk, and prompts influence responses.",
        "incorrectFeedback": "Probabilistic systems naturally produce varied outputs, training data defines context relevance, oversight reduces risk, and prompts shape generated responses.",
        "xp": 10,
        "type": "matching",
        "pairs": [
            {
                "left": "Probabilistic output",
                "right": "Explains variability in responses"
            },
            {
                "left": "Training distribution",
                "right": "Determines contextual relevance"
            },
            {
                "left": "Human oversight",
                "right": "Reduces automation risks"
            },
            {
                "left": "Prompt design",
                "right": "Influences response quality"
            }
        ],
        "shuffledRight": [
            "Determines contextual relevance",
            "Reduces automation risks",
            "Explains variability in responses",
            "Influences response quality"
        ]
    },
    {
        "original_id": 20,
        "question": "Match AI behavior to explanation:",
        "correctFeedback": "Correct. Each behavior reflects how AI systems extend patterns, personalize outputs, automate processes, or replicate data trends.",
        "incorrectFeedback": "Hallucination occurs when patterns extend beyond evidence, personalization reflects prior data patterns, automation executes repeated tasks, and bias amplification mirrors skewed datasets.",
        "xp": 10,
        "type": "matching",
        "pairs": [
            {
                "left": "Hallucination",
                "right": "Pattern extension beyond evidence"
            },
            {
                "left": "Personalization",
                "right": "Behavior shaped by prior user data"
            },
            {
                "left": "Automation",
                "right": "Execution of repetitive processes"
            },
            {
                "left": "Bias amplification",
                "right": "Replication of skewed dataset trends"
            }
        ],
        "shuffledRight": [
            "Behavior shaped by prior user data",
            "Replication of skewed dataset trends",
            "Execution of repetitive processes",
            "Pattern extension beyond evidence"
        ]
    },
    {
        "original_id": 21,
        "question": "Match limitation with mitigation:",
        "correctFeedback": "Correct. Each mitigation directly addresses a specific AI limitation.",
        "incorrectFeedback": "Bias relates to dataset composition, overconfidence requires human review, context issues improve with better prompts, and statistical errors require validation.",
        "xp": 10,
        "type": "matching",
        "pairs": [
            {
                "left": "Data bias",
                "right": "Broader training data"
            },
            {
                "left": "Overconfidence",
                "right": "Critical human review"
            },
            {
                "left": "Context loss",
                "right": "Prompt refinement"
            },
            {
                "left": "Statistical error",
                "right": "Validation checks"
            }
        ],
        "shuffledRight": [
            "Validation checks",
            "Critical human review",
            "Broader training data",
            "Prompt refinement"
        ]
    },
    {
        "original_id": 22,
        "question": "Match AI strength to educational use:",
        "correctFeedback": "Correct. Each AI strength supports a different educational function.",
        "incorrectFeedback": "Summarization condenses reading, clustering groups patterns, predictive analytics forecasts outcomes, and generative models create draft content.",
        "xp": 10,
        "type": "matching",
        "pairs": [
            {
                "left": "Rapid summarization",
                "right": "Reading condensation"
            },
            {
                "left": "Pattern clustering",
                "right": "Thematic grouping"
            },
            {
                "left": "Predictive analytics",
                "right": "Student performance forecasting"
            },
            {
                "left": "Content generation",
                "right": "Draft creation"
            }
        ],
        "shuffledRight": [
            "Draft creation",
            "Student performance forecasting",
            "Reading condensation",
            "Thematic grouping"
        ]
    },
    {
        "original_id": 23,
        "question": "Match concept to scope:",
        "correctFeedback": "Correct. Each concept reflects a different level or function of AI capability.",
        "incorrectFeedback": "Narrow AI performs specific tasks, general AI refers to hypothetical broad intelligence, machine learning optimizes patterns, and generative models create content.",
        "xp": 10,
        "type": "matching",
        "pairs": [
            {
                "left": "Narrow AI",
                "right": "Task-bound system"
            },
            {
                "left": "General AI",
                "right": "Hypothetical multi-domain intelligence"
            },
            {
                "left": "Machine Learning",
                "right": "Pattern optimization method"
            },
            {
                "left": "Generative Model",
                "right": "Content-producing system"
            }
        ],
        "shuffledRight": [
            "Content-producing system",
            "Pattern optimization method",
            "Hypothetical multi-domain intelligence",
            "Task-bound system"
        ]
    },
    {
        "original_id": 24,
        "question": "Match classroom decision with AI suitability:",
        "correctFeedback": "Correct. Some tasks benefit from AI support, while others require human responsibility.",
        "incorrectFeedback": "Creative support tasks such as brainstorming or visualization can use AI assistance, while ethical decisions and high-stakes evaluations require human authority.",
        "xp": 10,
        "type": "matching",
        "pairs": [
            {
                "left": "Brainstorming session",
                "right": "Suitable AI support"
            },
            {
                "left": "Final ethics review",
                "right": "Requires human authority"
            },
            {
                "left": "Data visualization",
                "right": "Suitable AI support"
            },
            {
                "left": "High-stakes evaluation",
                "right": "Requires human authority"
            }
        ],
        "shuffledRight": [
            "Requires human authority",
            "Suitable AI support"
        ]
    },
    {
        "original_id": 25,
        "question": "Fill in the blank",
        "correctFeedback": "Correct. AI generates outputs using statistical probabilities.",
        "incorrectFeedback": "AI output generation relies on probability calculations rather than conscious awareness.",
        "xp": 10,
        "type": "fill_in_blanks",
        "text": "AI systems produce outputs based on statistical [probabilities] rather than conscious [awareness].",
        "wordBank": [
            "awareness",
            "intention",
            "probabilities",
            "reasoning"
        ]
    },
    {
        "original_id": 26,
        "question": "Fill in the blank",
        "correctFeedback": "Correct. AI models depend on the distribution of their training data.",
        "incorrectFeedback": "Model performance depends on similarity between new input data and the distribution of data used during training.",
        "xp": 10,
        "type": "fill_in_blanks",
        "text": "A model performs poorly when exposed to unfamiliar [data] because it was trained within a limited [distribution].",
        "wordBank": [
            "interface",
            "distribution",
            "hardware",
            "data"
        ]
    },
    {
        "original_id": 27,
        "question": "Fill in the blank",
        "correctFeedback": "Correct. Human oversight ensures ethical accountability in AI use.",
        "incorrectFeedback": "AI systems generate outputs without independent ethical judgment, which makes human oversight necessary.",
        "xp": 10,
        "type": "fill_in_blanks",
        "text": "Human [oversight] is necessary because AI systems lack independent [ethical] judgment.",
        "wordBank": [
            "ethical",
            "oversight",
            "statistical",
            "autonomous"
        ]
    },
    {
        "original_id": 28,
        "question": "Fill in the blank",
        "correctFeedback": "Correct. Generative models predict tokens using learned patterns from training data.",
        "incorrectFeedback": "Generative AI predicts sequences of tokens derived from statistical patterns learned during training.",
        "xp": 10,
        "type": "fill_in_blanks",
        "text": "Generative AI creates responses by predicting likely [tokens] based on learned [patterns].",
        "wordBank": [
            "memories",
            "instincts",
            "patterns",
            "tokens"
        ]
    },
    {
        "original_id": 29,
        "question": "Fill in the blank",
        "correctFeedback": "Correct. Balanced and diverse datasets help reduce bias in AI outputs.",
        "incorrectFeedback": "Bias in AI systems often originates from imbalances in historical datasets that lack sufficient diversity.",
        "xp": 10,
        "type": "fill_in_blanks",
        "text": "Bias can emerge when training data reflects historical [imbalances] and is not adequately [diversified].",
        "wordBank": [
            "automated",
            "imbalances",
            "diversified",
            "neutral"
        ]
    },
    {
        "original_id": 30,
        "question": "Fill in the blank",
        "correctFeedback": "Correct. Responsible AI use requires evaluation and contextual awareness.",
        "incorrectFeedback": "Responsible AI use depends on critical evaluation of outputs and awareness of context and limitations.",
        "xp": 10,
        "type": "fill_in_blanks",
        "text": "Responsible AI integration involves critical [evaluation] and contextual [awareness].",
        "wordBank": [
            "delegation",
            "awareness",
            "evaluation",
            "automation"
        ]
    }
];

const chapter1Level3Questions = [
    {
        "original_id": 1,
        "question": "An AI summarization tool consistently omits nuanced counterarguments in academic texts. What does this most directly reflect?",
        "correctFeedback": "Many summarization systems are optimized to compress information efficiently, which can cause subtle arguments or minority perspectives to be removed.",
        "incorrectFeedback": "Summarization models prioritize condensed outputs. When brevity is optimized, nuanced arguments and counterpoints are often the first elements lost.",
        "xp": 10,
        "type": "choice",
        "options": [
            {
                "text": "Token generation bias",
                "correct": false,
                "feedback": "Summarization models prioritize condensed outputs. When brevity is optimized, nuanced arguments and counterpoints are often the first elements lost."
            },
            {
                "text": "Optimization for brevity over depth",
                "correct": true,
                "feedback": "Many summarization systems are optimized to compress information efficiently, which can cause subtle arguments or minority perspectives to be removed."
            },
            {
                "text": "Training data corruption",
                "correct": false,
                "feedback": "Summarization models prioritize condensed outputs. When brevity is optimized, nuanced arguments and counterpoints are often the first elements lost."
            },
            {
                "text": "Computational limitation",
                "correct": false,
                "feedback": "Summarization models prioritize condensed outputs. When brevity is optimized, nuanced arguments and counterpoints are often the first elements lost."
            }
        ]
    },
    {
        "original_id": 2,
        "question": "An AI grading assistant performs well in structured assessments but inconsistently in open-ended essays. Why?",
        "correctFeedback": "Structured assessments follow predictable patterns, while open-ended essays require nuanced interpretation that statistical models evaluate less reliably.",
        "incorrectFeedback": "Open-ended responses introduce ambiguity and subjective interpretation, which statistical models handle less consistently than structured patterns.",
        "xp": 10,
        "type": "choice",
        "options": [
            {
                "text": "It struggles with subjective evaluation patterns",
                "correct": true,
                "feedback": "Structured assessments follow predictable patterns, while open-ended essays require nuanced interpretation that statistical models evaluate less reliably."
            },
            {
                "text": "It lacks access to external databases and sources",
                "correct": false,
                "feedback": "Open-ended responses introduce ambiguity and subjective interpretation, which statistical models handle less consistently than structured patterns."
            },
            {
                "text": "It applies excessive rule-based logic for evaluation",
                "correct": false,
                "feedback": "Open-ended responses introduce ambiguity and subjective interpretation, which statistical models handle less consistently than structured patterns."
            },
            {
                "text": "It requires emotional calibration",
                "correct": false,
                "feedback": "Open-ended responses introduce ambiguity and subjective interpretation, which statistical models handle less consistently than structured patterns."
            }
        ]
    },
    {
        "original_id": 3,
        "question": "If a generative AI produces highly confident but fabricated citations, this indicates:",
        "correctFeedback": "Generative models construct plausible sequences based on patterns in training data, not by verifying whether sources actually exist.",
        "incorrectFeedback": "Generative AI predicts plausible text patterns but does not inherently verify external references, allowing fabricated citations to appear convincing.",
        "xp": 10,
        "type": "choice",
        "options": [
            {
                "text": "Incomplete indexing of academic sources",
                "correct": false,
                "feedback": "Generative AI predicts plausible text patterns but does not inherently verify external references, allowing fabricated citations to appear convincing."
            },
            {
                "text": "Pattern completion without source verification",
                "correct": true,
                "feedback": "Generative models construct plausible sequences based on patterns in training data, not by verifying whether sources actually exist."
            },
            {
                "text": "Intentional creative augmentation",
                "correct": false,
                "feedback": "Generative AI predicts plausible text patterns but does not inherently verify external references, allowing fabricated citations to appear convincing."
            },
            {
                "text": "Semantic compression error",
                "correct": false,
                "feedback": "Generative AI predicts plausible text patterns but does not inherently verify external references, allowing fabricated citations to appear convincing."
            }
        ]
    },
    {
        "original_id": 4,
        "question": "A model trained primarily on urban student data underperforms in rural contexts. This highlights:",
        "correctFeedback": "When the deployment environment differs from the training environment, model performance can decline due to distribution shift.",
        "incorrectFeedback": "AI models learn patterns from training data. When the real-world context differs from that data, the model encounters distribution shift.",
        "xp": 10,
        "type": "choice",
        "options": [
            {
                "text": "Interface misalignment",
                "correct": false,
                "feedback": "AI models learn patterns from training data. When the real-world context differs from that data, the model encounters distribution shift."
            },
            {
                "text": "Contextual distribution shift",
                "correct": true,
                "feedback": "When the deployment environment differs from the training environment, model performance can decline due to distribution shift."
            },
            {
                "text": "Autonomous reasoning failure",
                "correct": false,
                "feedback": "AI models learn patterns from training data. When the real-world context differs from that data, the model encounters distribution shift."
            },
            {
                "text": "Prompt ambiguity",
                "correct": false,
                "feedback": "AI models learn patterns from training data. When the real-world context differs from that data, the model encounters distribution shift."
            }
        ]
    },
    {
        "original_id": 5,
        "question": "When educators overly rely on AI-generated lesson plans, the primary long-term risk is:",
        "correctFeedback": "Heavy dependence on automated content can gradually reduce diversity in instructional approaches and pedagogical creativity.",
        "incorrectFeedback": "Generative systems often produce broadly optimized structures, which can unintentionally standardize teaching approaches when used without adaptation.",
        "xp": 10,
        "type": "choice",
        "options": [
            {
                "text": "Reduced computational efficiency",
                "correct": false,
                "feedback": "Generative systems often produce broadly optimized structures, which can unintentionally standardize teaching approaches when used without adaptation."
            },
            {
                "text": "Standardization of diverse pedagogical approaches",
                "correct": true,
                "feedback": "Heavy dependence on automated content can gradually reduce diversity in instructional approaches and pedagogical creativity."
            },
            {
                "text": "Increased personalization of learning pathways",
                "correct": false,
                "feedback": "Generative systems often produce broadly optimized structures, which can unintentionally standardize teaching approaches when used without adaptation."
            },
            {
                "text": "Decreased model scalability across subjects",
                "correct": false,
                "feedback": "Generative systems often produce broadly optimized structures, which can unintentionally standardize teaching approaches when used without adaptation."
            }
        ]
    },
    {
        "original_id": 6,
        "question": "Which best explains why AI outputs can vary even with similar prompts?",
        "correctFeedback": "Generative AI predicts tokens using probability distributions, which can produce different outputs from similar prompts.",
        "incorrectFeedback": "Generative models sample from probability distributions rather than following a single fixed output path.",
        "xp": 10,
        "type": "choice",
        "options": [
            {
                "text": "Models revise goals dynamically during each interaction",
                "correct": false,
                "feedback": "Generative models sample from probability distributions rather than following a single fixed output path."
            },
            {
                "text": "Outputs are probabilistic rather than deterministic",
                "correct": true,
                "feedback": "Generative AI predicts tokens using probability distributions, which can produce different outputs from similar prompts."
            },
            {
                "text": "Training data updates continuously during conversation",
                "correct": false,
                "feedback": "Generative models sample from probability distributions rather than following a single fixed output path."
            },
            {
                "text": "Human reasoning is simulated differently each time",
                "correct": false,
                "feedback": "Generative models sample from probability distributions rather than following a single fixed output path."
            }
        ]
    },
    {
        "original_id": 7,
        "question": "Which factors influence variability in generative AI outputs?",
        "correctFeedback": "Output variability emerges from prompt wording, probabilistic token sampling, and internal parameter settings.",
        "incorrectFeedback": "Generative systems produce outputs through probability sampling influenced by prompts and model parameters.",
        "xp": 10,
        "type": "multiple_choice",
        "options": [
            {
                "text": "Prompt phrasing differences",
                "correct": true
            },
            {
                "text": "Probabilistic sampling mechanisms",
                "correct": true
            },
            {
                "text": "Emotional instability of the system",
                "correct": false
            },
            {
                "text": "Model parameter tuning",
                "correct": true
            }
        ]
    },
    {
        "original_id": 8,
        "question": "Which risks increase when AI tools are adopted institution-wide without governance?",
        "correctFeedback": "Without governance structures, AI adoption can create inconsistent practices, reinforce biases, and obscure responsibility.",
        "incorrectFeedback": "Institution-wide AI deployment requires governance because systems can scale both inconsistencies and biases.",
        "xp": 10,
        "type": "multiple_choice",
        "options": [
            {
                "text": "Inconsistent academic standards",
                "correct": true
            },
            {
                "text": "Amplification of systemic bias",
                "correct": true
            },
            {
                "text": "Elimination of human accountability",
                "correct": true
            },
            {
                "text": "Improved interpretability",
                "correct": false
            }
        ]
    },
    {
        "original_id": 9,
        "question": "Which reflect structural limitations of generative AI?",
        "correctFeedback": "Generative models rely on statistical pattern learning rather than grounded reasoning, making them sensitive to prompt framing.",
        "incorrectFeedback": "Generative AI learns correlations from data rather than grounded causal understanding.",
        "xp": 10,
        "type": "multiple_choice",
        "options": [
            {
                "text": "Lack of grounded real-world awareness",
                "correct": true
            },
            {
                "text": "Dependence on statistical associations",
                "correct": true
            },
            {
                "text": "Ability to reason causally across all domains",
                "correct": false
            },
            {
                "text": "Vulnerability to misleading prompts",
                "correct": true
            }
        ]
    },
    {
        "original_id": 10,
        "question": "Which educational uses require especially strong human oversight?",
        "correctFeedback": "Decisions affecting fairness, evaluation, or ethics require strong human oversight when AI systems are involved.",
        "incorrectFeedback": "Oversight becomes essential when AI influences evaluation outcomes or ethical judgments.",
        "xp": 10,
        "type": "multiple_choice",
        "options": [
            {
                "text": "High-stakes grading",
                "correct": true
            },
            {
                "text": "Draft brainstorming",
                "correct": false
            },
            {
                "text": "Ethical adjudication",
                "correct": true
            },
            {
                "text": "Administrative automation",
                "correct": false
            }
        ]
    },
    {
        "original_id": 11,
        "question": "Which factors contribute to hallucination risk in generative AI systems?",
        "correctFeedback": "Hallucinations often emerge when prompts are unclear, training data lacks coverage, or the model extends patterns beyond verified information.",
        "incorrectFeedback": "Hallucinations commonly arise from ambiguity in prompts, missing knowledge in training data, and pattern extension beyond reliable evidence.",
        "xp": 10,
        "type": "multiple_choice",
        "options": [
            {
                "text": "Ambiguous prompts",
                "correct": true
            },
            {
                "text": "Gaps in training data",
                "correct": true
            },
            {
                "text": "Explicit fact-checking pipelines",
                "correct": false
            },
            {
                "text": "Overgeneralized pattern extension",
                "correct": true
            }
        ]
    },
    {
        "original_id": 12,
        "question": "Which actions improve responsible AI integration in institutions?",
        "correctFeedback": "Responsible AI integration depends on review processes, ongoing monitoring, and transparency about how systems are used.",
        "incorrectFeedback": "Effective AI governance requires oversight mechanisms, continuous monitoring, and transparency about system usage.",
        "xp": 10,
        "type": "multiple_choice",
        "options": [
            {
                "text": "Establishing review protocols",
                "correct": true
            },
            {
                "text": "Blind acceptance of fluent output",
                "correct": false
            },
            {
                "text": "Continuous monitoring",
                "correct": true
            },
            {
                "text": "Transparent usage disclosure",
                "correct": true
            }
        ]
    },
    {
        "original_id": 13,
        "question": "Arrange the steps in diagnosing biased AI performance.",
        "correctFeedback": "Bias diagnosis begins with identifying disparities, followed by examining data sources, implementing adjustments, and evaluating results.",
        "incorrectFeedback": "Bias investigation typically starts with detecting outcome disparities, then analyzing training data before corrective action and re-evaluation.",
        "xp": 10,
        "type": "ordering",
        "items": [
            "Detect performance disparity",
            "Re-evaluate outcomes",
            "Implement corrective adjustment",
            "Investigate training data"
        ],
        "correct_order": [
            0,
            3,
            2,
            1
        ]
    },
    {
        "original_id": 14,
        "question": "Arrange the stages of refining a generative AI output.",
        "correctFeedback": "A common workflow begins with generation, followed by critical review, evidence verification, and structural revision.",
        "incorrectFeedback": "Generative output refinement generally follows the sequence: produce a draft, review its claims, verify evidence, and then revise.",
        "xp": 10,
        "type": "ordering",
        "items": [
            "Revise structure",
            "Cross-check evidence",
            "Generate initial draft",
            "Critically review claims"
        ],
        "correct_order": [
            2,
            3,
            1,
            0
        ]
    },
    {
        "original_id": 15,
        "question": "Arrange the abstraction layers in AI processing from input to output.",
        "correctFeedback": "AI systems transform raw inputs into encoded representations, infer patterns, and finally generate outputs.",
        "incorrectFeedback": "Machine learning pipelines typically begin with raw data, convert it into internal representations, infer patterns, and produce outputs.",
        "xp": 10,
        "type": "ordering",
        "items": [
            "Raw input data",
            "Generated output",
            "Encoded representations",
            "Pattern inference"
        ],
        "correct_order": [
            0,
            2,
            3,
            1
        ]
    },
    {
        "original_id": 16,
        "question": "Arrange the typical stages of institutional AI adoption.",
        "correctFeedback": "Strategic adoption begins with clear goals, followed by tool evaluation, pilot testing, and governance policies.",
        "incorrectFeedback": "AI adoption frameworks typically start with defining goals, evaluating tools, piloting deployment, and then formalizing governance.",
        "xp": 10,
        "type": "ordering",
        "items": [
            "Establish oversight policy",
            "Evaluate tools",
            "Pilot deployment",
            "Define objectives"
        ],
        "correct_order": [
            3,
            1,
            2,
            0
        ]
    },
    {
        "original_id": 17,
        "question": "Arrange the progression of risk escalation in AI systems.",
        "correctFeedback": "Small inaccuracies can compound into recurring distortions, eventually reinforcing systemic bias and broader institutional effects.",
        "incorrectFeedback": "Risk escalation typically begins with isolated inaccuracies before evolving into repeated distortions and systemic bias.",
        "xp": 10,
        "type": "ordering",
        "items": [
            "Institutional impact",
            "Minor inaccuracy",
            "Systemic bias",
            "Repeated pattern distortion"
        ],
        "correct_order": [
            1,
            3,
            2,
            0
        ]
    },
    {
        "original_id": 18,
        "question": "Arrange the progression of decision reliance on AI systems.",
        "correctFeedback": "AI integration often progresses from suggestions to automation, eventually reaching high-stakes decisions and independent authority.",
        "incorrectFeedback": "Decision reliance typically evolves gradually: first suggestions, then automation, followed by higher-stakes decision roles.",
        "xp": 10,
        "type": "ordering",
        "items": [
            "Assistive suggestion",
            "Partial automation",
            "High-stakes automation",
            "Independent authority"
        ],
        "correct_order": [
            0,
            1,
            2,
            3
        ]
    },
    {
        "original_id": 19,
        "question": "Match each concept to its implication.",
        "correctFeedback": "Distribution shift refers to context mismatch, probabilistic sampling explains output variability, bias amplification reinforces trends, and oversight mitigates risk.",
        "incorrectFeedback": "Distribution shift occurs when deployment context differs from training data, probabilistic sampling introduces variability, and oversight helps reduce risk.",
        "xp": 10,
        "type": "matching",
        "pairs": [
            {
                "left": "Distribution shift",
                "right": "Data context mismatch"
            },
            {
                "left": "Probabilistic sampling",
                "right": "Output variability"
            },
            {
                "left": "Bias amplification",
                "right": "Reinforcement of skewed trends"
            },
            {
                "left": "Human oversight",
                "right": "Risk mitigation layer"
            }
        ],
        "shuffledRight": [
            "Reinforcement of skewed trends",
            "Risk mitigation layer",
            "Data context mismatch",
            "Output variability"
        ]
    },
    {
        "original_id": 20,
        "question": "Match the limitation with its classroom impact.",
        "correctFeedback": "Hallucinations create misleading references, lack of empathy limits pastoral understanding, pattern overgeneralization simplifies categories, and context loss misinterprets nuance.",
        "incorrectFeedback": "Hallucinations produce false references, pattern overgeneralization simplifies complexity, and missing context can distort nuanced topics.",
        "xp": 10,
        "type": "matching",
        "pairs": [
            {
                "left": "Hallucination",
                "right": "Misleading references"
            },
            {
                "left": "Lack of empathy",
                "right": "Inadequate pastoral support"
            },
            {
                "left": "Pattern overgeneralization",
                "right": "Simplistic categorization"
            },
            {
                "left": "Context loss",
                "right": "Misinterpretation of nuanced topics"
            }
        ],
        "shuffledRight": [
            "Inadequate pastoral support",
            "Simplistic categorization",
            "Misinterpretation of nuanced topics",
            "Misleading references"
        ]
    },
    {
        "original_id": 21,
        "question": "Match each AI feature with its technical basis.",
        "correctFeedback": "Personalization relies on behavioral data patterns, prediction uses probability estimation, text generation is based on sequence modeling, and clustering groups similar features.",
        "incorrectFeedback": "Personalization typically analyzes user behavior, prediction estimates probabilities, sequence modeling generates text, and clustering groups similar data features.",
        "xp": 10,
        "type": "matching",
        "pairs": [
            {
                "left": "Personalization",
                "right": "Behavioral data analysis"
            },
            {
                "left": "Prediction",
                "right": "Probability estimation"
            },
            {
                "left": "Text generation",
                "right": "Sequence modeling"
            },
            {
                "left": "Pattern clustering",
                "right": "Feature grouping"
            }
        ],
        "shuffledRight": [
            "Sequence modeling",
            "Feature grouping",
            "Probability estimation",
            "Behavioral data analysis"
        ]
    },
    {
        "original_id": 22,
        "question": "Match each AI risk with the most relevant mitigation strategy.",
        "correctFeedback": "Fabricated citations require verification, dataset imbalance needs diversified data, prompt ambiguity improves with clearer prompts, and overreliance requires human oversight.",
        "incorrectFeedback": "Verification addresses fabricated information, diversified datasets reduce imbalance, clearer prompts reduce ambiguity, and human intervention prevents overreliance.",
        "xp": 10,
        "type": "matching",
        "pairs": [
            {
                "left": "Fabricated citations",
                "right": "Source verification"
            },
            {
                "left": "Dataset imbalance",
                "right": "Data diversification"
            },
            {
                "left": "Prompt ambiguity",
                "right": "Clear prompt design"
            },
            {
                "left": "Overreliance",
                "right": "Human intervention"
            }
        ],
        "shuffledRight": [
            "Source verification",
            "Clear prompt design",
            "Human intervention",
            "Data diversification"
        ]
    },
    {
        "original_id": 23,
        "question": "Match each conceptual layer of AI systems.",
        "correctFeedback": "Training data provides examples, models store learned parameters, outputs generate responses, and oversight evaluates performance.",
        "incorrectFeedback": "AI systems rely on training examples, learned parameters inside the model, generated outputs, and oversight checkpoints for evaluation.",
        "xp": 10,
        "type": "matching",
        "pairs": [
            {
                "left": "Data",
                "right": "Training examples"
            },
            {
                "left": "Model",
                "right": "Learned parameter structure"
            },
            {
                "left": "Output",
                "right": "Generated response"
            },
            {
                "left": "Oversight",
                "right": "Evaluation checkpoint"
            }
        ],
        "shuffledRight": [
            "Generated response",
            "Evaluation checkpoint",
            "Training examples",
            "Learned parameter structure"
        ]
    },
    {
        "original_id": 24,
        "question": "Match each AI adoption stage with its priority.",
        "correctFeedback": "Exploration clarifies goals, pilots test ideas through limited experiments, scaling requires monitoring, and institutionalization demands governance structures.",
        "incorrectFeedback": "AI adoption typically begins with objective clarity, then pilot experimentation, followed by large-scale monitoring and formal governance.",
        "xp": 10,
        "type": "matching",
        "pairs": [
            {
                "left": "Exploration",
                "right": "Objective clarity"
            },
            {
                "left": "Pilot",
                "right": "Limited experimentation"
            },
            {
                "left": "Scaling",
                "right": "System-wide monitoring"
            },
            {
                "left": "Institutionalization",
                "right": "Governance framework"
            }
        ],
        "shuffledRight": [
            "Governance framework",
            "System-wide monitoring",
            "Objective clarity",
            "Limited experimentation"
        ]
    },
    {
        "original_id": 25,
        "question": "Fill in the blank",
        "correctFeedback": "Generative models produce outputs probabilistically by predicting likely word associations from training data.",
        "incorrectFeedback": "Generative AI predicts words using probability distributions learned from statistical associations in training data.",
        "xp": 10,
        "type": "fill_in_blanks",
        "text": "Generative AI responses are [probabilistic] because they rely on statistical [associations] rather than fixed outputs.",
        "wordBank": [
            "supervision",
            "associations",
            "probabilistic",
            "deterministic"
        ]
    },
    {
        "original_id": 26,
        "question": "Fill in the blank",
        "correctFeedback": "Distribution shift occurs when the data environment during deployment differs from the one used in training.",
        "incorrectFeedback": "Distribution shift describes the mismatch between training data conditions and real-world deployment contexts.",
        "xp": 10,
        "type": "fill_in_blanks",
        "text": "A model may fail in new environments due to [distribution] shift between training and deployment [contexts].",
        "wordBank": [
            "contexts",
            "sampling",
            "parameter",
            "distribution"
        ]
    },
    {
        "original_id": 27,
        "question": "Fill in the blank",
        "correctFeedback": "Bias amplification occurs when imbalanced historical patterns are repeated without oversight or correction.",
        "incorrectFeedback": "Historical imbalances in datasets can be reinforced by models when oversight or corrective review is absent.",
        "xp": 10,
        "type": "fill_in_blanks",
        "text": "Bias amplification occurs when historical [imbalances] in data are reproduced without adequate [oversight].",
        "wordBank": [
            "neutrality",
            "imbalances",
            "oversight",
            "compression"
        ]
    },
    {
        "original_id": 28,
        "question": "Fill in the blank",
        "correctFeedback": "Hallucinations occur when models extend learned patterns beyond factual evidence or verified sources.",
        "incorrectFeedback": "Generative models sometimes extend patterns learned from data even when supporting evidence is missing.",
        "xp": 10,
        "type": "fill_in_blanks",
        "text": "Hallucinations arise when the system extends learned [patterns] beyond verified [evidence].",
        "wordBank": [
            "interface",
            "evidence",
            "authority",
            "patterns"
        ]
    },
    {
        "original_id": 29,
        "question": "Fill in the blank",
        "correctFeedback": "Institutional governance structures combined with ongoing monitoring support responsible AI deployment.",
        "incorrectFeedback": "Governance frameworks and continuous monitoring help institutions manage risk and maintain responsible AI use.",
        "xp": 10,
        "type": "fill_in_blanks",
        "text": "Responsible AI integration requires institutional [governance] and continuous [monitoring].",
        "wordBank": [
            "automation",
            "delegation",
            "monitoring",
            "governance"
        ]
    },
    {
        "original_id": 30,
        "question": "Fill in the blank",
        "correctFeedback": "AI systems generate outputs based on patterns in data but do not possess independent intent or human judgment.",
        "incorrectFeedback": "Generative AI models do not have intent or judgment; they generate outputs from learned statistical patterns.",
        "xp": 10,
        "type": "fill_in_blanks",
        "text": "AI tools assist decision-making but lack independent [intent] or intrinsic [judgment].",
        "wordBank": [
            "speed",
            "judgment",
            "intent",
            "storage"
        ]
    }
];

const chapter1Level4Questions = [
    {
        "original_id": 1,
        "question": "An institution adopts AI grading to improve efficiency but does not disclose this to students. The most significant concern is:",
        "correctFeedback": "Transparency ensures that stakeholders understand when automated systems influence evaluation or decision-making processes.",
        "incorrectFeedback": "Responsible AI governance requires disclosure of system use, especially when automated systems influence assessment or outcomes.",
        "xp": 10,
        "type": "choice",
        "options": [
            {
                "text": "Reduced grading speed",
                "correct": false,
                "feedback": "Responsible AI governance requires disclosure of system use, especially when automated systems influence assessment or outcomes."
            },
            {
                "text": "Lack of transparency",
                "correct": true,
                "feedback": "Transparency ensures that stakeholders understand when automated systems influence evaluation or decision-making processes."
            },
            {
                "text": "Increased model complexity",
                "correct": false,
                "feedback": "Responsible AI governance requires disclosure of system use, especially when automated systems influence assessment or outcomes."
            },
            {
                "text": "Insufficient hardware optimization",
                "correct": false,
                "feedback": "Responsible AI governance requires disclosure of system use, especially when automated systems influence assessment or outcomes."
            }
        ]
    },
    {
        "original_id": 2,
        "question": "If AI systems are trained predominantly on historically biased datasets, what is the most systemic risk?",
        "correctFeedback": "When biased historical patterns are learned and scaled by AI systems, they can reinforce and magnify existing inequalities.",
        "incorrectFeedback": "AI models reproduce patterns found in their training data; biased datasets can therefore scale structural inequities.",
        "xp": 10,
        "type": "choice",
        "options": [
            {
                "text": "Reduced linguistic variation",
                "correct": false,
                "feedback": "AI models reproduce patterns found in their training data; biased datasets can therefore scale structural inequities."
            },
            {
                "text": "Amplification of structural inequities",
                "correct": true,
                "feedback": "When biased historical patterns are learned and scaled by AI systems, they can reinforce and magnify existing inequalities."
            },
            {
                "text": "Decreased predictive stability",
                "correct": false,
                "feedback": "AI models reproduce patterns found in their training data; biased datasets can therefore scale structural inequities."
            },
            {
                "text": "Overfitting to individual users and context",
                "correct": false,
                "feedback": "AI models reproduce patterns found in their training data; biased datasets can therefore scale structural inequities."
            }
        ]
    },
    {
        "original_id": 3,
        "question": "Which best explains why AI cannot independently assume institutional accountability?",
        "correctFeedback": "AI systems generate outputs through statistical inference and therefore cannot hold moral responsibility or institutional accountability.",
        "incorrectFeedback": "Accountability requires moral agency and responsibility, which statistical systems do not possess.",
        "xp": 10,
        "type": "choice",
        "options": [
            {
                "text": "It lacks regulatory compliance mechanisms",
                "correct": false,
                "feedback": "Accountability requires moral agency and responsibility, which statistical systems do not possess."
            },
            {
                "text": "It operates through statistical inference without moral agency",
                "correct": true,
                "feedback": "AI systems generate outputs through statistical inference and therefore cannot hold moral responsibility or institutional accountability."
            },
            {
                "text": "It cannot process complex datasets",
                "correct": false,
                "feedback": "Accountability requires moral agency and responsibility, which statistical systems do not possess."
            },
            {
                "text": "It lacks real-time adaptability",
                "correct": false,
                "feedback": "Accountability requires moral agency and responsibility, which statistical systems do not possess."
            }
        ]
    },
    {
        "original_id": 4,
        "question": "An AI tool consistently produces well-structured but shallow lesson plans. This most directly illustrates:",
        "correctFeedback": "Generative systems often prioritize fluency and structural coherence, which can produce polished outputs without deep conceptual reasoning.",
        "incorrectFeedback": "Generative AI frequently optimizes for fluency and structure, which can produce coherent outputs that lack depth.",
        "xp": 10,
        "type": "choice",
        "options": [
            {
                "text": "Computational inefficiency and limitations",
                "correct": false,
                "feedback": "Generative AI frequently optimizes for fluency and structure, which can produce coherent outputs that lack depth."
            },
            {
                "text": "Optimization toward surface coherence",
                "correct": true,
                "feedback": "Generative systems often prioritize fluency and structural coherence, which can produce polished outputs without deep conceptual reasoning."
            },
            {
                "text": "Dataset scarcity for training",
                "correct": false,
                "feedback": "Generative AI frequently optimizes for fluency and structure, which can produce coherent outputs that lack depth."
            },
            {
                "text": "Human misuse",
                "correct": false,
                "feedback": "Generative AI frequently optimizes for fluency and structure, which can produce coherent outputs that lack depth."
            }
        ]
    },
    {
        "original_id": 5,
        "question": "What distinguishes responsible AI augmentation from automation overreach?",
        "correctFeedback": "Responsible augmentation preserves human authority in decision-making while AI provides supportive analysis or recommendations.",
        "incorrectFeedback": "The key distinction between augmentation and overreach lies in whether humans retain final decision authority.",
        "xp": 10,
        "type": "choice",
        "options": [
            {
                "text": "Speed of AI model implementation",
                "correct": false,
                "feedback": "The key distinction between augmentation and overreach lies in whether humans retain final decision authority."
            },
            {
                "text": "Degree of human authority retained",
                "correct": true,
                "feedback": "Responsible augmentation preserves human authority in decision-making while AI provides supportive analysis or recommendations."
            },
            {
                "text": "Size of the dataset used for training",
                "correct": false,
                "feedback": "The key distinction between augmentation and overreach lies in whether humans retain final decision authority."
            },
            {
                "text": "Level of personalization involved",
                "correct": false,
                "feedback": "The key distinction between augmentation and overreach lies in whether humans retain final decision authority."
            }
        ]
    },
    {
        "original_id": 6,
        "question": "If faculty defer difficult academic decisions to AI to avoid controversy, the primary long-term risk is:",
        "correctFeedback": "Delegating difficult decisions to automated systems can gradually weaken professional accountability and institutional responsibility.",
        "incorrectFeedback": "When authority shifts to automated systems, professional responsibility and institutional accountability can erode.",
        "xp": 10,
        "type": "choice",
        "options": [
            {
                "text": "Reduced algorithmic diversity",
                "correct": false,
                "feedback": "When authority shifts to automated systems, professional responsibility and institutional accountability can erode."
            },
            {
                "text": "Erosion of professional responsibility",
                "correct": true,
                "feedback": "Delegating difficult decisions to automated systems can gradually weaken professional accountability and institutional responsibility."
            },
            {
                "text": "Increased system interpretability",
                "correct": false,
                "feedback": "When authority shifts to automated systems, professional responsibility and institutional accountability can erode."
            },
            {
                "text": "Model stagnation",
                "correct": false,
                "feedback": "When authority shifts to automated systems, professional responsibility and institutional accountability can erode."
            }
        ]
    },
    {
        "original_id": 7,
        "question": "Which governance principles strengthen responsible AI adoption?",
        "correctFeedback": "Responsible AI governance relies on transparency, clear oversight responsibilities, and periodic auditing of system performance.",
        "incorrectFeedback": "Effective governance frameworks include transparency, oversight roles, and regular evaluation of AI system outcomes.",
        "xp": 10,
        "type": "multiple_choice",
        "options": [
            {
                "text": "Transparency in usage",
                "correct": true
            },
            {
                "text": "Defined human oversight roles",
                "correct": true
            },
            {
                "text": "Full automation of evaluative authority",
                "correct": false
            },
            {
                "text": "Periodic performance auditing",
                "correct": true
            }
        ]
    },
    {
        "original_id": 8,
        "question": "Which scenarios reflect automation overreach?",
        "correctFeedback": "Automation overreach occurs when AI systems assume authority over high-stakes decisions without human review.",
        "incorrectFeedback": "Automation overreach typically involves delegating high-stakes authority to AI without meaningful human oversight.",
        "xp": 10,
        "type": "multiple_choice",
        "options": [
            {
                "text": "AI assigns final disciplinary action",
                "correct": true
            },
            {
                "text": "AI drafts preliminary feedback",
                "correct": false
            },
            {
                "text": "AI determines scholarship eligibility without review",
                "correct": true
            },
            {
                "text": "AI clusters student feedback themes",
                "correct": false
            }
        ]
    },
    {
        "original_id": 9,
        "question": "Which risks increase when AI is deployed at institutional scale?",
        "correctFeedback": "Large-scale deployment can replicate biases, standardize practices, and increase dependence on automated systems.",
        "incorrectFeedback": "Scaling AI systems can replicate biases, reduce diversity of approaches, and increase reliance on automation.",
        "xp": 10,
        "type": "multiple_choice",
        "options": [
            {
                "text": "Standardized bias replication",
                "correct": true
            },
            {
                "text": "Reduced diversity in pedagogical style",
                "correct": true
            },
            {
                "text": "Increased interpretability by default",
                "correct": false
            },
            {
                "text": "Overdependence on automated systems",
                "correct": true
            }
        ]
    },
    {
        "original_id": 10,
        "question": "Which conditions improve fairness in AI-supported systems?",
        "correctFeedback": "Fairness improves through diverse data, continuous bias evaluation, and clearly defined accountability structures.",
        "incorrectFeedback": "Fair AI systems depend on diverse datasets, regular bias assessment, and accountability mechanisms.",
        "xp": 10,
        "type": "multiple_choice",
        "options": [
            {
                "text": "Diverse training data",
                "correct": true
            },
            {
                "text": "Ongoing bias evaluation",
                "correct": true
            },
            {
                "text": "Blind deployment across contexts",
                "correct": false
            },
            {
                "text": "Clear accountability frameworks",
                "correct": true
            }
        ]
    },
    {
        "original_id": 11,
        "question": "Which reflect structural differences between AI reasoning and human reasoning?",
        "correctFeedback": "AI systems infer patterns from statistical correlations, while humans interpret situations using contextual judgment and lived experience.",
        "incorrectFeedback": "AI reasoning relies on statistical patterns, whereas human reasoning incorporates contextual understanding and real-world experience.",
        "xp": 10,
        "type": "multiple_choice",
        "options": [
            {
                "text": "AI relies on statistical correlation",
                "correct": true
            },
            {
                "text": "Humans apply contextual judgment",
                "correct": true
            },
            {
                "text": "AI possesses intrinsic ethical intent",
                "correct": false
            },
            {
                "text": "Humans integrate lived experience",
                "correct": true
            }
        ]
    },
    {
        "original_id": 12,
        "question": "Which are signals of overreliance on AI?",
        "correctFeedback": "Overreliance often appears when human review decreases, authority shifts to automated systems, and independent expertise declines.",
        "incorrectFeedback": "Signals of overreliance include reduced scrutiny, delegation of important decisions, and decreasing development of human expertise.",
        "xp": 10,
        "type": "multiple_choice",
        "options": [
            {
                "text": "Reduced critical review",
                "correct": true
            },
            {
                "text": "Delegation of high-stakes authority",
                "correct": true
            },
            {
                "text": "Transparent documentation",
                "correct": false
            },
            {
                "text": "Decline in independent expertise development",
                "correct": true
            }
        ]
    },
    {
        "original_id": 13,
        "question": "Arrange the steps of governance implementation logically.",
        "correctFeedback": "Governance begins with defining objectives, assigning oversight, deploying systems, and then auditing outcomes periodically.",
        "incorrectFeedback": "Effective governance starts with clear purpose, followed by oversight structures, deployment, and ongoing audits.",
        "xp": 10,
        "type": "ordering",
        "items": [
            "Define AI purpose",
            "Deploy system",
            "Establish oversight roles",
            "Conduct periodic audits"
        ],
        "correct_order": [
            0,
            2,
            1,
            3
        ]
    },
    {
        "original_id": 14,
        "question": "Arrange the escalation of ethical risk in AI systems.",
        "correctFeedback": "Small isolated errors can compound into repeated inaccuracies, eventually embedding systemic bias and producing institutional inequity.",
        "incorrectFeedback": "Risk escalation often begins with isolated errors, which can repeat, embed bias, and ultimately influence institutional outcomes.",
        "xp": 10,
        "type": "ordering",
        "items": [
            "Institution-wide inequity",
            "Repeated inaccuracy",
            "Isolated error",
            "Embedded systemic bias"
        ],
        "correct_order": [
            2,
            1,
            3,
            0
        ]
    },
    {
        "original_id": 15,
        "question": "Arrange the stages of responsible AI evaluation.",
        "correctFeedback": "Responsible evaluation identifies issues, investigates underlying data, applies corrections, and reassesses system impact.",
        "incorrectFeedback": "Evaluation cycles typically begin by identifying gaps, examining data sources, applying corrections, and reassessing outcomes.",
        "xp": 10,
        "type": "ordering",
        "items": [
            "Investigate data sources",
            "Identify performance gaps",
            "Reassess system impact",
            "Apply corrective measures"
        ],
        "correct_order": [
            1,
            0,
            3,
            2
        ]
    },
    {
        "original_id": 16,
        "question": "Arrange the spectrum of decision authority involving AI.",
        "correctFeedback": "Decision authority often evolves from human-led assistance toward increasing AI influence and eventually full autonomy.",
        "incorrectFeedback": "Authority progression typically moves from human-led assistance to shared decisions, then AI-dominant roles.",
        "xp": 10,
        "type": "ordering",
        "items": [
            "Shared evaluation",
            "Human-led with AI assistance",
            "Fully autonomous authority",
            "AI-dominant evaluation"
        ],
        "correct_order": [
            1,
            0,
            3,
            2
        ]
    },
    {
        "original_id": 17,
        "question": "Arrange the progression of AI misuse through reliance.",
        "correctFeedback": "Reliance often begins with convenience, reduces scrutiny over time, leads to authority delegation, and eventually diffuses accountability.",
        "incorrectFeedback": "Misuse progression often starts with convenience reliance, which reduces scrutiny and eventually shifts authority away from humans.",
        "xp": 10,
        "type": "ordering",
        "items": [
            "Accountability diffusion",
            "Reduced scrutiny",
            "Convenience reliance",
            "Delegated authority"
        ],
        "correct_order": [
            2,
            1,
            3,
            0
        ]
    },
    {
        "original_id": 18,
        "question": "Arrange the sequence for building trust in institutional AI systems.",
        "correctFeedback": "Trust-building begins with transparency, followed by validating system performance, engaging stakeholders, and formalizing policy.",
        "incorrectFeedback": "Trust frameworks often begin with transparency, followed by demonstrating performance and engaging stakeholders before policy formalization.",
        "xp": 10,
        "type": "ordering",
        "items": [
            "Performance validation",
            "Policy codification",
            "Stakeholder engagement",
            "Transparency disclosure"
        ],
        "correct_order": [
            3,
            0,
            2,
            1
        ]
    },
    {
        "original_id": 19,
        "question": "Match each governance principle to its function.",
        "correctFeedback": "Transparency reveals system use, oversight monitors behavior, audits evaluate outcomes, and accountability clarifies responsibility.",
        "incorrectFeedback": "Transparency reveals usage, oversight monitors systems, audits evaluate results periodically, and accountability defines responsibility.",
        "xp": 10,
        "type": "matching",
        "pairs": [
            {
                "left": "Transparency",
                "right": "Revealing AI usage"
            },
            {
                "left": "Oversight",
                "right": "Monitoring system behavior"
            },
            {
                "left": "Audit",
                "right": "Evaluating outcomes periodically"
            },
            {
                "left": "Accountability",
                "right": "Clarifying responsibility"
            }
        ],
        "shuffledRight": [
            "Evaluating outcomes periodically",
            "Clarifying responsibility",
            "Monitoring system behavior",
            "Revealing AI usage"
        ]
    },
    {
        "original_id": 20,
        "question": "Match each risk with its institutional effect.",
        "correctFeedback": "Bias amplification leads to inequitable outcomes, automation overreach erodes authority boundaries, hallucinations spread misinformation, and overstandardization reduces diversity.",
        "incorrectFeedback": "Bias amplification affects fairness, hallucinations spread misinformation, and overstandardization reduces diversity in practices.",
        "xp": 10,
        "type": "matching",
        "pairs": [
            {
                "left": "Bias amplification",
                "right": "Inequitable outcomes"
            },
            {
                "left": "Automation overreach",
                "right": "Erosion of authority boundaries"
            },
            {
                "left": "Hallucination",
                "right": "Misinformation propagation"
            },
            {
                "left": "Overstandardization",
                "right": "Reduced pedagogical diversity"
            }
        ],
        "shuffledRight": [
            "Inequitable outcomes",
            "Reduced pedagogical diversity",
            "Erosion of authority boundaries",
            "Misinformation propagation"
        ]
    },
    {
        "original_id": 21,
        "question": "Match each conceptual limitation with its implication.",
        "correctFeedback": "Probabilistic inference causes output variability, data dependency reflects reliance on historical patterns, lack of moral agency creates accountability gaps, and context fragility produces sensitivity to distribution changes.",
        "incorrectFeedback": "Probabilistic inference explains variability, data dependency ties models to historical patterns, and lack of moral agency prevents ethical accountability.",
        "xp": 10,
        "type": "matching",
        "pairs": [
            {
                "left": "Probabilistic inference",
                "right": "Variability in output"
            },
            {
                "left": "Data dependency",
                "right": "Reliance on historical patterns"
            },
            {
                "left": "Lack of moral agency",
                "right": "Ethical accountability gap"
            },
            {
                "left": "Context fragility",
                "right": "Distribution sensitivity"
            }
        ],
        "shuffledRight": [
            "Ethical accountability gap",
            "Variability in output",
            "Reliance on historical patterns",
            "Distribution sensitivity"
        ]
    },
    {
        "original_id": 22,
        "question": "Match each AI integration stage with its primary activity.",
        "correctFeedback": "Pilot phases test ideas through limited experiments, scaling expands deployment, institutional embedding formalizes governance, and monitoring performs continuous review.",
        "incorrectFeedback": "Pilots involve experimentation, scaling expands deployment, institutionalization formalizes governance, and monitoring maintains ongoing review.",
        "xp": 10,
        "type": "matching",
        "pairs": [
            {
                "left": "Pilot phase",
                "right": "Limited experimentation"
            },
            {
                "left": "Scaling phase",
                "right": "System-wide deployment"
            },
            {
                "left": "Institutional embedding",
                "right": "Governance formalization"
            },
            {
                "left": "Monitoring phase",
                "right": "Continuous review"
            }
        ],
        "shuffledRight": [
            "Continuous review",
            "System-wide deployment",
            "Limited experimentation",
            "Governance formalization"
        ]
    },
    {
        "original_id": 23,
        "question": "Match each misuse type with its consequence.",
        "correctFeedback": "Blind trust reduces scrutiny, delegated authority shifts responsibility away from humans, hidden deployment removes transparency, and data neglect prevents bias correction.",
        "incorrectFeedback": "Blind trust lowers scrutiny, hidden deployment removes transparency, and neglected datasets often prevent bias correction.",
        "xp": 10,
        "type": "matching",
        "pairs": [
            {
                "left": "Blind trust",
                "right": "Reduced scrutiny"
            },
            {
                "left": "Delegated authority",
                "right": "Abdication of responsibility"
            },
            {
                "left": "Hidden deployment",
                "right": "Lack of transparency"
            },
            {
                "left": "Data neglect",
                "right": "Absence of bias correction"
            }
        ],
        "shuffledRight": [
            "Absence of bias correction",
            "Abdication of responsibility",
            "Reduced scrutiny",
            "Lack of transparency"
        ]
    },
    {
        "original_id": 24,
        "question": "Match each AI strength with its potential risk trade-off.",
        "correctFeedback": "Efficiency can encourage shallow automation, consistency may replicate biases, personalization increases data exposure risks, and scalability can standardize practices.",
        "incorrectFeedback": "Efficiency sometimes favors shallow automation, consistency may reproduce biases, and large-scale systems can standardize practices.",
        "xp": 10,
        "type": "matching",
        "pairs": [
            {
                "left": "Efficiency",
                "right": "Risk of shallow automation"
            },
            {
                "left": "Consistency",
                "right": "Risk of bias scaling"
            },
            {
                "left": "Personalization",
                "right": "Risk of data overreach"
            },
            {
                "left": "Scalability",
                "right": "Risk of homogenization"
            }
        ],
        "shuffledRight": [
            "Risk of data overreach",
            "Risk of homogenization",
            "Risk of bias scaling",
            "Risk of shallow automation"
        ]
    },
    {
        "original_id": 25,
        "question": "Fill in the blank",
        "correctFeedback": "Governance frameworks depend on defined accountability structures and clearly assigned oversight roles.",
        "incorrectFeedback": "Institutional AI governance depends on accountability structures and defined oversight responsibilities.",
        "xp": 10,
        "type": "fill_in_blanks",
        "text": "Institutional AI governance requires clear [accountability] structures and defined [oversight] roles.",
        "wordBank": [
            "automation",
            "abstraction",
            "accountability",
            "oversight"
        ]
    },
    {
        "original_id": 26,
        "question": "Fill in the blank",
        "correctFeedback": "Automation overreach occurs when decision authority shifts to AI systems without human supervision.",
        "incorrectFeedback": "Automation overreach describes situations where AI assumes authority while human supervision is insufficient.",
        "xp": 10,
        "type": "fill_in_blanks",
        "text": "Automation overreach occurs when AI systems assume decision [authority] without adequate human [supervision].",
        "wordBank": [
            "efficiency",
            "authority",
            "supervision",
            "scaling"
        ]
    },
    {
        "original_id": 27,
        "question": "Fill in the blank",
        "correctFeedback": "Historical patterns embedded in data can become amplified when systems operate at institutional scale.",
        "incorrectFeedback": "When models reproduce historical patterns across large systems, bias can scale across institutions.",
        "xp": 10,
        "type": "fill_in_blanks",
        "text": "Bias amplification emerges when historical [patterns] are reproduced at institutional [scale].",
        "wordBank": [
            "scale",
            "patterns",
            "isolation",
            "neutrality"
        ]
    },
    {
        "original_id": 28,
        "question": "Fill in the blank",
        "correctFeedback": "AI systems generate outputs through computation and therefore lack intent or ethical responsibility.",
        "incorrectFeedback": "Ethical responsibility requires intent and agency, which computational systems do not possess.",
        "xp": 10,
        "type": "fill_in_blanks",
        "text": "AI lacks intrinsic [intent] and therefore cannot assume ethical [responsibility].",
        "wordBank": [
            "responsibility",
            "speed",
            "abstraction",
            "intent"
        ]
    },
    {
        "original_id": 29,
        "question": "Fill in the blank",
        "correctFeedback": "Transparent disclosure of AI usage builds institutional trust and increases stakeholder confidence.",
        "incorrectFeedback": "Transparency supports trust and confidence by revealing how AI systems influence decisions.",
        "xp": 10,
        "type": "fill_in_blanks",
        "text": "Transparency strengthens institutional [trust] and promotes stakeholder [confidence].",
        "wordBank": [
            "trust",
            "confidence",
            "automation",
            "compression"
        ]
    },
    {
        "original_id": 30,
        "question": "Fill in the blank",
        "correctFeedback": "Responsible AI adoption combines technological capability with human judgment in decision-making.",
        "incorrectFeedback": "Responsible integration maintains human judgment alongside technological capability rather than replacing it.",
        "xp": 10,
        "type": "fill_in_blanks",
        "text": "Responsible integration balances technological [capability] with human [judgment].",
        "wordBank": [
            "capability",
            "replacement",
            "acceleration",
            "judgment"
        ]
    }
];

const chapter1Level5Questions = [
    {
        "original_id": 1,
        "question": "An institution integrates AI into most evaluative workflows to enhance consistency. Over time, pedagogical diversity declines. What systemic dynamic best explains this outcome?",
        "correctFeedback": "Systems optimized for consistent measurable outputs often favor standardized patterns, which can gradually reduce variation in pedagogical approaches.",
        "incorrectFeedback": "Optimization for consistent measurable outputs can unintentionally standardize processes, reducing diversity in approaches over time.",
        "xp": 10,
        "type": "choice",
        "options": [
            {
                "text": "Model parameter instability and adaptability",
                "correct": false,
                "feedback": "Optimization for consistent measurable outputs can unintentionally standardize processes, reducing diversity in approaches over time."
            },
            {
                "text": "Optimization toward uniform measurable outputs",
                "correct": true,
                "feedback": "Systems optimized for consistent measurable outputs often favor standardized patterns, which can gradually reduce variation in pedagogical approaches."
            },
            {
                "text": "Hardware standardization constraints",
                "correct": false,
                "feedback": "Optimization for consistent measurable outputs can unintentionally standardize processes, reducing diversity in approaches over time."
            },
            {
                "text": "Reduced computational variance",
                "correct": false,
                "feedback": "Optimization for consistent measurable outputs can unintentionally standardize processes, reducing diversity in approaches over time."
            }
        ]
    },
    {
        "original_id": 2,
        "question": "Why can AI-generated insights feel authoritative even when epistemically weak?",
        "correctFeedback": "Generative systems are optimized to produce fluent and coherent language, which can make weak or unsupported claims appear convincing.",
        "incorrectFeedback": "Fluent language generation can create a strong sense of authority even when the underlying reasoning lacks verified evidence.",
        "xp": 10,
        "type": "choice",
        "options": [
            {
                "text": "They simulate multi-agent reasoning",
                "correct": false,
                "feedback": "Fluent language generation can create a strong sense of authority even when the underlying reasoning lacks verified evidence."
            },
            {
                "text": "They optimize linguistic coherence",
                "correct": true,
                "feedback": "Generative systems are optimized to produce fluent and coherent language, which can make weak or unsupported claims appear convincing."
            },
            {
                "text": "They continuously update factual databases",
                "correct": false,
                "feedback": "Fluent language generation can create a strong sense of authority even when the underlying reasoning lacks verified evidence."
            },
            {
                "text": "They prioritize conservative output selection",
                "correct": false,
                "feedback": "Fluent language generation can create a strong sense of authority even when the underlying reasoning lacks verified evidence."
            }
        ]
    },
    {
        "original_id": 3,
        "question": "Which scenario most clearly reflects epistemic overreliance on AI?",
        "correctFeedback": "Epistemic overreliance occurs when AI outputs are treated as authoritative without independent verification.",
        "incorrectFeedback": "Overreliance emerges when AI-generated conclusions are accepted without validation or independent evaluation.",
        "xp": 10,
        "type": "choice",
        "options": [
            {
                "text": "Using AI to brainstorm alternative viewpoints",
                "correct": false,
                "feedback": "Overreliance emerges when AI-generated conclusions are accepted without validation or independent evaluation."
            },
            {
                "text": "Accepting AI analysis without validation",
                "correct": true,
                "feedback": "Epistemic overreliance occurs when AI outputs are treated as authoritative without independent verification."
            },
            {
                "text": "Employing AI for administrative summarization",
                "correct": false,
                "feedback": "Overreliance emerges when AI-generated conclusions are accepted without validation or independent evaluation."
            },
            {
                "text": "Comparing AI output with peer feedback",
                "correct": false,
                "feedback": "Overreliance emerges when AI-generated conclusions are accepted without validation or independent evaluation."
            }
        ]
    },
    {
        "original_id": 4,
        "question": "If an AI system performs equitably in pilot testing but produces inequitable results after scaling, what is the most plausible explanation?",
        "correctFeedback": "Pilot tests often involve limited populations; scaling exposes models to more diverse contexts where disparities may emerge.",
        "incorrectFeedback": "Scaling introduces more diverse user populations and contexts, which can reveal inequities not visible during pilot testing.",
        "xp": 10,
        "type": "choice",
        "options": [
            {
                "text": "Increased user interface complexity",
                "correct": false,
                "feedback": "Scaling introduces more diverse user populations and contexts, which can reveal inequities not visible during pilot testing."
            },
            {
                "text": "Effects of population heterogeneity",
                "correct": true,
                "feedback": "Pilot tests often involve limited populations; scaling exposes models to more diverse contexts where disparities may emerge."
            },
            {
                "text": "Reduced backend server capacity",
                "correct": false,
                "feedback": "Scaling introduces more diverse user populations and contexts, which can reveal inequities not visible during pilot testing."
            },
            {
                "text": "Excessive variation in user prompts",
                "correct": false,
                "feedback": "Scaling introduces more diverse user populations and contexts, which can reveal inequities not visible during pilot testing."
            }
        ]
    },
    {
        "original_id": 5,
        "question": "Which principle best preserves human intellectual agency in AI-augmented environments?",
        "correctFeedback": "Treating AI outputs as provisional inputs maintains human evaluation and preserves intellectual agency in decision-making.",
        "incorrectFeedback": "Human intellectual agency is preserved when AI outputs are treated as inputs to evaluate rather than final conclusions.",
        "xp": 10,
        "type": "choice",
        "options": [
            {
                "text": "Maximizing automation in repetitive tasks",
                "correct": false,
                "feedback": "Human intellectual agency is preserved when AI outputs are treated as inputs to evaluate rather than final conclusions."
            },
            {
                "text": "Treating AI outputs as provisional inputs",
                "correct": true,
                "feedback": "Treating AI outputs as provisional inputs maintains human evaluation and preserves intellectual agency in decision-making."
            },
            {
                "text": "Delegating high-stakes reasoning to models",
                "correct": false,
                "feedback": "Human intellectual agency is preserved when AI outputs are treated as inputs to evaluate rather than final conclusions."
            },
            {
                "text": "Standardizing responses for efficiency",
                "correct": false,
                "feedback": "Human intellectual agency is preserved when AI outputs are treated as inputs to evaluate rather than final conclusions."
            }
        ]
    },
    {
        "original_id": 6,
        "question": "What fundamentally limits AI from possessing institutional accountability?",
        "correctFeedback": "Institutional accountability requires moral agency and social responsibility, which computational systems do not possess.",
        "incorrectFeedback": "Accountability depends on moral agency and social responsibility, which statistical systems lack.",
        "xp": 10,
        "type": "choice",
        "options": [
            {
                "text": "Lack of distributed data storage systems",
                "correct": false,
                "feedback": "Accountability depends on moral agency and social responsibility, which statistical systems lack."
            },
            {
                "text": "Lack of moral agency and social context",
                "correct": true,
                "feedback": "Institutional accountability requires moral agency and social responsibility, which computational systems do not possess."
            },
            {
                "text": "Limited model parameter capacity",
                "correct": false,
                "feedback": "Accountability depends on moral agency and social responsibility, which statistical systems lack."
            },
            {
                "text": "Restricted domain-specific training",
                "correct": false,
                "feedback": "Accountability depends on moral agency and social responsibility, which statistical systems lack."
            }
        ]
    },
    {
        "original_id": 7,
        "question": "Which long-term risks emerge from epistemic dependency on AI systems?",
        "correctFeedback": "Epistemic dependency can weaken critical reasoning, standardize analytical thinking, and reduce comfort with ambiguity.",
        "incorrectFeedback": "Long-term dependency on AI can reduce critical reasoning and encourage uniform analytical patterns.",
        "xp": 10,
        "type": "multiple_choice",
        "options": [
            {
                "text": "Decline in critical reasoning habits",
                "correct": true
            },
            {
                "text": "Increased reflective practice",
                "correct": false
            },
            {
                "text": "Homogenization of analytical approaches",
                "correct": true
            },
            {
                "text": "Diminished tolerance for ambiguity",
                "correct": true
            }
        ]
    },
    {
        "original_id": 8,
        "question": "Which factors contribute to systemic bias amplification at scale?",
        "correctFeedback": "Bias can scale when systems apply uniform models to diverse contexts, reinforce skewed feedback loops, or learn from imbalanced historical data.",
        "incorrectFeedback": "Bias amplification often results from imbalanced data, reinforcing feedback loops, and uniform deployment across varied contexts.",
        "xp": 10,
        "type": "multiple_choice",
        "options": [
            {
                "text": "Uniform deployment across diverse contexts",
                "correct": true
            },
            {
                "text": "Feedback loops reinforcing skewed predictions",
                "correct": true
            },
            {
                "text": "Ongoing bias audits",
                "correct": false
            },
            {
                "text": "Historical data imbalances",
                "correct": true
            }
        ]
    },
    {
        "original_id": 9,
        "question": "Which structural properties differentiate AI cognition from human cognition?",
        "correctFeedback": "AI systems rely on statistical inference and probabilistic prediction rather than lived experience or moral reasoning.",
        "incorrectFeedback": "AI cognition operates through statistical inference and probabilistic prediction rather than lived experience.",
        "xp": 10,
        "type": "multiple_choice",
        "options": [
            {
                "text": "Statistical inference mechanisms",
                "correct": true
            },
            {
                "text": "Contextual lived experience",
                "correct": false
            },
            {
                "text": "Embodied moral reasoning",
                "correct": false
            },
            {
                "text": "Probabilistic token prediction",
                "correct": true
            }
        ]
    },
    {
        "original_id": 10,
        "question": "Which institutional safeguards mitigate long-term automation risk?",
        "correctFeedback": "Automation risks are reduced through continuous capability evaluation, distributed accountability, and transparent documentation.",
        "incorrectFeedback": "Effective safeguards include capability reassessment, accountability frameworks, and transparent documentation.",
        "xp": 10,
        "type": "multiple_choice",
        "options": [
            {
                "text": "Periodic capability reassessment",
                "correct": true
            },
            {
                "text": "Distributed accountability frameworks",
                "correct": true
            },
            {
                "text": "Unquestioned reliance on output fluency",
                "correct": false
            },
            {
                "text": "Transparent documentation practices",
                "correct": true
            }
        ]
    },
    {
        "original_id": 11,
        "question": "Which dynamics may erode professional expertise over time?",
        "correctFeedback": "Professional expertise weakens when critical judgment tasks are consistently delegated to automated systems.",
        "incorrectFeedback": "Expertise erosion emerges when professionals repeatedly outsource evaluative reasoning and lose exposure to complex decision-making.",
        "xp": 10,
        "type": "multiple_choice",
        "options": [
            {
                "text": "Persistent delegation of evaluative reasoning",
                "correct": true
            },
            {
                "text": "Replacement of draft generation",
                "correct": false
            },
            {
                "text": "Reduced exposure to complex judgment tasks",
                "correct": true
            },
            {
                "text": "Structured reflective AI use",
                "correct": false
            }
        ]
    },
    {
        "original_id": 12,
        "question": "Which reflect mature AI literacy at leadership level?",
        "correctFeedback": "Advanced AI literacy involves understanding trade-offs, anticipating scale risks, and designing governance mechanisms.",
        "incorrectFeedback": "Leadership-level AI literacy centers on recognizing systemic trade-offs, scale-dependent risks, and building oversight structures.",
        "xp": 10,
        "type": "multiple_choice",
        "options": [
            {
                "text": "Understanding trade-offs between efficiency and equity",
                "correct": true
            },
            {
                "text": "Recognizing scale-dependent risk",
                "correct": true
            },
            {
                "text": "Assuming neutrality of training data",
                "correct": false
            },
            {
                "text": "Designing oversight architectures",
                "correct": true
            }
        ]
    },
    {
        "original_id": 13,
        "question": "Arrange systemic bias escalation:",
        "correctFeedback": "Bias often escalates from data imbalance to skewed predictions, which can reinforce themselves through feedback loops and eventually shape institutional outcomes.",
        "incorrectFeedback": "Systemic bias escalation begins with biased training data, produces skewed outputs, reinforces itself through feedback loops, and ultimately manifests as institutional inequity.",
        "xp": 10,
        "type": "ordering",
        "items": [
            "Skewed model output",
            "Institutionalized inequity",
            "Biased dataset",
            "Feedback loop reinforcement"
        ],
        "correct_order": [
            2,
            0,
            3,
            1
        ]
    },
    {
        "original_id": 14,
        "question": "Arrange strategic AI integration:",
        "correctFeedback": "Responsible AI integration begins with institutional values, followed by capability assessment, governance design, and monitored deployment.",
        "incorrectFeedback": "Strategic AI integration starts with defining institutional values before assessing capability, designing oversight, and deploying systems with monitoring.",
        "xp": 10,
        "type": "ordering",
        "items": [
            "Deploy with monitoring",
            "Define institutional values",
            "Assess technological capability",
            "Design oversight framework"
        ],
        "correct_order": [
            1,
            2,
            3,
            0
        ]
    },
    {
        "original_id": 15,
        "question": "Arrange epistemic evaluation of AI insight:",
        "correctFeedback": "Evaluating AI insights requires moving from coherence checks to evidence validation, contextual relevance, and finally determining decision weight.",
        "incorrectFeedback": "Epistemic evaluation progresses from checking logical coherence to verifying evidence, assessing contextual relevance, and then deciding how much weight the insight deserves.",
        "xp": 10,
        "type": "ordering",
        "items": [
            "Assess contextual relevance",
            "Verify evidence grounding",
            "Determine decision weight",
            "Examine claim coherence"
        ],
        "correct_order": [
            3,
            1,
            0,
            2
        ]
    },
    {
        "original_id": 16,
        "question": "Arrange progression of overreliance:",
        "correctFeedback": "Overreliance typically evolves from convenience-based use to reduced scrutiny, then delegated authority, and eventually loss of expertise.",
        "incorrectFeedback": "Automation overreliance develops gradually: convenience leads to reduced scrutiny, authority shifts to the system, and long-term expertise declines.",
        "xp": 10,
        "type": "ordering",
        "items": [
            "Delegated authority",
            "Reduced scrutiny",
            "Erosion of expertise",
            "Convenience use"
        ],
        "correct_order": [
            3,
            1,
            0,
            2
        ]
    },
    {
        "original_id": 17,
        "question": "Arrange institutional trust-building:",
        "correctFeedback": "Institutional trust grows through transparency, stakeholder engagement, independent evaluation, and continuous policy improvement.",
        "incorrectFeedback": "Trust-building begins with transparency, followed by stakeholder consultation, independent auditing, and refinement of institutional policies.",
        "xp": 10,
        "type": "ordering",
        "items": [
            "Policy refinement",
            "Public disclosure",
            "Stakeholder consultation",
            "Independent audit"
        ],
        "correct_order": [
            1,
            2,
            3,
            0
        ]
    },
    {
        "original_id": 18,
        "question": "Arrange human\u2013AI decision layering:",
        "correctFeedback": "Human\u2013AI collaboration works best when AI generates analysis while humans evaluate reasoning, apply context, and retain final authority.",
        "incorrectFeedback": "In effective human\u2013AI systems, AI provides analysis first, humans evaluate reasoning, interpret contextual implications, and retain final decision authority.",
        "xp": 10,
        "type": "ordering",
        "items": [
            "Human evaluates reasoning",
            "Final decision authority exercised",
            "AI generates analysis",
            "Human contextualizes implications"
        ],
        "correct_order": [
            2,
            0,
            3,
            1
        ]
    },
    {
        "original_id": 19,
        "question": "Match systemic risk with mechanism:",
        "correctFeedback": "Systemic risks emerge from identifiable mechanisms such as repetition-based bias reinforcement and unchecked automation delegation.",
        "incorrectFeedback": "Bias scaling arises from repeated skewed outputs, epistemic dependency reduces independent reasoning, automation overreach involves delegation without oversight, and accountability diffusion blurs responsibility.",
        "xp": 10,
        "type": "matching",
        "pairs": [
            {
                "left": "Bias scaling",
                "right": "Reinforced skew through repetition"
            },
            {
                "left": "Epistemic dependency",
                "right": "Reduced independent reasoning"
            },
            {
                "left": "Automation overreach",
                "right": "Delegation without oversight"
            },
            {
                "left": "Accountability diffusion",
                "right": "Ambiguous responsibility boundaries"
            }
        ],
        "shuffledRight": [
            "Ambiguous responsibility boundaries",
            "Reduced independent reasoning",
            "Delegation without oversight",
            "Reinforced skew through repetition"
        ]
    },
    {
        "original_id": 20,
        "question": "Match leadership principle with outcome:",
        "correctFeedback": "Strategic governance links transparency with trust, oversight with risk containment, auditing with validation, and context-aware deployment with reliability.",
        "incorrectFeedback": "Transparency strengthens trust, oversight architectures contain risk, capability audits validate system performance, and context-sensitive deployment reduces failures across environments.",
        "xp": 10,
        "type": "matching",
        "pairs": [
            {
                "left": "Transparency",
                "right": "Trust enhancement"
            },
            {
                "left": "Oversight architecture",
                "right": "Risk containment"
            },
            {
                "left": "Capability auditing",
                "right": "Performance validation"
            },
            {
                "left": "Context-sensitive deployment",
                "right": "Reduced cross-context failure"
            }
        ],
        "shuffledRight": [
            "Reduced cross-context failure",
            "Risk containment",
            "Performance validation",
            "Trust enhancement"
        ]
    },
    {
        "original_id": 21,
        "question": "Match epistemic distinction:",
        "correctFeedback": "AI excels at statistical fluency and pattern generalization, while humans provide moral agency and contextual judgment.",
        "incorrectFeedback": "Statistical fluency and pattern generalization describe AI mechanisms, while moral agency and contextual judgment remain human cognitive strengths.",
        "xp": 10,
        "type": "matching",
        "pairs": [
            {
                "left": "Statistical fluency",
                "right": "AI text coherence"
            },
            {
                "left": "Moral agency",
                "right": "Human ethical capacity"
            },
            {
                "left": "Pattern generalization",
                "right": "AI predictive method"
            },
            {
                "left": "Contextual judgment",
                "right": "Human reasoning strength"
            }
        ],
        "shuffledRight": [
            "Human ethical capacity",
            "AI text coherence",
            "Human reasoning strength",
            "AI predictive method"
        ]
    },
    {
        "original_id": 22,
        "question": "Match failure mode with institutional impact:",
        "correctFeedback": "Each technical failure mode produces a distinct institutional consequence, from misinformation spread to weakened professional competence.",
        "incorrectFeedback": "Hallucinations spread misinformation, feedback loops reinforce hidden inequities, hidden automation damages trust, and expertise erosion weakens professional competence.",
        "xp": 10,
        "type": "matching",
        "pairs": [
            {
                "left": "Hallucination",
                "right": "Misinformation propagation"
            },
            {
                "left": "Feedback loop bias",
                "right": "Undetected inequity"
            },
            {
                "left": "Hidden automation",
                "right": "Loss of stakeholder trust"
            },
            {
                "left": "Expertise erosion",
                "right": "Reduced professional competence"
            }
        ],
        "shuffledRight": [
            "Loss of stakeholder trust",
            "Misinformation propagation",
            "Reduced professional competence",
            "Undetected inequity"
        ]
    },
    {
        "original_id": 23,
        "question": "Match conceptual boundary:",
        "correctFeedback": "Narrow AI remains task-bound, probabilistic outputs introduce variability, and accountability ultimately resides within human governance structures.",
        "incorrectFeedback": "Narrow AI describes task-limited capability, probabilistic outputs produce variability, moral accountability remains human, and governance defines organizational oversight.",
        "xp": 10,
        "type": "matching",
        "pairs": [
            {
                "left": "Narrow AI",
                "right": "Task-bound capability"
            },
            {
                "left": "Moral accountability",
                "right": "Human domain"
            },
            {
                "left": "Probabilistic output",
                "right": "System variability"
            },
            {
                "left": "Institutional governance",
                "right": "Organizational structure"
            }
        ],
        "shuffledRight": [
            "Task-bound capability",
            "System variability",
            "Human domain",
            "Organizational structure"
        ]
    },
    {
        "original_id": 24,
        "question": "Match strategic tension:",
        "correctFeedback": "Strategic AI governance requires navigating tensions between efficiency and fairness, scale and context, automation and human authority.",
        "incorrectFeedback": "Efficiency conflicts with fairness, scaling systems risks bias amplification across contexts, automation challenges human authority, and innovation pressures institutional stability.",
        "xp": 10,
        "type": "matching",
        "pairs": [
            {
                "left": "Efficiency vs Equity",
                "right": "Fairness trade-off"
            },
            {
                "left": "Scale vs Context",
                "right": "Bias amplification risk"
            },
            {
                "left": "Automation vs Agency",
                "right": "Decision authority boundary"
            },
            {
                "left": "Innovation vs Stability",
                "right": "Institutional resilience challenge"
            }
        ],
        "shuffledRight": [
            "Bias amplification risk",
            "Institutional resilience challenge",
            "Decision authority boundary",
            "Fairness trade-off"
        ]
    },
    {
        "original_id": 25,
        "question": "Fill in the blank",
        "correctFeedback": "Local bias can scale into systemic inequity when automated decisions are widely deployed.",
        "incorrectFeedback": "Scaling automated systems can amplify small data biases into widespread institutional inequities.",
        "xp": 10,
        "type": "fill_in_blanks",
        "text": "At scale, AI deployment can transform localized [bias] into systemic [inequity].",
        "wordBank": [
            "neutrality",
            "inequity",
            "abstraction",
            "bias"
        ]
    },
    {
        "original_id": 26,
        "question": "Fill in the blank",
        "correctFeedback": "Overreliance on automated reasoning weakens independent judgment and gradually erodes professional expertise.",
        "incorrectFeedback": "Delegating reasoning to automated systems reduces independent judgment and eventually weakens professional expertise.",
        "xp": 10,
        "type": "fill_in_blanks",
        "text": "Epistemic overreliance reduces independent [judgment] and weakens professional [expertise].",
        "wordBank": [
            "expertise",
            "judgment",
            "scalability",
            "acceleration"
        ]
    },
    {
        "original_id": 27,
        "question": "Fill in the blank",
        "correctFeedback": "AI produces coherent language patterns but lacks moral agency and responsibility.",
        "incorrectFeedback": "Language models generate coherent text through statistical patterns but do not possess moral agency.",
        "xp": 10,
        "type": "fill_in_blanks",
        "text": "AI systems generate linguistically [coherent] outputs without possessing moral [agency].",
        "wordBank": [
            "authority",
            "storage",
            "agency",
            "coherent"
        ]
    },
    {
        "original_id": 28,
        "question": "Fill in the blank",
        "correctFeedback": "Effective AI governance aligns technological capability with clear accountability structures.",
        "incorrectFeedback": "Technological capability must be paired with institutional accountability to ensure responsible AI deployment.",
        "xp": 10,
        "type": "fill_in_blanks",
        "text": "Responsible leadership balances technological [capability] with institutional [accountability].",
        "wordBank": [
            "delegation",
            "accountability",
            "capability",
            "expansion"
        ]
    },
    {
        "original_id": 29,
        "question": "Fill in the blank",
        "correctFeedback": "Systems designed for one context may produce inequitable outcomes when applied uniformly across different environments.",
        "incorrectFeedback": "Uniform systems often create contextual mismatches that can lead to inequitable outcomes.",
        "xp": 10,
        "type": "fill_in_blanks",
        "text": "Uniform deployment across diverse contexts increases the risk of contextual [mismatch] and outcome [inequity].",
        "wordBank": [
            "compression",
            "mismatch",
            "neutrality",
            "inequity"
        ]
    },
    {
        "original_id": 30,
        "question": "Fill in the blank",
        "correctFeedback": "Long-term AI sustainability depends on monitoring system behavior and adapting governance structures.",
        "incorrectFeedback": "Responsible AI systems require ongoing monitoring and adaptive governance to manage evolving risks.",
        "xp": 10,
        "type": "fill_in_blanks",
        "text": "Sustainable AI integration requires continuous [monitoring] and adaptive [governance].",
        "wordBank": [
            "abstraction",
            "monitoring",
            "governance",
            "automation"
        ]
    }
];

const chapter2Level1Questions = [
    {
        "type": "choice",
        "question": "A university plans to use AI tutors. What's most responsible?",
        "options": [
            {
                "text": "Replace faculty with AI",
                "correct": false,
                "feedback": "AI works best with human expertise."
            },
            {
                "text": "Use AI to support educators",
                "correct": true,
                "feedback": "Exactly! AI enhances teaching."
            }
        ],
        "xp": 10,
        "original_id": "chapter2_0_0"
    },
    {
        "type": "task",
        "prompt": "Name one way AI can help a teacher in the classroom.",
        "placeholder": "Type here...",
        "xp": 10,
        "original_id": "chapter2_0_1"
    },
    {
        "type": "choice",
        "question": "True or False: Only CS teachers need to learn about AI.",
        "options": [
            {
                "text": "True",
                "correct": false,
                "feedback": "AI impacts all subjects."
            },
            {
                "text": "False",
                "correct": true,
                "feedback": "Correct! AI affects everyone."
            }
        ],
        "xp": 10,
        "original_id": "chapter2_0_2"
    },
    {
        "type": "choice",
        "question": "Which is a benefit of AI in grading?",
        "options": [
            {
                "text": "It removes the need for teachers",
                "correct": false,
                "feedback": "Teachers are still needed for nuance."
            },
            {
                "text": "It saves time on repetitive tasks",
                "correct": true,
                "feedback": "Yes, efficiency is key."
            }
        ],
        "xp": 10,
        "original_id": "chapter2_0_3"
    },
    {
        "type": "choice",
        "question": "A university plans to use AI tutors. What's most responsible?",
        "options": [
            {
                "text": "Replace faculty with AI",
                "correct": false,
                "feedback": "AI works best with human expertise."
            },
            {
                "text": "Use AI to support educators",
                "correct": true,
                "feedback": "Exactly! AI enhances teaching."
            }
        ],
        "xp": 10,
        "original_id": "chapter2_0_4"
    },
    {
        "type": "task",
        "prompt": "Name one way AI can help a teacher in the classroom. (Reflect again)",
        "placeholder": "Type here...",
        "xp": 10,
        "original_id": "chapter2_0_5"
    },
    {
        "type": "choice",
        "question": "True or False: Only CS teachers need to learn about AI.",
        "options": [
            {
                "text": "True",
                "correct": false,
                "feedback": "AI impacts all subjects."
            },
            {
                "text": "False",
                "correct": true,
                "feedback": "Correct! AI affects everyone."
            }
        ],
        "xp": 10,
        "original_id": "chapter2_0_6"
    },
    {
        "type": "choice",
        "question": "Which is a benefit of AI in grading?",
        "options": [
            {
                "text": "It removes the need for teachers",
                "correct": false,
                "feedback": "Teachers are still needed for nuance."
            },
            {
                "text": "It saves time on repetitive tasks",
                "correct": true,
                "feedback": "Yes, efficiency is key."
            }
        ],
        "xp": 10,
        "original_id": "chapter2_0_7"
    },
    {
        "type": "choice",
        "question": "A university plans to use AI tutors. What's most responsible?",
        "options": [
            {
                "text": "Replace faculty with AI",
                "correct": false,
                "feedback": "AI works best with human expertise."
            },
            {
                "text": "Use AI to support educators",
                "correct": true,
                "feedback": "Exactly! AI enhances teaching."
            }
        ],
        "xp": 10,
        "original_id": "chapter2_0_8"
    },
    {
        "type": "task",
        "prompt": "Name one way AI can help a teacher in the classroom. (Reflect again)",
        "placeholder": "Type here...",
        "xp": 10,
        "original_id": "chapter2_0_9"
    }
];

const chapter2Level2Questions = [
    {
        "type": "choice",
        "question": "A university plans to use AI tutors. What's most responsible?",
        "options": [
            {
                "text": "Replace faculty with AI",
                "correct": false,
                "feedback": "AI works best with human expertise."
            },
            {
                "text": "Use AI to support educators",
                "correct": true,
                "feedback": "Exactly! AI enhances teaching."
            }
        ],
        "xp": 20,
        "original_id": "chapter2_1_0"
    },
    {
        "type": "task",
        "prompt": "Name one way AI can help a teacher in the classroom.",
        "placeholder": "Type here...",
        "xp": 20,
        "original_id": "chapter2_1_1"
    },
    {
        "type": "choice",
        "question": "True or False: Only CS teachers need to learn about AI.",
        "options": [
            {
                "text": "True",
                "correct": false,
                "feedback": "AI impacts all subjects."
            },
            {
                "text": "False",
                "correct": true,
                "feedback": "Correct! AI affects everyone."
            }
        ],
        "xp": 20,
        "original_id": "chapter2_1_2"
    },
    {
        "type": "choice",
        "question": "Which is a benefit of AI in grading?",
        "options": [
            {
                "text": "It removes the need for teachers",
                "correct": false,
                "feedback": "Teachers are still needed for nuance."
            },
            {
                "text": "It saves time on repetitive tasks",
                "correct": true,
                "feedback": "Yes, efficiency is key."
            }
        ],
        "xp": 20,
        "original_id": "chapter2_1_3"
    },
    {
        "type": "choice",
        "question": "A university plans to use AI tutors. What's most responsible?",
        "options": [
            {
                "text": "Replace faculty with AI",
                "correct": false,
                "feedback": "AI works best with human expertise."
            },
            {
                "text": "Use AI to support educators",
                "correct": true,
                "feedback": "Exactly! AI enhances teaching."
            }
        ],
        "xp": 20,
        "original_id": "chapter2_1_4"
    },
    {
        "type": "task",
        "prompt": "Name one way AI can help a teacher in the classroom. (Reflect again)",
        "placeholder": "Type here...",
        "xp": 20,
        "original_id": "chapter2_1_5"
    },
    {
        "type": "choice",
        "question": "True or False: Only CS teachers need to learn about AI.",
        "options": [
            {
                "text": "True",
                "correct": false,
                "feedback": "AI impacts all subjects."
            },
            {
                "text": "False",
                "correct": true,
                "feedback": "Correct! AI affects everyone."
            }
        ],
        "xp": 20,
        "original_id": "chapter2_1_6"
    },
    {
        "type": "choice",
        "question": "Which is a benefit of AI in grading?",
        "options": [
            {
                "text": "It removes the need for teachers",
                "correct": false,
                "feedback": "Teachers are still needed for nuance."
            },
            {
                "text": "It saves time on repetitive tasks",
                "correct": true,
                "feedback": "Yes, efficiency is key."
            }
        ],
        "xp": 20,
        "original_id": "chapter2_1_7"
    },
    {
        "type": "choice",
        "question": "A university plans to use AI tutors. What's most responsible?",
        "options": [
            {
                "text": "Replace faculty with AI",
                "correct": false,
                "feedback": "AI works best with human expertise."
            },
            {
                "text": "Use AI to support educators",
                "correct": true,
                "feedback": "Exactly! AI enhances teaching."
            }
        ],
        "xp": 20,
        "original_id": "chapter2_1_8"
    },
    {
        "type": "task",
        "prompt": "Name one way AI can help a teacher in the classroom. (Reflect again)",
        "placeholder": "Type here...",
        "xp": 20,
        "original_id": "chapter2_1_9"
    }
];

const chapter2Level3Questions = [
    {
        "type": "choice",
        "question": "A university plans to use AI tutors. What's most responsible?",
        "options": [
            {
                "text": "Replace faculty with AI",
                "correct": false,
                "feedback": "AI works best with human expertise."
            },
            {
                "text": "Use AI to support educators",
                "correct": true,
                "feedback": "Exactly! AI enhances teaching."
            }
        ],
        "xp": 30,
        "original_id": "chapter2_2_0"
    },
    {
        "type": "task",
        "prompt": "Name one way AI can help a teacher in the classroom.",
        "placeholder": "Type here...",
        "xp": 30,
        "original_id": "chapter2_2_1"
    },
    {
        "type": "choice",
        "question": "True or False: Only CS teachers need to learn about AI.",
        "options": [
            {
                "text": "True",
                "correct": false,
                "feedback": "AI impacts all subjects."
            },
            {
                "text": "False",
                "correct": true,
                "feedback": "Correct! AI affects everyone."
            }
        ],
        "xp": 30,
        "original_id": "chapter2_2_2"
    },
    {
        "type": "choice",
        "question": "Which is a benefit of AI in grading?",
        "options": [
            {
                "text": "It removes the need for teachers",
                "correct": false,
                "feedback": "Teachers are still needed for nuance."
            },
            {
                "text": "It saves time on repetitive tasks",
                "correct": true,
                "feedback": "Yes, efficiency is key."
            }
        ],
        "xp": 30,
        "original_id": "chapter2_2_3"
    },
    {
        "type": "choice",
        "question": "A university plans to use AI tutors. What's most responsible?",
        "options": [
            {
                "text": "Replace faculty with AI",
                "correct": false,
                "feedback": "AI works best with human expertise."
            },
            {
                "text": "Use AI to support educators",
                "correct": true,
                "feedback": "Exactly! AI enhances teaching."
            }
        ],
        "xp": 30,
        "original_id": "chapter2_2_4"
    },
    {
        "type": "task",
        "prompt": "Name one way AI can help a teacher in the classroom. (Reflect again)",
        "placeholder": "Type here...",
        "xp": 30,
        "original_id": "chapter2_2_5"
    },
    {
        "type": "choice",
        "question": "True or False: Only CS teachers need to learn about AI.",
        "options": [
            {
                "text": "True",
                "correct": false,
                "feedback": "AI impacts all subjects."
            },
            {
                "text": "False",
                "correct": true,
                "feedback": "Correct! AI affects everyone."
            }
        ],
        "xp": 30,
        "original_id": "chapter2_2_6"
    },
    {
        "type": "choice",
        "question": "Which is a benefit of AI in grading?",
        "options": [
            {
                "text": "It removes the need for teachers",
                "correct": false,
                "feedback": "Teachers are still needed for nuance."
            },
            {
                "text": "It saves time on repetitive tasks",
                "correct": true,
                "feedback": "Yes, efficiency is key."
            }
        ],
        "xp": 30,
        "original_id": "chapter2_2_7"
    },
    {
        "type": "choice",
        "question": "A university plans to use AI tutors. What's most responsible?",
        "options": [
            {
                "text": "Replace faculty with AI",
                "correct": false,
                "feedback": "AI works best with human expertise."
            },
            {
                "text": "Use AI to support educators",
                "correct": true,
                "feedback": "Exactly! AI enhances teaching."
            }
        ],
        "xp": 30,
        "original_id": "chapter2_2_8"
    },
    {
        "type": "task",
        "prompt": "Name one way AI can help a teacher in the classroom. (Reflect again)",
        "placeholder": "Type here...",
        "xp": 30,
        "original_id": "chapter2_2_9"
    }
];

const chapter2Level4Questions = [
    {
        "type": "choice",
        "question": "A university plans to use AI tutors. What's most responsible?",
        "options": [
            {
                "text": "Replace faculty with AI",
                "correct": false,
                "feedback": "AI works best with human expertise."
            },
            {
                "text": "Use AI to support educators",
                "correct": true,
                "feedback": "Exactly! AI enhances teaching."
            }
        ],
        "xp": 40,
        "original_id": "chapter2_3_0"
    },
    {
        "type": "task",
        "prompt": "Name one way AI can help a teacher in the classroom.",
        "placeholder": "Type here...",
        "xp": 40,
        "original_id": "chapter2_3_1"
    },
    {
        "type": "choice",
        "question": "True or False: Only CS teachers need to learn about AI.",
        "options": [
            {
                "text": "True",
                "correct": false,
                "feedback": "AI impacts all subjects."
            },
            {
                "text": "False",
                "correct": true,
                "feedback": "Correct! AI affects everyone."
            }
        ],
        "xp": 40,
        "original_id": "chapter2_3_2"
    },
    {
        "type": "choice",
        "question": "Which is a benefit of AI in grading?",
        "options": [
            {
                "text": "It removes the need for teachers",
                "correct": false,
                "feedback": "Teachers are still needed for nuance."
            },
            {
                "text": "It saves time on repetitive tasks",
                "correct": true,
                "feedback": "Yes, efficiency is key."
            }
        ],
        "xp": 40,
        "original_id": "chapter2_3_3"
    },
    {
        "type": "choice",
        "question": "A university plans to use AI tutors. What's most responsible?",
        "options": [
            {
                "text": "Replace faculty with AI",
                "correct": false,
                "feedback": "AI works best with human expertise."
            },
            {
                "text": "Use AI to support educators",
                "correct": true,
                "feedback": "Exactly! AI enhances teaching."
            }
        ],
        "xp": 40,
        "original_id": "chapter2_3_4"
    },
    {
        "type": "task",
        "prompt": "Name one way AI can help a teacher in the classroom. (Reflect again)",
        "placeholder": "Type here...",
        "xp": 40,
        "original_id": "chapter2_3_5"
    },
    {
        "type": "choice",
        "question": "True or False: Only CS teachers need to learn about AI.",
        "options": [
            {
                "text": "True",
                "correct": false,
                "feedback": "AI impacts all subjects."
            },
            {
                "text": "False",
                "correct": true,
                "feedback": "Correct! AI affects everyone."
            }
        ],
        "xp": 40,
        "original_id": "chapter2_3_6"
    },
    {
        "type": "choice",
        "question": "Which is a benefit of AI in grading?",
        "options": [
            {
                "text": "It removes the need for teachers",
                "correct": false,
                "feedback": "Teachers are still needed for nuance."
            },
            {
                "text": "It saves time on repetitive tasks",
                "correct": true,
                "feedback": "Yes, efficiency is key."
            }
        ],
        "xp": 40,
        "original_id": "chapter2_3_7"
    },
    {
        "type": "choice",
        "question": "A university plans to use AI tutors. What's most responsible?",
        "options": [
            {
                "text": "Replace faculty with AI",
                "correct": false,
                "feedback": "AI works best with human expertise."
            },
            {
                "text": "Use AI to support educators",
                "correct": true,
                "feedback": "Exactly! AI enhances teaching."
            }
        ],
        "xp": 40,
        "original_id": "chapter2_3_8"
    },
    {
        "type": "task",
        "prompt": "Name one way AI can help a teacher in the classroom. (Reflect again)",
        "placeholder": "Type here...",
        "xp": 40,
        "original_id": "chapter2_3_9"
    }
];

const chapter2Level5Questions = [
    {
        "type": "choice",
        "question": "A university plans to use AI tutors. What's most responsible?",
        "options": [
            {
                "text": "Replace faculty with AI",
                "correct": false,
                "feedback": "AI works best with human expertise."
            },
            {
                "text": "Use AI to support educators",
                "correct": true,
                "feedback": "Exactly! AI enhances teaching."
            }
        ],
        "xp": 50,
        "original_id": "chapter2_4_0"
    },
    {
        "type": "task",
        "prompt": "Name one way AI can help a teacher in the classroom.",
        "placeholder": "Type here...",
        "xp": 50,
        "original_id": "chapter2_4_1"
    },
    {
        "type": "choice",
        "question": "True or False: Only CS teachers need to learn about AI.",
        "options": [
            {
                "text": "True",
                "correct": false,
                "feedback": "AI impacts all subjects."
            },
            {
                "text": "False",
                "correct": true,
                "feedback": "Correct! AI affects everyone."
            }
        ],
        "xp": 50,
        "original_id": "chapter2_4_2"
    },
    {
        "type": "choice",
        "question": "Which is a benefit of AI in grading?",
        "options": [
            {
                "text": "It removes the need for teachers",
                "correct": false,
                "feedback": "Teachers are still needed for nuance."
            },
            {
                "text": "It saves time on repetitive tasks",
                "correct": true,
                "feedback": "Yes, efficiency is key."
            }
        ],
        "xp": 50,
        "original_id": "chapter2_4_3"
    },
    {
        "type": "choice",
        "question": "A university plans to use AI tutors. What's most responsible?",
        "options": [
            {
                "text": "Replace faculty with AI",
                "correct": false,
                "feedback": "AI works best with human expertise."
            },
            {
                "text": "Use AI to support educators",
                "correct": true,
                "feedback": "Exactly! AI enhances teaching."
            }
        ],
        "xp": 50,
        "original_id": "chapter2_4_4"
    },
    {
        "type": "task",
        "prompt": "Name one way AI can help a teacher in the classroom. (Reflect again)",
        "placeholder": "Type here...",
        "xp": 50,
        "original_id": "chapter2_4_5"
    },
    {
        "type": "choice",
        "question": "True or False: Only CS teachers need to learn about AI.",
        "options": [
            {
                "text": "True",
                "correct": false,
                "feedback": "AI impacts all subjects."
            },
            {
                "text": "False",
                "correct": true,
                "feedback": "Correct! AI affects everyone."
            }
        ],
        "xp": 50,
        "original_id": "chapter2_4_6"
    },
    {
        "type": "choice",
        "question": "Which is a benefit of AI in grading?",
        "options": [
            {
                "text": "It removes the need for teachers",
                "correct": false,
                "feedback": "Teachers are still needed for nuance."
            },
            {
                "text": "It saves time on repetitive tasks",
                "correct": true,
                "feedback": "Yes, efficiency is key."
            }
        ],
        "xp": 50,
        "original_id": "chapter2_4_7"
    },
    {
        "type": "choice",
        "question": "A university plans to use AI tutors. What's most responsible?",
        "options": [
            {
                "text": "Replace faculty with AI",
                "correct": false,
                "feedback": "AI works best with human expertise."
            },
            {
                "text": "Use AI to support educators",
                "correct": true,
                "feedback": "Exactly! AI enhances teaching."
            }
        ],
        "xp": 50,
        "original_id": "chapter2_4_8"
    },
    {
        "type": "task",
        "prompt": "Name one way AI can help a teacher in the classroom. (Reflect again)",
        "placeholder": "Type here...",
        "xp": 50,
        "original_id": "chapter2_4_9"
    }
];

const chapter3Level1Questions = [
    {
        "type": "choice",
        "question": "What is a key ethical concern?",
        "options": [
            {
                "text": "Data privacy",
                "correct": true,
                "feedback": "Protecting data is critical."
            },
            {
                "text": "Internet speed",
                "correct": false,
                "feedback": "That's infrastructure, not ethics."
            }
        ],
        "xp": 10,
        "original_id": "chapter3_0_0"
    },
    {
        "type": "multiple_choice",
        "question": "Which practices are ethical?",
        "options": [
            {
                "text": "Transparency",
                "correct": true
            },
            {
                "text": "Ignoring bias",
                "correct": false
            },
            {
                "text": "Protecting data",
                "correct": true
            }
        ],
        "xp": 10,
        "original_id": "chapter3_0_1"
    },
    {
        "type": "task",
        "prompt": "Why is bias in AI dangerous?",
        "placeholder": "Explain here...",
        "xp": 10,
        "original_id": "chapter3_0_2"
    },
    {
        "type": "choice",
        "question": "Who is responsible for AI ethics?",
        "options": [
            {
                "text": "Only developers",
                "correct": false,
                "feedback": "Everyone involved plays a role."
            },
            {
                "text": "All stakeholders including educators",
                "correct": true,
                "feedback": "Yes, it's a shared responsibility."
            }
        ],
        "xp": 10,
        "original_id": "chapter3_0_3"
    },
    {
        "type": "choice",
        "question": "What is a key ethical concern?",
        "options": [
            {
                "text": "Data privacy",
                "correct": true,
                "feedback": "Protecting data is critical."
            },
            {
                "text": "Internet speed",
                "correct": false,
                "feedback": "That's infrastructure, not ethics."
            }
        ],
        "xp": 10,
        "original_id": "chapter3_0_4"
    },
    {
        "type": "multiple_choice",
        "question": "Which practices are ethical?",
        "options": [
            {
                "text": "Transparency",
                "correct": true
            },
            {
                "text": "Ignoring bias",
                "correct": false
            },
            {
                "text": "Protecting data",
                "correct": true
            }
        ],
        "xp": 10,
        "original_id": "chapter3_0_5"
    },
    {
        "type": "task",
        "prompt": "Why is bias in AI dangerous? (Reflect again)",
        "placeholder": "Explain here...",
        "xp": 10,
        "original_id": "chapter3_0_6"
    },
    {
        "type": "choice",
        "question": "Who is responsible for AI ethics?",
        "options": [
            {
                "text": "Only developers",
                "correct": false,
                "feedback": "Everyone involved plays a role."
            },
            {
                "text": "All stakeholders including educators",
                "correct": true,
                "feedback": "Yes, it's a shared responsibility."
            }
        ],
        "xp": 10,
        "original_id": "chapter3_0_7"
    },
    {
        "type": "choice",
        "question": "What is a key ethical concern?",
        "options": [
            {
                "text": "Data privacy",
                "correct": true,
                "feedback": "Protecting data is critical."
            },
            {
                "text": "Internet speed",
                "correct": false,
                "feedback": "That's infrastructure, not ethics."
            }
        ],
        "xp": 10,
        "original_id": "chapter3_0_8"
    },
    {
        "type": "multiple_choice",
        "question": "Which practices are ethical?",
        "options": [
            {
                "text": "Transparency",
                "correct": true
            },
            {
                "text": "Ignoring bias",
                "correct": false
            },
            {
                "text": "Protecting data",
                "correct": true
            }
        ],
        "xp": 10,
        "original_id": "chapter3_0_9"
    }
];

const chapter3Level2Questions = [
    {
        "type": "choice",
        "question": "What is a key ethical concern?",
        "options": [
            {
                "text": "Data privacy",
                "correct": true,
                "feedback": "Protecting data is critical."
            },
            {
                "text": "Internet speed",
                "correct": false,
                "feedback": "That's infrastructure, not ethics."
            }
        ],
        "xp": 20,
        "original_id": "chapter3_1_0"
    },
    {
        "type": "multiple_choice",
        "question": "Which practices are ethical?",
        "options": [
            {
                "text": "Transparency",
                "correct": true
            },
            {
                "text": "Ignoring bias",
                "correct": false
            },
            {
                "text": "Protecting data",
                "correct": true
            }
        ],
        "xp": 20,
        "original_id": "chapter3_1_1"
    },
    {
        "type": "task",
        "prompt": "Why is bias in AI dangerous?",
        "placeholder": "Explain here...",
        "xp": 20,
        "original_id": "chapter3_1_2"
    },
    {
        "type": "choice",
        "question": "Who is responsible for AI ethics?",
        "options": [
            {
                "text": "Only developers",
                "correct": false,
                "feedback": "Everyone involved plays a role."
            },
            {
                "text": "All stakeholders including educators",
                "correct": true,
                "feedback": "Yes, it's a shared responsibility."
            }
        ],
        "xp": 20,
        "original_id": "chapter3_1_3"
    },
    {
        "type": "choice",
        "question": "What is a key ethical concern?",
        "options": [
            {
                "text": "Data privacy",
                "correct": true,
                "feedback": "Protecting data is critical."
            },
            {
                "text": "Internet speed",
                "correct": false,
                "feedback": "That's infrastructure, not ethics."
            }
        ],
        "xp": 20,
        "original_id": "chapter3_1_4"
    },
    {
        "type": "multiple_choice",
        "question": "Which practices are ethical?",
        "options": [
            {
                "text": "Transparency",
                "correct": true
            },
            {
                "text": "Ignoring bias",
                "correct": false
            },
            {
                "text": "Protecting data",
                "correct": true
            }
        ],
        "xp": 20,
        "original_id": "chapter3_1_5"
    },
    {
        "type": "task",
        "prompt": "Why is bias in AI dangerous? (Reflect again)",
        "placeholder": "Explain here...",
        "xp": 20,
        "original_id": "chapter3_1_6"
    },
    {
        "type": "choice",
        "question": "Who is responsible for AI ethics?",
        "options": [
            {
                "text": "Only developers",
                "correct": false,
                "feedback": "Everyone involved plays a role."
            },
            {
                "text": "All stakeholders including educators",
                "correct": true,
                "feedback": "Yes, it's a shared responsibility."
            }
        ],
        "xp": 20,
        "original_id": "chapter3_1_7"
    },
    {
        "type": "choice",
        "question": "What is a key ethical concern?",
        "options": [
            {
                "text": "Data privacy",
                "correct": true,
                "feedback": "Protecting data is critical."
            },
            {
                "text": "Internet speed",
                "correct": false,
                "feedback": "That's infrastructure, not ethics."
            }
        ],
        "xp": 20,
        "original_id": "chapter3_1_8"
    },
    {
        "type": "multiple_choice",
        "question": "Which practices are ethical?",
        "options": [
            {
                "text": "Transparency",
                "correct": true
            },
            {
                "text": "Ignoring bias",
                "correct": false
            },
            {
                "text": "Protecting data",
                "correct": true
            }
        ],
        "xp": 20,
        "original_id": "chapter3_1_9"
    }
];

const chapter3Level3Questions = [
    {
        "type": "choice",
        "question": "What is a key ethical concern?",
        "options": [
            {
                "text": "Data privacy",
                "correct": true,
                "feedback": "Protecting data is critical."
            },
            {
                "text": "Internet speed",
                "correct": false,
                "feedback": "That's infrastructure, not ethics."
            }
        ],
        "xp": 30,
        "original_id": "chapter3_2_0"
    },
    {
        "type": "multiple_choice",
        "question": "Which practices are ethical?",
        "options": [
            {
                "text": "Transparency",
                "correct": true
            },
            {
                "text": "Ignoring bias",
                "correct": false
            },
            {
                "text": "Protecting data",
                "correct": true
            }
        ],
        "xp": 30,
        "original_id": "chapter3_2_1"
    },
    {
        "type": "task",
        "prompt": "Why is bias in AI dangerous?",
        "placeholder": "Explain here...",
        "xp": 30,
        "original_id": "chapter3_2_2"
    },
    {
        "type": "choice",
        "question": "Who is responsible for AI ethics?",
        "options": [
            {
                "text": "Only developers",
                "correct": false,
                "feedback": "Everyone involved plays a role."
            },
            {
                "text": "All stakeholders including educators",
                "correct": true,
                "feedback": "Yes, it's a shared responsibility."
            }
        ],
        "xp": 30,
        "original_id": "chapter3_2_3"
    },
    {
        "type": "choice",
        "question": "What is a key ethical concern?",
        "options": [
            {
                "text": "Data privacy",
                "correct": true,
                "feedback": "Protecting data is critical."
            },
            {
                "text": "Internet speed",
                "correct": false,
                "feedback": "That's infrastructure, not ethics."
            }
        ],
        "xp": 30,
        "original_id": "chapter3_2_4"
    },
    {
        "type": "multiple_choice",
        "question": "Which practices are ethical?",
        "options": [
            {
                "text": "Transparency",
                "correct": true
            },
            {
                "text": "Ignoring bias",
                "correct": false
            },
            {
                "text": "Protecting data",
                "correct": true
            }
        ],
        "xp": 30,
        "original_id": "chapter3_2_5"
    },
    {
        "type": "task",
        "prompt": "Why is bias in AI dangerous? (Reflect again)",
        "placeholder": "Explain here...",
        "xp": 30,
        "original_id": "chapter3_2_6"
    },
    {
        "type": "choice",
        "question": "Who is responsible for AI ethics?",
        "options": [
            {
                "text": "Only developers",
                "correct": false,
                "feedback": "Everyone involved plays a role."
            },
            {
                "text": "All stakeholders including educators",
                "correct": true,
                "feedback": "Yes, it's a shared responsibility."
            }
        ],
        "xp": 30,
        "original_id": "chapter3_2_7"
    },
    {
        "type": "choice",
        "question": "What is a key ethical concern?",
        "options": [
            {
                "text": "Data privacy",
                "correct": true,
                "feedback": "Protecting data is critical."
            },
            {
                "text": "Internet speed",
                "correct": false,
                "feedback": "That's infrastructure, not ethics."
            }
        ],
        "xp": 30,
        "original_id": "chapter3_2_8"
    },
    {
        "type": "multiple_choice",
        "question": "Which practices are ethical?",
        "options": [
            {
                "text": "Transparency",
                "correct": true
            },
            {
                "text": "Ignoring bias",
                "correct": false
            },
            {
                "text": "Protecting data",
                "correct": true
            }
        ],
        "xp": 30,
        "original_id": "chapter3_2_9"
    }
];

const chapter3Level4Questions = [
    {
        "type": "choice",
        "question": "What is a key ethical concern?",
        "options": [
            {
                "text": "Data privacy",
                "correct": true,
                "feedback": "Protecting data is critical."
            },
            {
                "text": "Internet speed",
                "correct": false,
                "feedback": "That's infrastructure, not ethics."
            }
        ],
        "xp": 40,
        "original_id": "chapter3_3_0"
    },
    {
        "type": "multiple_choice",
        "question": "Which practices are ethical?",
        "options": [
            {
                "text": "Transparency",
                "correct": true
            },
            {
                "text": "Ignoring bias",
                "correct": false
            },
            {
                "text": "Protecting data",
                "correct": true
            }
        ],
        "xp": 40,
        "original_id": "chapter3_3_1"
    },
    {
        "type": "task",
        "prompt": "Why is bias in AI dangerous?",
        "placeholder": "Explain here...",
        "xp": 40,
        "original_id": "chapter3_3_2"
    },
    {
        "type": "choice",
        "question": "Who is responsible for AI ethics?",
        "options": [
            {
                "text": "Only developers",
                "correct": false,
                "feedback": "Everyone involved plays a role."
            },
            {
                "text": "All stakeholders including educators",
                "correct": true,
                "feedback": "Yes, it's a shared responsibility."
            }
        ],
        "xp": 40,
        "original_id": "chapter3_3_3"
    },
    {
        "type": "choice",
        "question": "What is a key ethical concern?",
        "options": [
            {
                "text": "Data privacy",
                "correct": true,
                "feedback": "Protecting data is critical."
            },
            {
                "text": "Internet speed",
                "correct": false,
                "feedback": "That's infrastructure, not ethics."
            }
        ],
        "xp": 40,
        "original_id": "chapter3_3_4"
    },
    {
        "type": "multiple_choice",
        "question": "Which practices are ethical?",
        "options": [
            {
                "text": "Transparency",
                "correct": true
            },
            {
                "text": "Ignoring bias",
                "correct": false
            },
            {
                "text": "Protecting data",
                "correct": true
            }
        ],
        "xp": 40,
        "original_id": "chapter3_3_5"
    },
    {
        "type": "task",
        "prompt": "Why is bias in AI dangerous? (Reflect again)",
        "placeholder": "Explain here...",
        "xp": 40,
        "original_id": "chapter3_3_6"
    },
    {
        "type": "choice",
        "question": "Who is responsible for AI ethics?",
        "options": [
            {
                "text": "Only developers",
                "correct": false,
                "feedback": "Everyone involved plays a role."
            },
            {
                "text": "All stakeholders including educators",
                "correct": true,
                "feedback": "Yes, it's a shared responsibility."
            }
        ],
        "xp": 40,
        "original_id": "chapter3_3_7"
    },
    {
        "type": "choice",
        "question": "What is a key ethical concern?",
        "options": [
            {
                "text": "Data privacy",
                "correct": true,
                "feedback": "Protecting data is critical."
            },
            {
                "text": "Internet speed",
                "correct": false,
                "feedback": "That's infrastructure, not ethics."
            }
        ],
        "xp": 40,
        "original_id": "chapter3_3_8"
    },
    {
        "type": "multiple_choice",
        "question": "Which practices are ethical?",
        "options": [
            {
                "text": "Transparency",
                "correct": true
            },
            {
                "text": "Ignoring bias",
                "correct": false
            },
            {
                "text": "Protecting data",
                "correct": true
            }
        ],
        "xp": 40,
        "original_id": "chapter3_3_9"
    }
];

const chapter3Level5Questions = [
    {
        "type": "choice",
        "question": "What is a key ethical concern?",
        "options": [
            {
                "text": "Data privacy",
                "correct": true,
                "feedback": "Protecting data is critical."
            },
            {
                "text": "Internet speed",
                "correct": false,
                "feedback": "That's infrastructure, not ethics."
            }
        ],
        "xp": 50,
        "original_id": "chapter3_4_0"
    },
    {
        "type": "multiple_choice",
        "question": "Which practices are ethical?",
        "options": [
            {
                "text": "Transparency",
                "correct": true
            },
            {
                "text": "Ignoring bias",
                "correct": false
            },
            {
                "text": "Protecting data",
                "correct": true
            }
        ],
        "xp": 50,
        "original_id": "chapter3_4_1"
    },
    {
        "type": "task",
        "prompt": "Why is bias in AI dangerous?",
        "placeholder": "Explain here...",
        "xp": 50,
        "original_id": "chapter3_4_2"
    },
    {
        "type": "choice",
        "question": "Who is responsible for AI ethics?",
        "options": [
            {
                "text": "Only developers",
                "correct": false,
                "feedback": "Everyone involved plays a role."
            },
            {
                "text": "All stakeholders including educators",
                "correct": true,
                "feedback": "Yes, it's a shared responsibility."
            }
        ],
        "xp": 50,
        "original_id": "chapter3_4_3"
    },
    {
        "type": "choice",
        "question": "What is a key ethical concern?",
        "options": [
            {
                "text": "Data privacy",
                "correct": true,
                "feedback": "Protecting data is critical."
            },
            {
                "text": "Internet speed",
                "correct": false,
                "feedback": "That's infrastructure, not ethics."
            }
        ],
        "xp": 50,
        "original_id": "chapter3_4_4"
    },
    {
        "type": "multiple_choice",
        "question": "Which practices are ethical?",
        "options": [
            {
                "text": "Transparency",
                "correct": true
            },
            {
                "text": "Ignoring bias",
                "correct": false
            },
            {
                "text": "Protecting data",
                "correct": true
            }
        ],
        "xp": 50,
        "original_id": "chapter3_4_5"
    },
    {
        "type": "task",
        "prompt": "Why is bias in AI dangerous? (Reflect again)",
        "placeholder": "Explain here...",
        "xp": 50,
        "original_id": "chapter3_4_6"
    },
    {
        "type": "choice",
        "question": "Who is responsible for AI ethics?",
        "options": [
            {
                "text": "Only developers",
                "correct": false,
                "feedback": "Everyone involved plays a role."
            },
            {
                "text": "All stakeholders including educators",
                "correct": true,
                "feedback": "Yes, it's a shared responsibility."
            }
        ],
        "xp": 50,
        "original_id": "chapter3_4_7"
    },
    {
        "type": "choice",
        "question": "What is a key ethical concern?",
        "options": [
            {
                "text": "Data privacy",
                "correct": true,
                "feedback": "Protecting data is critical."
            },
            {
                "text": "Internet speed",
                "correct": false,
                "feedback": "That's infrastructure, not ethics."
            }
        ],
        "xp": 50,
        "original_id": "chapter3_4_8"
    },
    {
        "type": "multiple_choice",
        "question": "Which practices are ethical?",
        "options": [
            {
                "text": "Transparency",
                "correct": true
            },
            {
                "text": "Ignoring bias",
                "correct": false
            },
            {
                "text": "Protecting data",
                "correct": true
            }
        ],
        "xp": 50,
        "original_id": "chapter3_4_9"
    }
];


function generateLevelQuestions(chapterId, levelIndex, baseXP) {
    const questions = [];

    // Extract chapter number from ID
    const chapMatch = chapterId.match(/\d+$/);
    const chapNum = chapMatch ? chapMatch[0] : '1';

    // Attempt to dynamically fetch the dedicated question pool for this chapter and level
    const varName = `chapter${chapNum}Level${levelIndex + 1}Questions`;
    let rawPool = (typeof window !== 'undefined' && window[varName])
        ? window[varName]
        : (typeof globalThis !== 'undefined' && globalThis[varName])
            ? globalThis[varName]
            : [];

    try {
        if (!rawPool || rawPool.length === 0) {
            rawPool = eval(varName);
        }
    } catch (e) { }

    const xp = (levelIndex + 1) * 10;

    // 1. Add Intro Card (0 XP)
    const levelTitleList = chapterId === 'chapter1' ?
        ['Basics', 'History', 'Data', 'Algorithms', 'Deep Learning', 'Neural Networks', 'Training', 'Inference', 'Applications', 'Impact'] :
        chapterId === 'chapter2' ?
            ['Education', 'Healthcare', 'Finance', 'Transport', 'Creativity', 'Science', 'Environment', 'Accessibility', 'Productivity', 'Future Work'] :
            ['Bias', 'Privacy', 'Security', 'Automation', 'Human-AI', 'Regulation', 'Sustainability', 'Digital Divide', 'Consciousness', 'The Singularity'];

    const levelTitle = (levelIndex < 10) ? levelTitleList[levelIndex] : `Stage ${levelIndex + 1}`;

    let factualText = "Keep expanding your knowledge base.";
    if (typeof LEVEL_FACTS !== 'undefined' && LEVEL_FACTS[chapterId] && LEVEL_FACTS[chapterId][levelIndex]) {
        factualText = LEVEL_FACTS[chapterId][levelIndex];
    }

    // 1. Add intro info card (Check pool first for custom one)
    const introId = `${chapterId}-L${levelIndex + 1}-INTRO`;
    const customIntro = rawPool.find(q => q.original_id === introId);

    if (customIntro) {
        questions.push({
            id: introId,
            title: "Introduction",
            activities: [customIntro]
        });
    } else {
        questions.push({
            id: introId,
            title: "Introduction",
            activities: [{
                type: "info_card",
                title: `Welcome to Level ${levelIndex + 1}`,
                subtitle: levelTitle,
                text: `Did you know? ${factualText}\n\nComplete the challenges to master this topic!`,
                xp: 0
            }]
        });
    }

    // --- OFFLINE TEST DATA LOGIC ---
    // This allows testing before Netlify deployment. Strictly restricted to localhost.
    const isTestEnv = typeof window !== 'undefined' && 
        (window.location.hostname === 'localhost' || 
         window.location.hostname === '127.0.0.1' || 
         !window.location.hostname);

    let pool = rawPool.filter(q => q.published === true);

    if (pool.length === 0 && isTestEnv) {
        console.log(`[Dev] Generating dummy questions for ${chapterId} Level ${levelIndex + 1}`);
        pool = [
            // --- CONCEPT CARDS (micro_concept) ---
            {
                original_id: `test-${chapterId}-l${levelIndex+1}-concept1`,
                type: "micro_concept",
                title: "Introduction to Artificial Intelligence",
                subtitle: "What makes a system intelligent?",
                text: "Artificial Intelligence (AI) is the science of making machines smart. Instead of writing rigid, step-by-step code, we design systems that learn patterns from data. This allows machines to recognize speech, translate languages, diagnose illnesses, and even drive cars autonomously.",
                xp: 10,
                published: true
            },
            {
                original_id: `test-${chapterId}-l${levelIndex+1}-concept2`,
                type: "micro_concept",
                title: "Understanding Machine Learning",
                subtitle: "Learning from experience",
                text: "Machine Learning (ML) is a subset of AI where computers learn from experience without being explicitly programmed. By analyzing datasets, the algorithm refines its internal mathematical parameters (weights) to improve its predictive performance over time.",
                xp: 10,
                published: true
            },

            // --- SINGLE CHOICE (choice) ---
            {
                original_id: `test-${chapterId}-l${levelIndex+1}-choice1`,
                type: "choice",
                question: "What is the primary role of training data in machine learning?",
                options: [
                    { text: "To teach the model patterns by showing it examples.", correct: true, feedback: "Correct! The model identifies patterns from the examples in the training data." },
                    { text: "To replace the need for writing computer programs.", correct: false, feedback: "Incorrect. We still write the program to build and train the network." },
                    { text: "To clean the processor memory during calculations.", correct: false, feedback: "No. Training data is processed by the model, it doesn't clean memory." },
                    { text: "To directly connect the computer to the internet.", correct: false, feedback: "No connection is established by training data itself." }
                ],
                xp: 10,
                published: true
            },
            {
                original_id: `test-${chapterId}-l${levelIndex+1}-choice2`,
                type: "choice",
                question: "Which term describes a model that performs well on training data but fails to generalize to new, unseen data?",
                options: [
                    { text: "Overfitting", correct: true, feedback: "Yes! Overfitting occurs when the model memorizes the training data instead of learning general patterns." },
                    { text: "Underfitting", correct: false, feedback: "Underfitting is when the model is too simple to learn even the training patterns." },
                    { text: "Deep Learning", correct: false, feedback: "Deep Learning is a subset of AI, not a modeling failure state." },
                    { text: "Supervised Learning", correct: false, feedback: "Supervised Learning is a learning paradigm, not a generalization failure." }
                ],
                xp: 10,
                published: true
            },
            {
                original_id: `test-${chapterId}-l${levelIndex+1}-choice3`,
                type: "choice",
                question: "What is the function of an activation function in a neural network?",
                options: [
                    { text: "To introduce non-linearity, allowing the network to learn complex patterns.", correct: true, feedback: "Spot on! Non-linearity is essential to solve complex real-world problems." },
                    { text: "To speed up the connection between the keyboard and mouse.", correct: false, feedback: "No, activation functions operate mathematically inside the neurons." },
                    { text: "To delete outdated variables from the server script.", correct: false, feedback: "No, it does not manage server memory." }
                ],
                xp: 10,
                published: true
            },

            // --- MULTIPLE CHOICE (multiple_choice) ---
            {
                original_id: `test-${chapterId}-l${levelIndex+1}-mc1`,
                type: "multiple_choice",
                question: "Which of the following are main branches/types of Machine Learning? (Select all that apply)",
                options: [
                    { text: "Supervised Learning", correct: true },
                    { text: "Unsupervised Learning", correct: true },
                    { text: "Reinforcement Learning", correct: true },
                    { text: "Procedural Programming", correct: false },
                    { text: "Quantum Teleportation", correct: false }
                ],
                xp: 10,
                published: true
            },
            {
                original_id: `test-${chapterId}-l${levelIndex+1}-mc2`,
                type: "multiple_choice",
                question: "Which files or steps are typically involved in preparing data for AI modeling? (Select all that apply)",
                options: [
                    { text: "Removing duplicate records", correct: true },
                    { text: "Handling missing/null values", correct: true },
                    { text: "Normalizing/scaling numerical features", correct: true },
                    { text: "Writing a blog post about the project", correct: false }
                ],
                xp: 10,
                published: true
            },

            // --- ORDERING (ordering) ---
            {
                original_id: `test-${chapterId}-l${levelIndex+1}-order1`,
                type: "ordering",
                question: "Order the typical steps of training a neural network from first to last:",
                items: [
                    "Collect and preprocess the raw data",
                    "Define model architecture and layers",
                    "Feed input forward to calculate loss/error",
                    "Backpropagate loss to adjust weights"
                ],
                correct_order: [0, 1, 2, 3],
                xp: 10,
                published: true
            },
            {
                original_id: `test-${chapterId}-l${levelIndex+1}-order2`,
                type: "ordering",
                question: "Arrange the AI concepts from broadest to narrowest scope:",
                items: [
                    "Artificial Intelligence (Broadest)",
                    "Machine Learning",
                    "Deep Learning (Narrowest)"
                ],
                correct_order: [0, 1, 2],
                xp: 10,
                published: true
            },

            // --- MATCHING (matching) ---
            {
                original_id: `test-${chapterId}-l${levelIndex+1}-match1`,
                type: "matching",
                question: "Match the machine learning concepts with their key properties:",
                pairs: [
                    { left: "Labeled Data", right: "Used in Supervised learning" },
                    { left: "Unlabeled Data", right: "Used in Unsupervised learning" },
                    { left: "Rewards & Penalty", right: "Used in Reinforcement learning" }
                ],
                correctFeedback: "Perfect match! You understand the learning paradigms.",
                incorrectFeedback: "Incorrect. Think about how feedback is given to the agent in each type.",
                xp: 10,
                published: true
            },
            {
                original_id: `test-${chapterId}-l${levelIndex+1}-match2`,
                type: "matching",
                question: "Match the following neural network components with their definition:",
                pairs: [
                    { left: "Input Layer", right: "Receives raw features from the dataset" },
                    { left: "Hidden Layer", right: "Performs mathematical transformations" },
                    { left: "Output Layer", right: "Produces the final prediction of the network" }
                ],
                correctFeedback: "Superb! The layers are correctly matched.",
                incorrectFeedback: "Not quite. Check the feedforward path of neural layers.",
                xp: 10,
                published: true
            },

            // --- FILL IN BLANKS (fill_in_blanks) ---
            {
                original_id: `test-${chapterId}-l${levelIndex+1}-fill1`,
                type: "fill_in_blanks",
                text: "In machine learning, we use a [validation] set to evaluate model performance and tune hyperparameters. To ensure the final assessment is unbiased, we test the model on a separate [test] set.",
                wordBank: ["validation", "test", "training", "deployment", "compilation"],
                xp: 10,
                published: true
            },
            {
                original_id: `test-${chapterId}-l${levelIndex+1}-fill2`,
                type: "fill_in_blanks",
                text: "A [neuron] is the fundamental unit of a neural network. It receives inputs, multiplies them by [weights], adds a bias, and passes the result through an [activation] function.",
                wordBank: ["neuron", "weights", "activation", "silicon", "hardware", "terminal"],
                xp: 10,
                published: true
            },

            // --- OPEN ENDED REFLECTION TASK (task) ---
            {
                original_id: `test-${chapterId}-l${levelIndex+1}-task1`,
                type: "task",
                question: "Describe a situation in your daily life where you interact with an AI system, and explain how it helps you.",
                prompt: "Describe a daily encounter with AI (e.g., streaming recommendations, smart assistants, search engine auto-complete) and how it adds value.",
                placeholder: "Type your reflection here...",
                xp: 10,
                published: true
            },
            {
                original_id: `test-${chapterId}-l${levelIndex+1}-task2`,
                type: "task",
                question: "What is one major concern you have regarding bias or ethics in artificial intelligence systems?",
                prompt: "Share your thoughts on AI bias, fairness, or data privacy concerns in modern models.",
                placeholder: "Type your concern here...",
                xp: 10,
                published: true
            }
        ];
    }

    if (pool.length === 0) return questions;

    // Group by type for the quota
    const categorized = { micro_concept: [], choice: [], multiple_choice: [], ordering: [], matching: [], fill_in_blanks: [], task: [], info_card: [] };
    pool.forEach(q => {
        if (categorized[q.type]) categorized[q.type].push(q);
        else categorized[q.type] = [q]; // fallback for unknown types
    });

    const shuffle = (arr) => arr.map(a => ({ sort: Math.random(), value: a })).sort((a, b) => a.sort - b.sort).map(a => a.value);

    let selectedQuestions = [];
    const usedIds = new Set();

    // Get rules dynamically from window/global level rules or use defaults
    const rules = (typeof window !== 'undefined' && window.levelRules) ? window.levelRules : {
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
    const totalQuestionsTarget = rules.totalQuestions !== undefined ? rules.totalQuestions : 10;
    const rulesQuota = rules.quota || {};

    // 1. Select the micro_concept slides based on target quota
    const targetMicroConceptsCount = rulesQuota.micro_concept !== undefined ? rulesQuota.micro_concept : 1;
    const microConcepts = shuffle(categorized.micro_concept || []);
    const chosenConcepts = [];
    for (let i = 0; i < Math.min(targetMicroConceptsCount, microConcepts.length); i++) {
        chosenConcepts.push(microConcepts[i]);
        usedIds.add(microConcepts[i].original_id || JSON.stringify(microConcepts[i]));
    }

    // 2. Select questions based on the quota for other types
    const activeQuota = {
        choice: rulesQuota.choice !== undefined ? rulesQuota.choice : 3,
        multiple_choice: rulesQuota.multiple_choice !== undefined ? rulesQuota.multiple_choice : 2,
        ordering: rulesQuota.ordering !== undefined ? rulesQuota.ordering : 1,
        matching: rulesQuota.matching !== undefined ? rulesQuota.matching : 2,
        fill_in_blanks: rulesQuota.fill_in_blanks !== undefined ? rulesQuota.fill_in_blanks : 2,
        task: rulesQuota.task !== undefined ? rulesQuota.task : 0
    };

    Object.entries(activeQuota).forEach(([type, count]) => {
        const available = shuffle(categorized[type] || []);
        let taken = 0;
        for (const q of available) {
            if (taken >= count) break;
            const uniqueId = q.original_id || JSON.stringify(q); // fallback if no ID
            if (!usedIds.has(uniqueId)) {
                selectedQuestions.push(q);
                usedIds.add(uniqueId);
                taken++;
            }
        }
    });

    // 3. Adjust to meet totalQuestionsTarget
    const remainingTarget = Math.max(0, totalQuestionsTarget - chosenConcepts.length);

    if (selectedQuestions.length > remainingTarget) {
        // Truncate selectedQuestions if we have too many
        selectedQuestions = selectedQuestions.slice(0, remainingTarget);
    } else if (selectedQuestions.length < remainingTarget) {
        // Pad using other published questions (excluding micro_concept and info_card, and task unless task has a non-zero quota)
        const needed = remainingTarget - selectedQuestions.length;
        const remainingPool = shuffle(pool.filter(q => q.type !== 'micro_concept' && q.type !== 'info_card' && (activeQuota.task > 0 || q.type !== 'task')));
        let padded = 0;
        for (const q of remainingPool) {
            if (padded >= needed) break;
            const uniqueId = q.original_id || JSON.stringify(q);
            if (!usedIds.has(uniqueId)) {
                selectedQuestions.push(q);
                usedIds.add(uniqueId);
                padded++;
            }
        }
    }

    // 4. Randomize the selected questions so the order is unpredictable
    selectedQuestions = shuffle(selectedQuestions);

    // 5. Build final questions array
    // Add chosen concepts at the very beginning
    chosenConcepts.forEach((concept, cIdx) => {
        let q = JSON.parse(JSON.stringify(concept));
        q.id = `${chapterId}-L${levelIndex + 1}-CONCEPT-${cIdx + 1}`;
        q.title = `Learn ${cIdx + 1}`;
        q.xp = xp;

        questions.push({
            id: q.id,
            title: q.title,
            activities: [q]
        });
    });

    // Add the shuffled questions, properly ID'd and numbered
    for (let j = 0; j < selectedQuestions.length; j++) {
        let q = JSON.parse(JSON.stringify(selectedQuestions[j]));
        q.id = `${chapterId}-L${levelIndex + 1}-Q${j + 1}`;
        q.title = `Question ${j + 1}`;
        q.xp = xp;

        questions.push({
            id: q.id,
            title: q.title,
            activities: [q]
        });
    }

    return questions;
}

// Generate the full course structure
const chapters = [
    {
        id: "chapter1",
        title: "Getting started with AI",
        description: "The building blocks of Artificial Intelligence.",
        levels: Array.from({ length: 5 }, (_, i) => ({
            id: `c1-l${i + 1}`,
            title: `Level ${i + 1}: ${['Foundations', 'Concepts', 'AI Systems', 'Limitations', 'AI in Practice'][i]}`,
            description: "Master the core concepts of AI.",
            questions: generateLevelQuestions('chapter1', i)
        }))
    },
    {
        id: "chapter2",
        title: "AI use cases in Education",
        description: "How AI is transforming the real world.",
        levels: Array.from({ length: 5 }, (_, i) => ({
            id: `c2-l${i + 1}`,
            title: `Level ${i + 1}: ${['Education', 'Healthcare', 'Finance', 'Transport', 'Creativity'][i]}`,
            description: "Explore real-world applications.",
            questions: generateLevelQuestions('chapter2', i)
        }))
    },
    {
        id: "chapter3",
        title: "Getting to know AI Tools",
        description: "Navigating the responsibilities of powerful tech.",
        levels: Array.from({ length: 5 }, (_, i) => ({
            id: `c3-l${i + 1}`,
            title: `Level ${i + 1}: ${['Bias', 'Privacy', 'Security', 'Automation', 'Human-AI'][i]}`,
            description: "Understand the ethical landscape.",
            questions: generateLevelQuestions('chapter3', i)
        }))
    }
];

// Expose globally
window.courseData = chapters;
console.log("Chapter-based Course Data Loaded:", window.courseData);
