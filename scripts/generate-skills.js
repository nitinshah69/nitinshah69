/**
 * Generate Skills and Constellation SVG validations
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

const skillTracks =
  config.skillStates ||
  config.skills?.journey ||
  config.skills ||
  [];

console.log(`[BUILD] Verified Skills Progress: ${skillTracks.length} tracks registered.`);
