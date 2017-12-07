var wc = require('../havefun/word_colors');
var bc = require('../havefun/background_colors');
var ws = {};
var reset = '\u001b[0m';

var w16c = {
    bBlack:"\u001b[30;1m",
    bRed:"\u001b[31;1m",
    bGreen:"\u001b[32;1m",
    bYellow:"\u001b[33;1m",
    bBlue:"\u001b[34;1m",
    bMagenta:"\u001b[35;1m",
    bCyan:"\u001b[36;1m",
    bWhite:"\u001b[37;1m",

    Black:"\u001b[30m",
    Red:"\u001b[31m",
    Green:"\u001b[32m",
    Yellow:"\u001b[33m",
    Blue:"\u001b[34m",
    Magenta:"\u001b[35m",
    Cyan:"\u001b[36m",
    White:"\u001b[37m"
};
var b16c = {
    bBlack:"\u001b[40;1m",
    bRed:"\u001b[41;1m",
    bGreen:"\u001b[42;1m",
    bYellow:"\u001b[43;1m",
    bBlue:"\u001b[44;1m",
    bMagenta:"\u001b[45;1m",
    bCyan:"\u001b[46;1m",
    bWhite:"\u001b[47;1m",

    Black:"\u001b[40m",
    Red:"\u001b[41m",
    Green:"\u001b[42m",
    Yellow:"\u001b[43m",
    Blue:"\u001b[44m",
    Magenta:"\u001b[45m",
    Cyan:"\u001b[46m",
    White:"\u001b[47m"
};

//
var pidc = {
};
function cPID(number) {
    // console.log(pidc[number]);
    // console.log(Object.keys(w16c)[0]);
    if(pidc[number]){

    }else {
        var chosenColorIndex = Object.keys(pidc).length%16;
        // console.log(chosenColorIndex);
        // console.log(w16c[Object.keys(w16c)[chosenColorIndex]]+"w16c chosenColorIndex"+reset);
        pidc[number] = w16c[Object.keys(w16c)[chosenColorIndex]];
    }
    var res = pidc[number] + number + reset;
    // console.log(res);
    return res;
}

function cNano(str) {
    return b16c.Cyan+w16c.bYellow+str+reset;
}

module.exports = {
    getProcessInfo: function () {
        const memUsage = process.memoryUsage();//内存使用
        const cpuUsage = process.cpuUsage();//cpu使用
        const cfg = process.config;//编译node.js的配置信息
        const env = process.env;//用户环境
        const pwd = process.cwd();//工作目录
        const execPath = process.execPath;//node.exe目录
        const pf = process.platform;//运行nodejs的操作系统平台
        const release = process.release;//nodejs发行版本
        const pid = process.pid;//nodejs进程号
        const arch = process.arch;//运行nodejs的操作系统架构
        const uptime = process.uptime();//nodejs进程运行时间
        return {
            memUsage,
            cpuUsage,
            cfg,
            env,
            pwd,
            execPath,
            pf,
            release,
            pid,
            arch,
            uptime
        }
    },
    getPID: function (pid) {
        if(pid){
            return w16c.Green+pid+reset;
        }
        return w16c.Green+process.pid+reset;
    },
    logPInfo: function (msg) {
        //纳秒
        // process.hrtime()
        console.log(cNano(process.hrtime())+"|"+cPID(process.pid)+"|"+msg);
    }
};


// /**
//  * 获取当前Node.js进程信息
//  */
// function getProcessInfo(){
//     const memUsage = process.memoryUsage();//内存使用
//     const cpuUsage = process.cpuUsage();//cpu使用
//     const cfg = process.config;//编译node.js的配置信息
//     const env = process.env;//用户环境
//     const pwd = process.cwd();//工作目录
//     const execPath = process.execPath;//node.exe目录
//     const pf = process.platform;//运行nodejs的操作系统平台
//     const release = process.release;//nodejs发行版本
//     const pid = process.pid;//nodejs进程号
//     const arch = process.arch;//运行nodejs的操作系统架构
//     const uptime = process.uptime();//nodejs进程运行时间
//     return {
//         memUsage,
//         cpuUsage,
//         cfg,
//         env,
//         pwd,
//         execPath,
//         pf,
//         release,
//         pid,
//         arch,
//         uptime
//     }
// }
// // console.log(getProcessInfo());
//
// function logProcessInfo() {
//     console.log(getProcessInfo());
// }
// function getPID() {
//     return process.pid;
// }
//
// exports.getPID = getPID;
// exports.getProcessInfo = getProcessInfo;
// exports.logProcessInfo = logProcessInfo;