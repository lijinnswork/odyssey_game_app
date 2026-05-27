# parse_questions.py
import json
import re

raw_json = """
{
  "questions": [
    {
      "id": 1,
      "type": "single_select",
      "question": "Which statement best distinguishes Artificial Intelligence from traditional rule-based software?",
      "options": {
        "a": "AI systems operate without any human input",
        "b": "AI systems rely on statistical pattern learning rather than fixed rules",
        "c": "AI systems always function autonomously once deployed",
        "d": "AI systems primarily store and retrieve structured data and information"
      },
      "correct_answer": "b",
      "correct_feedback": "Correct. Modern AI systems learn patterns from data instead of relying only on explicitly coded rules.",
      "incorrect_feedback": "Traditional software follows predefined rules. AI systems instead learn statistical patterns from data."
    },
    {
      "id": 2,
      "type": "single_select",
      "question": "A grammar correction tool improves over time by analyzing large amounts of writing data. What enables this improvement?",
      "options": {
        "a": "Manual rule updates by programmers",
        "b": "Statistical learning from examples",
        "c": "Built-in emotional sensitivity",
        "d": "Real-time internet fact-checking"
      },
      "correct_answer": "b",
      "correct_feedback": "Correct. The tool improves because it learns from examples and refines pattern recognition over time.",
      "incorrect_feedback": "AI systems improve primarily through exposure to data and statistical learning, not emotional sensitivity or manual updates alone."
    },
    {
      "id": 3,
      "type": "single_select",
      "question": "Which statement most accurately reflects the AI systems currently used in education?",
      "options": {
        "a": "They simulate broad human reasoning across domains",
        "b": "They specialize in specific tasks without general understanding",
        "c": "They independently define their own learning goals",
        "d": "They replace human judgment in complex decisions"
      },
      "correct_answer": "b",
      "correct_feedback": "Correct. Most current AI systems are narrow—they perform specific tasks without general human-like understanding.",
      "incorrect_feedback": "Current AI does not possess broad reasoning or independent goal-setting. It is specialized for defined tasks."
    },
    {
      "id": 4,
      "type": "single_select",
      "question": "When a generative AI system produces a paragraph, it primarily:",
      "options": {
        "a": "Retrieves a stored paragraph from an attached database",
        "b": "Predicts the most statistically likely sequence of words",
        "c": "Verifies each statement against trusted sources",
        "d": "Applies ethical and moral reasoning before responding"
      },
      "correct_answer": "b",
      "correct_feedback": "Correct. Generative AI predicts likely word sequences based on learned statistical relationships.",
      "incorrect_feedback": "Generative AI does not retrieve stored paragraphs or verify facts by default. It predicts word sequences based on patterns."
    },
    {
      "id": 5,
      "type": "single_select",
      "question": "Why can AI systems produce responses that sound convincing but contain errors?",
      "options": {
        "a": "They prioritize linguistic plausibility over factuality",
        "b": "They intentionally introduce uncertainty for creativity",
        "c": "They lack access to real-time data",
        "d": "They simplify complex ideas to improve user readability"
      },
      "correct_answer": "a",
      "correct_feedback": "Correct. AI systems optimize for linguistic plausibility, which can sometimes produce fluent but inaccurate responses.",
      "incorrect_feedback": "AI errors are not intentional. They occur because systems prioritize probable language patterns over factual verification."
    }
  ]
}

{
  "questions": [
    {
      "id": 6,
      "type": "single_select",
      "question": "Which perspective best supports responsible AI use in education?",
      "options": {
        "a": "Treat AI outputs as authoritative if they appear coherent",
        "b": "Avoid AI entirely to protect academic standards",
        "c": "Use AI as a draft assistant retaining human oversight",
        "d": "Allow AI to automate evaluative decisions for consistency"
      },
      "correct_answer": "c",
      "correct_feedback": "Correct. Responsible AI use involves human oversight and treating AI output as a starting point, not a final authority.",
      "incorrect_feedback": "Avoiding AI entirely or delegating full authority are extremes. Responsible use balances assistance with human judgment."
    },
    {
      "id": 7,
      "type": "multiple_select",
      "question": "Which capabilities are central to most modern AI systems?",
      "options": [
        "Recognizing patterns in data",
        "Learning from examples",
        "Experiencing human emotions",
        "Generating predictions"
      ],
      "correct_answers": [
        "Recognizing patterns in data",
        "Learning from examples",
        "Generating predictions"
      ],
      "correct_feedback": "Correct. Pattern recognition, learning from examples, and prediction are core capabilities of modern AI systems.",
      "incorrect_feedback": "AI systems recognize patterns and generate predictions from data, but they do not experience human emotions."
    },
    {
      "id": 8,
      "type": "multiple_select",
      "question": "Which statements accurately describe Narrow AI?",
      "options": [
        "Designed for specific, bounded tasks",
        "Equivalent to human-level reasoning",
        "Common in current educational tools",
        "Capable of independent ethical judgment"
      ],
      "correct_answers": [
        "Designed for specific, bounded tasks",
        "Common in current educational tools"
      ],
      "correct_feedback": "Correct. Narrow AI focuses on specific tasks and is widely used in current educational tools.",
      "incorrect_feedback": "Narrow AI does not possess human-level reasoning or independent ethical judgment."
    },
    {
      "id": 9,
      "type": "multiple_select",
      "question": "Which factors contributed significantly to the rapid growth of modern AI?",
      "options": [
        "Increased availability of large datasets",
        "Improved computational power",
        "Development of conscious machines",
        "Advances in machine learning algorithms"
      ],
      "correct_answers": [
        "Increased availability of large datasets",
        "Improved computational power",
        "Advances in machine learning algorithms"
      ],
      "correct_feedback": "Correct. Large datasets, stronger computational power, and improved algorithms accelerated AI development.",
      "incorrect_feedback": "Modern AI growth was driven by data, computing power, and algorithmic advances—not by the creation of conscious machines."
    },
    {
      "id": 10,
      "type": "multiple_select",
      "question": "Which are recognized strengths of AI systems?",
      "options": [
        "Rapid processing of large volumes of information",
        "Consistent application of learned patterns",
        "Deep contextual understanding of human situations",
        "Automation of repetitive processes"
      ],
      "correct_answers": [
        "Rapid processing of large volumes of information",
        "Consistent application of learned patterns",
        "Automation of repetitive processes"
      ],
      "correct_feedback": "Correct. Speed, consistency, and automation are major strengths of AI systems.",
      "incorrect_feedback": "AI excels at speed and pattern consistency, but it does not possess deep contextual understanding like humans."
    }
  ]
}

{
  "questions": [
    {
      "id": 11,
      "type": "multiple_select",
      "question": "Which reflect limitations of AI systems?",
      "options": [
        "Susceptibility to producing fabricated information",
        "Inability to independently evaluate ethical consequences",
        "Dependence on training data patterns",
        "Guaranteed objectivity in decision-making"
      ],
      "correct_answers": [
        "Susceptibility to producing fabricated information",
        "Inability to independently evaluate ethical consequences",
        "Dependence on training data patterns"
      ],
      "correct_feedback": "Correct. AI systems can fabricate information, depend heavily on training data, and lack independent ethical reasoning.",
      "incorrect_feedback": "AI systems are not guaranteed to be objective. They depend on data patterns and lack independent ethical judgment."
    },
    {
      "id": 12,
      "type": "multiple_select",
      "question": "Which elements are part of AI literacy for educators?",
      "options": [
        "Understanding core AI concepts",
        "Recognizing AI limitations",
        "Delegating final decisions to AI tools",
        "Evaluating outputs critically"
      ],
      "correct_answers": [
        "Understanding core AI concepts",
        "Recognizing AI limitations",
        "Evaluating outputs critically"
      ],
      "correct_feedback": "Correct. AI literacy involves conceptual understanding, awareness of limitations, and critical evaluation.",
      "incorrect_feedback": "Delegating final decisions to AI contradicts responsible AI literacy. Human judgment remains essential."
    },
    {
      "id": 13,
      "type": "slide_to_order",
      "question": "Arrange the core AI loop in logical sequence:",
      "options": [
        "Perceive",
        "Act",
        "Learn",
        "Reason"
      ],
      "correct_order": [
        "Perceive",
        "Learn",
        "Reason",
        "Act"
      ],
      "correct_feedback": "Correct. AI systems typically perceive input, learn from patterns, reason over them, and then act.",
      "incorrect_feedback": "Consider the logical flow: input is processed first, learning shapes reasoning, and action follows."
    },
    {
      "id": 14,
      "type": "slide_to_order",
      "question": "Arrange the Machine Learning workflow:",
      "options": [
        "Identify patterns",
        "Collect labeled examples",
        "Make predictions",
        "Provide training data"
      ],
      "correct_order": [
        "Provide training data",
        "Collect labeled examples",
        "Identify patterns",
        "Make predictions"
      ],
      "correct_feedback": "Correct. Machine learning begins with training data and progresses toward predictive output.",
      "incorrect_feedback": "Predictions occur only after patterns are identified from labeled data."
    },
    {
      "id": 15,
      "type": "slide_to_order",
      "question": "Arrange responsible AI use in academic work:",
      "options": [
        "Revise content",
        "Generate draft",
        "Verify key claims",
        "Apply human judgment"
      ],
      "correct_order": [
        "Generate draft",
        "Verify key claims",
        "Apply human judgment",
        "Revise content"
      ],
      "correct_feedback": "Correct. AI assists first, but verification and human judgment must precede final revision.",
      "incorrect_feedback": "Responsible AI use requires verification and human judgment before finalizing content."
    }
  ]
}

{
  "questions": [
    {
      "id": 16,
      "type": "slide_to_order",
      "question": "Arrange conceptual AI evolution:",
      "options": [
        "Rule-based programming",
        "Machine learning",
        "Pattern-based prediction",
        "Generative AI"
      ],
      "correct_order": [
        "Rule-based programming",
        "Machine learning",
        "Pattern-based prediction",
        "Generative AI"
      ],
      "correct_feedback": "Correct. AI evolved from explicit rule-based systems to machine learning, then predictive models, and finally generative systems.",
      "incorrect_feedback": "Think historically: early AI relied on fixed rules before progressing to learning systems and eventually generative models."
    },
    {
      "id": 17,
      "type": "slide_to_order",
      "question": "Arrange steps before relying on AI output:",
      "options": [
        "Interpret response",
        "Generate response",
        "Check for limitations",
        "Cross-verify facts"
      ],
      "correct_order": [
        "Generate response",
        "Interpret response",
        "Check for limitations",
        "Cross-verify facts"
      ],
      "correct_feedback": "Correct. After generating output, you interpret it, assess limitations, and then verify facts before trusting it.",
      "incorrect_feedback": "Verification and limitation checks happen after reviewing the generated response—not before it exists."
    },
    {
      "id": 18,
      "type": "slide_to_order",
      "question": "Arrange safe classroom AI integration:",
      "options": [
        "Understand tool purpose",
        "Monitor outcomes",
        "Introduce cautiously",
        "Reflect on impact"
      ],
      "correct_order": [
        "Understand tool purpose",
        "Introduce cautiously",
        "Monitor outcomes",
        "Reflect on impact"
      ],
      "correct_feedback": "Correct. Effective integration begins with understanding the tool, then careful introduction, monitoring, and reflection.",
      "incorrect_feedback": "Responsible integration follows a structured approach: understand first, implement cautiously, then evaluate impact."
    },
    {
      "id": 19,
      "type": "match_the_following",
      "question": "Match the concept to its description:",
      "pairs": {
        "A. Narrow AI": "3",
        "B. General AI": "1",
        "C. Machine Learning": "2",
        "D. Generative AI": "4"
      },
      "options_left": [
        "A. Narrow AI",
        "B. General AI",
        "C. Machine Learning",
        "D. Generative AI"
      ],
      "options_right": [
        "1. Hypothetical broad human-like intelligence",
        "2. Systems trained on data to identify patterns",
        "3. AI specialized for defined tasks",
        "4. Systems that create new content"
      ],
      "correct_feedback": "Correct. Narrow AI is task-specific, General AI is hypothetical broad intelligence, Machine Learning identifies patterns, and Generative AI creates new content.",
      "incorrect_feedback": "Review each definition carefully: distinguish between task-specific systems, hypothetical general intelligence, pattern learning, and content creation."
    },
    {
      "id": 20,
      "type": "match_the_following",
      "question": "Match AI strength to example:",
      "pairs": {
        "A. Pattern detection": "1",
        "B. Prediction": "2",
        "C. Automation": "4",
        "D. Language processing": "3"
      },
      "options_left": [
        "A. Pattern detection",
        "B. Prediction",
        "C. Automation",
        "D. Language processing"
      ],
      "options_right": [
        "1. Spam filtering",
        "2. Suggesting next video",
        "3. Auto-generating summaries",
        "4. Scheduling reminders"
      ],
      "correct_feedback": "Correct. Spam filtering detects patterns, prediction suggests next items, automation handles scheduling, and language processing generates summaries.",
      "incorrect_feedback": "Match each strength to its most typical application: detection, prediction, automation, and language tasks have distinct examples."
    }
  ]
}

{
  "questions": [
    {
      "id": 21,
      "type": "match_the_following",
      "question": "Match limitation to implication:",
      "pairs": {
        "A. Statistical guessing": "4",
        "B. Lack of empathy": "3",
        "C. Data dependency": "2",
        "D. No ethical reasoning": "1"
      },
      "options_left": [
        "A. Statistical guessing",
        "B. Lack of empathy",
        "C. Data dependency",
        "D. No ethical reasoning"
      ],
      "options_right": [
        "1. Requires human oversight",
        "2. May reproduce biases",
        "3. Cannot replace mentorship",
        "4. Can produce fluent but incorrect outputs"
      ],
      "correct_feedback": "Correct. Statistical guessing may cause fluent errors, lack of empathy limits mentorship roles, data dependency can reproduce bias, and lack of ethical reasoning requires oversight.",
      "incorrect_feedback": "Think carefully about how each technical limitation translates into a real-world educational implication."
    },
    {
      "id": 22,
      "type": "match_the_following",
      "question": "Match process stage:",
      "pairs": {
        "A. Perceive": "3",
        "B. Learn": "2",
        "C. Reason": "4",
        "D. Act": "1"
      },
      "options_left": [
        "A. Perceive",
        "B. Learn",
        "C. Reason",
        "D. Act"
      ],
      "options_right": [
        "1. Execute output",
        "2. Analyze patterns",
        "3. Interpret incoming data",
        "4. Decide next step"
      ],
      "correct_feedback": "Correct. AI perceives input, learns patterns, reasons about them, and then acts.",
      "incorrect_feedback": "Follow the logical flow of input to action: perception first, execution last."
    },
    {
      "id": 23,
      "type": "match_the_following",
      "question": "Match term with educational implication:",
      "pairs": {
        "A. AI literacy": "2",
        "B. Hallucination": "1",
        "C. Narrow AI": "3",
        "D. Automation": "4"
      },
      "options_left": [
        "A. AI literacy",
        "B. Hallucination",
        "C. Narrow AI",
        "D. Automation"
      ],
      "options_right": [
        "1. Confident but incorrect generation",
        "2. Awareness of AI strengths and limits",
        "3. Task-specific system",
        "4. Reducing repetitive manual effort"
      ],
      "correct_feedback": "Correct. AI literacy involves awareness, hallucination refers to confident errors, Narrow AI is task-specific, and automation reduces repetitive work.",
      "incorrect_feedback": "Be precise: hallucination relates to incorrect generation, while literacy relates to understanding and critical awareness."
    },
    {
      "id": 24,
      "type": "match_the_following",
      "question": "Match use-case with suitability:",
      "pairs": {
        "A. Brainstorming ideas": "1",
        "B. Ethical grading decisions": "2",
        "C. Draft summarization": "1",
        "D. Final academic judgment": "2"
      },
      "options_left": [
        "A. Brainstorming ideas",
        "B. Ethical grading decisions",
        "C. Draft summarization",
        "D. Final academic judgment"
      ],
      "options_right": [
        "1. Appropriate AI assistance",
        "2. Requires human authority"
      ],
      "correct_feedback": "Correct. AI is suitable for brainstorming and summarization, but ethical grading and final judgments require human authority.",
      "incorrect_feedback": "Distinguish between assistive tasks and decisions that require accountability and ethical responsibility."
    },
    {
      "id": 25,
      "type": "duolingo_style",
      "question": "Artificial Intelligence systems rely on statistical ______ rather than fixed ______.",
      "word_bank": [
        "patterns",
        "rules",
        "emotions",
        "intentions"
      ],
      "correct_answers": [
        "patterns",
        "rules"
      ],
      "correct_feedback": "Correct. AI systems rely on statistical patterns instead of fixed rules.",
      "incorrect_feedback": "AI systems operate through learned statistical patterns, not emotions or intentions."
    }
  ]
}

{
  "questions": [
    {
      "id": 26,
      "type": "duolingo_style",
      "question": "Modern AI systems learn from large amounts of ______ and improve through exposure to ______.",
      "word_bank": [
        "data",
        "examples",
        "instincts",
        "hardware"
      ],
      "correct_answers": [
        "data",
        "examples"
      ],
      "correct_feedback": "Correct. AI systems improve by learning patterns from data and examples.",
      "incorrect_feedback": "AI systems do not learn through instincts. Their improvement comes from exposure to data and examples."
    },
    {
      "id": 27,
      "type": "duolingo_style",
      "question": "The AI used today in classrooms is considered ______ AI because it is designed for ______ tasks.",
      "word_bank": [
        "narrow",
        "specific",
        "general",
        "unlimited"
      ],
      "correct_answers": [
        "narrow",
        "specific"
      ],
      "correct_feedback": "Correct. Most current AI tools are Narrow AI designed for specific tasks.",
      "incorrect_feedback": "Today's AI tools are not general intelligence. They are narrow systems built for specific tasks."
    },
    {
      "id": 28,
      "type": "duolingo_style",
      "question": "Generative AI produces new ______ by predicting likely ______ sequences.",
      "word_bank": [
        "content",
        "word",
        "emotional",
        "hardware"
      ],
      "correct_answers": [
        "content",
        "word"
      ],
      "correct_feedback": "Correct. Generative AI creates new content by predicting sequences of words.",
      "incorrect_feedback": "Generative AI predicts word sequences to generate content; it does not produce emotional or hardware outputs."
    },
    {
      "id": 29,
      "type": "duolingo_style",
      "question": "AI systems aim to produce responses that sound ______, even if they are not always ______.",
      "word_bank": [
        "plausible",
        "correct",
        "conscious",
        "neutral"
      ],
      "correct_answers": [
        "plausible",
        "correct"
      ],
      "correct_feedback": "Correct. AI often generates plausible language, but it may not always be factually correct.",
      "incorrect_feedback": "AI systems prioritize plausible language patterns, which does not guarantee correctness."
    },
    {
      "id": 30,
      "type": "duolingo_style",
      "question": "Responsible AI use requires human ______ and critical ______.",
      "word_bank": [
        "oversight",
        "evaluation",
        "automation",
        "delegation"
      ],
      "correct_answers": [
        "oversight",
        "evaluation"
      ],
      "correct_feedback": "Correct. Human oversight and critical evaluation are essential when using AI tools.",
      "incorrect_feedback": "Responsible AI use depends on oversight and evaluation, not full automation or delegation."
    }
  ]
}
"""

