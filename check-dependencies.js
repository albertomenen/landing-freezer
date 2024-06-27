const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const packageJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.json'), 'utf8'));
const pnpmLockYaml = yaml.load(fs.readFileSync(path.resolve(__dirname, 'pnpm-lock.yaml'), 'utf8'));

const packageDeps = { ...packageJson.dependencies, ...packageJson.devDependencies };
const lockDeps = pnpmLockYaml.dependencies;

const missingDeps = Object.keys(packageDeps).filter(dep => !lockDeps[dep]);
const extraDeps = Object.keys(lockDeps).filter(dep => !packageDeps[dep]);

if (missingDeps.length > 0) {
  console.log('Missing dependencies in pnpm-lock.yaml:', missingDeps);
} else {
  console.log('No missing dependencies in pnpm-lock.yaml');
}

if (extraDeps.length > 0) {
  console.log('Extra dependencies in pnpm-lock.yaml:', extraDeps);
} else {
  console.log('No extra dependencies in pnpm-lock.yaml');
}
