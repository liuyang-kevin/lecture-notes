var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');



var mine = require('./mine').types;
var PORT = 8080;       //端口
var DIR = 'test1';     //用于存放html的目录

var server = http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    var realPath = path.join(DIR, pathname);

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