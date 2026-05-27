with open('app.js', 'r') as f:
    content = f.read()

start_idx = content.find('window.exportContentJS = async function () {')
if start_idx != -1:
    marker = 'console.error("Publish Error: ", err);'
    marker_idx = content.find(marker, start_idx)
    if marker_idx != -1:
        end_idx = content.find('}\n', marker_idx)
        if end_idx != -1:
            # We want to keep up to the closing brace of exportContentJS
            # } after console.error... showModal... }
            # Actually, let's just find the exact last closing brace
            final_brace_idx = content.find('};', marker_idx)
            if final_brace_idx != -1:
                new_content = content[:final_brace_idx + 2] + '\n'
                with open('app.js', 'w') as f:
                    f.write(new_content)
                print("Truncated app.js successfully.")
            else:
                print("Could not find final brace.")
else:
    print("Could not find exportContentJS.")
