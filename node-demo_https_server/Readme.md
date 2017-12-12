1. 生成证书
* `openssl genrsa 1024 > /pathway/private.pem`  
* `openssl req -new -key /pathway/private.pem -out csr.pem`  
* `openssl x509 -req -days 365 -in csr.pem -signkey /pathway/private.pem -out /pathway/file.crt`  


2. create a express app;


## 【双向httpss认证】 double ssl https 
> [one blog](http://blog.csdn.net/marujunyy/article/details/8477854)  

* cd ./double_https_keys
* `openssl genrsa -out ca-key.pem -des 1024`
```text
Generating RSA private key, 1024 bit long modulus
......................................................................++++++
........................................++++++
e is 65537 (0x10001)
Enter pass phrase for ca-key.pem:   ← 输入一个新密码 
Verifying - Enter pass phrase for ca-key.pem:   ← 重新输入一遍密码
```

* `openssl req -new -key ca-key.pem -out ca-csr.pem`
```text
Enter pass phrase for ca-key.pem:
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) []:ZH
State or Province Name (full name) []:TianJin
Locality Name (eg, city) []:TianJin
Organization Name (eg, company) []:KevinLiu
Organizational Unit Name (eg, section) []:KevinLiu
Common Name (eg, fully qualified host name) []:KevinLiu
Email Address []:shadowcat.liuyang@gmail.com

Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:654321
```
* `openssl x509 -req -days 3650 -in ca-csr.pem -signkey ca-key.pem -out ca-cert.pem` 
```text
Signature ok
subject=/C=ZH/ST=TianJin/L=TianJin/O=KevinLiu/OU=KevinLiu/CN=KevinLiu/emailAddress=shadowcat.liuyang@gmail.com
Getting Private key
Enter pass phrase for ca-key.pem:
```
---
执行上述3个命令之后，得到3个文件，  
`ca-key.pem` 为CA的私钥，  
`ca-cert.pem` 为CA的自签名证书。

* `openssl x509 -noout -text -in ca-cert.pem`查看生成证书的详细信息