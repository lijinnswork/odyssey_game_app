import json
import re
import random

data = [
{
"id": 1,
"level": 5,
"type": "single_select",
"question": "An institution integrates AI into most evaluative workflows to enhance consistency. Over time, pedagogical diversity declines. What systemic dynamic best explains this outcome?",
"options": [
"Model parameter instability and adaptability",
"Optimization toward uniform measurable outputs",
"Hardware standardization constraints",
"Reduced computational variance"
],
"correct_answer": "Optimization toward uniform measurable outputs",
"correct_feedback": "Systems optimized for consistent measurable outputs often favor standardized patterns, which can gradually reduce variation in pedagogical approaches.",
"incorrect_feedback": "Optimization for consistent measurable outputs can unintentionally standardize processes, reducing diversity in approaches over time."
},

{
"id": 2,
"level": 5,
"type": "single_select",
"question": "Why can AI-generated insights feel authoritative even when epistemically weak?",
"options": [
"They simulate multi-agent reasoning",
"They optimize linguistic coherence",
"They continuously update factual databases",
"They prioritize conservative output selection"
],
"correct_answer": "They optimize linguistic coherence",
"correct_feedback": "Generative systems are optimized to produce fluent and coherent language, which can make weak or unsupported claims appear convincing.",
"incorrect_feedback": "Fluent language generation can create a strong sense of authority even when the underlying reasoning lacks verified evidence."
},

{
"id": 3,
"level": 5,
"type": "single_select",
"question": "Which scenario most clearly reflects epistemic overreliance on AI?",
"options": [
"Using AI to brainstorm alternative viewpoints",
"Accepting AI analysis without validation",
"Employing AI for administrative summarization",
"Comparing AI output with peer feedback"
],
"correct_answer": "Accepting AI analysis without validation",
"correct_feedback": "Epistemic overreliance occurs when AI outputs are treated as authoritative without independent verification.",
"incorrect_feedback": "Overreliance emerges when AI-generated conclusions are accepted without validation or independent evaluation."
},

{
"id": 4,
"level": 5,
"type": "single_select",
"question": "If an AI system performs equitably in pilot testing but produces inequitable results after scaling, what is the most plausible explanation?",
"options": [
"Increased user interface complexity",
"Effects of population heterogeneity",
"Reduced backend server capacity",
"Excessive variation in user prompts"
],
"correct_answer": "Effects of population heterogeneity",
"correct_feedback": "Pilot tests often involve limited populations; scaling exposes models to more diverse contexts where disparities may emerge.",
"incorrect_feedback": "Scaling introduces more diverse user populations and contexts, which can reveal inequities not visible during pilot testing."
},

{
"id": 5,
"level": 5,
"type": "single_select",
"question": "Which principle best preserves human intellectual agency in AI-augmented environments?",
"options": [
"Maximizing automation in repetitive tasks",
"Treating AI outputs as provisional inputs",
"Delegating high-stakes reasoning to models",
"Standardizing responses for efficiency"
],
"correct_answer": "Treating AI outputs as provisional inputs",
"correct_feedback": "Treating AI outputs as provisional inputs maintains human evaluation and preserves intellectual agency in decision-making.",
"incorrect_feedback": "Human intellectual agency is preserved when AI outputs are treated as inputs to evaluate rather than final conclusions."
},

{
"id": 6,
"level": 5,
"type": "single_select",
"question": "What fundamentally limits AI from possessing institutional accountability?",
"options": [
"Lack of distributed data storage systems",
"Lack of moral agency and social context",
"Limited model parameter capacity",
"Restricted domain-specific training"
],
"correct_answer": "Lack of moral agency and social context",
"correct_feedback": "Institutional accountability requires moral agency and social responsibility, which computational systems do not possess.",
"incorrect_feedback": "Accountability depends on moral agency and social responsibility, which statistical systems lack."
},

{
"id": 7,
"level": 5,
"type": "multiple_select",
"question": "Which long-term risks emerge from epistemic dependency on AI systems?",
"options": [
"Decline in critical reasoning habits",
"Increased reflective practice",
"Homogenization of analytical approaches",
"Diminished tolerance for ambiguity"
],
"correct_answers": [
"Decline in critical reasoning habits",
"Homogenization of analytical approaches",
"Diminished tolerance for ambiguity"
],
"correct_feedback": "Epistemic dependency can weaken critical reasoning, standardize analytical thinking, and reduce comfort with ambiguity.",
"incorrect_feedback": "Long-term dependency on AI can reduce critical reasoning and encourage uniform analytical patterns."
},

{
"id": 8,
"level": 5,
"type": "multiple_select",
"question": "Which factors contribute to systemic bias amplification at scale?",
"options": [
"Uniform deployment across diverse contexts",
"Feedback loops reinforcing skewed predictions",
"Ongoing bias audits",
"Historical data imbalances"
],
"correct_answers": [
"Uniform deployment across diverse contexts",
"Feedback loops reinforcing skewed predictions",
"Historical data imbalances"
],
"correct_feedback": "Bias can scale when systems apply uniform models to diverse contexts, reinforce skewed feedback loops, or learn from imbalanced historical data.",
"incorrect_feedback": "Bias amplification often results from imbalanced data, reinforcing feedback loops, and uniform deployment across varied contexts."
},

{
"id": 9,
"level": 5,
"type": "multiple_select",
"question": "Which structural properties differentiate AI cognition from human cognition?",
"options": [
"Statistical inference mechanisms",
"Contextual lived experience",
"Embodied moral reasoning",
"Probabilistic token prediction"
],
"correct_answers": [
"Statistical inference mechanisms",
"Probabilistic token prediction"
],
"correct_feedback": "AI systems rely on statistical inference and probabilistic prediction rather than lived experience or moral reasoning.",
"incorrect_feedback": "AI cognition operates through statistical inference and probabilistic prediction rather than lived experience."
},

{
"id": 10,
"level": 5,
"type": "multiple_select",
"question": "Which institutional safeguards mitigate long-term automation risk?",
"options": [
"Periodic capability reassessment",
"Distributed accountability frameworks",
"Unquestioned reliance on output fluency",
"Transparent documentation practices"
],
"correct_answers": [
"Periodic capability reassessment",
"Distributed accountability frameworks",
"Transparent documentation practices"
],
"correct_feedback": "Automation risks are reduced through continuous capability evaluation, distributed accountability, and transparent documentation.",
"incorrect_feedback": "Effective safeguards include capability reassessment, accountability frameworks, and transparent documentation."
},
{
"id": 11,
"type": "multiple_select",
"question": "Which dynamics may erode professional expertise over time?",
"options": [
"Persistent delegation of evaluative reasoning",
"Replacement of draft generation",
"Reduced exposure to complex judgment tasks",
"Structured reflective AI use"
],
"correct_answers": [
"Persistent delegation of evaluative reasoning",
"Reduced exposure to complex judgment tasks"
],
"feedback_correct": "Professional expertise weakens when critical judgment tasks are consistently delegated to automated systems.",
"feedback_incorrect": "Expertise erosion emerges when professionals repeatedly outsource evaluative reasoning and lose exposure to complex decision-making."
},

{
"id": 12,
"type": "multiple_select",
"question": "Which reflect mature AI literacy at leadership level?",
"options": [
"Understanding trade-offs between efficiency and equity",
"Recognizing scale-dependent risk",
"Assuming neutrality of training data",
"Designing oversight architectures"
],
"correct_answers": [
"Understanding trade-offs between efficiency and equity",
"Recognizing scale-dependent risk",
"Designing oversight architectures"
],
"feedback_correct": "Advanced AI literacy involves understanding trade-offs, anticipating scale risks, and designing governance mechanisms.",
"feedback_incorrect": "Leadership-level AI literacy centers on recognizing systemic trade-offs, scale-dependent risks, and building oversight structures."
},

{
"id": 13,
"type": "slide_to_order",
"question": "Arrange systemic bias escalation:",
"items": [
"Biased dataset",
"Skewed model output",
"Feedback loop reinforcement",
"Institutionalized inequity"
],
"correct_order": [
"Biased dataset",
"Skewed model output",
"Feedback loop reinforcement",
"Institutionalized inequity"
],
"feedback_correct": "Bias often escalates from data imbalance to skewed predictions, which can reinforce themselves through feedback loops and eventually shape institutional outcomes.",
"feedback_incorrect": "Systemic bias escalation begins with biased training data, produces skewed outputs, reinforces itself through feedback loops, and ultimately manifests as institutional inequity."
},

{
"id": 14,
"type": "slide_to_order",
"question": "Arrange strategic AI integration:",
"items": [
"Define institutional values",
"Assess technological capability",
"Design oversight framework",
"Deploy with monitoring"
],
"correct_order": [
"Define institutional values",
"Assess technological capability",
"Design oversight framework",
"Deploy with monitoring"
],
"feedback_correct": "Responsible AI integration begins with institutional values, followed by capability assessment, governance design, and monitored deployment.",
"feedback_incorrect": "Strategic AI integration starts with defining institutional values before assessing capability, designing oversight, and deploying systems with monitoring."
},

{
"id": 15,
"type": "slide_to_order",
"question": "Arrange epistemic evaluation of AI insight:",
"items": [
"Examine claim coherence",
"Verify evidence grounding",
"Assess contextual relevance",
"Determine decision weight"
],
"correct_order": [
"Examine claim coherence",
"Verify evidence grounding",
"Assess contextual relevance",
"Determine decision weight"
],
"feedback_correct": "Evaluating AI insights requires moving from coherence checks to evidence validation, contextual relevance, and finally determining decision weight.",
"feedback_incorrect": "Epistemic evaluation progresses from checking logical coherence to verifying evidence, assessing contextual relevance, and then deciding how much weight the insight deserves."
},

{
"id": 16,
"type": "slide_to_order",
"question": "Arrange progression of overreliance:",
"items": [
"Convenience use",
"Reduced scrutiny",
"Delegated authority",
"Erosion of expertise"
],
"correct_order": [
"Convenience use",
"Reduced scrutiny",
"Delegated authority",
"Erosion of expertise"
],
"feedback_correct": "Overreliance typically evolves from convenience-based use to reduced scrutiny, then delegated authority, and eventually loss of expertise.",
"feedback_incorrect": "Automation overreliance develops gradually: convenience leads to reduced scrutiny, authority shifts to the system, and long-term expertise declines."
},

{
"id": 17,
"type": "slide_to_order",
"question": "Arrange institutional trust-building:",
"items": [
"Public disclosure",
"Stakeholder consultation",
"Independent audit",
"Policy refinement"
],
"correct_order": [
"Public disclosure",
"Stakeholder consultation",
"Independent audit",
"Policy refinement"
],
"feedback_correct": "Institutional trust grows through transparency, stakeholder engagement, independent evaluation, and continuous policy improvement.",
"feedback_incorrect": "Trust-building begins with transparency, followed by stakeholder consultation, independent auditing, and refinement of institutional policies."
},

{
"id": 18,
"type": "slide_to_order",
"question": "Arrange human–AI decision layering:",
"items": [
"AI generates analysis",
"Human evaluates reasoning",
"Human contextualizes implications",
"Final decision authority exercised"
],
"correct_order": [
"AI generates analysis",
"Human evaluates reasoning",
"Human contextualizes implications",
"Final decision authority exercised"
],
"feedback_correct": "Human–AI collaboration works best when AI generates analysis while humans evaluate reasoning, apply context, and retain final authority.",
"feedback_incorrect": "In effective human–AI systems, AI provides analysis first, humans evaluate reasoning, interpret contextual implications, and retain final decision authority."
},

{
"id": 19,
"type": "match_the_following",
"question": "Match systemic risk with mechanism:",
"pairs": {
"Bias scaling": "Reinforced skew through repetition",
"Epistemic dependency": "Reduced independent reasoning",
"Automation overreach": "Delegation without oversight",
"Accountability diffusion": "Ambiguous responsibility boundaries"
},
"feedback_correct": "Systemic risks emerge from identifiable mechanisms such as repetition-based bias reinforcement and unchecked automation delegation.",
"feedback_incorrect": "Bias scaling arises from repeated skewed outputs, epistemic dependency reduces independent reasoning, automation overreach involves delegation without oversight, and accountability diffusion blurs responsibility."
},

{
"id": 20,
"type": "match_the_following",
"question": "Match leadership principle with outcome:",
"pairs": {
"Transparency": "Trust enhancement",
"Oversight architecture": "Risk containment",
"Capability auditing": "Performance validation",
"Context-sensitive deployment": "Reduced cross-context failure"
},
"feedback_correct": "Strategic governance links transparency with trust, oversight with risk containment, auditing with validation, and context-aware deployment with reliability.",
"feedback_incorrect": "Transparency strengthens trust, oversight architectures contain risk, capability audits validate system performance, and context-sensitive deployment reduces failures across environments."
},
{
"id": 21,
"type": "match_the_following",
"question": "Match epistemic distinction:",
"pairs": {
"Statistical fluency": "AI text coherence",
"Moral agency": "Human ethical capacity",
"Pattern generalization": "AI predictive method",
"Contextual judgment": "Human reasoning strength"
},
"feedback_correct": "AI excels at statistical fluency and pattern generalization, while humans provide moral agency and contextual judgment.",
"feedback_incorrect": "Statistical fluency and pattern generalization describe AI mechanisms, while moral agency and contextual judgment remain human cognitive strengths."
},

{
"id": 22,
"type": "match_the_following",
"question": "Match failure mode with institutional impact:",
"pairs": {
"Hallucination": "Misinformation propagation",
"Feedback loop bias": "Undetected inequity",
"Hidden automation": "Loss of stakeholder trust",
"Expertise erosion": "Reduced professional competence"
},
"feedback_correct": "Each technical failure mode produces a distinct institutional consequence, from misinformation spread to weakened professional competence.",
"feedback_incorrect": "Hallucinations spread misinformation, feedback loops reinforce hidden inequities, hidden automation damages trust, and expertise erosion weakens professional competence."
},

{
"id": 23,
"type": "match_the_following",
"question": "Match conceptual boundary:",
"pairs": {
"Narrow AI": "Task-bound capability",
"Moral accountability": "Human domain",
"Probabilistic output": "System variability",
"Institutional governance": "Organizational structure"
},
"feedback_correct": "Narrow AI remains task-bound, probabilistic outputs introduce variability, and accountability ultimately resides within human governance structures.",
"feedback_incorrect": "Narrow AI describes task-limited capability, probabilistic outputs produce variability, moral accountability remains human, and governance defines organizational oversight."
},

{
"id": 24,
"type": "match_the_following",
"question": "Match strategic tension:",
"pairs": {
"Efficiency vs Equity": "Fairness trade-off",
"Scale vs Context": "Bias amplification risk",
"Automation vs Agency": "Decision authority boundary",
"Innovation vs Stability": "Institutional resilience challenge"
},
"feedback_correct": "Strategic AI governance requires navigating tensions between efficiency and fairness, scale and context, automation and human authority.",
"feedback_incorrect": "Efficiency conflicts with fairness, scaling systems risks bias amplification across contexts, automation challenges human authority, and innovation pressures institutional stability."
},

{
"id": 25,
"type": "duolingo_style",
"question": "At scale, AI deployment can transform localized ______ into systemic ______.",
"word_bank": [
"bias",
"inequity",
"neutrality",
"abstraction"
],
"correct_answers": [
"bias",
"inequity"
],
"feedback_correct": "Local bias can scale into systemic inequity when automated decisions are widely deployed.",
"feedback_incorrect": "Scaling automated systems can amplify small data biases into widespread institutional inequities."
},

{
"id": 26,
"type": "duolingo_style",
"question": "Epistemic overreliance reduces independent ______ and weakens professional ______.",
"word_bank": [
"judgment",
"expertise",
"acceleration",
"scalability"
],
"correct_answers": [
"judgment",
"expertise"
],
"feedback_correct": "Overreliance on automated reasoning weakens independent judgment and gradually erodes professional expertise.",
"feedback_incorrect": "Delegating reasoning to automated systems reduces independent judgment and eventually weakens professional expertise."
},

{
"id": 27,
"type": "duolingo_style",
"question": "AI systems generate linguistically ______ outputs without possessing moral ______.",
"word_bank": [
"coherent",
"agency",
"storage",
"authority"
],
"correct_answers": [
"coherent",
"agency"
],
"feedback_correct": "AI produces coherent language patterns but lacks moral agency and responsibility.",
"feedback_incorrect": "Language models generate coherent text through statistical patterns but do not possess moral agency."
},

{
"id": 28,
"type": "duolingo_style",
"question": "Responsible leadership balances technological ______ with institutional ______.",
"word_bank": [
"capability",
"accountability",
"expansion",
"delegation"
],
"correct_answers": [
"capability",
"accountability"
],
"feedback_correct": "Effective AI governance aligns technological capability with clear accountability structures.",
"feedback_incorrect": "Technological capability must be paired with institutional accountability to ensure responsible AI deployment."
},

{
"id": 29,
"type": "duolingo_style",
"question": "Uniform deployment across diverse contexts increases the risk of contextual ______ and outcome ______.",
"word_bank": [
"mismatch",
"inequity",
"compression",
"neutrality"
],
"correct_answers": [
"mismatch",
"inequity"
],
"feedback_correct": "Systems designed for one context may produce inequitable outcomes when applied uniformly across different environments.",
"feedback_incorrect": "Uniform systems often create contextual mismatches that can lead to inequitable outcomes."
},

{
"id": 30,
"type": "duolingo_style",
"question": "Sustainable AI integration requires continuous ______ and adaptive ______.",
"word_bank": [
"monitoring",
"governance",
"automation",
"abstraction"
],
"correct_answers": [
"monitoring",
"governance"
],
"feedback_correct": "Long-term AI sustainability depends on monitoring system behavior and adapting governance structures.",
"feedback_incorrect": "Responsible AI systems require ongoing monitoring and adaptive governance to manage evolving risks."
}
]

