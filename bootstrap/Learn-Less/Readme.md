# LESS Demo

## Demo for less.js work at html side;
[styles.less](./styles.less)定义了`.paper`  
[index.html](./index.html)使用`div`测试了效果

1. `@` 变量命名
2. 叠加计算 `@font-size * 1.75`


## Demo for node create final css file;

1. `npm init` at **new** folder;
2. `npm install less@latest` to download new LTS version;
3. compiler `less file` with CLI; use `lessc`
    1. `./node_modules/less/bin/lessc ../styles.less`
    2. save as file `./node_modules/less/bin/lessc ../styles.less > styles.css`
4. write `index.js` to control `less` compiler manually;
