# 不止于用，深入学习

## 进程、子进程(process, child_process)



### child_process
> child_process模块给予node任意创建子进程的能力，  
> node官方文档对于child_proces模块给出了四种方法，映射到操作系统其实都是创建子进程。

|method|类型|例子|notice|
|---|---|---|---|
|.exec|system command <br> 命令|ls, ps, grep ...|可以指定timeout属性
|.execfile|shell file <br> 脚本文件|*.sh|脚本头必须<br>`#!/usr/bin/env node` <br>可以指定timeout属性|
|.spawn|system command <br> 命令 / 不返回结果|ls, ps, grep ...|
|.fork|Node js file |*.js|  
1. `child_process.exec(command[, options][, callback])`  
启动子进程来执行shell命令,可以通过回调参数来获取脚本shell执行结果  
2. `child_process.execfile(file[, args][, options][, callback]) `  
与exec类型不同的是，它执行的不是shell命令而是一个可执行文件
3. `child_process.spawn(command[, args][, options])`  
仅仅执行一个shell命令，不需要获取执行结果
4. `child_process.fork(modulePath[, args][, options])`
可以用node 执行的.js文件，也不需要获取执行结果。fork出来的子进程一定是node进程


### 进程间通信、多核、多进程
> 子进程之间的通信是使用IPC管道机制完成  

1. 如果子进程是node进程(使用`fork`)，则可以使用监听`message`事件和使用`send()`来通信。  

* [main.js](./fork_message/main.js)
```javascript
var cp = require('child_process');
//只有使用fork才可以使用message事件和send()方法
var n = cp.fork('./child.js');
n.on('message',function(m){
    console.log(m);
});

n.send({"message":"hello"});
```
* [child.js](./fork_message/child.js)
```javascript
var cp = require('child_process');
process.on('message',function(m){
 console.log(m);
});
process.send({"message":"hello I am child"})
```
---
2. 句柄传递  
在node的IPC进程通讯API中，`send(message，[sendHandle])`的第二个参数就是句柄。
> 句柄就是一种标识资源的引用，它的内部包含了指向对象的文件描述符。  
> 句柄可以用来描述一个socket对象，一个UDP套接子，一个管道   

```javascript
var cp = require('child_process'); 
var child1 = cp.fork('./jubing-child.js'); 
var child2 = cp.fork('./jubing-child.js'); 
// Open up the server object and send the handle 
var server = require('net').createServer(); 
server.listen(1337, function () {   
    child1.send('server', server);   
    child2.send('server', server);   // 关   
    server.close(); 
}); 
```

---
3. 多进程架构  

最理想的状态应该是每个进程各自利用一个CPU  
[main.js](./fork_os_cpus/main.js)
```javascript
var fork = require('child_process').fork;
var cpus = require('os').cpus();
console.log("Your machine's CPU has "+cpus.length+" Cores");
for (var i = 0; i < cpus.length; i++) {
    fork('./worker.js');
}
```
[worker.js](./fork_os_cpus/worker.js)
```javascript
var http = require('http'); 
var port = Math.round((1 + Math.random()) * 1000);
http.createServer(function (req, res) {   
    res.writeHead(200, {'Content-Type': 'text/plain'});   
    res.end(port+""); 
}).listen(port, '127.0.0.1'); 
console.log("PORT:"+port);
```
---
