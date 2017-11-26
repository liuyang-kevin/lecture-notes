var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var queryString = require('querystring');
var util = require('util');



var mine = require('./mine').types;
var PORT = 8080;       //端口
var DIR = 'test1';     //用于存放html的目录

var server = http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    var realPath = path.join(DIR, pathname);

    // 这是我请求的: /fsdf/
    // test1/fsdf/
    console.log("这是我请求的: "+pathname);
    console.log(realPath);


    if(pathname === "/simple_server2/"){
        if(request.method === "GET"){
            //Get
            // 解析 url 参数
            var params = url.parse(request.url, true).query;
            response.write("fname：" + params.fname);
            response.write("\n");
            response.write("lname：" + params.lname);


            response.write("\n");
            response.write("came from node server");
            response.write("\n");
            response.end("bye");
            return;
        }else if(request.method === "POST"){
            //Post
            // 定义了一个post变量，用于暂存请求体的信息
            var postBody = '';

            // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
            request.on('data', function(chunk){
                postBody += chunk;
            });

            // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
            request.on('end', function(){
                postBody = queryString.parse(postBody);
                response.end(util.inspect(postBody));
            });
            return;
        }

        // fs.readFile("./test1/form_will_into_here.html", "binary", function (err, file) {
        //     if (err) {
        //         response.writeHead(500, {
        //             'Content-Type': 'text/plain'
        //         });
        //         response.end(err);
        //     } else {
        //         var contentType = mine[ext] || "text/plain";
        //         response.writeHead(200, {
        //             'Content-Type': contentType
        //         });
        //         response.write(file, "binary");
        //         response.end();
        //     }
        // });
        // return
    }


    console.log("这是我请求的: "+pathname);
    console.log(realPath);

    //console.log(realPath);
    var ext = path.extname(realPath);
    ext = ext ? ext.slice(1) : 'unknown';
    fs.exists(realPath, function (exists) {
        if (!exists) {
            response.writeHead(404, {
                'Content-Type': 'text/plain'
            });

            response.write("This request URL " + pathname + " was not found on this server.");
            response.end();
        } else {
            console.log(realPath);


            fs.readFile(realPath, "binary", function (err, file) {
                if (err) {
                    response.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });
                    response.end(err);
                } else {
                    var contentType = mine[ext] || "text/plain";
                    response.writeHead(200, {
                        'Content-Type': contentType
                    });
                    response.write(file, "binary");
                    response.end();
                }
            });
        }
    });
});
server.listen(PORT);
console.log("Server runing at port: " + PORT + ".");