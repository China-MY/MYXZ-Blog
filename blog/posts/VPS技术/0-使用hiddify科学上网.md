---
cover: http://cloud.myxz.fun//blog/20250321090217084.png
icon: pen-to-square
date: 2025-03-19
category:
  - VPS技术
  - 科学上网
tag:
  - hiddify
  - 科学上网
star: false
sticky: true
---

# 使用hiddify科学上网

![hiddify后台](http://cloud.myxz.fun//blog/20250321090217084.png)

## 1、服务端安装：

hiddify的服务端安装是懒人的福音

首先你得有一台服务器

这里我推荐 

[HostVds|我称之为最好用的VPS服务器](https://hostvds.com/?affiliate_uuid=5050df9e-3038-49de-943f-b1acd6d3bfca )

当你点击上面的链接注册好后去创建一个实例（对了你要先充值）

之后在你的服务器ssh中输入以下命令即可

```
bash <(curl https://i.hiddify.com/release)
```

剩下的就是等待

安装完成后重新进入ssh会出现以下界面，不要慌

![1界面](http://cloud.myxz.fun//blog/20250321091449845.png)

这里我们需要按回车稍作等待，会出现以下界面

![查看后台入口](http://cloud.myxz.fun//blog/20250321091606901.png)

点击第二个，之后你会发现一个绿色的连接，复制到浏览器打开你就可以访问后台并且进行设置啦~

- 服务端后台系统配置

- ![配置你的域名和代理协议](http://cloud.myxz.fun//blog/20250321092425497.png)

  - 下面配置你的域名

  ![域名配置](http://cloud.myxz.fun//blog/20250321092535751.png)

  这里我推荐配置 直接+订阅链接+自动cdn ip选择器（如果你觉得麻烦也可以不配）

  - 下面是协议配置 选择代理选项进入代理协议配置 这里我给出参考，不过你们也可以自行摸索

    ![代理协议](http://cloud.myxz.fun//blog/20250321092933569.png)

    ![代理协议](http://cloud.myxz.fun//blog/20250321092959348.png)

    配置完成后需要点击行动中的应用配置，等待弹窗返回主页即可

    ![应用配置](http://cloud.myxz.fun//blog/20250321093100863.png)

    - 之后就是配置用户了，点击用户，进入用户页，点击创建，即可创建用户

    ![创建用户](http://cloud.myxz.fun//blog/20250321093321418.png)

    - 配置完成后，点击用户链接列选择当前域名即可获取订阅链接

    ![获取订阅链接](http://cloud.myxz.fun//blog/20250321093700183.png)

    

[Main installation guide - Hiddify](https://hiddify.com/manager/installation-and-setup/guide/)

上面链接是官网的教程

## 2、客户端

这里有配套的客户端

[Home - Hiddify](https://hiddify.com/)

进入官网

![根据你的平台进行选择下载客户端](http://cloud.myxz.fun//blog/20250321091927282.png)

根据你的平台进行选择下载客户端

安装完成后记得导入管理端创建的用户配置

![导入配置](http://cloud.myxz.fun//blog/20250321092030159.png)

最后点击连接即可解锁GitHub
