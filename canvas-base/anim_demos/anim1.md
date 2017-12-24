# clock
```javascript
//1.
function clock(){
        var ctx = document.getElementById('canvas').getContext('2d');
        ctx.save();
        ctx.clearRect(0,0,150,150);
        ctx.translate(75,75);
        ctx.scale(0.4,0.4);
        ctx.rotate(-Math.PI/2);
        ctx.strokeStyle = "black";
        ctx.fillStyle = "white";
        ctx.lineWidth = 8;
        ctx.lineCap = "round";


        ctx.beginPath();
        ctx.lineWidth = 14;
        ctx.strokeStyle = '#325FA2';
        ctx.arc(0,0,142,0,Math.PI*2,true);
        ctx.stroke();

        ctx.restore();

    }
//2.
        // 小时刻度
        ctx.save();
        for (var i=0;i<12;i++){
            ctx.beginPath();
            ctx.rotate(Math.PI/6);
            ctx.moveTo(100,0);
            ctx.lineTo(120,0);
            ctx.stroke();
        }
        ctx.restore();

        // 分钟刻度
        ctx.save();
        ctx.lineWidth = 5;
        for (i=0;i<60;i++){
            if (i%5!=0) {
                ctx.beginPath();
                ctx.moveTo(117,0);
                ctx.lineTo(120,0);
                ctx.stroke();
            }
            ctx.rotate(Math.PI/30);
        }
        ctx.restore();

//3.

        var now = new Date();
var start = now.getMilliseconds()

        var sec = now.getSeconds();
        var min = now.getMinutes();
        var hr  = now.getHours();

        print(now.getMilliseconds()-start);
                hr = hr>=12 ? hr-12 : hr;

//4.
        // 计算时针
                ctx.save();

                ctx.rotate(

                (Math.PI/6)* hr +

                (Math.PI/360)* min +

                (Math.PI/21600)* sec

                )


                ctx.lineWidth = 14;
                ctx.beginPath();
                ctx.moveTo(-20,0);
                ctx.lineTo(80,0);
                ctx.stroke();
                ctx.restore();

                // 计算分针
                ctx.save();
                ctx.rotate( (Math.PI/30)*min + (Math.PI/1800)*sec )
                ctx.lineWidth = 10;
                ctx.beginPath();
                ctx.moveTo(-28,0);
                ctx.lineTo(112,0);
                ctx.stroke();
                ctx.restore();

                // 计算秒针，并追加样式
                ctx.save();
                ctx.rotate(sec * Math.PI/30);
                ctx.strokeStyle = "#D40000";
                ctx.fillStyle = "#D40000";
                ctx.lineWidth = 6;
                ctx.beginPath();
                ctx.moveTo(-30,0);
                ctx.lineTo(83,0);
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(0,0,10,0,Math.PI*2,true);
                ctx.fill();
                ctx.beginPath();
                ctx.arc(95,0,10,0,Math.PI*2,true);
                ctx.stroke();
                ctx.fillStyle = "rgba(0,0,0,0)";
                ctx.arc(0,0,3,0,Math.PI*2,true);
                ctx.fill();
                ctx.restore();

 //5.改变执行方式，
             window.requestAnimationFrame(clock);



```












