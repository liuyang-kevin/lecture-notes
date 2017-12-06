var utils = require('../utils');
var cp = require('child_process');
var child = cp.fork('./child.js');
var server = require('net').createServer();
//监听客户端的连接
server.on('connection',function(socket){
    utils.logPInfo("on server connection");
    socket.end('handled by parent \n');
});
//启动监听8080端口
server.listen(8080,function(){
    //给子进程发送TCP服务器(句柄)
    utils.logPInfo("server listen");
    child.send('server',server);
});