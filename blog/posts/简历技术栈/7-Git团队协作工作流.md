---
title: Git 团队协作工作流
date: 2025-12-02
category:
  - 运维技术
tag:
  - Git
  - 版本控制
  - 团队协作
---

# Git 团队协作工作流

Git 是目前最流行的分布式版本控制系统，良好的 Git 规范能极大降低团队协作成本。

## 1. 常用分支模型 (Git Flow)
- **master / main**: 主分支，存放随时可发布的代码。
- **develop**: 开发分支，包含最新开发功能。
- **feature/**: 功能分支，从 develop 切出，开发完成后合并回 develop。
- **release/**: 发布分支，预发布阶段，只修 Bug。
- **hotfix/**: 热修复分支，从 master 切出，修复线上紧急 Bug。

## 2. 常用命令清单
```bash
# 初始化
git init

# 提交暂存区
git add .
git commit -m "feat: 新增登录功能"

# 分支操作
git checkout -b feature/login
git branch -a

# 远程同步
git pull origin develop
git push origin feature/login

# 解决冲突
# 手动修改冲突文件后 -> git add -> git commit
```

## 3. Commit Message 规范
推荐使用 Angular 规范：
- `feat`: 新功能
- `fix`: 修补 Bug
- `docs`: 文档修改
- `style`: 格式调整（不影响代码运行）
- `refactor`: 重构
- `perf`: 性能优化
- `test`: 测试相关

## 4. 协作建议
- 提交前先 `pull`，减少冲突。
- 保持 Commit 粒度适中，一个 Commit 做一件事。
- 代码 Review (PR/MR) 是保证代码质量的重要环节。

## 5. 结语
Git 不仅仅是工具，更是一种协作习惯。
