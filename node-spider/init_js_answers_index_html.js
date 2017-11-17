let  fs = require('fs');
let  join = require('path').join;
/**
 *
 * @param startPath  起始目录文件夹路径
 * @returns {Array}
 */
function findSync(startPath) {
    let result=[];
    function finder(path) {
        let files=fs.readdirSync(path);
        files.forEach((val,index) => {
            let fPath=join(path,val);
            let stats=fs.statSync(fPath);
            if(stats.isDirectory()) finder(fPath);
            if(stats.isFile()) result.push(fPath);
        });
    }
    finder(startPath);
    return result;
}


/**
 *
 * @param startPath  起始目录文件夹路径
 * @returns {Array}
 */
function findFileInPath(startPath) {
    let result=[];
    function finder(path) {
        let files=fs.readdirSync(path);
        files.forEach((val,index) => {
            let fPath=join(path,val);
            let stats=fs.statSync(fPath);
            // if(stats.isDirectory()) finder(fPath);
            if(stats.isFile()) result.push(fPath);
        });
    }
    finder(startPath);
    return result;
}

//by函数接受一个成员名字符串做为参数
//并返回一个可以用来对包含该成员的对象数组进行排序的比较函数
function by(regRule){
    return function(o, p){
        let a, b;
        if (o && p) {
            // regRule.lastIndex = 0;
            // console.log(regRule.exec(o)[1]);
            // regRule.lastIndex = 0;
            // console.log(regRule.exec(p)[1]);
            regRule.lastIndex = 0;
            a = parseInt(regRule.exec(o)[1]);
            regRule.lastIndex = 0;
            b = parseInt(regRule.exec(p)[1]);
            if (a === b) {
                return 0;
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1;
            }
            return typeof a < typeof b ? -1 : 1;
        } else {
            throw ("error");
        }
    }
}



// let fileNames=findSync('./data/');
let fileNames=findFileInPath('./data/');
fileNames.sort(by(/data\/JavaScript_Basic__Exercise-(.*)_with_Solution.html/g));
console.log(fileNames);

let saveFileName = "index";
let saveHtmlBody = "";
fileNames.forEach(function (fileName,index) {
    let fpath = fileName.replace("data/","/");
    saveHtmlBody += "<a href=\"./"+fpath+"\" target=\"_blank\"><span style=\"color:#10326b;\">"+fpath+"</span></a><br/>"
});

let saveHtmlData = "<!DOCTYPE HTML><html><head><title>"+saveFileName+"</title></head><body>"+saveHtmlBody+"</body></html>";
fs.appendFile('./data/build/' + saveFileName + '.html', saveHtmlData, 'utf-8', function (err) {
    if (err) {
        console.log(err);
    }
});
