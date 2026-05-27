import re

with open('content.js', 'r') as f:
    content = f.read()

start_idx = content.find('const chapter1Level1Questions = [')
if start_idx == -1:
    print("Could not find start")
    exit(1)

gen_idx = content.find('function generateLevelQuestions')
if gen_idx == -1:
    print("Could not find generateLevelQuestions")
    exit(1)

# The array definition ends before generateLevelQuestions.
array_str = content[start_idx:gen_idx]

# Find the end of the array, which is "];"
end_array_idx = array_str.rfind('];')
if end_array_idx == -1:
    print("Could not find the end of the array")
    exit(1)

array_content = array_str[:end_array_idx+2] # include ];

# Get the pure array part: ` [\n ... \n];`
# start_idx is the index of `const chapter1Level1Questions = [`
array_data = array_content[len('const chapter1Level1Questions ='):]

pools_definition = []
pools_definition.append("const chapter1Level1Questions =" + array_data)
for i in range(2, 6):
    pools_definition.append(f"const chapter1Level{i}Questions =" + array_data)

pools_str = "\n\n".join(pools_definition) + "\n\n"

new_content = content[:start_idx] + pools_str + content[gen_idx:]

# Now modify generateLevelQuestions to use the right pool
# Old logic in generateLevelQuestions:
# let pool = [];
# if (chapterId === 'chapter1') {
#     pool = [...chapter1Level1Questions];
# }

# Let's find how pool is assigned in generateLevelQuestions
pool_start = new_content.find("if (chapterId === 'chapter1')", gen_idx)
if pool_start != -1:
    old_logic = """if (chapterId === 'chapter1') {
        pool = [...chapter1Level1Questions];
    }"""
    
    new_logic = """if (chapterId === 'chapter1') {
        if (levelIndex === 0) pool = [...chapter1Level1Questions];
        else if (levelIndex === 1) pool = [...chapter1Level2Questions];
        else if (levelIndex === 2) pool = [...chapter1Level3Questions];
        else if (levelIndex === 3) pool = [...chapter1Level4Questions];
        else if (levelIndex === 4) pool = [...chapter1Level5Questions];
        else pool = [...chapter1Level1Questions]; // fallback
    }"""
    new_content = new_content.replace(old_logic, new_logic)
    print("Replaced logic")

with open('content.js', 'w') as f:
    f.write(new_content)

print("Modification complete.")