all_pools = []
for block in raw_json.strip().split('}\n\n{'):
    if not block.startswith('{'): block = '{' + block
    if not block.endswith('}'): block = block + '}'
    data = json.loads(block)
    all_pools.extend(data['questions'])

final_js_array = []
for q in all_pools:
    obj = {
        "original_id": q["id"],
        "question": q["question"],
        "correctFeedback": q["correct_feedback"],
        "incorrectFeedback": q["incorrect_feedback"],
        "xp": 10  # default
    }
    
    if q["type"] == "single_select":
        obj["type"] = "choice"
        obj["options"] = []
        for key, text in q["options"].items():
            is_correct = key == q["correct_answer"]
            obj["options"].append({
                "text": text,
                "correct": is_correct,
                "feedback": q["correct_feedback"] if is_correct else q["incorrect_feedback"]
            })
            
    elif q["type"] == "multiple_select":
        obj["type"] = "multiple_choice"
        obj["options"] = []
        for opt_text in q["options"]:
            is_correct = opt_text in q["correct_answers"]
            obj["options"].append({
                "text": opt_text,
                "correct": is_correct
            })
            
    elif q["type"] == "slide_to_order":
        obj["type"] = "ordering"
        obj["items"] = q["options"]
        # Convert text array correct_order into index array based on options
        obj["correct_order"] = [q["options"].index(x) for x in q["correct_order"]]
        
    elif q["type"] == "match_the_following":
        obj["type"] = "matching"
        obj["pairs"] = []
        obj["shuffledRight"] = []
        
        # parse the letters/numbers mapping safely
        # keys in pairs: "A. xxx", values: "1"
        for left_text, right_num_str in q["pairs"].items():
            # fetch actual right string by finding it in options_right starting with "N. "
            right_match = next((x for x in q["options_right"] if x.startswith(right_num_str + ".")), None)
            
            # format cleanly without prefixes
            clean_left = re.sub(r'^[A-Z]\.\s', '', left_text)
            clean_right = re.sub(r'^[0-9]\.\s', '', right_match) if right_match else "ERROR"
            
            obj["pairs"].append({
                "left": clean_left,
                "right": clean_right
            })
        
        # provide the unshuffled list for dynamic right side
        obj["shuffledRight"] = [re.sub(r'^[0-9]\.\s', '', x) for x in q["options_right"]]
        
    elif q["type"] == "duolingo_style":
        obj["type"] = "fill_in_blanks"
        # We need to turn their plain text question into a [blank] bracketed text.
        # They provided correct answers in order. We'll reconstruct the text if possible, or just generate standard [blank] markers
        # Actually in their JSON they don't give the complete bracketed text, they give:
        # "Artificial Intelligence systems rely on statistical ______ rather than fixed ______."
        text_with_blanks = q["question"].replace("______", "[blank_placeholder]")
        # Replace each placeholder with the real correct answer in brackets
        for ans in q["correct_answers"]:
            text_with_blanks = text_with_blanks.replace("[blank_placeholder]", f"[{ans}]", 1)
            
        obj["text"] = text_with_blanks
        # Remove the main question so it doesn't duplicate the sentence
        obj["question"] = "Fill in the blank" 
        obj["wordBank"] = q["word_bank"]

    final_js_array.append(obj)

with open("/Users/lijinns/Desktop/Notebook/AG/d11/processed_questions.json", "w") as f:
    json.dump(final_js_array, f, indent=4)
print("Saved 30 questions to processed_questions.json")
