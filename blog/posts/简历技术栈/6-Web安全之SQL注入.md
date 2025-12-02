---
title: Web 安全之 SQL 注入攻防
date: 2025-12-02
category:
  - 安全技术
tag:
  - 网络安全
  - SQL注入
  - Web安全
---

# Web 安全之 SQL 注入攻防

SQL 注入（SQL Injection）是 OWASP Top 10 中最古老也最危险的漏洞之一。

## 1. 漏洞原理
攻击者在 HTTP 请求中通过参数输入恶意 SQL 语句，骗过服务器执行，从而获取数据库敏感信息。
**示例**:
```sql
-- 原始 SQL
SELECT * FROM users WHERE username = '$username' AND password = '$password';

-- 攻击者输入 username 为: ' OR '1'='1
-- 最终 SQL 变为:
SELECT * FROM users WHERE username = '' OR '1'='1' AND password = '...';
```
这就绕过了登录验证。

## 2. 注入类型
- **基于布尔的盲注**: 根据页面返回的 True/False 判断。
- **基于时间的盲注**: 利用 `SLEEP()` 函数，根据响应时间判断。
- **联合查询注入 (UNION)**: 利用 `UNION SELECT` 拼接结果。
- **堆叠查询注入**: 一次执行多条 SQL 语句。

## 3. 防御措施
- **预编译 (PreparedStatement)**: 最有效的防御手段。将 SQL 语句和参数分开，数据库只把参数当做数据处理，不作为指令执行。
- **输入验证**: 对用户输入进行严格的类型和格式检查。
- **最小权限原则**: 数据库连接账号只赋予必要的权限，禁止使用 root。

## 4. 工具演示
- **SQLMap**: 自动化的 SQL 注入与数据库接管工具。
  ```bash
  python sqlmap.py -u "http://target.com/index.php?id=1" --dbs
  ```

## 5. 总结
安全无小事，在编写代码时必须时刻保持警惕，永远不要信任用户的输入。
