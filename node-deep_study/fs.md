## fs
```javascript
let fs = require('fs');
```
* 文件的I/O是由标准的POSIX函数封装。
* 所有的方法都提供了异步和同步两种方式。
> POSIX表示可移植操作系统接口（Portable Operating System Interface of UNIX，缩写为 POSIX ）
> POSIX标准定义了操作系统应该为应用程序提供的接口标准

### 必会
1. `fs.rename(path1, path2, [callback])` : 重命名
2. `fs.chmod(path, mode, [callback])` : 修改文件权限。
3. `fs.stat( path, [callback])` : 读取文件的元信息  
4. `fs.readFile(path, [callback])` : 读取文件数据。
5. `fs.exists(path, [callback])` : 判断文件是否存在
6. `fs.unlink(path, [callback])` : 删除文件
7. `fs.write(fd, buffer, length, position, [callback])` : 将buffer缓冲器内容写入fd文件。
8. `fs.read(fd, buffer, length, position, [callback])` : fd文件中中读取数据。
### Code
#### 1. `fs.rename(path1, path2, [callback])` : 重命名
```javascript
var fs = require('fs'); 
var root = __dirname;
fs.rename(root + 'oldername.txt', root + 'newname.txt', function() {
    if (err) throw err;
    console.log('rename complete');
});
```
本地的oldername.txt就被重命名为newname.txt了。
的`同步函数`是`fs.rename(path1, path2)`,   
两者的作用和调用都相同，但是其接口是一个同步接口，因此，调用方式有所区别。

#### 2. `fs.chmod(path, mode, [callback])` : 修改文件权限。
```javascript
var fs = require('fs');
var root = __dirname;
fs.chmod(root + '/duang.txt', '666', function( err ) {
    if (err) throw err;
    console.log('chmod complete');
});
```
代码执行前，文件duang.txt的权限不是666。但是当脚本执行完之后该文件的权限就被修改为666了。  
`同步` -\> `fs.chmodSync( path, mode );`

#### 3. `fs.stat( path, [callback])` : 读取文件的元信息  
回调函数将返回两个参数（err, stats, 其中stats是fs.Stats的一个对象。
```javascript
var fs = require('fs');
var root = __dirname;
fs.stat(root + '/duang.txt', '666', function( err, stats ) {
    if (err) throw err;
    console.log( stats );
});
```
`同步` -\> `fs.statSync(path)`。

#### 4. `fs.readFile(path, [callback])` : 读取文件数据。
`同步` -\> `fs.readFileSync(path)`

#### 5. `fs.exists(path, [callback])` : 判断文件是否存在
```javascript
var fs = require('fs');
var root = __dirname;

/* 判断文件是否存在 */
fs.exists(root + '/duang.txt', function( exists ) {
    if ( !exists ) {
        // you code here...
    } else {
        // code....
    }
});
```

#### 6. `fs.unlink(path, [callback])` : 删除文件
```javascript
var fs = require('fs');
var root = __dirname;
fs.stat(root + '/duang.txt', function( err ) {
    if (err) throw err;
});
```

#### 7. `fs.write(fd, buffer, length, position, [callback])` : 将buffer缓冲器内容写入fd文件。

`position` : 指明将数据写入文件从头部算起的偏移位置。如果把pisition设置为null, 那么数据将从当前位置开始写入。   
`callback` : 接受两个参数（err, written）, 其中written标识有多少字节的数据已经写入。

> buffer这个参数可以通过Node.js Buffer API的new Buffer创建。

#### 8. `fs.read(fd, buffer, length, position, [callback])` : fd文件中中读取数据。

`buffer` : 为写入数据的缓冲器。   
`offset` : 为写入到缓冲器的偏移地址。   
`length` : 指明了欲读取的数据字节数。   
`position` : 为一个整数变量，标识从哪个位置开始读取文件。如果pisition的参数为null，数据将从文件的当前位置开始读取。   
`callback `: 接受两个参数（err, bytesRead）, bytesRead是用来标识多少个字节被读取。  

> buffer这个参数可以通过Node.js Buffer API的new Buffer创建。
