const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const appJsCode = fs.readFileSync('app.js', 'utf8');
const contentJsCode = fs.readFileSync('content.js', 'utf8');

const dom = new JSDOM(`<!DOCTYPE html><body><div id="app"></div></body>`, {
  runScripts: "dangerously",
  resources: "usable"
});

dom.window.eval(`
  window.API_BASE = "http://localhost:8000";
  window.currentUser = { username: "admin" };
  window.isMobile = false;
  window.showToast = function(){};
`);
dom.window.eval(contentJsCode);
dom.window.eval(appJsCode);

dom.window.eval(`
  // 1. Enter God Mode
  window.adminSelectedChapter = "chapter1";
  window.adminSelectedLevel = "c1-l1";
  
  // Find the video question
  const pool = window.getGodModePool("chapter1", "c1-l1");
  const videoQ = pool.find(q => q.type === 'video');
  window.adminSelectedQuestion = videoQ.original_id;
  
  // Render God Mode editor for this question
  document.getElementById('app').innerHTML = '<div id="admin-editor-pane"></div>';
  window.renderGodModeRightPane = function() {
      // Mocking right pane UI to insert the hide toggle
      document.getElementById('admin-editor-pane').innerHTML = '<input type="checkbox" id="admin-q-show-duration" checked>';
  };
  
  // Force a change to NOT show duration
  window.renderGodModeRightPane();
  document.getElementById('admin-q-show-duration').checked = false; 
  
  // Call save
  window.adminSaveActivity = window.adminSaveQuestion; // they are the same logic in this context
  window.adminSaveQuestion();
  
  // 2. Play the level
  window.renderQuestionList("chapter1", "c1-l1");
`);

// Check if renderActivity output hides the duration
const appHtml = dom.window.document.getElementById('app').innerHTML;
const hasDuration = appHtml.includes('4 mins'); // "4 mins" is the hardcoded duration for video 1

console.log(JSON.stringify({
    videoOriginalId: dom.window.eval(`videoQ.original_id`),
    hideDurationState: dom.window.eval(`videoQ.hideDuration`),
    renderedHtmlHasDuration: hasDuration,
    poolHideDurationState: dom.window.eval(`window.chapter1Level1Questions.find(q => q.type === 'video').hideDuration`),
}));
