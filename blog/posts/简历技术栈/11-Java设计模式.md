---
title: Java 常用设计模式实战
date: 2025-12-02
category:
  - 后端技术
tag:
  - 设计模式
  - Java
  - 架构
---

# Java 常用设计模式实战

设计模式是解决特定问题的成熟方案。掌握它们能让代码更易扩展、更健壮。

## 1. 单例模式 (Singleton)
保证一个类只有一个实例。
- **场景**: 数据库连接池、Spring Bean（默认单例）、配置管理器。
- **实现**: 双重检查锁（Double Check Lock）。
```java
public class Singleton {
    private static volatile Singleton instance;
    private Singleton() {}
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}
```

## 2. 工厂模式 (Factory)
将对象的创建和使用分离。
- **场景**: Spring IOC 容器、日志框架（LoggerFactory）。
- **优势**: 解耦，增加新产品只需扩展工厂，无需修改调用方。

## 3. 策略模式 (Strategy)
定义一系列算法，将它们封装起来，并使它们可以相互替换。
- **场景**: 支付方式（支付宝、微信、银联）、促销活动计算。
- **优势**: 避免大量的 `if-else` 或 `switch-case`。

## 4. 观察者模式 (Observer)
对象间的一对多依赖，当一个对象改变状态，所有依赖者都会收到通知。
- **场景**: 消息队列监听、Vue 双向绑定原理、事件驱动架构。

## 5. 代理模式 (Proxy)
为其他对象提供一种代理以控制对这个对象的访问。
- **场景**: AOP（动态代理）、RPC 远程调用、MyBatis Mapper 接口。
