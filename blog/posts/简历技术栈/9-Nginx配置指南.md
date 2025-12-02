---
title: Nginx 反向代理与负载均衡指南
date: 2025-12-02
category:
  - 运维技术
tag:
  - Nginx
  - 服务器
  - 负载均衡
---

# Nginx 反向代理与负载均衡指南

Nginx 是高性能的 HTTP 和反向代理 web 服务器，广泛应用于互联网架构中。

## 1. 核心概念
- **正向代理**: 代理客户端访问互联网（如 VPN）。
- **反向代理**: 代理服务器接收互联网请求（如访问 www.baidu.com，实际由 Nginx 转发给内部服务器）。

## 2. 常用配置 (nginx.conf)

### 反向代理
```nginx
server {
    listen       80;
    server_name  api.example.com;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### 负载均衡
```nginx
upstream backend_server {
    server 192.168.1.10:8080 weight=1;
    server 192.168.1.11:8080 weight=2; # 权重越高，分配请求越多
}

server {
    listen 80;
    location / {
        proxy_pass http://backend_server;
    }
}
```

## 3. 静态资源服务器
Nginx 处理静态文件（HTML, CSS, JS, 图片）的效率非常高，通常实现动静分离。
```nginx
location /static/ {
    root /var/www/html;
    expires 30d; # 设置缓存过期时间
}
```

## 4. 常用命令
- `nginx -t`: 测试配置文件是否有语法错误。
- `nginx -s reload`: 重载配置（无需重启服务）。
- `nginx -s stop`: 停止服务。
