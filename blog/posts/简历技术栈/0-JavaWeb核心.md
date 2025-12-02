---
title: JavaWeb 核心知识点梳理
date: 2025-12-02
category:
  - 后端技术
tag:
  - Java
  - JavaWeb
  - Servlet
  - Spring
---

# JavaWeb 核心知识点梳理

作为一名后端开发者，JavaWeb 是我们必须掌握的基石。本文基于我的简历技能点，对 JavaWeb 的核心内容进行梳理。

## 1. Servlet 与 JSP
虽然现在 Spring Boot 已经屏蔽了底层的 Servlet 细节，但理解 Servlet 生命周期（init, service, destroy）对于排查问题至关重要。
- **Filter**: 过滤器，用于拦截请求，处理跨域、编码、登录验证等。
- **Listener**: 监听器，用于监听 Session、Context 等对象的创建与销毁。

## 2. Spring 全家桶
### Spring Framework
- **IOC (控制反转)**: 将对象的创建权交给 Spring 容器，解耦。
- **AOP (面向切面编程)**: 用于日志记录、事务管理、权限控制等，减少重复代码。

### Spring MVC
- **DispatcherServlet**: 前端控制器，请求的入口。
- **HandlerMapping**: 映射请求到处理器。
- **ModelAndView**: 封装数据和视图。

### Spring Boot
- **自动配置**: 通过 `@EnableAutoConfiguration` 实现开箱即用。
- **Starter**: 依赖管理，一站式引入所需组件。

## 3. 数据库交互
- **MyBatis**: 半自动 ORM 框架，灵活控制 SQL。
- **JDBC**: Java 数据库连接标准，所有持久层框架的底层。

## 4. 总结
JavaWeb 的技术栈非常庞大，从底层的 HTTP 协议到上层的微服务架构，都需要我们不断学习和实践。
