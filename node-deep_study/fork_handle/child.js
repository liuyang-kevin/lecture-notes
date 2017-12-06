var utils = require('../utils');
process.on('message',function(m,server){
    if(m==='server'){
        server.on('connection',function(socket){
            utils.logPInfo("on server connection");
            socket.end('handle by child \n');
        });
    }
});
