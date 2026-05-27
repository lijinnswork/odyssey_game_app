import json
import re
import random

data = [
    {
      "id": 1,
      "type": "single_select",
      "question": "An educator uses AI to generate quiz questions and then edits them before use. What role is the educator primarily playing?",
      "options": {
        "a": "Data annotator",
        "b": "System trainer",
        "c": "Human supervisor",
        "d": "Autonomous evaluator"
      },
      "correct_answer": "c",
      "correct_feedback": "Correct. Human supervision ensures AI outputs are reviewed and refined before use.",
      "incorrect_feedback": "Editing and validating AI-generated content reflects oversight of AI outputs rather than training or autonomous evaluation."
    },
    {
      "id": 2,
      "type": "single_select",
      "question": "A predictive AI model performs poorly after being introduced to a new type of student data. What is the most likely reason?",
      "options": {
        "a": "The model lacks emotional calibration",
        "b": "The new data differs from its training distribution",
        "c": "The algorithm stopped updating automatically",
        "d": "The interface is not optimized"
      },
      "correct_answer": "b",
      "correct_feedback": "Correct. AI models rely on patterns learned from their training data.",
      "incorrect_feedback": "Model performance often declines when new input data differs significantly from the distribution of the training dataset."
    },
    {
      "id": 3,
      "type": "single_select",
      "question": "Why is AI often described as 'pattern-based' rather than 'understanding-based'?",
      "options": {
        "a": "It encodes symbolic reasoning rules to process information",
        "b": "It relies on correlations without contextual awareness",
        "c": "It simulates conscious reflection",
        "d": "It adapts goals based on feedback"
      },
      "correct_answer": "b",
      "correct_feedback": "Correct. AI identifies statistical relationships between patterns in data.",
      "incorrect_feedback": "Most AI systems detect correlations in data rather than interpreting meaning with contextual awareness."
    },
    {
      "id": 4,
      "type": "single_select",
      "question": "If a generative AI creates a persuasive but factually incorrect explanation, this illustrates:",
      "options": {
        "a": "Overfitting to training data",
        "b": "Deterministic bias",
        "c": "Statistical fluency without verification",
        "d": "Incomplete dataset indexing"
      },
      "correct_answer": "c",
      "correct_feedback": "Correct. Generative AI produces fluent responses by predicting language patterns.",
      "incorrect_feedback": "Generative models generate likely word sequences and do not inherently verify factual accuracy."
    },
    {
      "id": 5,
      "type": "single_select",
      "question": "Which scenario best demonstrates responsible AI integration in teaching?",
      "options": {
        "a": "Using AI-generated grades without review",
        "b": "Using AI summaries as preparation before class discussion",
        "c": "Replacing classroom interaction with AI tutoring",
        "d": "Delegating all assessment design to AI"
      },
      "correct_answer": "b",
      "correct_feedback": "Correct. AI can support preparation while educators retain instructional authority.",
      "incorrect_feedback": "Responsible AI integration supports instructional tasks but does not replace human judgment or classroom interaction."
    },
    {
      "id": 6,
      "type": "single_select",
      "question": "When AI suggests a personalized learning pathway, what underlying mechanism enables this?",
      "options": {
        "a": "Emotional profiling",
        "b": "Predefined academic rules",
        "c": "Pattern recognition from prior data",
        "d": "Independent pedagogical reasoning"
      },
      "correct_answer": "c",
      "correct_feedback": "Correct. Personalized recommendations emerge from patterns identified in prior learner data.",
      "incorrect_feedback": "AI personalization systems analyze historical learner behavior and performance to detect patterns that guide recommendations."
    },
    {
      "id": 7,
      "type": "multiple_select",
      "question": "Which characteristics distinguish Machine Learning systems from traditional programs?",
      "options": [
        "Adaptation based on data exposure",
        "Fixed logical decision trees",
        "Statistical optimization",
        "Explicit manual rule encoding"
      ],
      "correct_answers": [
        "Adaptation based on data exposure",
        "Statistical optimization"
      ],
      "correct_feedback": "Correct. Machine learning systems adapt through data exposure and optimize statistical models.",
      "incorrect_feedback": "Machine learning systems update their behavior through statistical learning from data rather than relying only on manually coded rules."
    },
    {
      "id": 8,
      "type": "multiple_select",
      "question": "Which risks emerge when AI systems are deployed without sufficient oversight?",
      "options": [
        "Reinforcement of hidden biases",
        "Reduced human accountability",
        "Improved contextual sensitivity",
        "Overreliance on automated outputs"
      ],
      "correct_answers": [
        "Reinforcement of hidden biases",
        "Reduced human accountability",
        "Overreliance on automated outputs"
      ],
      "correct_feedback": "Correct. Lack of oversight can amplify bias and increase dependence on automated decisions.",
      "incorrect_feedback": "Unmonitored AI systems can reproduce biases present in data and shift decision responsibility away from human oversight."
    },
    {
      "id": 9,
      "type": "multiple_select",
      "question": "Which elements influence the quality of AI-generated responses?",
      "options": [
        "Training data diversity",
        "Prompt clarity",
        "Hardware casing design",
        "Model architecture"
      ],
      "correct_answers": [
        "Training data diversity",
        "Prompt clarity",
        "Model architecture"
      ],
      "correct_feedback": "Correct. Response quality depends on the training data, model design, and the clarity of prompts.",
      "incorrect_feedback": "AI output quality is determined by factors such as training data diversity, model structure, and how clearly prompts guide the model."
    },
    {
      "id": 10,
      "type": "multiple_select",
      "question": "Which scenarios reflect appropriate AI assistance rather than replacement?",
      "options": [
        "Brainstorming research angles",
        "Final grading of dissertations",
        "Draft structuring support",
        "Automated ethical adjudication"
      ],
      "correct_answers": [
        "Brainstorming research angles",
        "Draft structuring support"
      ],
      "correct_feedback": "Correct. AI can assist with idea generation and drafting tasks.",
      "incorrect_feedback": "High-stakes academic evaluation and ethical decisions require human authority, while early-stage thinking and drafting tasks can be supported by AI."
    },
    {
      "id": 11,
      "type": "multiple_select",
      "question": "Which statements about AI limitations are accurate?",
      "options": [
        "AI lacks intrinsic intent",
        "AI responses are probabilistic",
        "AI evaluates moral trade-offs independently",
        "AI may generalize patterns inaccurately"
      ],
      "correct_answers": [
        "AI lacks intrinsic intent",
        "AI responses are probabilistic",
        "AI may generalize patterns inaccurately"
      ],
      "correct_feedback": "Correct. AI systems generate probabilistic outputs and may generalize patterns beyond their training data.",
      "incorrect_feedback": "AI outputs are generated through probability-based predictions and pattern generalization rather than intentional or independent reasoning."
    },
    {
      "id": 12,
      "type": "multiple_select",
      "question": "Which factors can reduce hallucination risk?",
      "options": [
        "Clear prompting",
        "Cross-verification",
        "Blind trust in fluent output",
        "Domain-specific constraints"
      ],
      "correct_answers": [
        "Clear prompting",
        "Cross-verification",
        "Domain-specific constraints"
      ],
      "correct_feedback": "Correct. Clear prompts, verification, and domain constraints improve reliability.",
      "incorrect_feedback": "Hallucination risk decreases when outputs are constrained, prompts are clear, and responses are verified against reliable information."
    },
    {
      "id": 13,
      "type": "slide_to_order",
      "question": "Arrange steps in evaluating AI-generated content:",
      "options": [
        "Assess coherence",
        "Cross-check claims",
        "Revise inaccuracies",
        "Approve for use"
      ],
      "correct_order": [
        "Assess coherence",
        "Cross-check claims",
        "Revise inaccuracies",
        "Approve for use"
      ],
      "correct_feedback": "Correct. Evaluation progresses from understanding the response to verifying accuracy before approval.",
      "incorrect_feedback": "Evaluation of AI output typically begins with reviewing the response, followed by fact-checking, corrections, and final approval."
    },
    {
      "id": 14,
      "type": "slide_to_order",
      "question": "Arrange the AI adaptation cycle:",
      "options": [
        "Deploy model",
        "Collect new data",
        "Adjust internal parameters",
        "Evaluate performance"
      ],
      "correct_order": [
        "Deploy model",
        "Collect new data",
        "Adjust internal parameters",
        "Evaluate performance"
      ],
      "correct_feedback": "Correct. AI systems adapt through deployment, data collection, parameter adjustment, and evaluation.",
      "incorrect_feedback": "AI improvement cycles begin with real-world deployment, followed by data collection, model adjustment, and performance evaluation."
    },
    {
      "id": 15,
      "type": "slide_to_order",
      "question": "Arrange responsible AI classroom implementation:",
      "options": [
        "Identify objective",
        "Select appropriate tool",
        "Pilot in controlled context",
        "Review impact"
      ],
      "correct_order": [
        "Identify objective",
        "Select appropriate tool",
        "Pilot in controlled context",
        "Review impact"
      ],
      "correct_feedback": "Correct. Effective AI integration begins with objectives and ends with evaluation of impact.",
      "incorrect_feedback": "Responsible implementation typically starts with defining the learning goal, followed by tool selection, pilot testing, and reviewing outcomes."
    },
    {
      "id": 16,
      "type": "slide_to_order",
      "question": "Arrange generative output formation conceptually:",
      "options": [
        "Process prompt",
        "Generate token probabilities",
        "Select likely sequence",
        "Produce response"
      ],
      "correct_order": [
        "Process prompt",
        "Generate token probabilities",
        "Select likely sequence",
        "Produce response"
      ],
      "correct_feedback": "Correct. Generative models transform prompts into probability distributions and produce responses from predicted sequences.",
      "incorrect_feedback": "Generative models first interpret the prompt, then calculate token probabilities, choose the most likely sequence, and output the response."
    },
    {
      "id": 17,
      "type": "slide_to_order",
      "question": "Arrange risk mitigation steps:",
      "options": [
        "Identify potential bias",
        "Monitor usage patterns",
        "Implement safeguards",
        "Adjust deployment"
      ],
      "correct_order": [
        "Identify potential bias",
        "Implement safeguards",
        "Monitor usage patterns",
        "Adjust deployment"
      ],
      "correct_feedback": "Correct. Risk mitigation begins with identifying bias and introducing safeguards before monitoring and adjusting systems.",
      "incorrect_feedback": "Risk mitigation generally starts by identifying possible bias, followed by safeguards, monitoring real-world usage, and adjusting deployment."
    },
    {
      "id": 18,
      "type": "slide_to_order",
      "question": "Arrange increasing abstraction:",
      "options": [
        "Data points",
        "Patterns",
        "Predictions",
        "Decisions"
      ],
      "correct_order": [
        "Data points",
        "Patterns",
        "Predictions",
        "Decisions"
      ],
      "correct_feedback": "Correct. AI systems transform raw data into patterns, predictions, and ultimately decisions.",
      "incorrect_feedback": "Information processing typically moves from raw data to patterns, then predictions, and finally decision-making."
    },
    {
      "id": 19,
      "type": "match_the_following",
      "question": "Match concept to implication:",
      "options_left": [
        "A. Probabilistic output",
        "B. Training distribution",
        "C. Human oversight",
        "D. Prompt design"
      ],
      "options_right": [
        "1. Influences response quality",
        "2. Determines contextual relevance",
        "3. Reduces automation risks",
        "4. Explains variability in responses"
      ],
      "correct_pairs": {
        "A": "4",
        "B": "2",
        "C": "3",
        "D": "1"
      },
      "correct_feedback": "Correct. Probabilistic outputs create variability, training distribution shapes relevance, human oversight reduces risk, and prompts influence responses.",
      "incorrect_feedback": "Probabilistic systems naturally produce varied outputs, training data defines context relevance, oversight reduces risk, and prompts shape generated responses."
    },
    {
      "id": 20,
      "type": "match_the_following",
      "question": "Match AI behavior to explanation:",
      "options_left": [
        "A. Hallucination",
        "B. Personalization",
        "C. Automation",
        "D. Bias amplification"
      ],
      "options_right": [
        "1. Pattern extension beyond evidence",
        "2. Behavior shaped by prior user data",
        "3. Execution of repetitive processes",
        "4. Replication of skewed dataset trends"
      ],
      "correct_pairs": {
        "A": "1",
        "B": "2",
        "C": "3",
        "D": "4"
      },
      "correct_feedback": "Correct. Each behavior reflects how AI systems extend patterns, personalize outputs, automate processes, or replicate data trends.",
      "incorrect_feedback": "Hallucination occurs when patterns extend beyond evidence, personalization reflects prior data patterns, automation executes repeated tasks, and bias amplification mirrors skewed datasets."
    },
    {
      "id": 21,
      "type": "match_the_following",
      "question": "Match limitation with mitigation:",
      "options_left": [
        "A. Data bias",
        "B. Overconfidence",
        "C. Context loss",
        "D. Statistical error"
      ],
      "options_right": [
        "1. Critical human review",
        "2. Broader training data",
        "3. Prompt refinement",
        "4. Validation checks"
      ],
      "correct_pairs": {
        "A": "2",
        "B": "1",
        "C": "3",
        "D": "4"
      },
      "correct_feedback": "Correct. Each mitigation directly addresses a specific AI limitation.",
      "incorrect_feedback": "Bias relates to dataset composition, overconfidence requires human review, context issues improve with better prompts, and statistical errors require validation."
    },
    {
      "id": 22,
      "type": "match_the_following",
      "question": "Match AI strength to educational use:",
      "options_left": [
        "A. Rapid summarization",
        "B. Pattern clustering",
        "C. Predictive analytics",
        "D. Content generation"
      ],
      "options_right": [
        "1. Student performance forecasting",
        "2. Draft creation",
        "3. Thematic grouping",
        "4. Reading condensation"
      ],
      "correct_pairs": {
        "A": "4",
        "B": "3",
        "C": "1",
        "D": "2"
      },
      "correct_feedback": "Correct. Each AI strength supports a different educational function.",
      "incorrect_feedback": "Summarization condenses reading, clustering groups patterns, predictive analytics forecasts outcomes, and generative models create draft content."
    },
    {
      "id": 23,
      "type": "match_the_following",
      "question": "Match concept to scope:",
      "options_left": [
        "A. Narrow AI",
        "B. General AI",
        "C. Machine Learning",
        "D. Generative Model"
      ],
      "options_right": [
        "1. Hypothetical multi-domain intelligence",
        "2. Task-bound system",
        "3. Pattern optimization method",
        "4. Content-producing system"
      ],
      "correct_pairs": {
        "A": "2",
        "B": "1",
        "C": "3",
        "D": "4"
      },
      "correct_feedback": "Correct. Each concept reflects a different level or function of AI capability.",
      "incorrect_feedback": "Narrow AI performs specific tasks, general AI refers to hypothetical broad intelligence, machine learning optimizes patterns, and generative models create content."
    },
    {
      "id": 24,
      "type": "match_the_following",
      "question": "Match classroom decision with AI suitability:",
      "options_left": [
        "A. Brainstorming session",
        "B. Final ethics review",
        "C. Data visualization",
        "D. High-stakes evaluation"
      ],
      "options_right": [
        "1. Suitable AI support",
        "2. Requires human authority"
      ],
      "correct_pairs": {
        "A": "1",
        "B": "2",
        "C": "1",
        "D": "2"
      },
      "correct_feedback": "Correct. Some tasks benefit from AI support, while others require human responsibility.",
      "incorrect_feedback": "Creative support tasks such as brainstorming or visualization can use AI assistance, while ethical decisions and high-stakes evaluations require human authority."
    },
    {
      "id": 25,
      "type": "duolingo_style",
      "question": "AI systems produce outputs based on statistical ______ rather than conscious ______.",
      "word_bank": [
        "probabilities",
        "reasoning",
        "intention",
        "awareness"
      ],
      "correct_answers": [
        "probabilities",
        "awareness"
      ],
      "correct_feedback": "Correct. AI generates outputs using statistical probabilities.",
      "incorrect_feedback": "AI output generation relies on probability calculations rather than conscious awareness."
    },
    {
      "id": 26,
      "type": "duolingo_style",
      "question": "A model performs poorly when exposed to unfamiliar ______ because it was trained within a limited ______.",
      "word_bank": [
        "data",
        "distribution",
        "hardware",
        "interface"
      ],
      "correct_answers": [
        "data",
        "distribution"
      ],
      "correct_feedback": "Correct. AI models depend on the distribution of their training data.",
      "incorrect_feedback": "Model performance depends on similarity between new input data and the distribution of data used during training."
    },
    {
      "id": 27,
      "type": "duolingo_style",
      "question": "Human ______ is necessary because AI systems lack independent ______ judgment.",
      "word_bank": [
        "oversight",
        "ethical",
        "autonomous",
        "statistical"
      ],
      "correct_answers": [
        "oversight",
        "ethical"
      ],
      "correct_feedback": "Correct. Human oversight ensures ethical accountability in AI use.",
      "incorrect_feedback": "AI systems generate outputs without independent ethical judgment, which makes human oversight necessary."
    },
    {
      "id": 28,
      "type": "duolingo_style",
      "question": "Generative AI creates responses by predicting likely ______ based on learned ______.",
      "word_bank": [
        "tokens",
        "patterns",
        "instincts",
        "memories"
      ],
      "correct_answers": [
        "tokens",
        "patterns"
      ],
      "correct_feedback": "Correct. Generative models predict tokens using learned patterns from training data.",
      "incorrect_feedback": "Generative AI predicts sequences of tokens derived from statistical patterns learned during training."
    },
    {
      "id": 29,
      "type": "duolingo_style",
      "question": "Bias can emerge when training data reflects historical ______ and is not adequately ______.",
      "word_bank": [
        "imbalances",
        "diversified",
        "neutral",
        "automated"
      ],
      "correct_answers": [
        "imbalances",
        "diversified"
      ],
      "correct_feedback": "Correct. Balanced and diverse datasets help reduce bias in AI outputs.",
      "incorrect_feedback": "Bias in AI systems often originates from imbalances in historical datasets that lack sufficient diversity."
    },
    {
      "id": 30,
      "type": "duolingo_style",
      "question": "Responsible AI integration involves critical ______ and contextual ______.",
      "word_bank": [
        "evaluation",
        "awareness",
        "automation",
        "delegation"
      ],
      "correct_answers": [
        "evaluation",
        "awareness"
      ],
      "correct_feedback": "Correct. Responsible AI use requires evaluation and contextual awareness.",
      "incorrect_feedback": "Responsible AI use depends on critical evaluation of outputs and awareness of context and limitations."
    }
  ]

