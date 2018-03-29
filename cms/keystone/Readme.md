1. must has `mongoDB`
2. Models layer -\> `/models` -\> 一个文件一个数据ORM
    1. `var User = new keystone.List('User'); //生成模型`
    2. `User.register(); //注册模型`
    3. 后台管理自动多出管理界面
3. 生成器生成的项目包含 `keystone.js` -\> cms启动点。
    1. `keystone.import('models');` 注入模型，所在文件夹
    2. `keystone.set('routes', require('./routes'));` 挂在路径，路由
    3. `routes` 中为 V 与 C 层
    4. `keystone.start();` **启动点**
    5. `keystone.init({})` 中注册了view模版 `'views': 'templates/views',`
4. `./routes` js 模块， index.js为导出文件。
    1. 添加中间件，如：`keystone.pre('routes', middleware.initLocals);`
    2. 倒入views。如：`views: importRoutes('./views'),`
    3. `app.get('/', routes.views.index);` 路径 与 程序对应
5. View layer V层
    1. `var view = new keystone.View(req, res);` 拿到request respond 生成keystone的view
    2. `view.render('blog');` 渲染模版。模版在`3.5.`注册进去。
