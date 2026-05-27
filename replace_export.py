import re

with open('app.js', 'r') as f:
    content = f.read()

# Find window.exportContentJS = function () {
start_str = "window.exportContentJS = function () {"
if start_str not in content:
    start_str = "window.exportContentJS = async function () {" # just in case

start_idx = content.find(start_str)

end_idx = content.find("\n}\n", start_idx) + 3

if start_idx != -1 and end_idx != -1:
    new_func = """window.exportContentJS = async function () {
    const payload = {
        chapters: window.courseData,
        pools: {}
    };

    window.courseData.forEach((ch, cIdx) => {
        const chapNum = cIdx + 1;
        ch.levels.forEach((lvl, lIdx) => {
            const levelNum = lIdx + 1;
            const varName = `chapter${chapNum}Level${levelNum}Questions`;
            payload.pools[varName] = window.getGodModePool(ch.id, lvl.id);
        });
    });

    try {
        const res = await fetch('/.netlify/functions/save-course-content', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (res.ok) {
            showModal({
                icon: '🚀',
                title: 'Live in Production',
                message: 'Your course content strategy has been successfully saved to the global database and is now live for all users!',
                confirmText: 'Awesome!'
            });
        } else {
            const errData = await res.json();
            throw new Error(errData.error || 'Server error');
        }
    } catch (err) {
        console.error("Publish Error: ", err);
        showModal({
            icon: 'error',
            title: 'Publish Failed',
            message: 'Could not connect to database or update failed: ' + err.message,
            confirmText: 'OK'
        });
    }
}
"""
    new_content = content[:start_idx] + new_func + content[end_idx:]
    with open('app.js', 'w') as f:
        f.write(new_content)
    print("Replaced exportContentJS successfully.")
else:
    print("Could not find start or end index.")
