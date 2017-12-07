var mUtils = require('../utils');

var cp = require('child_process');
var parentPID;
process.on('message',function(m){
    if(m.pid){
        parentPID = m.pid;
    }else {
        mUtils.logPInfo(m);
        // console.log(m);
    }
});
process.send({
    pid:process.pid,
    message:" I am child. Hello"
});