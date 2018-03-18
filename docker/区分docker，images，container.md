# 启动docker服务  
1. 首先需要知道启动docker服务是：  
`service docker start`  
或者：  
`systemctl start docker`  
2. 关闭docker服务是：  
`service docker stop`  
或者：  
`systemctl stop docker`  

# image & container
* Docker的 `镜像称为image`，`容器称为container`。
* 对于Docker来说，image是静态的，类似于操作系统快照，
* 而container则是动态的，是image的运行实例。

比如，有一个image名称为ubuntu，那么比如现在我们启动这个image的container并且进入到这个container的bash命令行中：

`docker run -t -i ubuntu /bin/bash`

官网是这么说的：  
```text
docker run: runs a container.
ubuntu: is the image you would like to run.
-t: flag assigns a pseudo-tty or terminal inside the new container.
-i: flag allows you to make an interactive connection by grabbing the standard in (STDIN) of the container.
/bin/bash: launches a Bash shell inside our container.
```
理解很简单：  
docker run：启动container  
ubuntu：你想要启动的image  
`-t`：进入终端  
`-i`：获得一个交互式的连接，通过获取container的输入  
`/bin/bash`：在container中启动一个bash shell  
这样就进入container的内部了：  
`root@af8bae53bdd3:/#`  
如果有运行中的container，可以在container所在的外部操作系统中运行：  
`docker ps`  
查看到这个container。  
如果想看到所有的container，包括运行中的，以及未运行的或者说是沉睡镜像，则运行：  
`docker ps -a`  
如果要退出就：  
`Ctrl-D`  
或：  
`root@af8bae53bdd3:/# exit`  

# 启动docker某个image（镜像）的container（容器）
1. 如果想再次打开这个container，运行：  
`docker start goofy_almeida`  
其中`goofy_almeida`是容器的名称。  

2. 进入container（容器）  
* 这个时候container运行在后台，如果想进入它的终端，则：  
`docker attach goofy_almeida`  
> 使用“docker attach”命令进入container（容器）有一个缺点，  
> 那就是每次从container中退出到前台时，container也跟着退出了。  

* 要想退出container时，让container仍然在后台运行着，
可以使用“docker exec -it”命令。  
每次使用这个命令进入container，  
当退出container后，container仍然在后台运行，  
命令使用方法如下：  
`docker exec -it goofy_almeida /bin/bash`  

`goofy_almeida`：要启动的container的名称  
`/bin/bash`：在container中启动一个bash shell  

这样输入`exit`或者按键`Ctrl + C`退出container时，
这个container仍然在后台运行，通过：`docker ps` 就可以查找到。

# 退出container
输入：`exit` 或者按键：`Ctrl + C`
