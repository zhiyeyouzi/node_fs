// url 是图片地址，如，http://wximg.233.com/attached/image/20160815/20160815162505_0878.png
// filepath 是文件下载的本地目录
// name 是下载后的文件名
const fs = require("fs")
const path = require("path")
const axios = require("axios")
async function downloadFile(url, filepath, name) {
    if (!fs.existsSync(filepath)) {
        fs.mkdirSync(filepath);
    }
    const mypath = path.resolve(filepath, name);
    const writer = fs.createWriteStream(mypath);
    const response = await axios({
        url,
        method: "GET",
        responseType: "stream",
    });
    response.data.pipe(writer);
    return new Promise((resolve, reject) => {

        writer.on("finish", resolve);
        writer.on("error", reject);
    });
}
const u = "https://solution.cloudcc.com/customize/page/ee7f297954/newProperties/SimpleChinese.js"
const f = "src/utils/i18";
const n = "SimpleChinese.js"
downloadFile(u, f, n)
