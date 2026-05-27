import json
import re

with open("/Users/lijinns/Desktop/Notebook/AG/d11/content.js", "r") as f:
    text = f.read()

with open("/Users/lijinns/Desktop/Notebook/AG/d11/processed_questions.json", "r") as f:
    questions_json = f.read()

# The logic:
new_logic = f"""
        // --- CUSTOM CONTENT FOR CHAPTER 1, LEVEL 1 ---
        if (chapterId === 'chapter1' && levelIndex === 0) {{
            const rawPool = {questions_json.strip()};

            // Group by type
            const categorized = {{
                choice: [],
                multiple_choice: [],
                ordering: [],
                matching: [],
                fill_in_blanks: []
            }};

            rawPool.forEach(q => {{
                if (categorized[q.type]) categorized[q.type].push(q);
            }});

            // Shuffle helper inline
            const shuffle = (arr) => arr.map(a => ({{sort: Math.random(), value: a}})).sort((a,b) => a.sort - b.sort).map(a => a.value);

            let selected = [];
            
            // Pick 2 from each
            Object.keys(categorized).forEach(type => {{
                let shuffledType = shuffle(categorized[type]);
                selected.push(...shuffledType.slice(0, 2));
            }});

            // Final shuffle of the 10 combined questions
            selected = shuffle(selected);

            // Push to main array
            for (let j = 0; j < selected.length; j++) {{
                const q = selected[j];
                q.id = `${{chapterId}}-L${{levelIndex + 1}}-Q${{j + 1}}`;
                q.title = `Question ${{j + 1}}`;
                
                questions.push({{
                    id: q.id,
                    title: q.title,
                    activities: [q]
                }});
            }}
            continue;
        }}
        // --- END CUSTOM CONTENT ---
"""

# Replace the block from `if (chapterId === 'chapter1' && levelIndex === 0) {` up to `// --- END CUSTOM CONTENT ---`
pattern = re.compile(r"        // --- CUSTOM CONTENT FOR CHAPTER 1, LEVEL 1 ---.*?// --- END CUSTOM CONTENT ---", re.DOTALL)

updated_text = pattern.sub(new_logic.strip(), text)

with open("/Users/lijinns/Desktop/Notebook/AG/d11/content.js", "w") as f:
    f.write(updated_text)

print("Updated content.js with dynamic pool logic!")
