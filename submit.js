var child_process = require('child_process');

const argv = process.argv;
// process.argv 请查阅  http://nodejs.cn/api/process/process_argv.html
const msg = argv[2] || '代码更新';
console.log("commit信息", msg);
var cmd = `git add . && git commit -m ${msg} && git pull && git push`;
child_process.exec(cmd, function(error, stdout, stderr) {
  console.log("error:" + error);
  console.log("stdout:" + stdout);
  console.log("stderr:" + stderr);
});

