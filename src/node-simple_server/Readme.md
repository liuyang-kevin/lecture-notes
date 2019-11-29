# 实现简单Http server 
目标：
1. 理解 Get、Post 方法。
2. 知道其他方法 option、put、delete、等等；
3. 知道Http、Https；
4. 理解html、css等文件如何输出
5. 充分理解、能区分前后台
6. Node.js 初识
7. 写一点JS

## 安装Node
1. download Node.js from website; And setup.
    1. [nodejs](https://nodejs.org/zh-cn/)
2. Check $PATH include `node` and `npm`.
    1. Need to understand $PATH what it is;
    2. Learn `node` and `npm` knowledge
3. write simple server, output `html string` directly
    1. [simple_server1.js](./simple_server1.js)
    2. run it `node simple_server1.js`
4. write simple server, output `html file`
    1. [simple_server2.js](./simple_server2.js)
    2. run it `node simple_server2.js`
    3. it has some bugs, like when it get `/\` can't default turn to `index.html`
5. Deploy `simple server` to VPS; learn & understand how it work;
6. Write `post & get method`
    1. Search `node http post` on the search engine;
    2. Very simple example at [get_and_post.js](./get_and_post.js), it can print request Head and Method
    3. Download some software `Http test tool` like [Postman](https://www.getpostman.com/).
    4. Test different `HTTP Method` How it's work
7. Write A Project to handle `Get` and `Post` Request.
    1. You can make it work with [H5-a single login page](../H5-a_single_login_page/Readme.md)
    
    
## 更新 2017-11-27
### 数据提交
1. 文件夹`test1`中，新增  
[Web1.0方式，表单提交GET，POST请求](./test1/web1_form_action.html)  
[Web2.0方式，原生JS提交GET，POST请求](./test1/web2_form_action.html)
2. [simple_server2.js](./simple_server2.js) 添加了log日志，易于访问