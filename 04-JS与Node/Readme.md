资源准备：云服务一台（或局域网下2台以上的电脑）、ssh登陆工具或功能强大IDE

**目标：编程实现一个HTTP服务器**

# Node.js 与 js
原本js是为web页面有更酷炫的效果使用的。从设计之初使用是限定在浏览器内部的。
但是Google 主持开发的 Chrome V8 引擎的 JavaScript 运行效率极高, 
之后便有人将它修改成脱离Chrome运行的服务端版本Node.js

> 发布于2009年5月，由Ryan Dahl开发, 不过他又发明了deno；一个新的js引擎
> 
> 基于 V8 的 TypeScript（ts） 运行时 deno；ts大约就是js的高级版本。语法差不多，玩法高级。
> 

> 扩展阅读 [认识 V8 引擎](../99-原理与本质/V8引擎/认识\ V8\ 引擎\ -\ 知乎.html)

* Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型。

# npm
* 配置国内源问题
* 相似工具 yarn，cnpm，等等

# 项目、package.js
* 项目结构
* package.js 结构

# 进程、线程、事件循环

# 项目 HTTP server
[Readme](../src/node-simple_server/Readme.md)