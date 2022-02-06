const fs = require("fs")
const arr = [
    "a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z",
]
let newArr = []
arr.forEach(itemA => {
    arr.forEach(itemB => {
        if (newArr.length <= 100) {
            newArr.push(itemA + itemB)
        }
    })
})


// 创建文件夹目录
const dirCache = {};
const filepath = "src/utils/txts";
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

newArr.forEach(item => {
    let tempPath = filepath + "/" + item + ".txt"
    fs.writeFile(tempPath, item, (err)=>{
        if(!err) {
            console.log(item + "创建成功了");
        } else {
            console.log(err);
        }
    })
})