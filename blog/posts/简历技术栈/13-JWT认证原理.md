---
title: JWT 身份认证原理与实践
date: 2025-12-02
category:
  - 后端技术
tag:
  - JWT
  - 认证
  - 安全
---

# JWT 身份认证原理与实践

JWT (JSON Web Token) 是目前最流行的跨域身份验证解决方案。

## 1. 传统 Session vs JWT
- **Session**:
  - 状态存储在服务器端（内存或 Redis）。
  - 依赖 Cookie 传输 SessionID。
  - 扩展性差（服务器集群需要 Session 共享）。
- **JWT**:
  - 无状态，服务器不存储 Token。
  - 适合分布式微服务。
  - 可以在 HTTP Header 中传输，支持跨域。

## 2. JWT 结构
`Header.Payload.Signature`
- **Header**: 算法类型（如 HS256）和 Token 类型。
- **Payload**: 载荷，存放用户信息（用户 ID、角色、过期时间）。**注意：不要放敏感信息（密码），因为 Payload 只是 Base64 编码，任何人都能解码。**
- **Signature**: 签名，防止 Token 被篡改。使用服务器密钥对 `Header + Payload` 进行哈希。

## 3. 工作流程
1. 用户登录成功。
2. 服务器生成 JWT，返回给客户端。
3. 客户端将 JWT 存在 LocalStorage 或 Cookie 中。
4. 后续请求在 Header 中携带 `Authorization: Bearer <token>`。
5. 服务器验证签名，解析用户信息。

## 4. Token 刷新与黑名单
由于 JWT 无状态，一旦签发无法撤销（除非过期）。
- **退出登录**: 客户端丢弃 Token，服务器可维护一个“黑名单”（Redis 设置过期时间）来拦截已注销的 Token。
- **续期**: 使用双 Token 机制（Access Token + Refresh Token）。
