# Create html File
## add a canvas tag
add canvas; add some css code made it look easily;

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        canvas {
            display: block;
            position: absolute;
            border: 1px solid #000;
            margin: auto;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
        }
    </style>
</head>
<body>

<canvas width="400" height="400"></canvas>

</body>
</html>
```

## Think basic element will be created
1. create A grid world 
```javascript

    var
            COLS = 20,
            ROWS = 20,      // 设20 * 20 的网格(grid)

//1px线条模糊问题 0/0.5
            OFFSET = 0.5;

    function draw() {
        // 计算一个格子(tile)的大小
        var tw = 400/COLS;
        var th = 400/ROWS;

        for (var x=0; x < COLS; x++) {
            for (var y=0; y < ROWS; y++) {
                
                ctx.strokeStyle='rgba(175,175,175,0.3)';
                ctx.strokeRect(x*tw+OFFSET, y*th+OFFSET, tw+OFFSET, th+OFFSET);
            }
        }
    }





    var canvas = document.getElementsByTagName('canvas');
    var ctx = canvas[0].getContext("2d");


    draw();

```
> 1px线条模糊问题

>![logo](../res/1pxblur3.gif) ![logo](../res/1pxblur1.gif)

>![logo](../res/1pxblur2.jpg) ![logo](../res/1pxblur4.jpg)

2. Add a block into canvas;
```javascript
var block = {x:0,y:0};

if(block.x == x && block.y == y){
    ctx.fillStyle='rgba(0,175,0,0.8)';
    ctx.fillRect(x*tw+OFFSET, y*th+OFFSET, tw+OFFSET, th+OFFSET);
}


```
3. make it move
```javascript
//change draw method;
//create loop method to refresh canvas;
function loop() {
        update(); // 更新状态
        draw();   // 绘制
        window.requestAnimationFrame(loop, canvas); //递归调用自己
    }
    
    loop();

//write update()
// add a Var record Frames
var frames = 0;
function update() {
  frames++;
  //每5帧更新状态
          if (frames%5 === 0){
              block.x++;
          }
}

```
> ### window.requestAnimationFrame(loop, canvas);
> 也可这个方法原理其实也就跟setTimeout/setInterval差不多，通过递归调用同一方法来不断更新画面以达到动起来的效果，但它优于setTimeout/setInterval的地方在于它是由浏览器专门为动画提供的API，在运行时浏览器会自动优化方法的调用，并且如果页面不是激活状态下的话，动画会自动暂停，有效节省了CPU开销。

> **requestAnimationFrame做的事情很简单，跟着浏览器的绘制走;**  
> *16.7ms（16.7 = 1000 / 60, 即每秒60帧）*  
> **如果浏览设备绘制间隔是16.7ms，那就这个间隔绘制；如果浏览设备绘制间隔是10ms, 就10ms绘制。这样就不会存在过度绘制的问题，动画不会掉帧，自然流畅**

```javascript
// step里面这样写
// 可以直接调用，也可以通过window来调用，
// 接收一个函数作为回调，返回一个ID值，
// 通过把这个ID值传给window.cancelAnimationFrame()可以取消该次动画。
start=requestAnimationFrame(step);

//取消
cancelAnimationFrame(start);
//开始
requestAnimationFrame(step);
```

4. fix bugs 理解绘制；
> 为什是涂满一行，而不是每次绘制那一个格子；  
> canvas 在英语里是画布的意思；是油画画布；油画的特性就是覆盖  

```javascript
ctx.fillStyle='rgba(255,255,255,1)';
ctx.fillRect(x*tw+OFFSET, y*th+OFFSET, tw+OFFSET, th+OFFSET);
```


5. 检查坐标合法性
```javascript
if(block.x>COLS){
                block.x = 0;
            }
```

6. 增加控制；
> 注释掉帧更新；

* keyCode 键码表  

 ```javascript
     //键盘按键的键码
     var KEY_LEFT  = 37,
             KEY_UP    = 38,
             KEY_RIGHT = 39,
             KEY_DOWN  = 40;
 ```
 
* 键盘事件
```javascript
document.addEventListener("keydown", function(evt) {
        console.log("down:"+evt.keyCode);
    });
    document.addEventListener("keyup", function(evt) {
        console.log("up:"+evt.keyCode);
    });
