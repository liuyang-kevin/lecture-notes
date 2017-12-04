# Express 应用生成器

全局安装  
`npm install express-generator -g`  
> 我不想全局安装到我的电脑目录，so  
> 我使用了  `npm install express-generator`  
> 所以，我使用`node_modules/.bin`路径下的`express`命令；

`./node_modules/.bin/express -h`

1. 在当前工作目录下创建一个命名为 `express_app` 的应用  
    `./node_modules/.bin/express express_app`
2. You will found the `express_app` to be created;
3. Then install other **modules**  
    `cd express_app`  
    `npm install`
4. `npm start` or `DEBUG=express_app:* npm start` to start project;
5. 然后在浏览器中打开 [http://localhost:3000/](http://localhost:3000/)


> `DEBUG=*` is node module `debug`; include at `package.json` file;  
> [see introduce modules](../../node-introduce_modules/Readme.md)