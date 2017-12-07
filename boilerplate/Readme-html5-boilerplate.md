* HTML5 Boilerplate只是一个单纯的HTML模版。
* 它提供了一个十分完善的HTML模版，完善到所有的页面似乎都应该遵守这个规则。
* HTML5 Boilerplate就是解决了这么一个问题，

最核心的的是一个`index.html`文件  

---
文档类型使用了HTML5文档声明
`<!DOCTYPE html>`
---
```html
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
```
1. 这些条件判断，意思分别是低于IE7，等于IE7，等于IE8，高于IE8。
2. 条件注释里面，就有相应的类名，比如在 lt IE 7中，html标签上便会有  lt-ie9 lt-ie8 lt-ie7这3个类，意思分别是低于ie7、8、9 。
    1. 最大的作用就是在写CSS HACK的时候，因为这样写，就可以不用CSS HACK了，比如如果是ie6，那么html标签上就会有 lt-ie7这个类，直接用CSS优先级覆盖之前的设置即可。
3. 最后一句的意思是所有大于ie8和非ie浏览器都使用<html class="no-js">这个html头。
> 仔细看会发现里面加了几个残缺的注释标签。  
> 对于大于ie8的ie浏览器，这几个标签完全忽略。  
> 对于非ie浏览器。由于不识别[if gt IE 8]，然后和后面的注释一起，会发现整个这部分都被注释了。这样，就实现了最完美的浏览器识别了。
4. 还有一个no-js类。这个主要是会和后面的modernizr.js一起使用。
    1. modernizr会在浏览器启用的js的时候，把no-js换成js。简单来说这个类可以用来判断浏览器是否启用了js。
---
```html
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">    
    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/main.css">
    <script src="js/vendor/modernizr-2.6.2.min.js"></script>
</head>
```
1. 先设置文档编码，记住这个放最前面（特别注意别放title后面），以免后面代码出现乱码。
2. 接下来便是设置IE使用最新版本来渲染
3. 然后是描述，便于SEO。
4. viewport指定移动端不对网页进行缩放。
> 这些个元标签基本都是一个网页必须要有的，所以大家可以检查下自己的网站是否漏了什么。
5. 引入了normalize、main两个css。modernizr这个js。关于这3个文件，后面再详细说明。
---
```html
<body>
    <!--[if lt IE 7]>
        <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <!-- Add your site or application content here -->
    <p>Hello world! This is HTML5 Boilerplate.</p>
        
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
    <script src="js/plugins.js"></script>
    <script src="js/main.js"></script>

    <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
    <script>
        (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
        function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
        e=o.createElement(i);r=o.getElementsByTagName(i)[0];
        e.src='//www.google-analytics.com/analytics.js';
        r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
        ga('create','UA-XXXXX-X');ga('send','pageview');
    </script>
</body>
```
1. `<!--[if lt IE 7]>` 对于使用低于IE7版本的用户，给出升级提示，当然，我们可以选择删除这一段或者换成一个中文提示
2. 通过CDN引入jquery
3. 判断jQuery对象是否存在。因为CDN有可能挂了。如果jQuery对象不存在，那么我们就可以用自己服务器的jquery把。
4. 引入了plugins.js还有main.js。main.js是空的，plugins.js后面详细说明
5. 引入google统计
---

`css`目录下有`main`和`normalize`  
`normalize` 就是一个浏览器重置，里面的每一条css都是进过千千万万的人精挑细选的，基本上这个重置属于公认的了。  
`main` 就是改项目对normalize的补充，可以看到提供了一些基础类名方便大家，比如图片置换，清除浮动等等。

 

`js`目录提供了个`plugins.js`, `modernizr`   
`plugins.js`  
> 解决的主要问题就是用console调试的时候IE报错。  
> 调试代码忘记删除，线上IE报错，导致js无法继续执行。加了这个，就可以避免掉这问题了。  

`modernizr`
> 这是个强大的浏览器功能检查js，具体使用可以在官网上看看教程。

 
---
还提供了一些文件，
比如apache的配置htaccess、 
404页面、
flash跨域需要的文件crossdomain.xml、
爬虫过滤文件robots.txt等