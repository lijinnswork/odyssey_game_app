import json
import re
import random

data = [
{
"id": 1,
"level": 4,
"type": "single_select",
"question": "An institution adopts AI grading to improve efficiency but does not disclose this to students. The most significant concern is:",
"options": [
"Reduced grading speed",
"Lack of transparency",
"Increased model complexity",
"Insufficient hardware optimization"
],
"correct_answer": "Lack of transparency",
"correct_feedback": "Transparency ensures that stakeholders understand when automated systems influence evaluation or decision-making processes.",
"incorrect_feedback": "Responsible AI governance requires disclosure of system use, especially when automated systems influence assessment or outcomes."
},

{
"id": 2,
"level": 4,
"type": "single_select",
"question": "If AI systems are trained predominantly on historically biased datasets, what is the most systemic risk?",
"options": [
"Reduced linguistic variation",
"Amplification of structural inequities",
"Decreased predictive stability",
"Overfitting to individual users and context"
],
"correct_answer": "Amplification of structural inequities",
"correct_feedback": "When biased historical patterns are learned and scaled by AI systems, they can reinforce and magnify existing inequalities.",
"incorrect_feedback": "AI models reproduce patterns found in their training data; biased datasets can therefore scale structural inequities."
},

{
"id": 3,
"level": 4,
"type": "single_select",
"question": "Which best explains why AI cannot independently assume institutional accountability?",
"options": [
"It lacks regulatory compliance mechanisms",
"It operates through statistical inference without moral agency",
"It cannot process complex datasets",
"It lacks real-time adaptability"
],
"correct_answer": "It operates through statistical inference without moral agency",
"correct_feedback": "AI systems generate outputs through statistical inference and therefore cannot hold moral responsibility or institutional accountability.",
"incorrect_feedback": "Accountability requires moral agency and responsibility, which statistical systems do not possess."
},

{
"id": 4,
"level": 4,
"type": "single_select",
"question": "An AI tool consistently produces well-structured but shallow lesson plans. This most directly illustrates:",
"options": [
"Computational inefficiency and limitations",
"Optimization toward surface coherence",
"Dataset scarcity for training",
"Human misuse"
],
"correct_answer": "Optimization toward surface coherence",
"correct_feedback": "Generative systems often prioritize fluency and structural coherence, which can produce polished outputs without deep conceptual reasoning.",
"incorrect_feedback": "Generative AI frequently optimizes for fluency and structure, which can produce coherent outputs that lack depth."
},

{
"id": 5,
"level": 4,
"type": "single_select",
"question": "What distinguishes responsible AI augmentation from automation overreach?",
"options": [
"Speed of AI model implementation",
"Degree of human authority retained",
"Size of the dataset used for training",
"Level of personalization involved"
],
"correct_answer": "Degree of human authority retained",
"correct_feedback": "Responsible augmentation preserves human authority in decision-making while AI provides supportive analysis or recommendations.",
"incorrect_feedback": "The key distinction between augmentation and overreach lies in whether humans retain final decision authority."
},

{
"id": 6,
"level": 4,
"type": "single_select",
"question": "If faculty defer difficult academic decisions to AI to avoid controversy, the primary long-term risk is:",
"options": [
"Reduced algorithmic diversity",
"Erosion of professional responsibility",
"Increased system interpretability",
"Model stagnation"
],
"correct_answer": "Erosion of professional responsibility",
"correct_feedback": "Delegating difficult decisions to automated systems can gradually weaken professional accountability and institutional responsibility.",
"incorrect_feedback": "When authority shifts to automated systems, professional responsibility and institutional accountability can erode."
},

{
"id": 7,
"level": 4,
"type": "multiple_select",
"question": "Which governance principles strengthen responsible AI adoption?",
"options": [
"Transparency in usage",
"Defined human oversight roles",
"Full automation of evaluative authority",
"Periodic performance auditing"
],
"correct_answers": [
"Transparency in usage",
"Defined human oversight roles",
"Periodic performance auditing"
],
"correct_feedback": "Responsible AI governance relies on transparency, clear oversight responsibilities, and periodic auditing of system performance.",
"incorrect_feedback": "Effective governance frameworks include transparency, oversight roles, and regular evaluation of AI system outcomes."
},

{
"id": 8,
"level": 4,
"type": "multiple_select",
"question": "Which scenarios reflect automation overreach?",
"options": [
"AI assigns final disciplinary action",
"AI drafts preliminary feedback",
"AI determines scholarship eligibility without review",
"AI clusters student feedback themes"
],
"correct_answers": [
"AI assigns final disciplinary action",
"AI determines scholarship eligibility without review"
],
"correct_feedback": "Automation overreach occurs when AI systems assume authority over high-stakes decisions without human review.",
"incorrect_feedback": "Automation overreach typically involves delegating high-stakes authority to AI without meaningful human oversight."
},

{
"id": 9,
"level": 4,
"type": "multiple_select",
"question": "Which risks increase when AI is deployed at institutional scale?",
"options": [
"Standardized bias replication",
"Reduced diversity in pedagogical style",
"Increased interpretability by default",
"Overdependence on automated systems"
],
"correct_answers": [
"Standardized bias replication",
"Reduced diversity in pedagogical style",
"Overdependence on automated systems"
],
"correct_feedback": "Large-scale deployment can replicate biases, standardize practices, and increase dependence on automated systems.",
"incorrect_feedback": "Scaling AI systems can replicate biases, reduce diversity of approaches, and increase reliance on automation."
},

{
"id": 10,
"level": 4,
"type": "multiple_select",
"question": "Which conditions improve fairness in AI-supported systems?",
"options": [
"Diverse training data",
"Ongoing bias evaluation",
"Blind deployment across contexts",
"Clear accountability frameworks"
],
"correct_answers": [
"Diverse training data",
"Ongoing bias evaluation",
"Clear accountability frameworks"
],
"correct_feedback": "Fairness improves through diverse data, continuous bias evaluation, and clearly defined accountability structures.",
"incorrect_feedback": "Fair AI systems depend on diverse datasets, regular bias assessment, and accountability mechanisms."
},
{
"id": 11,
"level": 4,
"type": "multiple_select",
"question": "Which reflect structural differences between AI reasoning and human reasoning?",
"options": [
"AI relies on statistical correlation",
"Humans apply contextual judgment",
"AI possesses intrinsic ethical intent",
"Humans integrate lived experience"
],
"correct_answers": [
"AI relies on statistical correlation",
"Humans apply contextual judgment",
"Humans integrate lived experience"
],
"correct_feedback": "AI systems infer patterns from statistical correlations, while humans interpret situations using contextual judgment and lived experience.",
"incorrect_feedback": "AI reasoning relies on statistical patterns, whereas human reasoning incorporates contextual understanding and real-world experience."
},

{
"id": 12,
"level": 4,
"type": "multiple_select",
"question": "Which are signals of overreliance on AI?",
"options": [
"Reduced critical review",
"Delegation of high-stakes authority",
"Transparent documentation",
"Decline in independent expertise development"
],
"correct_answers": [
"Reduced critical review",
"Delegation of high-stakes authority",
"Decline in independent expertise development"
],
"correct_feedback": "Overreliance often appears when human review decreases, authority shifts to automated systems, and independent expertise declines.",
"incorrect_feedback": "Signals of overreliance include reduced scrutiny, delegation of important decisions, and decreasing development of human expertise."
},

{
"id": 13,
"level": 4,
"type": "slide_to_order",
"question": "Arrange the steps of governance implementation logically.",
"items": [
"Define AI purpose",
"Establish oversight roles",
"Deploy system",
"Conduct periodic audits"
],
"correct_order": [
"Define AI purpose",
"Establish oversight roles",
"Deploy system",
"Conduct periodic audits"
],
"correct_feedback": "Governance begins with defining objectives, assigning oversight, deploying systems, and then auditing outcomes periodically.",
"incorrect_feedback": "Effective governance starts with clear purpose, followed by oversight structures, deployment, and ongoing audits."
},

{
"id": 14,
"level": 4,
"type": "slide_to_order",
"question": "Arrange the escalation of ethical risk in AI systems.",
"items": [
"Isolated error",
"Repeated inaccuracy",
"Embedded systemic bias",
"Institution-wide inequity"
],
"correct_order": [
"Isolated error",
"Repeated inaccuracy",
"Embedded systemic bias",
"Institution-wide inequity"
],
"correct_feedback": "Small isolated errors can compound into repeated inaccuracies, eventually embedding systemic bias and producing institutional inequity.",
"incorrect_feedback": "Risk escalation often begins with isolated errors, which can repeat, embed bias, and ultimately influence institutional outcomes."
},

{
"id": 15,
"level": 4,
"type": "slide_to_order",
"question": "Arrange the stages of responsible AI evaluation.",
"items": [
"Identify performance gaps",
"Investigate data sources",
"Apply corrective measures",
"Reassess system impact"
],
"correct_order": [
"Identify performance gaps",
"Investigate data sources",
"Apply corrective measures",
"Reassess system impact"
],
"correct_feedback": "Responsible evaluation identifies issues, investigates underlying data, applies corrections, and reassesses system impact.",
"incorrect_feedback": "Evaluation cycles typically begin by identifying gaps, examining data sources, applying corrections, and reassessing outcomes."
},

{
"id": 16,
"level": 4,
"type": "slide_to_order",
"question": "Arrange the spectrum of decision authority involving AI.",
"items": [
"Human-led with AI assistance",
"Shared evaluation",
"AI-dominant evaluation",
"Fully autonomous authority"
],
"correct_order": [
"Human-led with AI assistance",
"Shared evaluation",
"AI-dominant evaluation",
"Fully autonomous authority"
],
"correct_feedback": "Decision authority often evolves from human-led assistance toward increasing AI influence and eventually full autonomy.",
"incorrect_feedback": "Authority progression typically moves from human-led assistance to shared decisions, then AI-dominant roles."
},

{
"id": 17,
"level": 4,
"type": "slide_to_order",
"question": "Arrange the progression of AI misuse through reliance.",
"items": [
"Convenience reliance",
"Reduced scrutiny",
"Delegated authority",
"Accountability diffusion"
],
"correct_order": [
"Convenience reliance",
"Reduced scrutiny",
"Delegated authority",
"Accountability diffusion"
],
"correct_feedback": "Reliance often begins with convenience, reduces scrutiny over time, leads to authority delegation, and eventually diffuses accountability.",
"incorrect_feedback": "Misuse progression often starts with convenience reliance, which reduces scrutiny and eventually shifts authority away from humans."
},

{
"id": 18,
"level": 4,
"type": "slide_to_order",
"question": "Arrange the sequence for building trust in institutional AI systems.",
"items": [
"Transparency disclosure",
"Performance validation",
"Stakeholder engagement",
"Policy codification"
],
"correct_order": [
"Transparency disclosure",
"Performance validation",
"Stakeholder engagement",
"Policy codification"
],
"correct_feedback": "Trust-building begins with transparency, followed by validating system performance, engaging stakeholders, and formalizing policy.",
"incorrect_feedback": "Trust frameworks often begin with transparency, followed by demonstrating performance and engaging stakeholders before policy formalization."
},

{
"id": 19,
"level": 4,
"type": "match_the_following",
"question": "Match each governance principle to its function.",
"pairs": {
"A": "Transparency",
"B": "Oversight",
"C": "Audit",
"D": "Accountability"
},
"options": {
"1": "Monitoring system behavior",
"2": "Clarifying responsibility",
"3": "Revealing AI usage",
"4": "Evaluating outcomes periodically"
},
"correct_matches": {
"A": "3",
"B": "1",
"C": "4",
"D": "2"
},
"correct_feedback": "Transparency reveals system use, oversight monitors behavior, audits evaluate outcomes, and accountability clarifies responsibility.",
"incorrect_feedback": "Transparency reveals usage, oversight monitors systems, audits evaluate results periodically, and accountability defines responsibility."
},

{
"id": 20,
"level": 4,
"type": "match_the_following",
"question": "Match each risk with its institutional effect.",
"pairs": {
"A": "Bias amplification",
"B": "Automation overreach",
"C": "Hallucination",
"D": "Overstandardization"
},
"options": {
"1": "Inequitable outcomes",
"2": "Erosion of authority boundaries",
"3": "Misinformation propagation",
"4": "Reduced pedagogical diversity"
},
"correct_matches": {
"A": "1",
"B": "2",
"C": "3",
"D": "4"
},
"correct_feedback": "Bias amplification leads to inequitable outcomes, automation overreach erodes authority boundaries, hallucinations spread misinformation, and overstandardization reduces diversity.",
"incorrect_feedback": "Bias amplification affects fairness, hallucinations spread misinformation, and overstandardization reduces diversity in practices."
},
{
"id": 21,
"level": 4,
"type": "match_the_following",
"question": "Match each conceptual limitation with its implication.",
"pairs": {
"A": "Probabilistic inference",
"B": "Data dependency",
"C": "Lack of moral agency",
"D": "Context fragility"
},
"options": {
"1": "Ethical accountability gap",
"2": "Variability in output",
"3": "Distribution sensitivity",
"4": "Reliance on historical patterns"
},
"correct_matches": {
"A": "2",
"B": "4",
"C": "1",
"D": "3"
},
"correct_feedback": "Probabilistic inference causes output variability, data dependency reflects reliance on historical patterns, lack of moral agency creates accountability gaps, and context fragility produces sensitivity to distribution changes.",
"incorrect_feedback": "Probabilistic inference explains variability, data dependency ties models to historical patterns, and lack of moral agency prevents ethical accountability."
},

{
"id": 22,
"level": 4,
"type": "match_the_following",
"question": "Match each AI integration stage with its primary activity.",
"pairs": {
"A": "Pilot phase",
"B": "Scaling phase",
"C": "Institutional embedding",
"D": "Monitoring phase"
},
"options": {
"1": "Governance formalization",
"2": "Limited experimentation",
"3": "System-wide deployment",
"4": "Continuous review"
},
"correct_matches": {
"A": "2",
"B": "3",
"C": "1",
"D": "4"
},
"correct_feedback": "Pilot phases test ideas through limited experiments, scaling expands deployment, institutional embedding formalizes governance, and monitoring performs continuous review.",
"incorrect_feedback": "Pilots involve experimentation, scaling expands deployment, institutionalization formalizes governance, and monitoring maintains ongoing review."
},

{
"id": 23,
"level": 4,
"type": "match_the_following",
"question": "Match each misuse type with its consequence.",
"pairs": {
"A": "Blind trust",
"B": "Delegated authority",
"C": "Hidden deployment",
"D": "Data neglect"
},
"options": {
"1": "Lack of transparency",
"2": "Absence of bias correction",
"3": "Abdication of responsibility",
"4": "Reduced scrutiny"
},
"correct_matches": {
"A": "4",
"B": "3",
"C": "1",
"D": "2"
},
"correct_feedback": "Blind trust reduces scrutiny, delegated authority shifts responsibility away from humans, hidden deployment removes transparency, and data neglect prevents bias correction.",
"incorrect_feedback": "Blind trust lowers scrutiny, hidden deployment removes transparency, and neglected datasets often prevent bias correction."
},

{
"id": 24,
"level": 4,
"type": "match_the_following",
"question": "Match each AI strength with its potential risk trade-off.",
"pairs": {
"A": "Efficiency",
"B": "Consistency",
"C": "Personalization",
"D": "Scalability"
},
"options": {
"1": "Risk of homogenization",
"2": "Risk of bias scaling",
"3": "Risk of shallow automation",
"4": "Risk of data overreach"
},
"correct_matches": {
"A": "3",
"B": "2",
"C": "4",
"D": "1"
},
"correct_feedback": "Efficiency can encourage shallow automation, consistency may replicate biases, personalization increases data exposure risks, and scalability can standardize practices.",
"incorrect_feedback": "Efficiency sometimes favors shallow automation, consistency may reproduce biases, and large-scale systems can standardize practices."
},

{
"id": 25,
"level": 4,
"type": "duolingo_style",
"question": "Institutional AI governance requires clear ______ structures and defined ______ roles.",
"word_bank": [
"accountability",
"oversight",
"automation",
"abstraction"
],
"correct_answer": [
"accountability",
"oversight"
],
"correct_feedback": "Governance frameworks depend on defined accountability structures and clearly assigned oversight roles.",
"incorrect_feedback": "Institutional AI governance depends on accountability structures and defined oversight responsibilities."
},

{
"id": 26,
"level": 4,
"type": "duolingo_style",
"question": "Automation overreach occurs when AI systems assume decision ______ without adequate human ______.",
"word_bank": [
"authority",
"supervision",
"efficiency",
"scaling"
],
"correct_answer": [
"authority",
"supervision"
],
"correct_feedback": "Automation overreach occurs when decision authority shifts to AI systems without human supervision.",
"incorrect_feedback": "Automation overreach describes situations where AI assumes authority while human supervision is insufficient."
},

{
"id": 27,
"level": 4,
"type": "duolingo_style",
"question": "Bias amplification emerges when historical ______ are reproduced at institutional ______.",
"word_bank": [
"patterns",
"scale",
"neutrality",
"isolation"
],
"correct_answer": [
"patterns",
"scale"
],
"correct_feedback": "Historical patterns embedded in data can become amplified when systems operate at institutional scale.",
"incorrect_feedback": "When models reproduce historical patterns across large systems, bias can scale across institutions."
},

{
"id": 28,
"level": 4,
"type": "duolingo_style",
"question": "AI lacks intrinsic ______ and therefore cannot assume ethical ______.",
"word_bank": [
"intent",
"responsibility",
"speed",
"abstraction"
],
"correct_answer": [
"intent",
"responsibility"
],
"correct_feedback": "AI systems generate outputs through computation and therefore lack intent or ethical responsibility.",
"incorrect_feedback": "Ethical responsibility requires intent and agency, which computational systems do not possess."
},

{
"id": 29,
"level": 4,
"type": "duolingo_style",
"question": "Transparency strengthens institutional ______ and promotes stakeholder ______.",
"word_bank": [
"trust",
"confidence",
"automation",
"compression"
],
"correct_answer": [
"trust",
"confidence"
],
"correct_feedback": "Transparent disclosure of AI usage builds institutional trust and increases stakeholder confidence.",
"incorrect_feedback": "Transparency supports trust and confidence by revealing how AI systems influence decisions."
},

{
"id": 30,
"level": 4,
"type": "duolingo_style",
"question": "Responsible integration balances technological ______ with human ______.",
"word_bank": [
"capability",
"judgment",
"acceleration",
"replacement"
],
"correct_answer": [
"capability",
"judgment"
],
"correct_feedback": "Responsible AI adoption combines technological capability with human judgment in decision-making.",
"incorrect_feedback": "Responsible integration maintains human judgment alongside technological capability rather than replacing it."
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
        for text in q["options"]:
            new_q["options"].append({
                "text": text,
                "correct": text == correct,
                "feedback": q["correct_feedback"] if text == correct else q["incorrect_feedback"]
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
        items = q["items"].copy()
        
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
            
        left_dict = {key: clean_val(val) for key, val in q["pairs"].items()}
        right_dict = {key: clean_val(val) for key, val in q["options"].items()}
        
        for k, v in q["correct_matches"].items():
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
        for ans in q["correct_answer"]:
            text = re.sub(r'_+', f'[{ans}]', text, count=1)
        new_q["text"] = text
        
        wb = q["word_bank"].copy()
        random.shuffle(wb)
        new_q["wordBank"] = wb

    formatted_data.append(new_q)

import sys

with open('content.js', 'r') as f:
    text = f.read()

start_idx = text.find("const chapter1Level4Questions = [")
if start_idx == -1:
    print("Could not find start")
    sys.exit(1)

# Include the closing bracket properly, same format as the fix we did for Level 3
end_idx = text.find("];", start_idx) + 1

new_array_str = "[\n"
for idx, q in enumerate(formatted_data):
    s = json.dumps(q, indent=20)
    s = s.replace('\n', '\n                ')
    new_array_str += "                " + s + ("," if idx < len(formatted_data) - 1 else "") + "\n"
new_array_str += "            ];"

bracket_count = 0
in_string = False
string_char = None
escape = False
real_end_idx = -1

for i in range(start_idx + len("const chapter1Level4Questions = "), len(text)):
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

new_content = text[:start_idx + len("const chapter1Level4Questions = ")] + new_array_str[len("[\n") - 1:] + text[real_end_idx + 1:]

with open('content.js', 'w') as f:
    f.write(new_content)

print("Insertion complete.")
