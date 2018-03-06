# 理解docker
虚拟机是

# 安装
官方去查。  
版本挺多，我使用：社区版 **Docker Community Edition \(CE\)**；  

对于Mac系统，社区版Docker就是一个App，拖进去就可以。  
![](./res/docker-app-drag.png)  

之后，运行 & 启动就好；

# 查看安装状态，版本
```bash
bogon|liuyang|~ ↓docker --version
Docker version 17.12.0-ce, build c97c6d6
bogon|liuyang|~ ↓docker-compose --version
docker-compose version 1.18.0, build 8dd22a9
bogon|liuyang|~ ↓docker-machine --version
docker-machine version 0.13.0, build 9ba6da9
```
> Machine：解决的是操作系统异构安装Docker困难的问题，没有Machine的时候，CentOS是一种，Ubuntu又是一种，AWS又是一种。有了Machine，所有的系统都是一样的安装方式。  
> Swarm：我们有了Machine就意味着有了docker环境，但是那是单机的，而通常我们的应用都是集群的。这正是Swarm要做的事情，给你提供docker集群环境和调度策略等。   
> Compose：有了环境，我们下一步要做什么？部署应用啊。然后我们需要docker run image1、docker run image2...一次一次不厌其烦的重复这些操作，每次都写大量的命令参数。Compose简化了这个流程，只需要把这些内容固话到docker-compose.yml中。  


# `docker` 安装一个`nginx` 
```bash
$ docker pull nginx
Using default tag: latest
latest: Pulling from library/nginx
8176e34d5d92: Pull complete 
5b19c1bdd74b: Pull complete 
4e9f6296fa34: Pull complete 
Digest: sha256:4771d09578c7c6a65299e110b3ee1c0a2592f5ea2618d23e4ffe7a4cab1ce5de
```
坑：  
1. `Error response from daemon: Get https://registry-1.docker.io/v2/: unauthorized: incorrect username or password`  
我先注册了docker账户；貌似公有库不需要登陆，反而没法 `pull` ，所以退出登陆，CLI可以 `docker logout`  
2. 下到哪里去了？  
`$ docker images` 命令； nginx是作为镜像下载到docker中的；
