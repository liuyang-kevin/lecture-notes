## 动画的基本步骤
> 步骤：
> 1. 清空 canvas (简单的做法就是用 clearRect)
> 2. 保存 canvas 状态（样式，变形之类的）
> 3. 绘制动画图形（重绘动画帧,循环，timer等方法）
> 4. 恢复 canvas 状态

## 三个timer
### setInterval(function, delay)
当设定好间隔时间后，function会定期执行。
### setTimeout(function, delay)
在设定好的时间之后执行函数
### requestAnimationFrame(callback)
浏览器重绘，请求浏览器执行一个特定的函数来更新动画。


## setInterval
> clearInterval & setInterval(func,delay)

```javascript
        var nIntervId;

        function changeColor() {
            nIntervId = setInterval(flashText, 500);
        }

        function flashText() {
            var oElem = document.getElementById("my_box");
            oElem.style.color = (

            oElem.style.color == "red" ? "blue" : "red"

            );
        }

        function stopTextColor() {
            clearInterval(nIntervId);
        }
```
```html
<body onload="changeColor();">
<div id="my_box">
    <p>Hello World</p>
</div>
<button onclick="stopTextColor();">Stop</button>
</body>
```

## setTimeout

```javascript
       var timeoutID;
       var delay = 2000;

       function delayedAlert() {
         timeoutID = window.setTimeout(slowAlert, delay);
       }

       function slowAlert() {
         alert('到'+delay+"ms了");
       }

       function clearAlert() {
         window.clearTimeout(timeoutID);
       }
```
```html
<p>setTimeout Example</p>
       <button onclick="delayedAlert();">延迟弹出Alert</button>
       <p></p>
       <button onclick="clearAlert();">打断</button>
```




## requestAnimationFrame

```javascript
       // window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
       var start = null;
       var ele = document.getElementById("test");
       var progress = 0;

       function step(timestamp) {
           progress += 1;
           ele.style.width = progress + "%";
           ele.innerHTML=progress + "%";
           if (progress < 100) {
               requestAnimationFrame(step);
           }
       }
       requestAnimationFrame(step);

       document.getElementById("run").addEventListener("click", function() {
           ele.style.width = "1px";
           progress = 0;
           requestAnimationFrame(step);
       }, false);
```
```html
<div id="test" style="width:1px;height:17px;background:#0f0;">0%</div>
<input type="button" value="Run" id="run"/>
```