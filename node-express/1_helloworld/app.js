var express = require('express');
var bodyParser = require("body-parser");

var app = express();
// need it...
app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/', function (req, res) {
//   // get post
//   res.send('Hello World!');
// });

app.post('/login',function(req,res){
  var user_name=req.body.user;
  var password=req.body.password;
  var num = req.body.number;
  console.log("User name = "+user_name+", password is "+password);
  res.end("num"+num);
});



//  主页输出 "Hello World"
app.get('/', function (req, res) {
  console.log("主页 GET 请求");
  res.send('Hello GET');
})


//  POST 请求
app.post('/', function (req, res) {
  console.log("主页 POST 请求");
  res.send('Hello POST');
})

//  /del_user 页面响应
app.get('/del_user', function (req, res) {
  console.log("/del_user 响应 DELETE 请求");
  res.send('删除页面');
})

//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
  console.log("/list_user GET 请求");
  res.send('用户列表页面');
})

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {
  console.log("/ab*cd GET 请求");
  res.send('正则匹配');
})


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
