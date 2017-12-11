const utils = require('../../node-deep_study/utils');
const buf = Buffer.from('runoob', 'ascii');

// 输出 72756e6f6f62
console.log(buf.toString('hex'));

// 输出 cnVub29i
console.log(buf.toString('base64'));


console.log("------------------------------------");
// 支持的字符编码包括：
// ascii - 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。
// utf8 - 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8 。
// utf16le - 2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。
// ucs2 - utf16le 的别名。
// base64 - Base64 编码。
// latin1 - 一种把 Buffer 编码成一字节编码的字符串的方式。
// binary - latin1 的别名。
// hex - 将每个字节编码为两个十六进制字符。

// const buf_a = Buffer.from('a', 'ascii');
const buf_a = Buffer.from('刘', 'utf8');

console.log(utils.beautyChar("ascii: ",utils.wc.Green),buf_a.toString('ascii'));
console.log(utils.beautyChar("utf8: ",utils.wc.Green),buf_a.toString('utf8'));
console.log(utils.beautyChar("utf16le: ",utils.wc.Green),buf_a.toString('utf16le'));
console.log(utils.beautyChar("ucs2: ",utils.wc.Green),buf_a.toString('ucs2'));
console.log(utils.beautyChar("base64: ",utils.wc.Green),buf_a.toString('base64'));
console.log(utils.beautyChar("latin1: ",utils.wc.Green),buf_a.toString('latin1'));
console.log(utils.beautyChar("binary: ",utils.wc.Green),buf_a.toString('binary'));
console.log(utils.beautyChar("hex: ",utils.wc.Green),buf_a.toString('hex'));

console.log("----------------读取--------------------");
// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// 新建 Buffer

// 创建一个长度为 10、且用 0 填充的 Buffer。
const buf1 = Buffer.alloc(10);

// 创建一个长度为 10、且用 0x1 填充的 Buffer。
const buf2 = Buffer.alloc(10, 1);

// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buf3 = Buffer.allocUnsafe(10);

// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]);

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('tést');

// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1');

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// 读取 Buffer
// buf.toString([encoding[, start[, end]]])
console.log(buf2);
console.log(buf2.toString("hex",0,2));


console.log("----------------写入--------------------");
// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// 写入 Buffer
const wBuf = Buffer.alloc(25);
len = wBuf.write("前端Node.js");
console.log(utils.beautyChar(wBuf.toString("utf8"),utils.wc.Red)+"写入字节数 : "+  utils.beautyChar(len,utils.wc.Cyan));


console.log("----------------其它--------------------");
// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// JSON 对象
const buf_json = Buffer.from('Kevin LiuYang');
const json = buf.toJSON(buf_json);
console.log(json);

// 缓冲区合并
// Buffer.concat(list[, totalLength])
// list - 用于合并的 Buffer 对象数组列表。
// totalLength - 指定合并后Buffer对象的总长度。



// 缓冲区比较
// buf.compare(otherBuffer);
// otherBuffer - 与 buf 对象比较的另外一个 Buffer 对象


// 拷贝缓冲区
// buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
// targetBuffer - 要拷贝的 Buffer 对象。
// targetStart - 数字, 可选, 默认: 0
// sourceStart - 数字, 可选, 默认: 0
// sourceEnd - 数字, 可选, 默认: buffer.length


// 缓冲区裁剪
// buf.slice([start[, end]])
// start - 数字, 可选, 默认: 0
// end - 数字, 可选, 默认: buffer.length


// 缓冲区长度
// buf.length;