formatted_data = []

for q in data:
    new_q = {
        "original_id": q["id"],
        "question": q["question"] if q["type"] != "duolingo_style" else "Fill in the blank",
        "correctFeedback": q["correct_feedback"],
        "incorrectFeedback": q["incorrect_feedback"],
        "xp": 10
    }
    
    if q["type"] == "single_select":
        new_q["type"] = "choice"
        new_q["options"] = []
        correct = q["correct_answer"]
        for key, text in q["options"].items():
            new_q["options"].append({
                "text": text,
                "correct": key == correct,
                "feedback": q["correct_feedback"] if key == correct else q["incorrect_feedback"]
            })
            
    elif q["type"] == "multiple_select":
        new_q["type"] = "multiple_choice"
        new_q["options"] = []
        for text in q["options"]:
            new_q["options"].append({
                "text": text,
                "correct": text in q["correct_answers"]
            })
            
    elif q["type"] == "slide_to_order":
        new_q["type"] = "ordering"
        items = q["options"].copy()
        
        # In level 1, the logic requires items to be exactly the string labels, 
        # and correct_order defines the correct index of each element in items.
        # So correct_order mapping: correct_order[i] is the index of the item that should be in position i 
        # Wait, the structure in the previous file:
        # "items": ["Perceive", "Act", "Learn", "Reason"], "correct_order": [0, 2, 3, 1]
        # This means: position 0 is "Perceive", position 1 is "Learn", position 2 is "Reason", position 3 is "Act".
        
        # shuffle the items array for the initial display:
        random.shuffle(items)
        new_q["items"] = items
        
        c_order = []
        for correct_item in q["correct_order"]:
            c_order.append(items.index(correct_item))
        new_q["correct_order"] = c_order

    elif q["type"] == "match_the_following":
        new_q["type"] = "matching"
        new_q["pairs"] = []
        
        def clean_val(val):
            return val[val.find('.')+1:].strip()
            
        left_dict = {val.split('.')[0].strip(): clean_val(val) for val in q["options_left"]}
        right_dict = {val.split('.')[0].strip(): clean_val(val) for val in q["options_right"]}
        
        for k, v in q["correct_pairs"].items():
            new_q["pairs"].append({
                "left": left_dict[k],
                "right": right_dict[v]
            })
        
        shuffled_rights = list(right_dict.values())
        random.shuffle(shuffled_rights)
        new_q["shuffledRight"] = shuffled_rights

    elif q["type"] == "duolingo_style":
        new_q["question"] = "Fill in the blank"
        new_q["type"] = "fill_in_blanks"
        
        text = q["question"]
        for ans in q["correct_answers"]:
            text = re.sub(r'_+', f'[{ans}]', text, count=1)
        new_q["text"] = text
        
        wb = q["word_bank"].copy()
        random.shuffle(wb)
        new_q["wordBank"] = wb

    formatted_data.append(new_q)

