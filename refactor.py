import re

with open('/Users/lijinns/Desktop/Notebook/AG/d13/app.js', 'r') as f:
    text = f.read()

# 1. We redefine renderGodModeEditor, renderGodModeLeftPane, renderGodModeMiddlePane, renderGodModeRightPane
new_functions = """
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

window.renderGodModeLeftPane = function() {
    const pane = document.getElementById('admin-left-pane');
    if (!pane) return;

    let html = `
        <div style="padding: 1.5rem; border-bottom: 1px solid var(--border); position: sticky; top: 0; background: var(--bg-dark); z-index: 10;">
            <h2 style="font-size: 1.2rem; display: flex; align-items: center; gap: 0.5rem; color: var(--error);"><span class="material-symbols-rounded">admin_panel_settings</span> Content Manager</h2>
            <button onclick="renderChapters()" style="margin-top: 1rem; width: 100%; padding: 0.5rem; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-s); color: var(--text-main); cursor: pointer;">Exit Admin Mode</button>
            <button onclick="exportContentJS()" class="pulse-cta" style="margin-top: 0.5rem; width: 100%; padding: 0.5rem; background: var(--primary); color: white; border: none; border-radius: var(--radius-s); font-weight: 700; cursor: pointer;">💾 Export Content.js</button>
        </div>
        
        <div style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem;">
    `;

    window.courseData.forEach((ch, cIdx) => {
        const isChapterSelected = adminSelectedChapter === ch.id;
        html += `
            <div style="margin-bottom: 0.5rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem; border-radius: var(--radius-s); background: ${isChapterSelected ? 'rgba(var(--primary-rgb),0.1)' : 'transparent'};">
                    <div style="font-weight: 800; color: ${isChapterSelected ? 'var(--primary)' : 'var(--text-muted)'}; cursor: pointer; flex: 1;" 
                         onclick="adminSelectChapter('${ch.id}')">
                         Chapter ${cIdx + 1}: ${ch.title.split(': ')[0]}
                    </div>
                    <div onclick="adminEditChapter('${ch.id}')" 
                         style="cursor: pointer; opacity: 0.6; color: var(--text-main); transition: all 0.2s; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; border-radius: 50%; background: rgba(255,255,255,0.05);" 
                         onmouseover="this.style.opacity=1; this.style.background='rgba(255,255,255,0.15)'" 
                         onmouseout="this.style.opacity=0.6; this.style.background='rgba(255,255,255,0.05)'" 
                         title="Edit Chapter Settings">
                        <span class="material-symbols-rounded" style="font-size: 1.1rem;">settings</span>
                    </div>
                </div>
                <div style="padding-left: 1rem; display: ${isChapterSelected || (adminSelectedChapter === null && cIdx === 0) ? 'block' : 'none'}; border-left: 1px solid var(--border); margin-left: 0.5rem;">
        `;

        ch.levels.forEach((lvl, lIdx) => {
            const isLevelSelected = adminSelectedLevel === lvl.id;
            const fullPool = getGodModePool(ch.id, lvl.id);
            const realQCount = fullPool.length;
            html += `
                <div style="padding: 0.5rem; font-size: 0.9rem; cursor: pointer; color: ${isLevelSelected ? '#fff' : 'var(--text-muted)'}; background: ${isLevelSelected ? 'rgba(255,255,255,0.1)' : 'transparent'}; border-radius: var(--radius-s); display: flex; justify-content: space-between;"
                     onclick="adminSelectLevel('${ch.id}', '${lvl.id}')">
                     Level ${lIdx + 1}
                     <span style="font-size: 0.7rem; opacity: 0.5;">${realQCount} Qs</span>
                </div>
            `;
        });

        html += `
            <div style="padding: 0.6rem 0rem; margin-top: 0.4rem; border-top: 1px solid rgba(255,255,255,0.05);">
                <button onclick="adminAddLevel('${ch.id}')"
                        style="width: 100%; padding: 0.6rem; background: rgba(var(--success-rgb), 0.12); border: 1.5px solid var(--success); color: var(--success); border-radius: var(--radius-s); font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 0.4rem; transition: all 0.2s; text-transform: uppercase; letter-spacing: 0.5px;"
                        onmouseover="this.style.background='rgba(var(--success-rgb), 0.2)'; this.style.boxShadow='0 2px 8px rgba(var(--success-rgb), 0.2)'"
                        onmouseout="this.style.background='rgba(var(--success-rgb), 0.12)'; this.style.boxShadow='none'">
                    <span class="material-symbols-rounded" style="font-size: 1.1rem;">add_circle</span> Add Level
                </button>
            </div>
        </div></div>`;
    });

    html += `
        <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1);">
            <button onclick="adminAddChapter()" 
                    style="width: 100%; padding: 0.65rem; background: rgba(var(--success-rgb), 0.12); border: 1.5px solid var(--success); color: var(--success); border-radius: var(--radius-s); font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 0.4rem; transition: all 0.2s; text-transform: uppercase; letter-spacing: 0.5px;" 
                    onmouseover="this.style.background='rgba(var(--success-rgb), 0.2)'; this.style.boxShadow='0 2px 8px rgba(var(--success-rgb), 0.2)'" 
                    onmouseout="this.style.background='rgba(var(--success-rgb), 0.12)'; this.style.boxShadow='none'">
                <span class="material-symbols-rounded" style="font-size: 1.2rem;">add_circle</span> Add Chapter
            </button>
        </div></div>
    `;

    pane.innerHTML = html;
};

window.renderGodModeMiddlePane = function() {
    const pane = document.getElementById('admin-middle-pane');
    if (!pane) return;

    let html = '';
    
    if (adminSelectedChapter && adminSelectedLevel) {
        const chapter = window.courseData.find(c => c.id === adminSelectedChapter);
        const level = chapter.levels.find(l => l.id === adminSelectedLevel);
        const fullPool = getGodModePool(adminSelectedChapter, adminSelectedLevel);

        html += `<div style="padding: 1.5rem; border-bottom: 1px solid var(--border); position: sticky; top: 0; background: var(--bg-dark); z-index: 10; display: flex; justify-content: space-between; align-items: flex-start;">
                    <div style="flex: 1;">
                        <h3 style="font-size: 1rem; margin-bottom: 0.2rem;">${level?.title || 'Unknown Level'}</h3>
                        <div style="font-size: 0.75rem; color: var(--text-muted); line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${level?.description || ''}</div>
                    </div>
                    <div style="display: flex; gap: 0.5rem; margin-left: 1rem;">
                        <button onclick="adminEditLevel('${adminSelectedChapter}', '${adminSelectedLevel}')" 
                                style="background: rgba(255,255,255,0.05); border: 1px solid var(--border); color: var(--text-main); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s;"
                                onmouseover="this.style.background='rgba(255,255,255,0.15)'; this.style.color='var(--primary)'"
                                onmouseout="this.style.background='rgba(255,255,255,0.05)'; this.style.color='var(--text-main)'"
                                title="Edit Level Details">
                            <span class="material-symbols-rounded" style="font-size: 1.1rem;">edit</span>
                        </button>
                        <button onclick="adminDeleteLevel('${adminSelectedChapter}', '${adminSelectedLevel}')" 
                                style="background: rgba(var(--error-rgb), 0.1); border: 1px solid rgba(var(--error-rgb), 0.3); color: var(--error); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s;"
                                onmouseover="this.style.background='rgba(var(--error-rgb), 0.2)'"
                                onmouseout="this.style.background='rgba(var(--error-rgb), 0.1)'"
                                title="Delete Level">
                            <span class="material-symbols-rounded" style="font-size: 1.1rem;">delete</span>
                        </button>
                    </div>
                 </div>
                 <div style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem;">
                    <div style="padding-bottom: 0.5rem; border-bottom: 1px solid var(--border); margin-bottom: 0.5rem;">
                        <button onclick="adminSelectQuestion('new')" 
                                style="width: 100%; padding: 0.7rem; background: rgba(var(--success-rgb), 0.12); border: 1.5px solid var(--success); color: var(--success); border-radius: var(--radius-s); font-weight: 800; font-size: 0.85rem; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; justify-content: center; gap: 0.4rem; text-transform: uppercase; letter-spacing: 0.5px;"
                                onmouseover="this.style.background='rgba(var(--success-rgb), 0.2)'; this.style.boxShadow='0 2px 8px rgba(var(--success-rgb), 0.2)'"
                                onmouseout="this.style.background='rgba(var(--success-rgb), 0.12)'; this.style.boxShadow='none'">
                            <span class="material-symbols-rounded" style="font-size: 1.1rem;">add_circle</span>
                            Add New Question
                        </button>
                    </div>
                 `;

        fullPool.forEach((q, qIdx) => {
            const qKey = q.original_id ? q.original_id.toString() : `idx_${qIdx}`;
            const isQSelected = adminSelectedQuestion === qKey;

            const qType = q.type || '';
            const typeIconMap = {
                'choice': '🔘',
                'multiple_choice': '✅',
                'task': '✏️',
                'ordering': '🔢',
                'matching': '🔗',
                'fill_in_blanks': '⬜',
                'info_card': '📖'
            };
            const typeIcon = typeIconMap[qType] || '❓';
            const previewText = q.question || q.prompt || q.text || q.title || '—';

            html += `
                <div style="padding: 0.9rem 1rem; background: ${isQSelected ? 'rgba(var(--primary-rgb),0.15)' : 'var(--bg-card)'}; border: 1px solid ${isQSelected ? 'var(--primary)' : 'var(--border)'}; border-radius: var(--radius-s); cursor: pointer;"
                     onclick="adminSelectQuestion('${qKey}')">
                    <div style="font-size: 0.72rem; color: var(--text-muted); margin-bottom: 0.3rem; display: flex; align-items: center; gap: 0.4rem;">${typeIcon} <span style="font-family: monospace;">#${q.original_id || qIdx + 1}</span></div>
                    <div style="font-size: 0.88rem; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; color: var(--text-main);">
                        ${previewText}
                    </div>
                </div>
            `;
        });
        html += `</div>`;
    } else {
        html += `<div style="padding: 2rem; color: var(--text-muted); text-align: center;">Select a level to view questions.</div>`;
    }

    pane.innerHTML = html;
};

window.renderGodModeRightPane = function() {
    const pane = document.getElementById('admin-right-pane');
    if (!pane) return;

    let html = '';

    if (adminSelectedQuestion && adminSelectedChapter && adminSelectedLevel) {
        let act = {};
        let qType = '';
        let isNew = (adminSelectedQuestion === 'new');

        if (isNew) {
            if (!window.adminNewQuestionType) {
                const types = [
                    { id: 'choice', name: 'Single Choice', icon: '🔘', desc: 'One correct answer' },
                    { id: 'multiple_choice', name: 'Multiple Choice', icon: '✅', desc: 'Multiple correct answers' },
                    { id: 'fill_in_blanks', name: 'Fill In Blanks', icon: '⬜', desc: 'Complete the sentence' },
                    { id: 'ordering', name: 'Ordering', icon: '🔢', desc: 'Arrange items in order' },
                    { id: 'matching', name: 'Matching', icon: '🔗', desc: 'Match pairs of items' },
                    { id: 'task', name: 'Text Task', icon: '✏️', desc: 'Open-ended answer' },
                    { id: 'info_card', name: 'Info Card', icon: '📖', desc: 'Informational slide' }
                ];

                html += `
                    <div style="width: 100%; max-width: 550px; padding: 1rem;">
                        <h2 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 0.4rem; color: var(--text-main);">Choose Question Type</h2>
                        <p style="color: var(--text-muted); margin-bottom: 2rem; font-size: 0.9rem;">Select a format to begin creating your new question.</p>
                        
                        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                            ${types.map(t => `
                                <div onclick="adminSetNewQuestionType('${t.id}')"
                                     style="background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-s); padding: 1.1rem 1.4rem; cursor: pointer; transition: all 0.2s; display: flex; align-items: center;"
                                     onmouseover="this.style.borderColor='var(--primary)'; this.style.background='rgba(var(--primary-rgb), 0.05)'"
                                     onmouseout="this.style.borderColor='var(--border)'; this.style.background='var(--bg-card)'">
                                    <div style="flex: 1;">
                                        <h4 style="font-size: 0.95rem; margin-bottom: 0.1rem; color: var(--text-main); font-weight: 700;">${t.name}</h4>
                                        <p style="font-size: 0.78rem; color: var(--text-muted); margin: 0; opacity: 0.8;">${t.desc}</p>
                                    </div>
                                    <span class="material-symbols-rounded" style="font-size: 1.2rem; color: var(--text-muted); opacity: 0.4;">chevron_right</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
                pane.innerHTML = html;
                return;
            } else {
                qType = window.adminNewQuestionType;
                act = {
                    type: qType,
                    xp: 10,
                    options: qType.includes('choice') ? [
                        { text: '', correct: true },
                        { text: '', correct: false },
                        { text: '', correct: false },
                        { text: '', correct: false }
                    ] : [],
                    items: qType === 'ordering' ? ['', '', '', ''] : [],
                    pairs: qType === 'matching' ? [
                        { left: '', right: '' },
                        { left: '', right: '' },
                        { left: '', right: '' }
                    ] : [],
                    text: '',
                    wordBank: [],
                    correctFeedback: '',
                    incorrectFeedback: ''
                };
            }
        } else {
            const fullPool = getGodModePool(adminSelectedChapter, adminSelectedLevel);
            act = fullPool.find((qu, i) => (qu.original_id ? qu.original_id.toString() : `idx_${i}`) === adminSelectedQuestion) || {};
            qType = act.type || '';
        }

        const inputStyle = `width: 100%; padding: 0.65rem 0.75rem; background: var(--bg-card); color: var(--text-main); border: 1px solid var(--border); border-radius: var(--radius-s); font-family: inherit; font-size: 0.9rem; box-sizing: border-box;`;
        const labelStyle = `display: block; font-weight: 600; margin-bottom: 0.35rem; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.5px; color: var(--text-muted);`;
        const sectionStyle = `display: flex; flex-direction: column; gap: 0.35rem; width: 100%;`;
        const taStyle = (h) => `width: 100%; height: ${h}px; padding: 0.65rem 0.75rem; background: var(--bg-card); color: var(--text-main); border: 1px solid var(--border); border-radius: var(--radius-s); font-family: inherit; font-size: 0.9rem; resize: vertical; box-sizing: border-box;`;

        html += `
            <div style="width: 100%; max-width: 760px; display: flex; flex-direction: column; gap: 1.5rem;">
                <div style="display: flex; align-items: center; gap: 0.8rem; flex-wrap: wrap; padding-bottom: 1rem; border-bottom: 1px solid var(--border);">
                    <div style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer; color: var(--text-muted); font-size: 0.85rem; font-weight: 700; background: rgba(255,255,255,0.05); padding: 0.3rem 0.7rem; border-radius: 6px;"
                         onclick="adminSelectQuestion(${isNew ? "'new'" : `'${adminSelectedQuestion}'`}); window.adminNewQuestionType = null; renderGodModeRightPane();">
                        <span class="material-symbols-rounded" style="font-size: 1rem;">arrow_back</span>
                        Back
                    </div>
                    <h2 style="font-size: 1.25rem; margin: 0; font-weight: 800; color: var(--text-main);">${isNew ? 'Create New' : 'Edit'} Question</h2>
                    ${!isNew ? `<span style="font-family: monospace; font-size: 0.82rem; color: var(--primary); background: rgba(var(--primary-rgb),0.1); padding: 0.2rem 0.6rem; border-radius: 6px;">#${act.original_id || adminSelectedQuestion.replace('idx_', '')}</span>` : ''}
                    <span style="padding: 0.2rem 0.6rem; background: var(--bg-overlay); border-radius: 20px; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.5px; border: 1px solid var(--border); color: var(--text-muted);">${qType || 'unknown'}</span>
                    <div style="display: flex; align-items: center; gap: 0.4rem; padding: 0.2rem 0.6rem; background: rgba(var(--primary-rgb),0.08); border-radius: 20px; border: 1px solid rgba(var(--primary-rgb),0.2);">
                        <span style="font-size: 0.72rem; font-weight: 700; color: var(--primary);">XP:</span>
                        <input type="number" id="admin-q-xp" value="${act.xp || 10}" min="0" step="5" style="width: 45px; background: transparent; border: none; color: var(--primary); font-weight: 800; font-size: 0.75rem; text-align: center; outline: none;">
                    </div>
                </div>

                <div id="admin-error-msg" style="display: none; padding: 0.8rem 1rem; background: rgba(var(--error-rgb), 0.1); color: var(--error); border: 1px solid rgba(var(--error-rgb), 0.3); border-radius: var(--radius-s); font-size: 0.9rem; font-weight: 600; text-align: center;"></div>

                <div style="${sectionStyle}">
                    <label style="${labelStyle}">Question Text</label>
                    <textarea id="admin-q-question" style="${taStyle(90)}" placeholder="Enter question content...">${act.question || act.prompt || act.text || ''}</textarea>
                </div>
        `;

        if (qType === 'choice' || qType === 'multiple_choice') {
            const opts = act.options || [];
            const inputType = qType === 'multiple_choice' ? 'checkbox' : 'radio';
            html += `
                <div style="${sectionStyle}">
                    <label style="${labelStyle}">Answer Options <span style="font-weight:400;text-transform:none;letter-spacing:0;opacity:0.7;">(Select correct)</span></label>
                    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                        ${opts.map((opt, idx) => `
                        <div style="display: flex; align-items: center; gap: 0.75rem; padding: 0.6rem 0.8rem; border-radius: var(--radius-s); border: 1px solid ${opt.correct ? 'var(--success)' : 'var(--border)'}; background: ${opt.correct ? 'rgba(var(--success-rgb),0.05)' : 'rgba(255,255,255,0.02)'}; transition: all 0.2s;">
                            <input type="${inputType}" name="admin-q-correct" data-idx="${idx}" ${opt.correct ? 'checked' : ''}
                                   style="width: 1.1rem; height: 1.1rem; cursor: pointer; flex-shrink: 0; accent-color: var(--success);">
                            <input type="text" id="admin-q-opt-${idx}" value="${(opt.text || '').replace(/"/g, '&quot;')}"
                                   style="flex: 1; padding: 0.35rem 0.5rem; background: transparent; color: var(--text-main); border: none; border-bottom: 1px solid var(--border); font-size: 0.9rem; font-family: inherit; outline: none;" placeholder="Option ${idx + 1}">
                        </div>
                    `).join('')}
                    </div>
                </div>
                `;
        }

        if (qType === 'task') {
            html += `
                <div style="${sectionStyle}">
                    <label style="${labelStyle}">Placeholder Text</label>
                    <input type="text" id="admin-q-placeholder" value="${(act.placeholder || '').replace(/"/g, '&quot;')}" style="${inputStyle}">
                </div>
            `;
        }

        if (qType === 'ordering') {
            const items = act.items || [];
            html += `
                <div style="${sectionStyle}">
                    <label style="${labelStyle}">Items in Correct Order</label>
                    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                        ${items.map((item, idx) => `
                            <div style="display: flex; align-items: center; gap: 0.75rem;">
                                <span style="width:1.6rem;height:1.6rem;background:var(--primary);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:800;flex-shrink:0;">${idx + 1}</span>
                                <input type="text" id="admin-q-item-${idx}" value="${(item || '').replace(/"/g, '&quot;')}" placeholder="e.g., Step ${idx + 1}" style="${inputStyle}">
                            </div>
                        `).join('')}
                    </div>
                </div>
                `;
        }

        if (qType === 'matching') {
            const pairs = act.pairs || [];
            html += `
                <div style="${sectionStyle}">
                    <label style="${labelStyle}">Matching Pairs</label>
                    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                        ${pairs.map((pair, idx) => `
                            <div style="display: grid; grid-template-columns: 1fr auto 1fr; gap: 0.75rem; align-items: center;">
                                <input type="text" id="admin-q-pair-left-${idx}" value="${(pair.left || '').replace(/"/g, '&quot;')}" placeholder="Left part" style="${inputStyle}">
                                <span style="color:var(--text-muted);font-weight:700;">&rlarr;</span>
                                <input type="text" id="admin-q-pair-right-${idx}" value="${(pair.right || '').replace(/"/g, '&quot;')}" placeholder="Right part" style="${inputStyle}">
                            </div>
                        `).join('')}
                    </div>
                </div>
                `;
        }

        if (qType === 'fill_in_blanks') {
            const fibText = act.text || '';
            const wordBank = act.wordBank || [];
            html += `
                <div style="${sectionStyle}">
                    <label style="${labelStyle}">Sentence Text <span style="font-weight:400;text-transform:none;letter-spacing:0;opacity:0.7;">(wrap blanks like [word])</span></label>
                    <div style="font-size: 0.82rem; color: var(--primary); background: rgba(var(--primary-rgb), 0.05); padding: 0.75rem; border-radius: var(--radius-s); margin-bottom: 0.5rem; line-height: 1.4; border: 1px dashed rgba(var(--primary-rgb), 0.2);">
                        <strong>💡 Model Question:</strong><br>
                        "The [capital] of France is [Paris]." <br>
                        <span style="opacity: 0.8; font-size: 0.75rem;">(The words in brackets will become hidden blanks for the user)</span>
                    </div>
                    <textarea id="admin-q-fib-text" style="${taStyle(100)}" placeholder="e.g., The [sun] rises in the [east].">${fibText}</textarea>
                </div>
                <div style="${sectionStyle}">
                    <label style="${labelStyle}">Word Bank <span style="font-weight:400;text-transform:none;letter-spacing:0;opacity:0.7;">(comma-separated)</span></label>
                    <input type="text" id="admin-q-wordbank" value="${wordBank.join(', ')}" style="${inputStyle}" placeholder="e.g., sun, east, west">
                </div>
                `;
        }

        if (qType !== 'info_card') {
            html += `
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div style="${sectionStyle}">
                        <label style="${labelStyle}">Correct Feedback</label>
                        <textarea id="admin-q-feedback-correct" style="${taStyle(80)}" placeholder="Encouraging message...">${act.correctFeedback || ''}</textarea>
                    </div>
                    <div style="${sectionStyle}">
                        <label style="${labelStyle}">Incorrect Feedback</label>
                        <textarea id="admin-q-feedback-incorrect" style="${taStyle(80)}" placeholder="Explain the concept...">${act.incorrectFeedback || ''}</textarea>
                    </div>
                </div>
            `;
        }

        html += `
                <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 1.5rem; border-top: 1px solid var(--border); margin-top: 1rem;">
                    <div id="admin-save-msg" style="color: var(--success); opacity: 0; transition: opacity 0.3s; font-size: 0.9rem; font-weight: 700;">✅ Changes saved to memory</div>
                    
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <button onclick="adminDeleteQuestion('${adminSelectedQuestion}')"
                            style="padding: 0.8rem 1.5rem; background: rgba(var(--error-rgb), 0.05); color: var(--error); border: 1px solid var(--error); border-radius: var(--radius-m); font-weight: 700; font-size: 0.95rem; cursor: pointer; transition: all 0.2s; white-space: nowrap;"
                            onmouseover="this.style.background='rgba(var(--error-rgb), 0.1)'"
                            onmouseout="this.style.background='rgba(var(--error-rgb), 0.05)'">
                            ${isNew ? 'Cancel' : 'Delete Question'}
                        </button>

                        ${isNew ? `
                            <button onclick="adminSaveQuestion()"
                                style="padding: 0.8rem 2rem; background: rgba(var(--primary-rgb), 0.05); color: var(--primary); border: 1px solid var(--primary); border-radius: var(--radius-m); font-weight: 700; font-size: 0.95rem; cursor: pointer; transition: all 0.2s; white-space: nowrap;">
                                Save
                            </button>
                            <button onclick="adminSaveQuestion(true)"
                                style="padding: 0.8rem 2.5rem; background: var(--primary); color: white; border: none; border-radius: var(--radius-m); font-weight: 800; font-size: 1rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 12px rgba(var(--primary-rgb),0.3); white-space: nowrap;"
                                onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 16px rgba(var(--primary-rgb),0.4)'"
                                onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 12px rgba(var(--primary-rgb),0.3)'">
                                Publish
                            </button>
                        ` : `
                            <button onclick="adminSaveQuestion(true)"
                                style="padding: 0.8rem 2.5rem; background: var(--primary); color: white; border: none; border-radius: var(--radius-m); font-weight: 800; font-size: 1rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 12px rgba(var(--primary-rgb),0.3); white-space: nowrap;"
                                onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 16px rgba(var(--primary-rgb),0.4)'"
                                onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 12px rgba(var(--primary-rgb),0.3)'">
                                Save Changes
                            </button>
                        `}
                    </div>
                </div>
            </div>
        `;
    } else {
        html += `<div style="height: 100%; display: flex; align-items: center; justify-content: center; color: var(--text-muted); flex-direction: column; gap: 1.5rem;">
                    <div style="width: 80px; height: 80px; border-radius: 50%; background: var(--bg-overlay); display: flex; align-items: center; justify-content: center;">
                        <span class="material-symbols-rounded" style="font-size: 3rem; opacity: 0.3;">edit_note</span>
                    </div>
                    <div style="text-align: center;">
                        <h4 style="margin: 0; color: var(--text-main); font-size: 1.1rem;">No Question Selected</h4>
                        <p style="margin: 0.25rem 0 0; font-size: 0.9rem; opacity: 0.6;">Pick a question from the list to begin editing</p>
                    </div>
                 </div>`;
    }

    pane.innerHTML = html;
};

// Now replace the old functions
// We need to replace the update functions as well
"""

