import re
import sys

with open('content.js', 'r') as f:
    text = f.read()

start_idx = text.find("const chapter1Level1Questions = [")
if start_idx == -1:
    print("Could not find start")
    sys.exit(1)

gen_idx = text.find("function generateLevelQuestions")
if gen_idx == -1:
    print("Could not find generateLevelQuestions")
    sys.exit(1)

# Find the exact end of the chapter1Level1Questions array by counting brackets
bracket_count = 0
in_string = False
string_char = None
escape = False
end_idx = -1

for i in range(start_idx + len("const chapter1Level1Questions = "), gen_idx):
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
                # We found the closing bracket of the top-level array!
                end_idx = text.find(";", i)
                break

if end_idx == -1:
    print("Could not find the end of the array")
    sys.exit(1)

array_content = text[start_idx:end_idx + 1] # Includes the ;
array_data = array_content[len("const chapter1Level1Questions ="):]

# Now reconstruct the clean file
pools_definition = []
pools_definition.append("const chapter1Level1Questions =" + array_data)
for i in range(2, 6):
    pools_definition.append(f"const chapter1Level{i}Questions =" + array_data)

pools_str = "\n\n".join(pools_definition) + "\n\n"

new_content = text[:start_idx] + pools_str + text[gen_idx:]

with open('content.js', 'w') as f:
    f.write(new_content)

print("Modification complete.")