```



* 修改移动砖块
```javascript
    document.addEventListener("keydown", function(evt) {
        console.log("down:"+evt.keyCode);
        switch(evt.keyCode){
            case KEY_LEFT:
                if(block.x<0){
                    block.x = 0;
                } else {
                    block.x--;
                }

                break;
            case KEY_UP:
                block.y--;
                if(block.y<0){
                    block.y = 0;
                }
                break;
            case KEY_RIGHT:
                block.x++;
                if(block.x>COLS-1){
                    block.x = COLS-1;
                }
                break;
            case KEY_DOWN:
                block.y++;
                if(block.y>ROWS-1){
                    block.y = ROWS-1;
                }
                break;
        }
    });
```

7。增加果实；
> 1. 增加一个变量记录果实；
> 2. 果实随绘制，初现在屏幕上；
> 3. 果实存在／被吃；
> 4. 果实的重建；
> 5. 果实初始位置的随机性；


```javascript
// 1.
var fruit = null;
//2.1
    var fruit = resetFruit();
    
    function resetFruit() {
        
        return {x:0,y:0};
    }
//2.2
function resetFruit() {
        return {x:Math.random()*COLS,y:Math.random()*ROWS};
    }
//2.3
function draw() {
        // 计算一个格子(tile)的大小
        var tw = 400/COLS;
        var th = 400/ROWS;

        for (var x=0; x < COLS; x++) {
            for (var y=0; y < ROWS; y++) {
                ctx.fillStyle='rgba(255,255,255,1)';
                ctx.fillRect(x*tw+OFFSET, y*th+OFFSET, tw+OFFSET, th+OFFSET);

                if(block.x == x && block.y == y){
                    ctx.fillStyle='rgba(0,175,0,0.8)';
                    ctx.fillRect(x*tw+OFFSET, y*th+OFFSET, tw+OFFSET, th+OFFSET);
                }else if(fruit.x == x && fruit.y == y){
                    ctx.fillStyle='rgba(0,175,125,0.8)';
                    ctx.fillRect(x*tw+OFFSET, y*th+OFFSET, tw+OFFSET, th+OFFSET);
                }

                ctx.strokeStyle='rgba(175,175,175,0.3)';
                ctx.strokeRect(x*tw+OFFSET, y*th+OFFSET, tw+OFFSET, th+OFFSET);
            }
        }
    }
//2.4 修改
        return {x:Math.floor(Math.random()*COLS),y:Math.floor(Math.random()*ROWS)};

//3.
//明确 数据 与 绘制的关系；数据应当在update；绘制完成自己的工作；
//所以、吃这动作，在update中操作；

if(fruit.x == block.x && fruit.y == block.y){
                //被吃掉了
                fruit = null;
            }
            
//3.1 Cannot read property 'x' of null; 增加防御性代码；
// 体现 懒加载，懒运算
else if(fruit != null && fruit.x == x && fruit.y == y){
                    ctx.fillStyle='rgba(0,100,175,0.8)';
                    ctx.fillRect(x*tw+OFFSET, y*th+OFFSET, tw+OFFSET, th+OFFSET);
                }

//3.2 长出水果
if (fruit = null){
            fruit = resetFruit();
        }

//3.3 拖尾；
//1)
//如何实现？逐步分析；先实现走过的部分记录下来；
//因为数据问题，所以依然需要在update()的过程记录;
//改变位置由于按键keydown触发；所以，需要保存上一次的位置；
//global var
var snakeBody = [];
// add it to keydown listener
var body = {x:block.x,y:block.y};
        snakeBody.push(body);
        console.log(snakeBody);
// check it print in console;
//2)
// 加上一段儿戴值打印;
function writeObj(arr){
        var description = "";
        arr.forEach(function (body,index) {
            description+=index+" = "+body["desc"]+"\n";
        });
        console.log(description);
    }
var body = {x:block.x,y:block.y,desc:block.x+":"+block.y};

// 两点需要注意，
// 1，因为keydown的接收过程、数据可能造成重复冗余
// 2，说明这里的直接操作数据的不合理性；命令到这里已经变为"数据"；控制流程update来控制保留哪些"数据"；
// 暂不修改，先完成拖尾效果；

// 之前的部分有bug；修改它，注意使用位置；思考重复刷新的问题；排好顺序
ctx.lineWidth = 1;
        ctx.fillStyle='rgba(255,255,255,1)';
        ctx.fillRect(0, 0, 400, 400);
        snakeBody.forEach(function (body,index) {
            ctx.fillStyle='rgba(0,100,100,0.2)';
            ctx.fillRect(body.x*tw+OFFSET, body.y*th+OFFSET, tw+OFFSET, th+OFFSET);
        });


