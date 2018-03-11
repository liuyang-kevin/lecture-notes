1. `let`, `const` 替代 `var`
2. 面相对象有了传统写法 `class`, `extends`, `super`, 本质上还是原型链
3. 箭头函数 `() => {}`
4. 字符串拼接有了新方法 `There are <b>${basket.count}</b> items`

### 以下没啥用：  
*. json有了懒人写法 
> ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。
```javascript
//存
let cat = 'ken'
let dog = 'lili'
let zoo = {cat, dog}
console.log(zoo)  //Object {cat: "ken", dog: "lili"}
//取
let dog = {type: 'animal', many: 2}
let { type, many} = dog
console.log(type, many)   //animal 2
```
* 参数能带默认值
```javascript
function animal(type = 'cat'){
    console.log(type)
}
animal()
```
* `import` `export` 高级语言的导包关键字能用了。原来用 `require('xx.js')`
* 还能单独导入部分变量、对象 `import { type, abc, ddd } from './content' `
