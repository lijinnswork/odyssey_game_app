import json

with open("/Users/lijinns/Desktop/Notebook/AG/d11/content.js", "r") as f:
    text = f.read()

# Replace the specific block of if (chapterId === 'chapter1' && levelIndex === 0)
# with a broader condition: if (chapterId === 'chapter1' && levelIndex < 5)

start_marker = "        // --- CUSTOM CONTENT FOR CHAPTER 1, LEVEL 1 ---"
end_marker = "        // --- END CUSTOM CONTENT ---"

start_idx = text.find(start_marker)
end_idx = text.find(end_marker) + len(end_marker)

if start_idx == -1 or end_idx == -1:
    print("Could not find markers")
    exit(1)

# Extract the existing rawPool array string from the file to reuse it
raw_pool_start = text.find("const rawPool = [", start_idx)
raw_pool_end = text.find("];", raw_pool_start) + 2
raw_pool_str = text[raw_pool_start:raw_pool_end]

new_logic = f"""        // --- CUSTOM CONTENT FOR CHAPTER 1, LEVELS 1-5 ---
        if (chapterId === 'chapter1' && levelIndex < 5) {{
            {raw_pool_str}

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
            const shuffle = (arr) => arr.map(a => ({{ sort: Math.random(), value: a }})).sort((a, b) => a.sort - b.sort).map(a => a.value);

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
            return questions;
        }}
        // --- END CUSTOM CONTENT FOR CHAPTER 1 ---"""

updated_text = text[:start_idx] + new_logic + text[end_idx:]

with open("/Users/lijinns/Desktop/Notebook/AG/d11/content.js", "w") as f:
    f.write(updated_text)

print("Success")
