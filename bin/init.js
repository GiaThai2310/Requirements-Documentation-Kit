#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const foldersToCopy = ['Agent', 'Context', 'User'];
const sourceDir = path.join(__dirname, '..');
const targetDir = path.join(process.cwd(), 'RDK');
// Agent Skills folders. Between them they cover Claude Code, Cursor, Copilot, Codex, and Gemini CLI.
const skillDirs = ['.claude/skills', '.agents/skills'];

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(function(childItemName) {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    if (!fs.existsSync(dest)) {
      fs.copyFileSync(src, dest);
    } else {
      console.log(`Skipped existing file: ${dest}`);
    }
  }
}

console.log('Initializing Requirements Documentation Kit templates...');

foldersToCopy.forEach(folder => {
  const src = path.join(sourceDir, folder);
  const dest = path.join(targetDir, folder);
  
  if (fs.existsSync(src)) {
    copyRecursiveSync(src, dest);
    console.log(`Copied ${folder}/`);
  } else {
    console.warn(`Warning: Folder ${folder} not found in the package.`);
  }
});

skillDirs.forEach(dir => {
  copyRecursiveSync(path.join(sourceDir, 'Skills', 'rdk'), path.join(process.cwd(), dir, 'rdk'));
  console.log(`Copied ${dir}/rdk/`);
});

console.log('Done! Templates have been copied to the RDK/ directory.');
console.log('Start with /rdk in your Agent. In Codex use $rdk; in Gemini CLI say "run rdk".');
