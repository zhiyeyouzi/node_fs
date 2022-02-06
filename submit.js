var exec = require('child_process').exec;
var cmds = [
    'git add .',
    'git commit -m "提交。。。"',
    'git push'
]
cmds.forEach(function (cmd, i) {
    setTimeout(function () {
        console.log(cmd);
        exec(cmd, function (err, stdout, stderr) {
            if (err) {
                console.log(err);
            }
        });
    }, i * 1000);
})
