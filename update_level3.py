import json
import re

# Questions structured exactly like chapter1Level2Questions
questions = [
    {
        "original_id": "chapter1-L3-INTRO-1-VIDEO",
        "type": "video",
        "title": "Evolution of Technology",
        "subtitle": "Watch the video before starting the challenge",
        "videoUrl": "https://player.vimeo.com/video/1174724606",
        "duration": "5 mins",
        "topic": "AI History",
        "difficulty": "Beginner",
        "description": "Discover the long and winding history of AI. From ancient philosophers dreaming of formal logic to modern agentic systems, trace the evolution of the technology that is changing our world.",
        "takeaways": [
            "Understand the historical roots of Artificial Intelligence",
            "Identify key milestones like the Turing Test and Deep Blue",
            "Recognize the factors that ended the 'AI Winter' and sparked modern AI"
        ],
        "xp": 0,
        "published": True
    },
    {
        "original_id": "chapter1-L3-INTRO-2",
        "type": "info_card",
        "title": "Welcome to Level 3",
        "subtitle": "Evolution of Technology",
        "text": "Now that you've watched the video, let's test your knowledge of AI's history!\n\nRemember: AI is not a sudden invention but the result of a long cycle of big ideas, hardware improvements, and massive data collection.\n\nComplete the challenges to master this topic!",
        "buttonText": "Start Challenge",
        "xp": 0,
        "published": True
    },
    {
        "original_id": 1,
        "question": "What is considered the 'philosophical seed' for all of computation and AI?",
        "correctFeedback": "Correct! Ancient philosophers breaking down thoughts into a system of rules (formal logic) was the first step toward mechanizing reason.",
        "incorrectFeedback": "Try again. The journey of AI started long before computers, with ancient philosophers trying to map out thought using formal logic.",
        "xp": 10,
        "type": "choice",
        "options": [
            { "text": "The invention of the microchip in the 1960s.", "correct": False, "feedback": "Try again. The journey of AI started long before computers, with ancient philosophers trying to map out thought using formal logic." },
            { "text": "The idea of formal logic and mechanizing reason.", "correct": True, "feedback": "Correct! Ancient philosophers breaking down thoughts into a system of rules (formal logic) was the first step toward mechanizing reason." },
            { "text": "The launch of the first digital chatbot.", "correct": False, "feedback": "Try again. The journey of AI started long before computers, with ancient philosophers trying to map out thought using formal logic." },
            { "text": "The development of graphical processing units (GPUs).", "correct": False, "feedback": "Try again. The journey of AI started long before computers, with ancient philosophers trying to map out thought using formal logic." }
        ]
    },
    {
        "original_id": 2,
        "question": "What challenge did Alan Turing propose in 1950 to test machine intelligence?",
        "correctFeedback": "Correct! Turing asked if a machine could chat with a human so well that the human wouldn't know it was a machine.",
        "incorrectFeedback": "Incorrect. The Turing test specifically involves evaluating a machine's ability to exhibit intelligent behavior indistinguishable from a human in conversation.",
        "xp": 10,
        "type": "choice",
        "options": [
            { "text": "Could a machine solve advanced calculus problems faster than humans?", "correct": False, "feedback": "Incorrect. The Turing test specifically involves evaluating a machine's ability to exhibit intelligent behavior indistinguishable from a human in conversation." },
            { "text": "Could a machine beat a grandmaster at chess?", "correct": False, "feedback": "Incorrect. The Turing test specifically involves evaluating a machine's ability to exhibit intelligent behavior indistinguishable from a human in conversation." },
            { "text": "Could a machine chat so well that you wouldn't know it's a machine?", "correct": True, "feedback": "Correct! Turing asked if a machine could chat with a human so well that the human wouldn't know it was a machine." },
            { "text": "Could a machine physically navigate an obstacle course?", "correct": False, "feedback": "Incorrect. The Turing test specifically involves evaluating a machine's ability to exhibit intelligent behavior indistinguishable from a human in conversation." }
        ]
    },
    {
        "original_id": 3,
        "question": "Which of the following are examples of early AI successes mentioned in the video? (Select all that apply)",
        "correctFeedback": "Correct! ELIZA was an early chatbot ancestor, and Shakey was an incredible robot that could see and navigate its surroundings.",
        "incorrectFeedback": "Not quite. While Siri and AlexNet are AI successes, they came much later. The early successes mentioned were ELIZA and Shakey the robot.",
        "xp": 10,
        "type": "multiple_choice",
        "options": [
            { "text": "ELIZA, a program that could have a conversation.", "correct": True, "feedback": "Correct! ELIZA was an early chatbot ancestor, and Shakey was an incredible robot that could see and navigate its surroundings." },
            { "text": "Shakey the robot, which could see its surroundings.", "correct": True, "feedback": "Correct! ELIZA was an early chatbot ancestor, and Shakey was an incredible robot that could see and navigate its surroundings." },
            { "text": "Siri, a voice assistant for smartphones.", "correct": False, "feedback": "Not quite. While Siri and AlexNet are AI successes, they came much later. The early successes mentioned were ELIZA and Shakey the robot." },
            { "text": "AlexNet, an image recognition system.", "correct": False, "feedback": "Not quite. While Siri and AlexNet are AI successes, they came much later. The early successes mentioned were ELIZA and Shakey the robot." }
        ]
    },
    {
        "original_id": 4,
        "question": "Arrange these milestones in the history of AI in chronological order:",
        "correctFeedback": "Correct! The sequence is: Turing Test (1950) -> 'AI' gets its name (1956) -> Deep Blue beats Kasparov (1997) -> AlexNet wins image contest (2012).",
        "incorrectFeedback": "Not quite. Remember the timeline: Turing Test (1950), the term Artificial Intelligence (1956), Deep Blue (1997), and then AlexNet (2012).",
        "xp": 10,
        "type": "ordering",
        "items": [
            "Alan Turing proposes the Turing test",
            "The term 'Artificial Intelligence' is coined",
            "IBM's Deep Blue defeats Garry Kasparov",
            "AlexNet blows everyone away in image recognition"
        ],
        "correct_order": [
            0,
            1,
            2,
            3
        ]
    },
    {
        "original_id": 5,
        "question": "What caused the 'AI Winter'?",
        "correctFeedback": "Correct! The AI winter occurred when the hype got way ahead of the tech, as computers just weren't powerful enough yet to achieve grand human-like intelligence.",
        "incorrectFeedback": "Try again. The AI winter wasn't caused by a lack of interest, but by computing hardware limitations and unrealistic expectations.",
        "xp": 10,
        "type": "choice",
        "options": [
            { "text": "The public lost interest in science fiction concepts.", "correct": False, "feedback": "Try again. The AI winter wasn't caused by a lack of interest, but by computing hardware limitations and unrealistic expectations." },
            { "text": "Computers were not powerful enough to meet the grand expectations.", "correct": True, "feedback": "Correct! The AI winter occurred when the hype got way ahead of the tech, as computers just weren't powerful enough yet to achieve grand human-like intelligence." },
            { "text": "Governments banned artificial intelligence research globally.", "correct": False, "feedback": "Try again. The AI winter wasn't caused by a lack of interest, but by computing hardware limitations and unrealistic expectations." },
            { "text": "A massive virus wiped out early AI datasets.", "correct": False, "feedback": "Try again. The AI winter wasn't caused by a lack of interest, but by computing hardware limitations and unrealistic expectations." }
        ]
    },
    {
        "original_id": 6,
        "question": "Match the era or milestone with its description:",
        "correctFeedback": "Correct! You successfully matched the key AI milestones to their descriptions.",
        "incorrectFeedback": "Check your matches. Deep Blue used brute force calculation, AlexNet marked the end of the AI winter, Expert Systems were 1980s rule-based AIs, and the Turing Test proposed a conversational challenge.",
        "xp": 10,
        "type": "matching",
        "pairs": [
            { "left": "Deep Blue", "right": "Demonstrated raw analytical power via brute force calculation" },
            { "left": "AlexNet (2012)", "right": "Combined deep neural networks, GPUs, and big data" },
            { "left": "Expert Systems", "right": "Practical rule-based AIs from the 1980s" },
            { "left": "Turing Test", "right": "A challenge to see if machines can convincingly chat" }
        ],
        "shuffledRight": [
            "Combined deep neural networks, GPUs, and big data",
            "A challenge to see if machines can convincingly chat",
            "Practical rule-based AIs from the 1980s",
            "Demonstrated raw analytical power via brute force calculation"
        ]
    },
    {
        "original_id": 7,
        "question": "Fill in the blank",
        "correctFeedback": "Correct! The breakthrough in 2012 happened because of a perfect recipe combining deep neural networks, the power of gaming GPUs, and massive amounts of data.",
        "incorrectFeedback": "Incorrect. The key ingredients for modern AI success are deep neural networks, powerful GPUs for heavy lifting, and massive amounts of data.",
        "xp": 10,
        "type": "fill_in_blanks",
        "text": "The success of AlexNet in 2012 was the perfect recipe coming together: deep neural networks, the raw power of gaming [GPUs], and massive amounts of [data].",
        "wordBank": [
            "GPUs",
            "data",
            "CPUs",
            "code",
            "rules",
            "philosophers"
        ]
    },
    {
        "original_id": 8,
        "question": "What is the defining characteristic of 'Agentic AI' as described at the end of the video?",
        "correctFeedback": "Correct! Agentic AI systems can plan and take multiple steps on their own to work towards a complex goal, rather than just answering a single prompt.",
        "incorrectFeedback": "Remember, the video states that Agentic AI are not just tools that do one thing when asked, but systems that can plan and take multiple steps autonomously.",
        "xp": 10,
        "type": "choice",
        "options": [
            { "text": "They are purely physical robots designed for manual labor.", "correct": False, "feedback": "Remember, the video states that Agentic AI are not just tools that do one thing when asked, but systems that can plan and take multiple steps autonomously." },
            { "text": "They only respond to basic voice commands to play music or check weather.", "correct": False, "feedback": "Remember, the video states that Agentic AI are not just tools that do one thing when asked, but systems that can plan and take multiple steps autonomously." },
            { "text": "They can plan, take multiple steps on their own, and work toward a complex goal.", "correct": True, "feedback": "Correct! Agentic AI systems can plan and take multiple steps on their own to work towards a complex goal, rather than just answering a single prompt." },
            { "text": "They rely entirely on hand-coded rules to function.", "correct": False, "feedback": "Remember, the video states that Agentic AI are not just tools that do one thing when asked, but systems that can plan and take multiple steps autonomously." }
        ]
    },
    {
        "original_id": 9,
        "question": "Fill in the blank",
        "correctFeedback": "Correct! The history of AI shows that it is the result of a long cycle of big ideas, hardware to run them, and data to fuel them.",
        "incorrectFeedback": "Try again. The video emphasizes that AI's progress comes from a cycle of big ideas, hardware, and data.",
        "xp": 10,
        "type": "fill_in_blanks",
        "text": "AI isn't a sudden invention. It's built up over decades in a cycle of big [ideas], then the [hardware] to run them, and the data to fuel them.",
        "wordBank": [
            "ideas",
            "hardware",
            "profits",
            "magic",
            "emotions",
            "rules"
        ]
    }
]

