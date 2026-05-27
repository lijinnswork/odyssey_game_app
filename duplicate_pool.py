import System
import re

with open('content.js', 'r') as f:
    content = f.read()

start_string = "            const rawPool = [\n"
start_idx = content.find(start_string)
if start_idx == -1:
    print("Could not find start string")
    exit(1)

end_string = "            ];\n\n            // Group by type"
end_idx = content.find(end_string, start_idx)
if end_idx == -1:
    print("Could not find end string")
    exit(1)

array_content = content[start_idx + len("            const rawPool = "):end_idx + len("            ];")]

pools_definition = []
for i in range(1, 6):
    pools_definition.append(f"const chapter1Level{i}Questions = {array_content}")

pools_str = "\n\n".join(pools_definition)

gen_idx = content.find("// Helper to generate questions")

new_content = content[:gen_idx] + pools_str + "\n\n" + content[gen_idx:start_idx]

replacement_logic = """            let rawPool = [];
            if (levelIndex === 0) rawPool = chapter1Level1Questions;
            else if (levelIndex === 1) rawPool = chapter1Level2Questions;
            else if (levelIndex === 2) rawPool = chapter1Level3Questions;
            else if (levelIndex === 3) rawPool = chapter1Level4Questions;
            else if (levelIndex === 4) rawPool = chapter1Level5Questions;

"""
new_content += replacement_logic + content[end_idx + len("            ];\n\n"):]

with open('content.js', 'w') as f:
    f.write(new_content)

print("Modification complete.")
