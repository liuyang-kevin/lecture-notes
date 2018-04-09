# Torrent文件结构
1. 多文件Torrent的结构的树形图为：
```text
Multi-file Torrent
├─announce               \\Tracker的主服务器
├─announce-list          \\Tracker服务器列表
├─comment                \\注释
├─comment.utf-8          \\注释utf8编码
├─creation date          \\种子文件建立的时间 1970年时间戳
├─encoding               \\种子文件的默认编码，比如GB2312，Big5，utf-8等
├─info                   \\所有关于下载的文件的信息都在这个字段里，它包括多个子字段. 单个文件还是多个文件，子字段的项目会不同。
│ ├─files
│ │ ├─length             \\文件的大小，用byte计算
│ │ ├─path               \\文件的名字，在下载时不可更改
│ │ └─path.utf-8         \\文件名的UTF-8编码，同上
│ ├─name                 \\推荐的文件夹名，此项可于下载时更改。
│ ├─name.utf-8           \\推荐的文件夹名的utf-8编码
│ ├─piece length         \\每个文件块的大小，用Byte计算
│ ├─pieces               \\ -> 见下文
│ ├─publisher            \\文件发布者的名字
│ ├─publisher-url        \\文件发布者的网址
│ ├─publisher-url.utf-8  \\
│ └─publisher.utf-8
└─nodes                  \\这个字段包含一系列ip和相应端口的列表，是用于连接DHT初始node。
```
## pieces
> 文件的特征信息，该字段比较大，实际上是种子内包含所有的文件段的SHA1的校验值的连接，  
即将所有文件按照piece length的字节大小分成块，每块计算一个SHA1值，  
然后将这些值连接起来就形成了pieces字段，由于SHA1的校验值为20Byte，  
所以该字段的大小始终为20的整数倍字节。  
该字段是Torrent文件中体积最大的部分，  
可见如果大文件分块很小，会造成Torrent文件体积庞大。  

2. 单文件Torrent的结构的树形图为：
```text
Single-File Torrent
├─announce
├─announce-list
├─comment
├─comment.utf-8
├─creation date
├─encoding
├─info
│ ├─length
│ ├─name
│ ├─name.utf-8
│ ├─piece length
│ ├─pieces
│ ├─publisher
│ ├─publisher-url
│ ├─publisher-url.utf-8
│ └─publisher.utf-8
└─nodes
```
## INFO_HASH
1. 这个值是info字段的HASH值,20个Byte，同样是使用SHA1作为HASH函数。
2. 计算的具体范围是从info字段开始\(不包含"info"这四个字节\)，一直到nodes字段为止\(不包含"nodes"这5个字节和nodes前边表示nodes字段长度的"5:"这两个字节\)。
3. INFO_HASH值是即时计算的，并不包含在Torrent文件中。
4. INFO_HASH在BT协议中是用来识别不同的种子文件的

## Torrent文件里数据的逻辑表示方法
* 字符串： 字符串由 字符个数:字符串 的形式构成，
    * 比如 `5:files` 就表示`"files"`
* 整数： Torrent用10进制来表示整数，由 i数字e 的形式构成，
    * 如 `i50e` 就表示`50`
* 列表： 列表由 l 开头，e 结尾，中间是多个字符串，
    * 如 `l5:files4:infoe` 就表示 `["files","info"]`
* 字典： 由 d 开头，e 结尾，中间可以是任何结构， 
    * 如 `d5:filesl4:info3:eggee` 就表示 `{files, ["info, "egg""]}`
