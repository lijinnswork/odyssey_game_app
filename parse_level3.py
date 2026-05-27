import json
import re
import random

data = [
{
"id": 1,
"level": 3,
"type": "single_select",
"question": "An AI summarization tool consistently omits nuanced counterarguments in academic texts. What does this most directly reflect?",
"options": [
"Token generation bias",
"Optimization for brevity over depth",
"Training data corruption",
"Computational limitation"
],
"correct_answer": "Optimization for brevity over depth",
"correct_feedback": "Many summarization systems are optimized to compress information efficiently, which can cause subtle arguments or minority perspectives to be removed.",
"incorrect_feedback": "Summarization models prioritize condensed outputs. When brevity is optimized, nuanced arguments and counterpoints are often the first elements lost."
},

{
"id": 2,
"level": 3,
"type": "single_select",
"question": "An AI grading assistant performs well in structured assessments but inconsistently in open-ended essays. Why?",
"options": [
"It struggles with subjective evaluation patterns",
"It lacks access to external databases and sources",
"It applies excessive rule-based logic for evaluation",
"It requires emotional calibration"
],
"correct_answer": "It struggles with subjective evaluation patterns",
"correct_feedback": "Structured assessments follow predictable patterns, while open-ended essays require nuanced interpretation that statistical models evaluate less reliably.",
"incorrect_feedback": "Open-ended responses introduce ambiguity and subjective interpretation, which statistical models handle less consistently than structured patterns."
},

{
"id": 3,
"level": 3,
"type": "single_select",
"question": "If a generative AI produces highly confident but fabricated citations, this indicates:",
"options": [
"Incomplete indexing of academic sources",
"Pattern completion without source verification",
"Intentional creative augmentation",
"Semantic compression error"
],
"correct_answer": "Pattern completion without source verification",
"correct_feedback": "Generative models construct plausible sequences based on patterns in training data, not by verifying whether sources actually exist.",
"incorrect_feedback": "Generative AI predicts plausible text patterns but does not inherently verify external references, allowing fabricated citations to appear convincing."
},

{
"id": 4,
"level": 3,
"type": "single_select",
"question": "A model trained primarily on urban student data underperforms in rural contexts. This highlights:",
"options": [
"Interface misalignment",
"Contextual distribution shift",
"Autonomous reasoning failure",
"Prompt ambiguity"
],
"correct_answer": "Contextual distribution shift",
"correct_feedback": "When the deployment environment differs from the training environment, model performance can decline due to distribution shift.",
"incorrect_feedback": "AI models learn patterns from training data. When the real-world context differs from that data, the model encounters distribution shift."
},

{
"id": 5,
"level": 3,
"type": "single_select",
"question": "When educators overly rely on AI-generated lesson plans, the primary long-term risk is:",
"options": [
"Reduced computational efficiency",
"Standardization of diverse pedagogical approaches",
"Increased personalization of learning pathways",
"Decreased model scalability across subjects"
],
"correct_answer": "Standardization of diverse pedagogical approaches",
"correct_feedback": "Heavy dependence on automated content can gradually reduce diversity in instructional approaches and pedagogical creativity.",
"incorrect_feedback": "Generative systems often produce broadly optimized structures, which can unintentionally standardize teaching approaches when used without adaptation."
},

{
"id": 6,
"level": 3,
"type": "single_select",
"question": "Which best explains why AI outputs can vary even with similar prompts?",
"options": [
"Models revise goals dynamically during each interaction",
"Outputs are probabilistic rather than deterministic",
"Training data updates continuously during conversation",
"Human reasoning is simulated differently each time"
],
"correct_answer": "Outputs are probabilistic rather than deterministic",
"correct_feedback": "Generative AI predicts tokens using probability distributions, which can produce different outputs from similar prompts.",
"incorrect_feedback": "Generative models sample from probability distributions rather than following a single fixed output path."
},

{
"id": 7,
"level": 3,
"type": "multiple_select",
"question": "Which factors influence variability in generative AI outputs?",
"options": [
"Prompt phrasing differences",
"Probabilistic sampling mechanisms",
"Emotional instability of the system",
"Model parameter tuning"
],
"correct_answers": [
"Prompt phrasing differences",
"Probabilistic sampling mechanisms",
"Model parameter tuning"
],
"correct_feedback": "Output variability emerges from prompt wording, probabilistic token sampling, and internal parameter settings.",
"incorrect_feedback": "Generative systems produce outputs through probability sampling influenced by prompts and model parameters."
},

{
"id": 8,
"level": 3,
"type": "multiple_select",
"question": "Which risks increase when AI tools are adopted institution-wide without governance?",
"options": [
"Inconsistent academic standards",
"Amplification of systemic bias",
"Elimination of human accountability",
"Improved interpretability"
],
"correct_answers": [
"Inconsistent academic standards",
"Amplification of systemic bias",
"Elimination of human accountability"
],
"correct_feedback": "Without governance structures, AI adoption can create inconsistent practices, reinforce biases, and obscure responsibility.",
"incorrect_feedback": "Institution-wide AI deployment requires governance because systems can scale both inconsistencies and biases."
},

{
"id": 9,
"level": 3,
"type": "multiple_select",
"question": "Which reflect structural limitations of generative AI?",
"options": [
"Lack of grounded real-world awareness",
"Dependence on statistical associations",
"Ability to reason causally across all domains",
"Vulnerability to misleading prompts"
],
"correct_answers": [
"Lack of grounded real-world awareness",
"Dependence on statistical associations",
"Vulnerability to misleading prompts"
],
"correct_feedback": "Generative models rely on statistical pattern learning rather than grounded reasoning, making them sensitive to prompt framing.",
"incorrect_feedback": "Generative AI learns correlations from data rather than grounded causal understanding."
},

{
"id": 10,
"level": 3,
"type": "multiple_select",
"question": "Which educational uses require especially strong human oversight?",
"options": [
"High-stakes grading",
"Draft brainstorming",
"Ethical adjudication",
"Administrative automation"
],
"correct_answers": [
"High-stakes grading",
"Ethical adjudication"
],
"correct_feedback": "Decisions affecting fairness, evaluation, or ethics require strong human oversight when AI systems are involved.",
"incorrect_feedback": "Oversight becomes essential when AI influences evaluation outcomes or ethical judgments."
},
{
"id": 11,
"level": 3,
"type": "multiple_select",
"question": "Which factors contribute to hallucination risk in generative AI systems?",
"options": [
"Ambiguous prompts",
"Gaps in training data",
"Explicit fact-checking pipelines",
"Overgeneralized pattern extension"
],
"correct_answers": [
"Ambiguous prompts",
"Gaps in training data",
"Overgeneralized pattern extension"
],
"correct_feedback": "Hallucinations often emerge when prompts are unclear, training data lacks coverage, or the model extends patterns beyond verified information.",
"incorrect_feedback": "Hallucinations commonly arise from ambiguity in prompts, missing knowledge in training data, and pattern extension beyond reliable evidence."
},

{
"id": 12,
"level": 3,
"type": "multiple_select",
"question": "Which actions improve responsible AI integration in institutions?",
"options": [
"Establishing review protocols",
"Blind acceptance of fluent output",
"Continuous monitoring",
"Transparent usage disclosure"
],
"correct_answers": [
"Establishing review protocols",
"Continuous monitoring",
"Transparent usage disclosure"
],
"correct_feedback": "Responsible AI integration depends on review processes, ongoing monitoring, and transparency about how systems are used.",
"incorrect_feedback": "Effective AI governance requires oversight mechanisms, continuous monitoring, and transparency about system usage."
},

{
"id": 13,
"level": 3,
"type": "slide_to_order",
"question": "Arrange the steps in diagnosing biased AI performance.",
"items": [
"Detect performance disparity",
"Investigate training data",
"Implement corrective adjustment",
"Re-evaluate outcomes"
],
"correct_order": [
"Detect performance disparity",
"Investigate training data",
"Implement corrective adjustment",
"Re-evaluate outcomes"
],
"correct_feedback": "Bias diagnosis begins with identifying disparities, followed by examining data sources, implementing adjustments, and evaluating results.",
"incorrect_feedback": "Bias investigation typically starts with detecting outcome disparities, then analyzing training data before corrective action and re-evaluation."
},

{
"id": 14,
"level": 3,
"type": "slide_to_order",
"question": "Arrange the stages of refining a generative AI output.",
"items": [
"Generate initial draft",
"Critically review claims",
"Cross-check evidence",
"Revise structure"
],
"correct_order": [
"Generate initial draft",
"Critically review claims",
"Cross-check evidence",
"Revise structure"
],
"correct_feedback": "A common workflow begins with generation, followed by critical review, evidence verification, and structural revision.",
"incorrect_feedback": "Generative output refinement generally follows the sequence: produce a draft, review its claims, verify evidence, and then revise."
},

{
"id": 15,
"level": 3,
"type": "slide_to_order",
"question": "Arrange the abstraction layers in AI processing from input to output.",
"items": [
"Raw input data",
"Encoded representations",
"Pattern inference",
"Generated output"
],
"correct_order": [
"Raw input data",
"Encoded representations",
"Pattern inference",
"Generated output"
],
"correct_feedback": "AI systems transform raw inputs into encoded representations, infer patterns, and finally generate outputs.",
"incorrect_feedback": "Machine learning pipelines typically begin with raw data, convert it into internal representations, infer patterns, and produce outputs."
},

{
"id": 16,
"level": 3,
"type": "slide_to_order",
"question": "Arrange the typical stages of institutional AI adoption.",
"items": [
"Define objectives",
"Evaluate tools",
"Pilot deployment",
"Establish oversight policy"
],
"correct_order": [
"Define objectives",
"Evaluate tools",
"Pilot deployment",
"Establish oversight policy"
],
"correct_feedback": "Strategic adoption begins with clear goals, followed by tool evaluation, pilot testing, and governance policies.",
"incorrect_feedback": "AI adoption frameworks typically start with defining goals, evaluating tools, piloting deployment, and then formalizing governance."
},

{
"id": 17,
"level": 3,
"type": "slide_to_order",
"question": "Arrange the progression of risk escalation in AI systems.",
"items": [
"Minor inaccuracy",
"Repeated pattern distortion",
"Systemic bias",
"Institutional impact"
],
"correct_order": [
"Minor inaccuracy",
"Repeated pattern distortion",
"Systemic bias",
"Institutional impact"
],
"correct_feedback": "Small inaccuracies can compound into recurring distortions, eventually reinforcing systemic bias and broader institutional effects.",
"incorrect_feedback": "Risk escalation typically begins with isolated inaccuracies before evolving into repeated distortions and systemic bias."
},

{
"id": 18,
"level": 3,
"type": "slide_to_order",
"question": "Arrange the progression of decision reliance on AI systems.",
"items": [
"Assistive suggestion",
"Partial automation",
"High-stakes automation",
"Independent authority"
],
"correct_order": [
"Assistive suggestion",
"Partial automation",
"High-stakes automation",
"Independent authority"
],
"correct_feedback": "AI integration often progresses from suggestions to automation, eventually reaching high-stakes decisions and independent authority.",
"incorrect_feedback": "Decision reliance typically evolves gradually: first suggestions, then automation, followed by higher-stakes decision roles."
},

{
"id": 19,
"level": 3,
"type": "match_the_following",
"question": "Match each concept to its implication.",
"pairs": {
"A": "Distribution shift",
"B": "Probabilistic sampling",
"C": "Bias amplification",
"D": "Human oversight"
},
"options": {
"1": "Data context mismatch",
"2": "Output variability",
"3": "Reinforcement of skewed trends",
"4": "Risk mitigation layer"
},
"correct_matches": {
"A": "1",
"B": "2",
"C": "3",
"D": "4"
},
"correct_feedback": "Distribution shift refers to context mismatch, probabilistic sampling explains output variability, bias amplification reinforces trends, and oversight mitigates risk.",
"incorrect_feedback": "Distribution shift occurs when deployment context differs from training data, probabilistic sampling introduces variability, and oversight helps reduce risk."
},

{
"id": 20,
"level": 3,
"type": "match_the_following",
"question": "Match the limitation with its classroom impact.",
"pairs": {
"A": "Hallucination",
"B": "Lack of empathy",
"C": "Pattern overgeneralization",
"D": "Context loss"
},
"options": {
"1": "Misleading references",
"2": "Inadequate pastoral support",
"3": "Simplistic categorization",
"4": "Misinterpretation of nuanced topics"
},
"correct_matches": {
"A": "1",
"B": "2",
"C": "3",
"D": "4"
},
"correct_feedback": "Hallucinations create misleading references, lack of empathy limits pastoral understanding, pattern overgeneralization simplifies categories, and context loss misinterprets nuance.",
"incorrect_feedback": "Hallucinations produce false references, pattern overgeneralization simplifies complexity, and missing context can distort nuanced topics."
},
{
"id": 21,
"level": 3,
"type": "match_the_following",
"question": "Match each AI feature with its technical basis.",
"pairs": {
"A": "Personalization",
"B": "Prediction",
"C": "Text generation",
"D": "Pattern clustering"
},
"options": {
"1": "Sequence modeling",
"2": "Behavioral data analysis",
"3": "Probability estimation",
"4": "Feature grouping"
},
"correct_matches": {
"A": "2",
"B": "3",
"C": "1",
"D": "4"
},
"correct_feedback": "Personalization relies on behavioral data patterns, prediction uses probability estimation, text generation is based on sequence modeling, and clustering groups similar features.",
"incorrect_feedback": "Personalization typically analyzes user behavior, prediction estimates probabilities, sequence modeling generates text, and clustering groups similar data features."
},

{
"id": 22,
"level": 3,
"type": "match_the_following",
"question": "Match each AI risk with the most relevant mitigation strategy.",
"pairs": {
"A": "Fabricated citations",
"B": "Dataset imbalance",
"C": "Prompt ambiguity",
"D": "Overreliance"
},
"options": {
"1": "Clear prompt design",
"2": "Data diversification",
"3": "Source verification",
"4": "Human intervention"
},
"correct_matches": {
"A": "3",
"B": "2",
"C": "1",
"D": "4"
},
"correct_feedback": "Fabricated citations require verification, dataset imbalance needs diversified data, prompt ambiguity improves with clearer prompts, and overreliance requires human oversight.",
"incorrect_feedback": "Verification addresses fabricated information, diversified datasets reduce imbalance, clearer prompts reduce ambiguity, and human intervention prevents overreliance."
},

{
"id": 23,
"level": 3,
"type": "match_the_following",
"question": "Match each conceptual layer of AI systems.",
"pairs": {
"A": "Data",
"B": "Model",
"C": "Output",
"D": "Oversight"
},
"options": {
"1": "Generated response",
"2": "Learned parameter structure",
"3": "Training examples",
"4": "Evaluation checkpoint"
},
"correct_matches": {
"A": "3",
"B": "2",
"C": "1",
"D": "4"
},
"correct_feedback": "Training data provides examples, models store learned parameters, outputs generate responses, and oversight evaluates performance.",
"incorrect_feedback": "AI systems rely on training examples, learned parameters inside the model, generated outputs, and oversight checkpoints for evaluation."
},

{
"id": 24,
"level": 3,
"type": "match_the_following",
"question": "Match each AI adoption stage with its priority.",
"pairs": {
"A": "Exploration",
"B": "Pilot",
"C": "Scaling",
"D": "Institutionalization"
},
"options": {
"1": "Governance framework",
"2": "Limited experimentation",
"3": "Objective clarity",
"4": "System-wide monitoring"
},
"correct_matches": {
"A": "3",
"B": "2",
"C": "4",
"D": "1"
},
"correct_feedback": "Exploration clarifies goals, pilots test ideas through limited experiments, scaling requires monitoring, and institutionalization demands governance structures.",
"incorrect_feedback": "AI adoption typically begins with objective clarity, then pilot experimentation, followed by large-scale monitoring and formal governance."
},

{
"id": 25,
"level": 3,
"type": "duolingo_style",
"question": "Generative AI responses are ______ because they rely on statistical ______ rather than fixed outputs.",
"word_bank": [
"probabilistic",
"associations",
"deterministic",
"supervision"
],
"correct_answer": [
"probabilistic",
"associations"
],
"correct_feedback": "Generative models produce outputs probabilistically by predicting likely word associations from training data.",
"incorrect_feedback": "Generative AI predicts words using probability distributions learned from statistical associations in training data."
},

{
"id": 26,
"level": 3,
"type": "duolingo_style",
"question": "A model may fail in new environments due to ______ shift between training and deployment ______.",
"word_bank": [
"distribution",
"contexts",
"parameter",
"sampling"
],
"correct_answer": [
"distribution",
"contexts"
],
"correct_feedback": "Distribution shift occurs when the data environment during deployment differs from the one used in training.",
"incorrect_feedback": "Distribution shift describes the mismatch between training data conditions and real-world deployment contexts."
},

{
"id": 27,
"level": 3,
"type": "duolingo_style",
"question": "Bias amplification occurs when historical ______ in data are reproduced without adequate ______.",
"word_bank": [
"imbalances",
"oversight",
"neutrality",
"compression"
],
"correct_answer": [
"imbalances",
"oversight"
],
"correct_feedback": "Bias amplification occurs when imbalanced historical patterns are repeated without oversight or correction.",
"incorrect_feedback": "Historical imbalances in datasets can be reinforced by models when oversight or corrective review is absent."
},

{
"id": 28,
"level": 3,
"type": "duolingo_style",
"question": "Hallucinations arise when the system extends learned ______ beyond verified ______.",
"word_bank": [
"patterns",
"evidence",
"interface",
"authority"
],
"correct_answer": [
"patterns",
"evidence"
],
"correct_feedback": "Hallucinations occur when models extend learned patterns beyond factual evidence or verified sources.",
"incorrect_feedback": "Generative models sometimes extend patterns learned from data even when supporting evidence is missing."
},

{
"id": 29,
"level": 3,
"type": "duolingo_style",
"question": "Responsible AI integration requires institutional ______ and continuous ______.",
"word_bank": [
"governance",
"monitoring",
"automation",
"delegation"
],
"correct_answer": [
"governance",
"monitoring"
],
"correct_feedback": "Institutional governance structures combined with ongoing monitoring support responsible AI deployment.",
"incorrect_feedback": "Governance frameworks and continuous monitoring help institutions manage risk and maintain responsible AI use."
},

{
"id": 30,
"level": 3,
"type": "duolingo_style",
"question": "AI tools assist decision-making but lack independent ______ or intrinsic ______.",
"word_bank": [
"intent",
"judgment",
"storage",
"speed"
],
"correct_answer": [
"intent",
"judgment"
],
"correct_feedback": "AI systems generate outputs based on patterns in data but do not possess independent intent or human judgment.",
"incorrect_feedback": "Generative AI models do not have intent or judgment; they generate outputs from learned statistical patterns."
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
            # Note: in level 3 JSON, options is an array, not a dict like level 2
            # Wait, let me double check the JSON structure above
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

start_idx = text.find("const chapter1Level3Questions = [")
if start_idx == -1:
    print("Could not find start")
    sys.exit(1)

# Find end
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

for i in range(start_idx + len("const chapter1Level3Questions = "), len(text)):
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

new_content = text[:start_idx + len("const chapter1Level3Questions = ")] + new_array_str[len("[\n") - 1:] + text[real_end_idx + 1:]

with open('content.js', 'w') as f:
    f.write(new_content)

print("Insertion complete.")
