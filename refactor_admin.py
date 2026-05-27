import re

with open('/Users/lijinns/Desktop/Notebook/AG/d13/app.js', 'r') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if line.startswith('window.renderGodModeEditor = function'):
        start_idx = i
        break

end_idx = start_idx
open_braces = 0
for i in range(start_idx, len(lines)):
    open_braces += lines[i].count('{')
    open_braces -= lines[i].count('}')
    if open_braces == 0 and lines[i].strip() == '}':
        end_idx = i
        break

original_func = "".join(lines[start_idx:end_idx+1])

print(f"Start: {start_idx}, End: {end_idx}")

new_code = """
window.renderGodModeEditor = function () {
    window.currentView = 'admin';
    updateDesktopPanels();

    if (currentUser !== 'lijinns') {
        app.innerHTML = `<div style="padding: 2rem; color: var(--error);">Unauthorized access.</div>`;
        return;
    }

    if (!document.getElementById('admin-layout')) {
        app.innerHTML = `
            <div id="admin-layout" style="display: flex; height: 100vh; width: 100%; background: var(--bg-dark); color: var(--text-main); font-family: 'Inter', sans-serif;">
                <div id="admin-left-pane" style="width: 300px; background: rgba(0,0,0,0.3); border-right: 1px solid var(--border); overflow-y: auto; display: flex; flex-direction: column;"></div>
                <div id="admin-middle-pane" style="width: 350px; background: rgba(0,0,0,0.1); border-right: 1px solid var(--border); overflow-y: auto; display: flex; flex-direction: column;"></div>
                <div id="admin-right-pane" style="flex: 1; overflow-y: auto; padding: 2rem; background: var(--bg-dark); display: flex; flex-direction: column; align-items: center;"></div>
            </div>
        `;
    }

    renderGodModeLeftPane();
    renderGodModeMiddlePane();
    renderGodModeRightPane();
};
"""

# Now extract the content logic for the three panes
# I'll just write the Python script to do the replacement block by block.
