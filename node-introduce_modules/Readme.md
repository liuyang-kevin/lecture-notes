# modules


## debug
`npm install debug`  
使用很简单，运行node程序时，加上DEBUG=app环境变量即可。  
```javascript
/**
 * debug基础例子
 */
var debug = require('debug')('app');

// 运行 DEBUG=app node 01.js
// 输出：app hello +0ms
debug('hello');
```

当项目程序变得复杂，我们需要对日志进行分类打印，debug支持命令空间，如下所示。  
> DEBUG=app,api：表示同时打印出命名空间为app、api的调试日志。  
> DEBUG=a*：支持通配符，所有命名空间为a开头的调试日志都打印出来。  

##