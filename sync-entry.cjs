// Keep the standalone filename and the GitHub Pages entry identical.
const fs=require('node:fs');const path=require('node:path');
fs.copyFileSync(path.join(__dirname,'ember-tide.html'),path.join(__dirname,'index.html'));
console.log('Updated index.html from ember-tide.html');
