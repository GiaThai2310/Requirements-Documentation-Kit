#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const foldersToCopy = ['Agent', 'Context', 'User'];
const sourceDir = path.join(__dirname, '..');
const targetDir = process.cwd();

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

console.log('Done! Templates have been copied to your current directory.');
