# 咖啡时刻 - Hugo 静态网站

这是一个基于 Hugo 的咖啡文化博客网站，支持自动部署到 Cloudflare Pages。

## 特性

- ✅ **静态网站生成** - 使用 Hugo 快速生成静态网站
- ✅ **Markdown 支持** - 使用 Markdown 编写文章
- ✅ **自动部署** - 推送到 GitHub 后自动部署到 Cloudflare Pages
- ✅ **响应式设计** - 适配各种设备
- ✅ **SEO 优化** - 内置 SEO 标签和 Open Graph
- ✅ **标签系统** - 支持文章分类和标签
- ✅ **代码高亮** - 支持代码块语法高亮

## 本地开发

### 安装 Hugo

1. 下载 Hugo：https://gohugo.io/installation/
2. 或使用包管理器：
   ```bash
   # macOS
   brew install hugo
   
   # Windows (Chocolatey)
   choco install hugo
   
   # Linux
   sudo apt install hugo
   ```

### 运行本地服务器

```bash
# 进入项目目录
cd hugo-site

# 启动本地服务器
hugo server -D

# 访问 http://localhost:1313
```

### 构建网站

```bash
# 构建静态文件
hugo

# 构建并压缩
hugo --minify
```

## 项目结构

```
hugo-site/
├── config.toml              # Hugo 配置文件
├── content/                 # 文章内容
│   ├── _index.md           # 主页内容
│   ├── stories/            # 咖啡故事
│   │   ├── _index.md
│   │   ├── my-first-coffee.md
│   │   ├── coffee-and-friendship.md
│   │   └── pour-over-art.md
│   └── knowledge/          # 咖啡知识
├── themes/cafe-moment/     # 自定义主题
│   ├── layouts/           # 模板文件
│   ├── assets/            # 静态资源
│   └── static/            # 静态文件
├── static/                # 全局静态文件
│   └── images/           # 图片资源
└── .github/workflows/     # GitHub Actions
    └── deploy.yml        # 部署配置
```

## 添加新文章

1. 在 `content/stories/` 或 `content/knowledge/` 目录下创建 `.md` 文件
2. 添加 Front Matter：

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

## 部署到 Cloudflare Pages

### 方法一：自动部署（推荐）

1. 将代码推送到 GitHub
2. 在 Cloudflare Pages 中连接 GitHub 仓库
3. 设置构建配置：
   - **构建命令**：`hugo --minify`
   - **输出目录**：`public`
   - **Hugo 版本**：最新版本

### 方法二：手动部署

1. 构建网站：`hugo --minify`
2. 将 `public` 目录上传到 Cloudflare Pages

## 自定义主题

主题文件位于 `themes/cafe-moment/` 目录：

- `layouts/` - HTML 模板
- `assets/css/` - 样式文件
- `assets/js/` - JavaScript 文件
- `static/` - 静态资源

## 环境变量

在 Cloudflare Pages 中设置以下环境变量：

- `HUGO_VERSION` - Hugo 版本（可选）
- `HUGO_ENV` - 环境名称（可选）

## 性能优化

- ✅ 图片优化和压缩
- ✅ CSS 和 JS 压缩
- ✅ 静态资源缓存
- ✅ CDN 加速

## 贡献指南

1. Fork 项目
2. 创建功能分支：`git checkout -b feature/new-article`
3. 提交更改：`git commit -am 'Add new article'`
4. 推送分支：`git push origin feature/new-article`
5. 创建 Pull Request

## 许可证

MIT License

## 支持

如有问题，请创建 Issue 或联系维护者。 