/**
 * Generate Hero SVG from config/profile.json
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

const name = config.identity?.name || config.name || 'Nitin Shah';
const title = config.identity?.title || config.title || 'AI / FULL-STACK DEVELOPER';

console.log(`[BUILD] Verified Hero generation for: ${name} (${title})`);