import re
# 2. Extract start and end of renderGodModeEditor
start_idx = -1
for i, line in enumerate(text.splitlines()):
    if line.startswith('window.renderGodModeEditor = function'):
        start_idx = i
        break

lines = text.splitlines()
end_idx = start_idx
open_braces = 0
for i in range(start_idx, len(lines)):
    open_braces += lines[i].count('{')
    open_braces -= lines[i].count('}')
    if open_braces == 0 and lines[i].strip() == '}':
        end_idx = i
        break

old_code = "\n".join(lines[start_idx:end_idx+1])

text_updated = text.replace(old_code, new_functions)

# Update action functions
update_replacements = {
    """window.adminSelectChapter = function (chapterId) {
    adminSelectedChapter = chapterId;
    adminSelectedLevel = null;
    adminSelectedQuestion = null;
    renderGodModeEditor();
}""": """window.adminSelectChapter = function (chapterId) {
    adminSelectedChapter = chapterId;
    adminSelectedLevel = null;
    adminSelectedQuestion = null;
    renderGodModeLeftPane();
    renderGodModeMiddlePane();
    renderGodModeRightPane();
}""",

    """window.adminSelectLevel = function (chapterId, levelId) {
    adminSelectedChapter = chapterId;
    adminSelectedLevel = levelId;
    adminSelectedQuestion = null;
    renderGodModeEditor();
}""": """window.adminSelectLevel = function (chapterId, levelId) {
    adminSelectedChapter = chapterId;
    adminSelectedLevel = levelId;
    adminSelectedQuestion = null;
    renderGodModeLeftPane();
    renderGodModeMiddlePane();
    renderGodModeRightPane();
}""",

    """window.adminSelectQuestion = function (qId) {
    adminEditingChapter = null;
    adminSelectedQuestion = qId;
    // Reset type selection when picking an existing question or deselecting
    if (qId !== 'new') {
        window.adminNewQuestionType = null;
    }
    renderGodModeEditor();
}""": """window.adminSelectQuestion = function (qId) {
    adminEditingChapter = null;
    adminSelectedQuestion = qId;
    if (qId !== 'new') {
        window.adminNewQuestionType = null;
    }
    renderGodModeMiddlePane();
    renderGodModeRightPane();
}""",

    """window.adminSetNewQuestionType = function (type) {
    window.adminNewQuestionType = type;
    renderGodModeEditor();
}""": """window.adminSetNewQuestionType = function (type) {
    window.adminNewQuestionType = type;
    renderGodModeRightPane();
}""",

    # In adminSaveQuestion, we can do full render or partial
    """    renderGodModeEditor();
}

window.adminDeleteQuestion""": """    renderGodModeLeftPane();
    renderGodModeMiddlePane();
    renderGodModeRightPane();
}

window.adminDeleteQuestion""",

    """    if (qId === 'new') {
        adminSelectedQuestion = null;
        window.adminNewQuestionType = null;
        renderGodModeEditor();
        return;
    }""": """    if (qId === 'new') {
        adminSelectedQuestion = null;
        window.adminNewQuestionType = null;
        renderGodModeMiddlePane();
        renderGodModeRightPane();
        return;
    }""",

    """            if (idx !== -1) {
                fullPool.splice(idx, 1);
                adminSelectedQuestion = null;
                renderGodModeEditor();""": """            if (idx !== -1) {
                fullPool.splice(idx, 1);
                adminSelectedQuestion = null;
                renderGodModeLeftPane();
                renderGodModeMiddlePane();
                renderGodModeRightPane();"""
}

for old, new_ in update_replacements.items():
    text_updated = text_updated.replace(old, new_)

with open('/Users/lijinns/Desktop/Notebook/AG/d13/app.js', 'w') as f:
    f.write(text_updated)

print("Replacement complete.")
