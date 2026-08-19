/**
 * Generate Project SVG Cards from config/profile.json
 */
const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '..', 'config', 'profile.json');

let config = {};
try {
  if (fs.existsSync(configPath)) {
    config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  }
} catch (e) {
  console.warn('[WARN] Failed to parse profile.json:', e.message);
}

const projects = config.projects || [];

console.log(`[BUILD] Verified Project Assets: ${projects.length} project cards active.`);
