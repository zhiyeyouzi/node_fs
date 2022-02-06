var child_process = require('child_process');
// import { argv } from 'process';

const argv = process.argv;
const msg = argv[2];

// var cmds = [
//     'git add .',
//     'git commit -m ${msg}',
//     'git push'
// ]
var cmd = `git add . && git commit -m ${msg} && git pull && git push`;
child_process.exec(cmd, function(error, stdout, stderr) {
  console.log("error:" + error);
  console.log("stdout:" + stdout);
  console.log("stderr:" + stderr);
});
// cmds.forEach(function (cmd, i) {
//     setTimeout(function () {
//         console.log(cmd);
//         exec(cmd, function (err, stdout, stderr) {
//             if (err) {
//                 console.log(err);
//             }
//         });
//     }, i * 1000);
// })
