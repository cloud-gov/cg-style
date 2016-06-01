var childProcess = require('child_process');
var fs = require('fs');
var path = require('path');

var p = require('../package.json');

var args = Array.prototype.slice.call(process.argv);
var releaseVersion = args[2];
var rootPath = path.resolve(__dirname, '..');

function exec(cmd) {
  return new Promise(function(resolve, reject) {
    childProcess.exec(cmd, function (error, stdout) {
      if (error) reject(error);
      resolve(stdout);
    });
  });
}

function updatePackageJson(updates) {
  return Object.assign({}, p, updates);
}

function writePackageJson(package) {
  var packagePath = path.resolve(rootPath, 'package.json');
  console.log('Updating package.json with version number');
  console.log(`\tat ${packagePath}`);
  fs.writeFileSync(packagePath, JSON.stringify(package, null, ' '));
}

function checkoutReleaseBranch(version) {
  return exec(`cd ${rootPath}`).then(function() {
    return exec(`git checkout -b ${version}`);
  });
}

function commitNewPackageJson(version) {
  return exec(`git add package.json`).then(function() {
    return exec(`git commit -m "Updating package.json version to ${version}"`);
  });
}

exec('echo running')
.then(function() {
  console.log(`Preparing to release version ${releaseVersion}`)
  console.log('First we\'ll publish a release to the npm registry');
})
.then(function() {
  var packageJson = updatePackageJson({ version: releaseVersion });
  writePackageJson(packageJson);
})
.then(function() {
  return checkoutReleaseBranch(releaseVersion);
})
.then(function(checkoutOutput) {
  return commitNewPackageJson(releaseVersion);
});
