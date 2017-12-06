var mUtils = require('../utils');
var cp = require('child_process');
process.on('message',function(m){
    console.log(m);
});
process.send({"message":"PID "+mUtils.getPID()+" say hello I am child."});