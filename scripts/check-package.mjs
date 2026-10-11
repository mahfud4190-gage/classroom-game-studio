import fs from 'node:fs'; import assert from 'node:assert/strict';
for (const p of ['index.html','src/main.js','src/styles.css','src/firebase.js','src/firebase-config.js','firebase/firestore.rules','capacitor.config.ts','public/assets/wheel.svg','public/assets/quiz.svg','public/assets/mystery.svg']) assert.ok(fs.existsSync(p), `Missing ${p}`);
const js=fs.readFileSync('src/main.js','utf8'); for (const id of ['spin','quiz','mystery','match','quest','puzzle','vote','sort']) assert.ok(js.includes(`id:'${id}'`), `Missing game ${id}`);
console.log('Package structure check passed.');
