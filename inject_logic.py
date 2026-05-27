import json

with open("/Users/lijinns/Desktop/Notebook/AG/d11/content.js", "r") as f:
    text = f.read()

with open("/Users/lijinns/Desktop/Notebook/AG/d11/processed_questions.json", "r") as f:
    questions_json = f.read()

start_marker = "        // --- CUSTOM CONTENT FOR CHAPTER 1, LEVEL 1 ---"
end_marker = "        // --- END CUSTOM CONTENT ---"

start_idx = text.find(start_marker)
end_idx = text.find(end_marker) + len(end_marker)

new_logic = f"""        // --- CUSTOM CONTENT FOR CHAPTER 1, LEVEL 1 ---
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
        // --- END CUSTOM CONTENT ---"""

if start_idx != -1 and end_idx != -1:
    updated_text = text[:start_idx] + new_logic + text[end_idx:]
    with open("/Users/lijinns/Desktop/Notebook/AG/d11/content.js", "w") as f:
        f.write(updated_text)
    print("Success: Injected new logic.")
else:
    print("Error: Could not find markers.")
