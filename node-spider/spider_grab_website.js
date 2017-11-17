const https = require("https");
const fs = require("fs");
const cheerio = require("cheerio");
const request = require("request");
const socks5 = require('socks5-https-client');
const Agent = require('socks5-https-client/lib/Agent');

let websiteUrl = "https://savannah-template.blogspot.jp/";
let hostname = "savannah-template.blogspot.jp";
let savePath = websiteUrl
                .replace(/https:\/\/|http:\/\//gm,"")
                .replace(/\//gm,"")
                .replace(/-/gm,"_")
                .replace(/\./gm,"_");

function main() {
    // console.log(savePath);
    // startGrab(websiteUrl);

    let proxyOptions = {
        hostname: hostname,
        path: '/',
        socksHost: '127.0.0.1',
        socksPort: 2333,
        rejectUnauthorized: false
    };
    startGrabBySocks5(proxyOptions);
}
// 1. grab [link|html] content;
// 2. save file
// 3. analysis [link] content, find links
// 4. sort links into html, css, js file into two group [hasLinks,noLinks]
// 5. check [onLinks] whether has downloaded, download it when it's not ;
// 6. filter HTML URL in [hasLinks] whether under the Domain then into Step7;
// 7. check [hasLinks] whether has downloaded, start a loop [hasLinks] form Step1 when it's not .;


// regex -> links
// 1. http://|https://|./|//|[^"]|/
function startGrab(orgUrl) {
    // 1. grab [link|html] content;
    https.get(orgUrl, cb4Request).on('error', function (err) {
        console.log(err);
    });
}

// regex -> links
// 1. http://|https://|./|//|[^"]|/
function startGrabBySocks5(options) {
    // 1. grab [link|html] content;
    socks5.get(options, cb4Request).on('error', function (err) {
        console.log(err);
    });
}

function cb4Request(res) {
    let html = '';        //用来存储请求网页的整个html内容
    res.setEncoding('utf-8'); //防止中文乱码

    res.on('data', function (chunk) { //监听data事件，每次取一块数据
        html += chunk;
    });
    //监听end事件，如果整个网页内容的html都获取完毕，就执行回调函数
    res.on('end', function () {
        console.log(html);
        // 2. save file

        // var $ = cheerio.load(html); //采用cheerio模块解析html
        // callback.on($,$(node_feature))
    });
}





main();