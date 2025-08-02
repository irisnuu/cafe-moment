# 咖啡时刻 - Cafe Moment

一个展示咖啡故事和知识的静态网站，采用 Hugo 静态站点生成器构建，支持 Markdown 文章编写和自动部署到 Cloudflare Pages。

## 功能特性

- 🌍 **中英文切换** - 支持中英文双语显示
- 📱 **响应式设计** - 完美适配移动设备和桌面端
- ☕ **咖啡主题** - 简约优雅的咖啡风格设计
- 📝 **Markdown支持** - 文章支持Markdown语法编写
- 🖼️ **图片展示** - 支持在文章中插入图片
- 🎨 **现代化UI** - 采用现代设计语言和交互效果
- 🚀 **自动部署** - 推送到 GitHub 后自动部署到 Cloudflare Pages

## 项目结构

```
cafe-moment/
├── hugo-site/              # Hugo 静态站点
│   ├── config.toml         # Hugo 配置文件
│   ├── content/            # 内容目录
│   │   ├── _index.md       # 主页内容
│   │   └── stories/        # 文章目录
│   │       ├── _index.md   # 故事页面内容
│   │       ├── my-first-coffee.md
│   │       ├── coffee-and-friendship.md
│   │       └── pour-over-art.md
│   ├── themes/             # 主题目录
│   │   └── cafe-moment/    # 自定义主题
│   │       ├── layouts/    # 模板文件
│   │       └── assets/     # 静态资源
│   ├── static/             # 静态文件
│   │   └── images/         # 图片文件
│   └── .github/            # GitHub Actions
│       └── workflows/      # 部署工作流
├── DEPLOYMENT-GUIDE.md     # 部署指南
└── README.md               # 说明文档
```

## 本地开发

### 1. 安装 Hugo

确保您的系统已安装 Hugo Extended 版本：

```bash
# Windows (使用 Chocolatey)
choco install hugo-extended

# macOS (使用 Homebrew)
brew install hugo

# Linux
# 请参考 Hugo 官方文档安装
```

### 2. 启动开发服务器

```bash
cd hugo-site
hugo server -D
```

访问 http://localhost:1313 查看网站。

### 3. 构建静态文件

```bash
cd hugo-site
hugo
```

生成的静态文件将保存在 `public/` 目录中。

## 添加新文章

### 1. 创建新文章

在 `hugo-site/content/stories/` 目录下创建新的 `.md` 文件：

```markdown
---
title: "文章标题"
date: 2024-01-15
description: "文章描述"
tags: ["标签1", "标签2"]
categories: ["分类"]
featured_image: "/images/featured-image.jpg"
draft: false
---

文章内容...
```

### 2. 文章格式

- **Front Matter**: 使用 YAML 格式定义文章元数据
- **内容**: 支持 Markdown 语法
- **图片**: 将图片放在 `hugo-site/static/images/` 目录下

### 3. 文章分类

- `stories/`: 咖啡故事类文章
- `knowledge/`: 咖啡知识类文章

## 自定义主题

主题文件位于 `hugo-site/themes/cafe-moment/` 目录：

- `layouts/`: HTML 模板文件
- `assets/css/`: CSS 样式文件
- `assets/js/`: JavaScript 文件

## 部署

### 自动部署到 Cloudflare Pages

1. 将代码推送到 GitHub 仓库
2. 在 Cloudflare Pages 中连接 GitHub 仓库
3. 设置构建配置：
   - 构建命令：`hugo`
   - 输出目录：`public`
   - Node.js 版本：18.x

### 手动部署

```bash
cd hugo-site
hugo
# 将 public/ 目录的内容上传到您的 Web 服务器
```

## 技术栈

- **Hugo**: 静态站点生成器
- **Markdown**: 内容编写格式
- **HTML/CSS/JavaScript**: 前端技术
- **GitHub Actions**: 自动化部署
- **Cloudflare Pages**: 托管平台

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 许可证

MIT License

---

用❤️和☕制作的咖啡主题网站 