---
title: RESTful API 设计最佳实践
date: 2025-12-02
category:
  - 后端技术
tag:
  - API
  - RESTful
  - 接口设计
---

# RESTful API 设计最佳实践

设计优雅、规范的 API 接口，能极大降低前后端沟通成本和维护难度。

## 1. URL 设计规范
- **名词复数**: 资源通常用复数表示。
  - `GET /users`: 获取用户列表
  - `GET /users/1`: 获取 ID 为 1 的用户
- **层级结构**: 体现资源关系。
  - `GET /users/1/orders`: 获取用户 1 的订单列表

## 2. HTTP 动词
利用 HTTP 方法表达操作意图（CRUD）。
- `GET`: 获取资源（查）。
- `POST`: 新建资源（增）。
- `PUT`: 更新全部资源（改）。
- `PATCH`: 更新部分资源（改）。
- `DELETE`: 删除资源（删）。

## 3. 状态码使用
不要全部返回 200，应使用 HTTP 标准状态码。
- `200 OK`: 请求成功。
- `201 Created`: 创建成功。
- `400 Bad Request`: 客户端参数错误。
- `401 Unauthorized`: 未认证（未登录）。
- `403 Forbidden`: 无权限（已登录但无权）。
- `404 Not Found`: 资源不存在。
- `500 Internal Server Error`: 服务器内部错误。

## 4. 统一响应格式
建议封装统一的 JSON 结构：
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "id": 1,
    "name": "Alice"
  }
}
```

## 5. 版本控制
在 URL 中包含版本号，便于迭代。
- `/api/v1/users`
- `/api/v2/users`