formatted_data = []

for q in data:
    cf = q.get('correct_feedback') or q.get('feedback_correct', '')
    ifcf = q.get('incorrect_feedback') or q.get('feedback_incorrect', '')
    
    new_q = {
        "original_id": q["id"],
        "question": q["question"] if q["type"] != "duolingo_style" else "Fill in the blank",
        "correctFeedback": cf,
        "incorrectFeedback": ifcf,
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
                "feedback": cf if text == correct else ifcf
            })
            
    elif q["type"] == "multiple_select":
        new_q["type"] = "multiple_choice"
        new_q["options"] = []
        
        # some questions use correct_answers instead of correct_answer
        correct_ans_list = q.get("correct_answers", q.get("correct_answer", []))
        
        for text in q["options"]:
            new_q["options"].append({
                "text": text,
                "correct": text in correct_ans_list
            })
            
    elif q["type"] == "slide_to_order":
        new_q["type"] = "ordering"
        items = q["items"].copy()
        
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
            # No numbering in Level 5 options usually, but keeping it safe
            idx = val.find('.')
            if idx != -1 and idx < 4:
                return val[idx+1:].strip()
            return val
            
        # For Level 5 matching, the structure is slightly different:
        # "pairs": { "Left1": "Right1", "Left2": "Right2" }
        # They didn't provide separate "options" and "correct_matches" objects like before.
        # It's a direct key-value map.
        
        right_values = []
        for k, v in q["pairs"].items():
            new_q["pairs"].append({
                "left": clean_val(k),
                "right": clean_val(v)
            })
            right_values.append(clean_val(v))
        
        random.shuffle(right_values)
        new_q["shuffledRight"] = right_values

    elif q["type"] == "duolingo_style":
        new_q["question"] = "Fill in the blank"
        new_q["type"] = "fill_in_blanks"
        
        text = q["question"]
        ans_list = q.get("correct_answers", q.get("correct_answer", []))
        
        for ans in ans_list:
            text = re.sub(r'_+', f'[{ans}]', text, count=1)
        new_q["text"] = text
        
        wb = q["word_bank"].copy()
        random.shuffle(wb)
        new_q["wordBank"] = wb

    formatted_data.append(new_q)

import sys

with open('content.js', 'r') as f:
    text = f.read()

start_idx = text.find("const chapter1Level5Questions = [")
if start_idx == -1:
    print("Could not find start")
    sys.exit(1)

# Include the closing bracket properly, same format as previous levels
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

for i in range(start_idx + len("const chapter1Level5Questions = "), len(text)):
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

new_content = text[:start_idx + len("const chapter1Level5Questions = ")] + new_array_str[len("[\n") - 1:] + text[real_end_idx + 1:]

with open('content.js', 'w') as f:
    f.write(new_content)

print("Insertion complete.")
