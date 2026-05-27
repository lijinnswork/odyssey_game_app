import math

text = open('app.js').read()

import re
# Remove strings and comments safely
text = re.sub(r'//.*', '', text)
text = re.sub(r'/[*].*?[*]/', '', text, flags=re.DOTALL)
text = re.sub(r'`[^`]*`', '``', text)
text = re.sub(r"'[^']*'", "''", text)
text = re.sub(r'"[^"]*"', '""', text)

stack = []
for i, line in enumerate(text.split('\n')):
    for char in line:
        if char in '{[(': 
            stack.append((char, i+1))
        elif char in '}])':
            if not stack:
                print(f"Mismatch at line {i+1}: expected nothing, found {char}")
                exit(1)
            last_item = stack.pop()
            last_char = last_item[0]
            last_line = last_item[1]
            expected = {'{':'}', '[':']', '(':')'}[last_char]
            if char != expected:
                print(f"Mismatch at line {i+1}: expected {expected}, found {char}. (Opened {last_char} at {last_line})")
                exit(1)

if stack:
    print(f"Unclosed {stack[-1][0]} from line {stack[-1][1]}")
else:
    print("All brackets matched (ignoring string contents).")
