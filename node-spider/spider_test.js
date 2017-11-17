var https = require('https');
var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');
var i = 0;
var url = "https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php";
var BASEURL = "https://www.w3resource.com/javascript-exercises/";
var SAVERESPATH = "./data/img/";
//初始url

function fetchPage(x) {
    html = "<img data-cfsrc=\"https://www.w3resource.com/w3r_images/javascript-exercises.gif\" alt=\"JavaScript Exercises\" style=\"display:none;visibility:hidden;\"><noscript><img src='https://www.w3resource.com/w3r_images/javascript-exercises.gif' alt=\"JavaScript Exercises\" /></noscript>\n" +
        "            <h1 itemscope=\"\" itemtype=\"http://schema.org/WebPageElement/Heading\" class=\"heading\" id=\"h_one\">JavaScript: Display the current day and time in a specific format</h1>\n" +
        "        <time itemprop=\"dateModified\" datetime=\"October 05 2017 10:55:15.\">Last update on October 05 2017 10:55:15 (UTC/GMT +8 hours)</time>\n" +
        "        <div class=\"mdl-grid\">\n" +
        "            <div class=\"mdl-cell mdl-cell--12-col mdl-cell--hide-desktop\">\n" +
        "            <script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\n" +
        "\n" +
        "            <ins class=\"adsbygoogle\" style=\"display:inline-block;width:320px;height:100px\" data-ad-client=\"ca-pub-2153208817642134\" data-ad-slot=\"7685555518\"></ins>\n" +
        "            <script>\n" +
        "            (adsbygoogle = window.adsbygoogle || []).push({});\n" +
        "    </script>\n" +
        "        </div>\n" +
        "        </div>\n" +
        "        <h2 itemscope=\"\" itemtype=\"http://schema.org/WebPageElement/Heading\">JavaScript Basic: Exercise-1 with Solution</h2>\n" +
        "        <p>Write a JavaScript program to display the current day and time in the following format.<br>\n" +
        "        Today is : Friday. <br>\n" +
        "        Current time is : 4 PM : 50 : 22</p>\n" +
        "        <p><strong>Sample Solution: </strong> -</p>\n" +

        "        <p><strong>HTML Code:</strong></p>\n" +
        "        <pre class=\"line-numbers\"><code class=\"language-html\">&lt;!DOCTYPE html&gt;\n" +
        "        &lt;html&gt;\n" +
        "        &lt;head&gt;\n" +
        "        &lt;meta charset=&quot;utf-8&quot;&gt;\n" +
        "    &lt;title&gt;JavaScript current day and time&lt;/title&gt;\n" +
        "        &lt;/head&gt;\n" +
        "        &lt;body&gt;&lt;/body&gt;\n" +
        "        &lt;/html&gt;\n" +
        "        </code>\n" +
        "        </pre>\n" +
        "        <p><strong>JavaScript Code:</strong></p>\n" +
        "        <pre class=\"line-numbers\"><code class=\"language-js\">var today = new Date();\n" +
        "        var day = today.getDay();\n" +
        "        var daylist = [&quot;Sunday&quot;,&quot;Monday&quot;,&quot;Tuesday&quot;,&quot;Wednesday &quot;,&quot;Thursday&quot;,&quot;Friday&quot;,&quot;Saturday&quot;];\n" +
        "        console.log(&quot;Today is : &quot; + daylist[day] + &quot;.&quot;);\n" +
        "        var hour = today.getHours();\n" +
        "        var minute = today.getMinutes();\n" +
        "        var second = today.getSeconds();\n" +
        "        var prepand = (hour &gt;= 12)? &quot; PM &quot;:&quot; AM &quot;;\n" +
        "        hour = (hour &gt;= 12)? hour - 12: hour;\n" +
        "        if (hour===0 &amp;&amp; prepand===&apos; PM &apos;)\n" +
        "        {\n" +
        "            if (minute===0 &amp;&amp; second===0)\n" +
        "            {\n" +
        "                hour=12;\n" +
        "                prepand=&apos; Noon&apos;;\n" +
        "            }\n" +
        "            else\n" +
        "            {\n" +
        "                hour=12;\n" +
        "                prepand=&apos; PM&apos;;\n" +
        "            }\n" +
        "        }\n" +
        "        if (hour===0 &amp;&amp; prepand===&apos; AM &apos;)\n" +
        "        {\n" +
        "            if (minute===0 &amp;&amp; second===0)\n" +
        "            {\n" +
        "                hour=12;\n" +
        "                prepand=&apos; Midnight&apos;;\n" +
        "            }\n" +
        "            else\n" +
        "            {\n" +
        "                hour=12;\n" +
        "                prepand=&apos; AM&apos;;\n" +
        "            }\n" +
        "        }\n" +
        "        console.log(&quot;Current Time : &quot;+hour + prepand + &quot; : &quot; + minute + &quot; : &quot; + second);\n" +
        "    </code>\n" +
        "        </pre>\n" +
        "        <p><strong>Explanations: </strong></p>\n" +
        "        <p>Declaring a <a href=\"https://www.w3resource.com/javascript/object-property-method/date.php\" target=\"_parent\">JavaScript date</a> : In JavaScript Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC. You can declare a date in the following ways :</p>\n" +
        "        <pre name=\"code\" class=\"well_syntax\">new Date();\n" +

        "        new Date(value);\n" +
        "        new Date(dateString);\n" +
        "        new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);\n" +
        "    </pre>\n" +
        "        <p>The <a href=\"https://www.w3resource.com/javascript/object-property-method/date-getDay.php\" target=\"_blank\">getDay()</a> method is used to get the day of the week for the specified date according to local time, where 0 represents Sunday. The value returned by getDay() is an integer corresponding to the day of the week: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.</p>\n" +
        "        <p>The <a href=\"https://www.w3resource.com/javascript/object-property-method/date-getHours.php\" target=\"_blank\">getHours()</a> method is used to get the hour for a given date, according to local time. The value returned by getHours() is an integer between 0 and 23.</p>\n" +
        "        <p>The <a href=\"https://www.w3resource.com/javascript/object-property-method/date-getMinutes.php\">getMinutes()</a> method is used to get the minutes in the specified date according to local time. The value returned by getMinutes() is an integer between 0 and 59.</p>\n" +
        "        <p>The <a href=\"https://www.w3resource.com/javascript/object-property-method/date-getSeconds.php\" target=\"_blank\">getSeconds()</a> method is used to get the seconds in the specified date according to local time. The value returned by getSeconds() is an integer between 0 and 59.</p>\n" +
        "        <p>AM and PM : AM stands for &apos;ante meridiem&apos;, which means &apos;before noon&apos; in Latin, while PM stands for &apos;post meridiem&apos;, which means &apos;after noon&apos; in Latin.<br>\n" +
        "        12-Hour Periods : Nowadays most clocks are 12-hour clocks &#xE2;&#x20AC;&#x201C; they divide the 24 hours in a day into two 12-hour periods. <br>\n" +
        "        Ante meridiem: Before noon - Between midnight (0:00) &amp; noon (12:00)<br>\n" +
        "        Post meridiem: After noon Between noon (12:00) &amp; midnight (0:00)</p>\n" +
        "        <p><strong>Flowchart: </strong></p>\n" +
        "        <img data-cfsrc=\"https://www.w3resource.com/w3r_images/javascript-basic-exercise-1.png\" alt=\"Flowchart: JavaScript - display the current day and time in a specific format\" data-cfstyle=\"max-width:100%;display:block;height=auto\" style=\"display:none;visibility:hidden;\"><noscript><img src='https://www.w3resource.com/w3r_images/javascript-basic-exercise-1.png' alt=\"Flowchart: JavaScript - display the current day and time in a specific format\" style=\"max-width:100%;display:block;height=auto\"></noscript>\n" +
        "            <p><strong>Live Demo: </strong></p>\n" +
        "        <p data-height=\"380\" data-theme-id=\"dark\" data-slug-hash=\"LzZPNG\" data-default-tab=\"js,result\" data-user=\"w3resource\" data-embed-version=\"2\" data-pen-title=\"JavaScript current day and time - basic-ex-2\" data-editable=\"true\" class=\"codepen\">See the Pen <a href=\"https://codepen.io/w3resource/pen/LzZPNG/\">JavaScript current day and time - basic-ex-2</a> by w3resource (<a href=\"https://codepen.io/w3resource\">@w3resource</a>) on <a href=\"https://codepen.io\">CodePen</a>.</p>\n" +
        "            <script async src=\"https://production-assets.codepen.io/assets/embed/ei.js\"></script>\n" +
        "            <br>\n" +
        "            <p class=\"note_blue\"><strong>Improve this sample solution and post your code through Disqus</strong></p>";

    var $ = cheerio.load("<article>"+html+"</article>"); //采用cheerio模块解析html
    var foundContent = $('article');


    while (foundContent.children('h2').first().prev()!=""){
        // console.log("Del");
        // console.log(foundContent.children('h2').first().prev().html());
        foundContent.children('h2').first().prev().remove();
    }

    console.log(foundContent.children('p').last().html());
    while (foundContent.children('p').last().html()!="<strong>Live Demo: </strong>"){
        console.log("Del");
        console.log(foundContent.children('p').last().html());
        foundContent.children('p').last().remove();
    }
    foundContent.children('p').last().remove();
    foundContent.children('script').last().remove();




    // console.log(foundContent.find('img').length);
    foundContent.find('img').each(function(i, elem){
        console.log(foundContent.find('img').eq(i).attr("data-cfsrc"));
        var url = foundContent.find('img').eq(i).attr("data-cfsrc");
        var str = url.split('/');
        var filename = SAVERESPATH+str.pop();
        foundContent.find('img').eq(i).attr("data-cfsrc",filename);
        https.get(url, function(res){
            var imgData = "";
            res.setEncoding("binary"); //一定要设置response的编码为binary否则会下载下来的图片打不开
            res.on("data", function(chunk){
                imgData+=chunk;
            });
            res.on("end", function(){
                fs.writeFile(filename, imgData, "binary", function(err){
                    if(err){
                        console.log("down fail");
                    }
                    console.log("down success");
                });
            });
        });
    });

    console.log("result");
    // console.log(foundContent.html());

    var saveFileName = foundContent.children('h2').first().html().replace(new RegExp(" ","gm"),"_");
    // console.log(saveFileName);
    var saveHtmlData = "<!DOCTYPE HTML><html><head><title>"+saveFileName+"</title></head><body>"+foundContent.html()+"</body></html>";
    console.log(saveHtmlData);
    fs.appendFile('./data/' + saveFileName + '.html', saveHtmlData, 'utf-8', function (err) {
        if (err) {
            console.log(err);
        }
    });


}




fetchPage(url);      //主程序开始运行