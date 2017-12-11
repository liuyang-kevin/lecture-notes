# Node.js 事件循环
* Node.js 是`单进程单线程`应用程序，但是通过事件和回调支持并发，所以性能非常高。
* Node.js 的每一个 `API` 都是`异步`的，并作为一个`独立线程运行`，使用异步函数调用，并处理并发。
* Node.js 基本上所有的事件机制都是用设计模式中`观察者模式`实现。
* Node.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数.

> process对象是EventEmitter的实例。  
> [Node.js Doc](https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_events)

## 事件驱动程序
![](./res/event_loop.jpg)

```javascript
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 创建事件处理程序
var connectHandler = function connected() {
   console.log('连接成功。');
  
   // 触发 data_received 事件 
   eventEmitter.emit('data_received');
}

// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);
 
// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(){
   console.log('数据接收成功。');
});

// 触发 connection 事件 
eventEmitter.emit('connection');

console.log("程序执行完毕。");
```

## EventEmitter
* Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列。
* Node.js里面的许多对象都会分发事件：
    * 一个net.Server对象会在每次有新连接时分发一个事件， 
    * 一个fs.readStream对象会在文件被打开的时候发出一个事件。 
    * 所有这些产生事件的对象都是 events.EventEmitter 的实例。
---
* 事件由一个事件名和若干个参数组成
* `emitter.on('someEvent', function(arg1, arg2...){} )`
```javascript
//event.js 文件
var events = require('events'); 
var emitter = new events.EventEmitter(); 
emitter.on('someEvent', function(arg1, arg2) { 
    console.log('listener1', arg1, arg2); 
}); 
emitter.on('someEvent', function(arg1, arg2) { 
    console.log('listener2', arg1, arg2); 
}); 
emitter.emit('someEvent', 'arg1 参数', 'arg2 参数'); 

```
---
* `on` 函数用于绑定事件函数，
* `emit` 属性用于触发一个事件