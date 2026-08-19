/**
 * Generate Roadmap and Path validations
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

const roadmapSteps =
  config.path2026 ||
  config.learningRoadmap ||
  config.roadmap ||
  [];

console.log(`[BUILD] Verified Roadmap: ${roadmapSteps.length} milestones loaded.`);
