const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;
      
      // Upgrade text sizes across all UI
      content = content.replace(/text-\[10px\]/g, "text-sm");
      content = content.replace(/text-xs/g, "text-sm");
      
      if (original !== content) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated ' + fullPath);
      }
    }
  }
}

try {
  processDir('app');
  processDir('components');
  console.log('Text size upgrade complete.');
} catch (e) {
  console.error(e);
}