import os

filepath = '/Users/lijinns/Desktop/Notebook/AG/d30/content.js'

with open(filepath, 'r') as f:
    text = f.read()

# Find the start of chapter1Level3Questions
pattern = r"const chapter1Level3Questions = \["
start_match = re.search(pattern, text)

if start_match:
    start_idx = start_match.start()
    
    # Find the corresponding closing bracket
    bracket_count = 0
    in_string = False
    escape = False
    
    end_idx = -1
    
    for i in range(start_idx + len("const chapter1Level3Questions = "), len(text)):
        char = text[i]
        
        if escape:
            escape = False
            continue
            
        if char == '\\':
            escape = True
            continue
            
        if char == '"' or char == "'":
            if not in_string:
                in_string = char
            elif in_string == char:
                in_string = False
            continue
            
        if not in_string:
            if char == '[':
                bracket_count += 1
            elif char == ']':
                bracket_count -= 1
                if bracket_count == 0:
                    end_idx = i
                    break

    if end_idx != -1:
        # Check if it ends with ];
        real_end_idx = end_idx
        if text[end_idx+1] == ';':
            real_end_idx = end_idx + 1
            
        # Serialize new array
        new_json = json.dumps(questions, indent=4)
        
        # Replace
        new_text = text[:start_idx + len("const chapter1Level3Questions = ")] + new_json[1:] + (';' if text[real_end_idx] != ';' else '') + text[real_end_idx + 1:]
        
        with open(filepath, 'w') as f:
            f.write(new_text)
            
        print("Successfully replaced chapter1Level3Questions.")
    else:
        print("Could not find the end of the array.")
else:
    print("Could not find chapter1Level3Questions.")

