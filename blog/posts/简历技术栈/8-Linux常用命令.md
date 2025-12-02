---
title: Linux 常用命令速查手册
date: 2025-12-02
category:
  - 运维技术
tag:
  - Linux
  - Shell
  - 运维
---

# Linux 常用命令速查手册

熟练掌握 Linux 命令是后端开发和运维人员的基本功。本文整理了高频使用的命令。

## 1. 文件与目录
- `ls -ll`: 以列表形式显示文件详细信息。
- `cd -`: 切换回上一次所在的目录。
- `pwd`: 显示当前路径。
- `mkdir -p a/b/c`: 递归创建目录。
- `rm -rf`: 强制删除（**慎用！**）。
- `find / -name "nginx.conf"`: 全盘搜索文件。

## 2. 文本处理
- `cat`: 查看文件内容。
- `tail -f app.log`: 实时查看日志文件末尾。
- `grep "ERROR" app.log`: 搜索包含关键字的行。
- `vim`: 文本编辑器（`:wq` 保存退出，`:q!` 不保存退出）。

## 3. 系统监控
- `top`: 实时显示系统进程资源占用（类似任务管理器）。
- `free -h`: 查看内存使用情况。
- `df -h`: 查看磁盘空间。
- `netstat -tlnp`: 查看端口占用情况。
- `ps -ef | grep java`: 查看 Java 进程。

## 4. 权限管理
- `chmod 777 file.sh`: 赋予文件所有权限（读4 写2 执行1）。
- `chown user:group file`: 修改文件所属用户和组。

## 5. 网络工具
- `ping google.com`: 测试网络连通性。
- `curl http://localhost:8080`: 发送 HTTP 请求。
- `telnet 127.0.0.1 3306`: 测试端口是否通畅。

## 6. 压缩与解压
- `tar -zxvf bundle.tar.gz`: 解压 tar.gz 文件。
- `tar -zcvf bundle.tar.gz dir/`: 压缩目录。
