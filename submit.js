var child_process = require('child_process');

const argv = process.argv;
const msg = argv[2];

var cmd = `git add . && git commit -m ${msg} && git pull && git push`;
child_process.exec(cmd, function(error, stdout, stderr) {
  console.log("error:" + error);
  console.log("stdout:" + stdout);
  console.log("stderr:" + stderr);
});

