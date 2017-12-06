var c = {
    wcolor:{
        Black:"\u001b[30;1m",
        Red:"\u001b[31;1m",
        Green:"\u001b[32;1m",
        Yellow:"\u001b[33;1m",
        Blue:"\u001b[34;1m",
        Magenta:"\u001b[35;1m",
        Cyan:"\u001b[36;1m",
        White:"\u001b[37;1m"
    },
    bcolor:{
        Black:"\u001b[40;1m",
        Red:"\u001b[41;1m",
        Green:"\u001b[42;1m",
        Yellow:"\u001b[43;1m",
        Blue:"\u001b[44;1m",
        Magenta:"\u001b[45;1m",
        Cyan:"\u001b[46;1m",
        White:"\u001b[47;1m"
    },
    decorations:{},
    reset:'\u001b[0m'
};

// var c = {
//     wcolor:{
//         Black:"\u001b[30m",
//         Red:"\u001b[31m",
//         Green:"\u001b[32m",
//         Yellow:"\u001b[33m",
//         Blue:"\u001b[34m",
//         Magenta:"\u001b[35m",
//         Cyan:"\u001b[36m",
//         White:"\u001b[37m"
//     },
//     bcolor:{
//         Black:"\u001b[40m",
//         Red:"\u001b[41m",
//         Green:"\u001b[42m",
//         Yellow:"\u001b[43m",
//         Blue:"\u001b[44m",
//         Magenta:"\u001b[45m",
//         Cyan:"\u001b[46m",
//         White:"\u001b[47m"
//     },
//     decorations:{},
//     reset:'\u001b[0m'
// };

var lastpid;
var lastpidcolor = c.wcolor.Yellow;
function cPID(str) {
    // console.log(typeof str);
    var res;
    if(str==lastpid){
        res = lastpidcolor+str+c.reset;
    }else {
        if(lastpidcolor === c.wcolor.Yellow){
            lastpidcolor = c.wcolor.Red;
        }else {
            lastpidcolor = c.wcolor.Yellow
        }
        res = lastpidcolor+str+c.reset;
    }
    lastpid = str;
    return res;
}

function cNano(str) {
    return c.bcolor.Blue+c.wcolor.Black+str+c.reset;
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
    getPID: function () {
        return process.pid;
    },
    logPInfo: function (msg) {
        //纳秒
        // process.hrtime()
        console.log(cNano(process.hrtime())+"|"+cPID(process.pid)+"|"+msg);
    }
}
;

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