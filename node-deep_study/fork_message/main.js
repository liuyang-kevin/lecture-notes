var mUtils = require('../utils');
var cp = require('child_process');


//只有使用fork才可以使用message事件和send()方法
var n = cp.fork('./child.js');
var n1 = cp.fork('./child.js');
var n2 = cp.fork('./child.js');

n.on('message',function(m){
    mUtils.logPInfo(mUtils.getPID(m.pid)+" n0"+m.message);
    // console.log("n0"+m.message);
});

n1.on('message',function(m){
    mUtils.logPInfo(mUtils.getPID(m.pid)+" n1"+m.message);
    // console.log("n1"+m.message);
});
n2.on('message',function(m){
    mUtils.logPInfo(mUtils.getPID(m.pid)+" n2"+m.message);
    // console.log("n2"+m.message);
});

n.send({pid:process.pid});
n1.send({pid:process.pid});
n2.send({pid:process.pid});


n.send("PID->"+mUtils.getPID()+" say hello");
n1.send("PID->"+mUtils.getPID()+" say hello");
n2.send("PID->"+mUtils.getPID()+" say hello");