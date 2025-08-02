# 咖啡时刻 - Coffee Moments

一个展示咖啡故事和知识的静态网站，采用简约现代的咖啡主题设计。

## 功能特性

- 🌍 **中英文切换** - 支持中英文双语显示
- 📱 **响应式设计** - 完美适配移动设备和桌面端
- ☕ **咖啡主题** - 简约优雅的咖啡风格设计
- 📝 **Markdown支持** - 文章支持Markdown语法编写
- 🖼️ **图片展示** - 支持在文章中插入图片
- 🎨 **现代化UI** - 采用现代设计语言和交互效果

## 网站结构

```
cafe-moment/
├── index.html          # 主页
├── styles.css          # 样式文件
├── script.js           # JavaScript功能
├── articles/           # 文章目录
│   ├── my-first-coffee.html
│   ├── coffee-and-friendship.html
│   └── pour-over-art.html
├── images/             # 图片目录
└── README.md           # 说明文档
```

## 使用方法

### 1. 添加新文章

1. 在 `articles/` 目录下创建新的HTML文件
2. 使用以下模板结构：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>文章标题</title>
    <link rel="stylesheet" href="../styles.css">
    <style>
        .article-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 120px 20px 40px;
        }
        .article-title {
            font-size: 2.5rem;
            color: #2c1810;
            margin-bottom: 2rem;
        }
        .article-content {
            line-height: 1.8;
            color: #2c1810;
            font-size: 1.1rem;
        }
        .back-link {
            display: inline-block;
            margin-top: 3rem;
            color: #8b4513;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <header class="header">
        <nav class="nav">
            <div class="nav-brand">
                <h1 class="logo">咖啡时刻</h1>
                <span class="logo-en">Coffee Moments</span>
            </div>
            <div class="nav-menu">
                <a href="../index.html" class="nav-link">首页</a>
                <a href="../index.html#stories" class="nav-link">咖啡故事</a>
                <a href="../index.html#knowledge" class="nav-link">咖啡知识</a>
                <a href="../index.html#about" class="nav-link">关于</a>
            </div>
        </nav>
    </header>

    <main class="article-container">
        <article>
            <h1 class="article-title">文章标题</h1>
            
            <div class="article-content">
                <!-- 在这里添加文章内容 -->
                <p>文章内容...</p>
                
                <!-- 插入图片 -->
                <img src="../images/your-image.jpg" alt="图片描述">
                
                <h2>小标题</h2>
                <p>更多内容...</p>
            </div>

            <a href="../index.html" class="back-link">← 返回首页</a>
        </article>
    </main>

    <footer class="footer">
        <div class="container">
            <p class="footer-text">© 2024 咖啡时刻. 用❤️和☕制作</p>
        </div>
    </footer>

    <script src="../script.js"></script>
</body>
</html>
```

### 2. 添加图片

1. 将图片文件放入 `images/` 目录
2. 在文章中使用相对路径引用图片：
   ```html
   <img src="../images/your-image.jpg" alt="图片描述">
   ```

### 3. 更新主页

在 `index.html` 中的故事卡片部分添加新文章的链接：

```html
<article class="story-card">
    <div class="story-image">
        <img src="images/story-image.jpg" alt="文章标题">
    </div>
    <div class="story-content">
        <h3 class="story-title">文章标题</h3>
        <p class="story-excerpt">文章摘要...</p>
        <a href="articles/your-article.html" class="read-more">阅读更多</a>
    </div>
</article>
```

## 自定义样式

### 颜色主题

网站使用咖啡色调：
- 主色调：`#8b4513` (深棕色)
- 辅助色：`#a0522d` (中棕色)
- 文字色：`#2c1810` (深褐色)
- 背景色：`#faf8f5` (米白色)

### 字体

- 中文：Noto Sans SC
- 英文：Inter

## 技术栈

- HTML5
- CSS3 (Grid, Flexbox, 响应式设计)
- JavaScript (ES6+)
- Google Fonts

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 部署

这是一个纯静态网站，可以部署到任何静态网站托管服务：

- GitHub Pages
- Netlify
- Vercel
- 阿里云OSS
- 腾讯云COS

## 许可证

MIT License

---

用❤️和☕制作的咖啡主题网站 