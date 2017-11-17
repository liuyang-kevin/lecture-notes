let https = require('https');
let fs = require('fs');
let cheerio = require('cheerio');
let request = require('request');
let i = 0;
let url = "https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php";
let BASEURL = "https://www.w3resource.com/javascript-exercises/";
let SAVERESPATH = "./data/img/";


function RegExpTest(){
    let src="http://sumsung753.blog.163.com/blog/I love you!";
    let re = /\w+/g; // 注意g将全文匹配，不加将永远只返回第一个匹配。
    let arr;
    while((arr = re.exec(src)) !=null){ //exec使arr返回匹配的第一个，while循环一次将使re在g作用寻找下一个匹配。
        console.log(arr.index + "-" + arr.lastIndex + ":" + arr + "<br/>");
        for(key in arr){
            console.log(key + "=>" + arr[key] + "<br/>");
        }
        console.log("<br/>");
    }
}


// RegExpTest();      //主程序开始运行


// let teststr = 'data/JavaScript_Basic__Exercise-123_with_Solution.html';
// let reg = /data\/JavaScript_Basic__Exercise-(.*)_with_Solution.html/g;
// // let reg = new RegExp(/data\/JavaScript_Basic__Exercise-(\S*)_with_Solution.html/, "g");
// // console.log(teststr.match(reg));
// console.log(reg.exec(teststr)[1]);




let html = "<link href='https://www.blogger.com/static/v1/widgets/3213516723-css_bundle_v2.css' rel='stylesheet' type='text/css'/>\n" +
    "<link href='http://www.blogger.com/static/v1/widgets/3213516723-css_bundle_v2.css' rel='stylesheet' type='text/css'/>\n" +
    "<meta content='https://savannah-template.blogspot.com/' property='og:url'/>\n" +
    "<meta content='/savannah-template.blogspot.com/' property='og:url'/>\n" +
    "<meta content='./savannah-template.blogspot.com/' property='og:url'/>\n" +
    "<meta content='savannah-template.blogspot.com/' property='og:url'/>\n" +
    "<script type=\"text/javascript\" src=\"https://www.blogger.com/static/v1/jsbin/3620414510-ieretrofit.js\"></script>\n" +
    "<meta content='https://savannah-template.blogspot.com/' property='og:url'/>\n" +
    "<script type=\"text/javascript\" src=\"https://www.blogger.com/static/v1/jsbin/3620414510-ieretrofit.js\"></script>\n" +
    "<img class='image' src='https://4.bp.blogspot.com/-sLocssiPC68/WYjGkNXi7_I/AAAAAAAAAtY/-B5gGodjyhIJ9uRjgxS8oV34dG98AFwhACEwYBhgL/s1600/pexels-photo-316891-min.jpeg'/>\n" +
    "<a class='quickedit' href='//www.blogger.com/rearrange?blogID=3581809145484973469&widgetType=FeaturedPost&widgetId=FeaturedPost1&action=editWidget&sectionId=sidebar-right-1' onclick='return _WidgetManager._PopupConfig(document.getElementById(\"FeaturedPost1\"));' target='configFeaturedPost1' title='Edit'>\n" +
    "<link href='https://fonts.googleapis.com/css?family=Karla:400,400i,700,700i|Poppins:400,400i,700,700i' rel='stylesheet'/>\n" +
    "_WidgetManager._RegisterWidget('_BlogView', new _WidgetInfo('Blog1', 'main', null, document.getElementById('Blog1'), {'cmtInteractionsEnabled': false, 'useNgc': false, 'lightboxEnabled': true, 'lightboxModuleUrl': 'https://www.blogger.com/static/v1/jsbin/1584353632-lbx.js', 'lightboxCssUrl': 'https://www.blogger.com/static/v1/v-css/368954415-lightbox_bundle.css'}, 'displayModeFull'));" +
    "<script src='//cdnjs.cloudflare.com/ajax/libs/jquery.cycle2/20140415/jquery.cycle2.min.js' type='text/javascript'></script>";



// let re = /(https:\/\/|http:\/\/|\.\/|\/\/).*?(?=['|"])/gm;    // can't find "/" ""
let re = /(https:\/\/|http:\/\/|\.\/|\/\/).*?(?=['|"])/gm;
let links = [];
while((foundRes = re.exec(html)) !=null){ //exec使arr返回匹配的第一个，while循环一次将使re在g作用寻找下一个匹配。
    // console.log(foundRes.index + "-" + foundRes.lastIndex + ":" + foundRes + "\n****");
    // console.log(foundRes[0]);
    links.push(foundRes[0]);
    //[ 'https://',
    // index: 12,
    //     input:
    // for(key in arr){
    //     console.log(key + "=>" + arr[key] + "\n----");
    // }
    // console.log("\n\n");
}

console.log(links.length);
console.log(links);
