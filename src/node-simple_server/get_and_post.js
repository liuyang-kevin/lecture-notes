var http = require('http');

http.createServer(function(req,res){
    console.log(req.httpVersion);
    //console.log(req.socket);
    console.log(req.headers);
    console.log(req.method);
    console.log(req.body);
    res.writeHead(404,{'Content-Type':'text/plain'})
    res.write("we are is content");
    res.end("fdsa");



}).listen(8080);

//
// function abcde(a,b,c,d,e,cb) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
//     console.log(e);
//     if(typeof(a)=="undefined"){
//        a = 0;
//     }
//     if(typeof(b)=="undefined"){
//         b = 0;
//     }
//     if(typeof(c)=="undefined"){
//         c = 0;
//     }
//     if(typeof(d)=="undefined"){
//         d = 0;
//     }
//     if(typeof(e)=="undefined"){
//         e = 0;
//     }
//
//     if(cb!=null){
//         cb();
//     }
//
//     return a+b+c+d+e;
// }
//
// //[] == new Array()
// var longtao = ["a","b","c","d","e"];
// var longtaoArr = new Array();
// longtaoArr.push("a");
// longtaoArr.push("b");
// longtaoArr.push("c");
//
// console.log(longtao);
// console.log(longtaoArr);
// //[ 'a', 'b', 'c', 'd', 'e' ]
// // [ 'a', 'b', 'c' ]
//
// longtao
//
//
//
//
// // console.log(abcde(1,1,1));
//