//3.4 修改程序结构；将按键事件保存；由更新func来统一处理；（改动大；新启一个文件比较好）
//1) save key status;
var keystate = {};
    document.addEventListener("keydown", function(evt) {
//        console.log("down:"+evt.keyCode);
        keystate[evt.keyCode]=true;
    });
    document.addEventListener("keyup", function(evt) {
//        console.log("up:"+evt.keyCode);
        delete keystate[evt.keyCode];
    });

//2) 修改snakeBody、block等变量；使用面向对象概念；
    var snake = {
        direction:-1,
        snakeHead:{x:0,y:0},
        snakeBody:[]
    };
//    var block = {x:0,y:0};

//3) when update() working; fix snake state;
        if (keystate[KEY_LEFT]) {
            snake.direction = LEFT;
        }
        if (keystate[KEY_UP]) {
            snake.direction = UP;
        }
        if (keystate[KEY_RIGHT]) {
            snake.direction = RIGHT;
        }
        if (keystate[KEY_DOWN]) {
            snake.direction = DOWN;
        }
//4)
// 1.粘贴之前的改变block状态代码
// 2.snake.snakeHead;替换掉所有block变量，使用替换ctrl+r来整个替换；
// 结果大约如下
            switch(snake.direction){
                case LEFT:
                    snake.snakeHead.x--;
                    if(snake.snakeHead.x<0){
                        snake.snakeHead.x = 0;
                    }
                    break;
                case UP:
                    snake.snakeHead.y--;
                    if(snake.snakeHead.y<0){
                        snake.snakeHead.y = 0;
                    }
                    break;
                case RIGHT:
                    snake.snakeHead.x++;
                    if(snake.snakeHead.x>COLS-1){
                        snake.snakeHead.x = COLS-1;
                    }
                    break;
                case DOWN:
                    snake.snakeHead.y++;
                    if(snake.snakeHead.y>ROWS-1){
                        snake.snakeHead.y = ROWS-1;
                    }
                    break;
            }
//5) 出现持续移动现象；因为我们的updete();是持续刷新的；
// 为了开发效果；需要暂时取消这个持续移动效果；
// 每5帧之后，取消snake的方向；
snake.direction = -1;

//6) 吃水果后，生成一个尾巴；
// 每次push一个坐标；
            var body = {
                x:snake.snakeHead.x,
                y:snake.snakeHead.y,
                desc:snake.snakeHead.x+":"+snake.snakeHead.y
            };


            snake.snakeBody.push(body);
// 注意 修改draw方法中的snakeBody引用

// 吃水果以后；记录吃了多少，删除多余的尾巴；
// 增加一个记录值
var snake = {
        direction:-1,
        snakeHead:{x:0,y:0},
        snakeBody:[],
        eatFruit:0
    };
// add record,when furit eat by head;
snake.eatFruit++;
//cut tail
while (snake.eatFruit < snake.snakeBody.length){
            snake.snakeBody.pop();
}
//pop() 方法用于删除并返回数组的最后一个元素。

// something is wrong; we need change save body method;
//push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
//unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
snake.snakeBody.unshift(body);

//
//
//
//
//

```



## bug & 游戏规则

1. 游戏开始，snack 起点位置在 world 中央
2. snack 有默认移动方向，不能回头
3. snack body 占据的空间，不能生成水果
4. 记分
5. 游戏结束，snack 不能撞墙，不能碰自己


```javascript
//页面加载后，启动程序，
// 1，生成canvas
// 2，初始化游戏参数
// 3，增加游戏控制监听
function main() {
    // 这次反过来，根据需要，自动生成合适大小的canvas
	canvas = document.createElement("canvas");
	canvas.width = COLS*20;
	canvas.height = ROWS*20;
	ctx = canvas.getContext("2d");
	document.body.appendChild(canvas);

	ctx.font = "15px Helvetica"; // 设置字体，

	frames = 0;

	keystate = {};
	document.addEventListener("keydown", function(evt) {
		keystate[evt.keyCode] = true;
	});
	document.addEventListener("keyup", function(evt) {
		delete keystate[evt.keyCode];
	});


	initGame(); // 初始化一盘儿游戏
	loopGame(); // 游戏开始循环
}

```






