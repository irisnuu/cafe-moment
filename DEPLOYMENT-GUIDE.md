# 咖啡时刻网站部署指南

## 概述

本指南将帮助您将咖啡时刻网站部署到 Cloudflare Pages，实现自动部署和持续集成。

## 方案对比

### 原始方案（纯HTML）
- ❌ 需要手动管理文件
- ❌ 没有版本控制
- ❌ 部署复杂
- ❌ 难以维护

### 新方案（Hugo + Cloudflare Pages）
- ✅ 使用 Markdown 编写文章
- ✅ Git 版本控制
- ✅ 自动部署
- ✅ 易于维护和扩展

## 部署步骤

### 1. 准备 GitHub 仓库

1. 在 GitHub 上创建新仓库：`cafe-moment`
2. 将 Hugo 项目推送到仓库：

```bash
cd hugo-site
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/cafe-moment.git
git push -u origin main
```

### 2. 配置 Cloudflare Pages

1. 登录 Cloudflare Dashboard
2. 进入 "Pages" 部分
3. 点击 "Create a project"
4. 选择 "Connect to Git"
5. 选择您的 GitHub 仓库
6. 配置构建设置：

**构建设置：**
- **Framework preset**: Hugo
- **Build command**: `hugo --minify`
- **Build output directory**: `public`
- **Root directory**: `/` (留空)

**环境变量：**
- `HUGO_VERSION`: `latest`
- `HUGO_ENV`: `production`

### 3. 自定义域名（可选）

1. 在 Cloudflare Pages 项目设置中
2. 点击 "Custom domains"
3. 添加您的域名
4. 配置 DNS 记录

## 工作流程

### 添加新文章

1. 在本地编辑 Markdown 文件
2. 提交到 Git：
```bash
git add content/stories/new-article.md
git commit -m "Add new article"
git push origin main
```
3. Cloudflare Pages 自动构建和部署

### 本地开发

```bash
# 进入项目目录
cd hugo-site

# 启动本地服务器
hugo server -D

# 访问 http://localhost:1313
```

### 预览部署

每次推送到 `main` 分支都会触发自动部署，您可以在 Cloudflare Pages 仪表板中查看部署状态。

## 文件结构

```
hugo-site/
├── config.toml              # Hugo 配置
├── content/                 # 文章内容
│   ├── _index.md           # 主页
│   ├── stories/            # 咖啡故事
│   └── knowledge/          # 咖啡知识
├── themes/cafe-moment/     # 自定义主题
│   ├── layouts/           # HTML 模板
│   ├── assets/css/        # 样式文件
│   └── assets/js/         # JavaScript
├── static/                # 静态文件
│   └── images/           # 图片资源
└── .github/workflows/     # GitHub Actions
    └── deploy.yml        # 部署配置
```

## 文章格式

### Front Matter 示例

```markdown
---
title: "文章标题"
date: 2024-01-15
description: "文章描述"
tags: ["标签1", "标签2"]
categories: ["分类"]
featured_image: "/images/image.svg"
draft: false
---

文章内容...
```

### 支持的 Markdown 语法

- ✅ 标题（# ## ###）
- ✅ 列表（有序和无序）
- ✅ 强调（**粗体** *斜体*）
- ✅ 代码块和行内代码
- ✅ 引用块
- ✅ 链接和图片
- ✅ 分割线
- ✅ 表格

## 性能优化

### 已实现的优化

- ✅ 静态文件生成
- ✅ CSS 和 JS 压缩
- ✅ 图片优化
- ✅ CDN 加速
- ✅ 缓存策略

### 进一步优化建议

1. **图片优化**：
   - 使用 WebP 格式
   - 实现懒加载
   - 响应式图片

2. **SEO 优化**：
   - 添加 sitemap.xml
   - 优化 meta 标签
   - 结构化数据

3. **性能监控**：
   - 使用 Cloudflare Analytics
   - 监控 Core Web Vitals
   - 性能测试

## 故障排除

### 常见问题

1. **构建失败**
   - 检查 Hugo 版本
   - 验证 Markdown 语法
   - 查看构建日志

2. **图片不显示**
   - 确认图片路径正确
   - 检查文件权限
   - 验证文件格式

3. **样式问题**
   - 清除浏览器缓存
   - 检查 CSS 文件路径
   - 验证主题配置

### 调试技巧

1. **本地测试**：
   ```bash
   hugo server -D --debug
   ```

2. **构建检查**：
   ```bash
   hugo --minify --gc
   ```

3. **查看构建日志**：
   - 在 Cloudflare Pages 仪表板中查看
   - 检查 GitHub Actions 日志

## 维护指南

### 定期维护

1. **更新 Hugo 版本**
2. **检查依赖更新**
3. **备份重要数据**
4. **监控网站性能**

### 安全考虑

1. **定期更新依赖**
2. **监控安全漏洞**
3. **使用 HTTPS**
4. **实施 CSP 策略**

## 扩展功能

### 可以考虑添加的功能

1. **评论系统** - 使用 Disqus 或 Giscus
2. **搜索功能** - 集成 Algolia 或 Fuse.js
3. **多语言支持** - Hugo 内置 i18n 支持
4. **RSS 订阅** - Hugo 自动生成
5. **社交媒体分享** - 添加分享按钮

### 第三方服务集成

- **Google Analytics** - 网站分析
- **Cloudflare Analytics** - 性能监控
- **Disqus** - 评论系统
- **Algolia** - 搜索服务

## 总结

使用 Hugo + Cloudflare Pages 的方案提供了：

- 🚀 **快速部署** - 推送到 Git 后自动部署
- 📝 **简单写作** - 使用 Markdown 编写文章
- 🔧 **易于维护** - 版本控制和模块化设计
- ⚡ **高性能** - 静态网站 + CDN 加速
- 📱 **响应式** - 适配各种设备
- 🔍 **SEO 友好** - 内置 SEO 优化

这个方案让您可以专注于内容创作，而不用担心技术细节。 