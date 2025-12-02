---
title: Docker 容器化部署入门
date: 2025-12-02
category:
  - 运维技术
tag:
  - Docker
  - 容器化
  - DevOps
---

# Docker 容器化部署入门

“在我的机器上能跑”是开发者的经典借口，而 Docker 的出现彻底解决了环境一致性问题。

## 1. 核心概念
- **镜像 (Image)**: 只读的模板，包含运行应用所需的所有环境。
- **容器 (Container)**: 镜像的运行实例，可以启动、停止、删除。
- **仓库 (Repository)**: 存放镜像的地方，如 Docker Hub。

## 2. 常用命令
```bash
# 拉取镜像
docker pull nginx

# 启动容器
docker run -d -p 80:80 --name my-nginx nginx

# 查看运行中的容器
docker ps

# 进入容器内部
docker exec -it my-nginx bash

# 查看日志
docker logs my-nginx
```

## 3. Dockerfile 编写
自定义镜像的核心。
```dockerfile
# 基础镜像
FROM openjdk:8-jdk-alpine

# 作者信息
MAINTAINER MyName

# 添加应用 Jar 包
ADD my-app.jar app.jar

# 暴露端口
EXPOSE 8080

# 启动命令
ENTRYPOINT ["java","-jar","/app.jar"]
```

## 4. Docker Compose
用于定义和运行多容器 Docker 应用程序。通过 `docker-compose.yml` 配置文件，一条命令启动整个技术栈（如 SpringBoot + MySQL + Redis）。

## 5. 总结
Docker 是现代运维和微服务架构的基石，掌握它能极大提升部署效率。
