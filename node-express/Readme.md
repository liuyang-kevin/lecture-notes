# Node 常用模块 Express 服务器

Express：n. 快递， adj. 快速，特快  
* 安装：  
`npm install express --save`  
* 注：学习使用 npm init 生成 package.json

## [Hello World；](./1_helloworld/package.json)
> `npm init`  
> `npm install express --save`  
> create `app.js` or something  
## [Express 应用生成器；"express-grenerator"](./2_express-grenerator/Readme.md)

## [学习Express路由] 
路由（Routing）是由一个 URI（或者叫路径）和一个特定的 HTTP 方法（GET、POST 等）组成的  
涉及到应用如何响应客户端对某个网站节点的访问
```javascript
// 对网站首页的访问返回 "Hello World!" 字样
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// 网站首页接受 POST 请求
app.post('/', function (req, res) {
  res.send('Got a POST request');
});

// /user 节点接受 PUT 请求
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

// /user 节点接受 DELETE 请求
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});
```
## Express 托管静态文件
```javascript
//可以增加虚拟路径 -> `/static`
app.use('/static', express.static('public'));
//可以直接添加，默认 -> `/`
app.use(express.static('public'));
//可以多次调用
app.use(express.static('files'));

// log
// http://localhost:3000/images/kitten.jpg
// http://localhost:3000/static/images/kitten.jpg
```
## 在 Express 中使用模板引擎
> 需要在应用中进行如下设置才能让 Express 渲染模板文件：  
> iews, 放模板文件的目录，比如： `app.set('views', './views')`  
> view engine, 模板引擎，比如： `app.set('view engine', 'jade')`  

另外 [为 Express 开发模板引擎](http://www.expressjs.com.cn/advanced/developing-template-engines.html) 可以当原理去理解一下


##使用中间件
[中间件 文档](http://www.expressjs.com.cn/guide/using-middleware.html)