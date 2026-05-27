import json
import re

with open('feedbacks.json', 'r') as f:
    feedbacks = json.load(f)

with open('content.js', 'r') as f:
    content = f.read()

start_marker = "const chapter1Level1Questions = ["
start_idx = content.find(start_marker)
if start_idx == -1:
    raise Exception("Could not find chapter1Level1Questions")

arr_start = content.find('[', start_idx)
brace_count = 0
arr_end = -1

for i in range(arr_start, len(content)):
    if content[i] == '[':
        brace_count += 1
    elif content[i] == ']':
        brace_count -= 1
        if brace_count == 0:
            arr_end = i
            break

array_str = content[arr_start:arr_end+1]
original_array_str = array_str

# Clean up JS specific things so json.loads can parse it.
# Usually standard chapter1 questions are valid JSON except maybe trailing commas.
# Or we can just use python demjson or custom parsing.
# The safest is text replacement per question block.

for fb in feedbacks:
    # find the block for original_id
    q_pattern = r'(\{\s*"original_id"\s*:\s*' + str(fb['id']) + r'\s*,.*?(?=\n\s*\{\s*"original_id"|\]))'
    # Actually, matching a JSON object by matching balanced braces is easier.
    
    # Simple hack: find `"original_id": ID,` then replace the NEXT "correctFeedback": "...", "incorrectFeedback": "..."
    # and all occurrences of "correct": true, "feedback": "..."
    
    # We will slice the string object by object.
pass

# Let's do a reliable JS to Python converter using python's built in re and json:
# We just replace `true` with `True`, `false` with `False`, `null` with `None`
try:
    py_str = array_str.replace('true', 'True').replace('false', 'False').replace('null', 'None')
    import ast
    questions = ast.literal_eval(py_str)
    
    # modify questions
    for fb in feedbacks:
        for q in questions:
            if q.get('original_id') == fb['id']:
                q['correctFeedback'] = fb['feedback_correct']
                q['incorrectFeedback'] = fb['feedback_incorrect']
                if 'options' in q:
                    for opt in q['options']:
                        if opt.get('correct') == True:
                            opt['feedback'] = fb['feedback_correct']
                        else:
                            opt['feedback'] = fb['feedback_incorrect']
    
    # convert back to JS JSON
    # dumps will put true/false back
    new_array_str = json.dumps(questions, indent=4)
    # the original file used 4 spaces
    
    content = content[:arr_start] + new_array_str + content[arr_end+1:]
    with open('content.js', 'w') as f:
        f.write(content)
        
    print("Successfully updated content.js")
    
except Exception as e:
    print("Failed string evaluation:", e)
