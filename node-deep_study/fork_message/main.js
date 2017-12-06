var mUtils = require('../utils');

var cp = require('child_process');
//只有使用fork才可以使用message事件和send()方法
var n = cp.fork('./child.js');
n.on('message',function(m){
    console.log(m);
});

n.send({"message":"PID "+mUtils.getPID()+" say hello"});