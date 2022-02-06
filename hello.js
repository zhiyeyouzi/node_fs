const fs = require("fs")

// 创建文件夹目录
const dirCache = {};
const filepath = "src/views";
function mkdir(filepath) {
    const arr = filepath.split('/');
    let dir = arr[0];
    for (let i = 1; i <= arr.length; i++) {
        if (!dirCache[dir] && !fs.existsSync(dir)) {
            dirCache[dir] = true;
            console.log("创建", dir);
            fs.mkdirSync(dir);
        } else {
            console.log("文件夹" + dir + "已存在");
        }
        dir = dir + '/' + arr[i];
    }
}
mkdir(filepath)
let tempPath = filepath + "/hello.txt"
fs.writeFile(tempPath, "world", (err) => {
    if (!err) {
        console.log("hello.txt创建成功了");
    } else {
        console.log(err);
    }
})