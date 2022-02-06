//文件下载
var fs = require("fs");
var path = require("path");
var request = require("request");

// 创建文件夹目录
const dirCache = {};
const filepath = "src/utils/i18n";
const languageList = ["English.js", "SimpleChinese.js"];
var dirPath = path.join(__dirname, filepath);
console.log(dirPath)
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

function getLanguage(item) {
    let fileName = item;
    let url = "https://solution.cloudcc.com/customize/page/ee7f297954/newProperties/" + fileName;
    let stream = fs.createWriteStream(path.join(dirPath, fileName));
    request(url).pipe(stream).on("close", function (err) {
        console.log(fileName + "下载完毕");
    });
}
languageList.forEach(item => {
    getLanguage(item)
})