import sys

with open('content.js', 'r') as f:
    text = f.read()

start_idx = text.find("const chapter1Level2Questions = [")
if start_idx == -1:
    print("Could not find start")
    sys.exit(1)

# Find end
end_idx = text.find("];", start_idx) + 1

new_array_str = "[\n"
for idx, q in enumerate(formatted_data):
    s = json.dumps(q, indent=20)
    # The JSON string needs proper indentation so it looks cleanly formatted, but `json.dumps(indent)` might be too uniform.
    s = s.replace('\n', '\n                ')
    new_array_str += "                " + s + ("," if idx < len(formatted_data) - 1 else "") + "\n"
new_array_str += "            ];"

# we need to replace the content correctly
# be very careful! `const chapter1Level2Questions = ` + new_array_str + text[end_idx:] Wait! The end of array may not be the first `];` because there are nested arrays (e.g. `options: []` could have `];` inside? No, `json` dumps as `]` without `;`). But what if the existing `content.js` has a `];` inside a string or comment?
# Using the bracket counting from before is safer!
bracket_count = 0
in_string = False
string_char = None
escape = False
real_end_idx = -1

for i in range(start_idx + len("const chapter1Level2Questions = "), len(text)):
    char = text[i]
    if escape:
        escape = False
        continue
    
    if char == '\\':
        escape = True
        continue
    
    if in_string:
        if char == string_char:
            in_string = False
    else:
        if char in ["'", '"', '`']:
            in_string = True
            string_char = char
        elif char == '[':
            bracket_count += 1
        elif char == ']':
            bracket_count -= 1
            if bracket_count == 0:
                real_end_idx = text.find(";", i)
                break

if real_end_idx == -1:
    print("Could not find real end")
    sys.exit(1)

new_content = text[:start_idx + len("const chapter1Level2Questions = ")] + new_array_str[len("[\n") - 1:] + text[real_end_idx + 1:]

with open('content.js', 'w') as f:
    f.write(new_content)

print("Insertion complete.")

