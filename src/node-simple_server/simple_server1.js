// 1. 倒入 http 模块
// 2. 准备一些变量
// 3. 透过 http 模块，制造一个server对象http.createServer(别看);
// 4. 服务跑起来 -> server.listen(别看, 别看, 别看);
// 5. 现在，注意 server 执行方法中的 3个参数，分别理解其含义；注意3三个参数，其是一个方法
// 6. 去搜索 http.createServer 方法的文档
// 7. 去搜索 server.listen 方法的文档

var http = require('http');

var hostname = '127.0.0.1';
var port = 3000;

// 新建server服务器
var server = http.createServer(function(req, res) {
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // res.getHeader('content-type')

    res.write('<head><meta charset="utf-8"/></head>');

    var htmlDiv = '<div style="width:200px;height:200px;background-color: #f0f;">div</div>';
    res.write('<b>everybody...这是直接输出的html</b>');
    res.write(htmlDiv);

    // 有参数=先调用 res.write(data, encoding) 之后再调用 res.end().
    res.end('<h1>Hello world!</h1>');
});


// server 从这开始了
// https://nodejs.org/dist/latest-v8.x/docs/api/net.html#net_server_listen_port_host_backlog_callback
server.listen(port, hostname, function() {
    // hostname是const类型时，可以用以下写法
    //console.log('Server running at http://${hostname}:${port}/');
    //console.log('Server running at http://' + hostname + ':' + port + '/');

    console.log('Server running at http://%s:%s', hostname, port);
});





// in other file
// metaphor 1: <meta>
// server.
// function listen(端口, 主机名, callback) {
//     // do labour
//     var i = 0;
//     i++;
//     i++;
//     i++;
//     // end labour
//     var oneThround = callback();
//
//     while (oneThround != 0){
//         //do something;
//         oneThround--;
//     }
//
//     return 123;
// }

// metaphor 2:
// console.
// function log(willLogStr, ...args){
//
// }



