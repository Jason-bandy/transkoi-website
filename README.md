# TransKoi 官网设计与部署指南

## 🎨 设计理念

### 视觉风格
- **深色科技主题**: 采用深蓝紫色调 (#0a0e1a) 作为主背景，营造科技感
- **渐变效果**: 使用蓝紫渐变 (#667eea → #764ba2) 和青蓝渐变 (#4facfe → #00f2fe)
- **玻璃态设计**: 卡片采用半透明背景 + 模糊效果 (backdrop-filter)
- **动态背景**: 旋转的径向渐变背景，增加视觉层次
- **发光效果**: 按钮和卡片悬停时的光晕效果

### 用户体验
- **响应式设计**: 完美适配桌面、平板、手机
- **平滑动画**: 所有交互都有流畅的过渡效果
- **清晰层级**: 通过颜色、大小、间距建立信息层级
- **明确 CTA**: 多处引导下载，提高转化率

## 📁 文件结构

```
/Users/zhengzhican/Jobs/智伽/transkoi-website/
├── index.html          # 主页面
├── assets/             # 静态资源（待添加）
│   ├── images/         # 图片
│   ├── fonts/          # 字体
│   └── videos/         # 视频
└── css/                # 样式表（可选分离）
    └── style.css
```

## 🚀 部署方案

### 方案 1: Vercel (推荐)

```bash
cd /Users/zhengzhican/Jobs/智伽/transkoi-website
vercel --prod
```

**优点**:
- ✅ 免费 HTTPS
- ✅ 自动 CDN
- ✅ 持续部署
- ✅ 自定义域名

### 方案 2: Netlify

```bash
cd /Users/zhengzhican/Jobs/智伽/transkoi-website
netlify deploy --prod
```

### 方案 3: GitHub Pages

```bash
cd /Users/zhengzhican/Jobs/智伽/transkoi-website
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin git@github.com:zhengzhican/transkoi.com.git
git push -u origin main
```

然后在 GitHub 仓库设置中启用 GitHub Pages。

### 方案 4: 自有服务器

```bash
# 使用 Nginx
sudo cp -r /Users/zhengzhican/Jobs/智伽/transkoi-website/* /var/www/transkoi.com/
sudo nginx -t
sudo systemctl reload nginx
```

## 🎯 网站内容

### 1. Hero Section (首屏)
- **主标题**: "打破语言障碍，连接全世界"
- **副标题**: 产品介绍
- **CTA 按钮**: 免费下载、了解产品

### 2. Features (功能特点)
- 🎬 电影模式 - 实时字幕翻译
- 📞 电话翻译 - 通话实时翻译
- 💬 AI 对话翻译 - 语音对话练习
- ⚡ 实时翻译 - <100ms 响应
- 🔒 隐私保护 - 本地加密
- ☁️ 云端同步 - 多设备同步

### 3. Stats (数据展示)
- 100+ 支持语言
- 500K+ 活跃用户
- 99.5% 翻译准确率
- <100ms 响应速度

### 4. Products (产品服务)
- **TransKoi App**: 旗舰翻译应用
- **LuckyPod**: 智能翻译耳机（新品）

### 5. CTA (下载引导)
- App Store 下载
- Google Play 下载

### 6. Footer (页脚)
- 社交媒体链接
- 产品导航
- 支持链接
- 公司信息

## 🎨 自定义内容

### 添加公司真实信息

在 `index.html` 中搜索并替换以下内容：

1. **社交媒体链接** (Footer 部分):
```html
<a href="YOUR_TWITTER_URL"><i class="fab fa-twitter"></i></a>
<a href="YOUR_WECHAT_URL"><i class="fab fa-weixin"></i></a>
<a href="YOUR_GITHUB_URL"><i class="fab fa-github"></i></a>
<a href="YOUR_LINKEDIN_URL"><i class="fab fa-linkedin"></i></a>
```

2. **下载链接** (CTA 部分):
```html
<a href="YOUR_APP_STORE_URL" class="btn btn-primary">
    <i class="fab fa-apple"></i>
    App Store 下载
</a>
<a href="YOUR_GOOGLE_PLAY_URL" class="btn btn-primary">
    <i class="fab fa-google-play"></i>
    Google Play 下载
</a>
```

3. **产品链接**:
```html
<a href="YOUR_LUCKYPOD_URL" class="btn btn-secondary">
    <i class="fas fa-info-circle"></i>
    了解更多
</a>
```

### 添加真实产品图片

在 `product-card` 中添加产品图片：

```html
<div class="product-image">
    <img src="assets/images/luckypod-hero.png" alt="LuckyPod">
</div>
```

样式：
```css
.product-image {
    margin: 2rem 0;
    border-radius: 20px;
    overflow: hidden;
}

.product-image img {
    width: 100%;
    height: auto;
    display: block;
}
```

## 📊 SEO 优化

### 已包含的 SEO 元素

```html
<meta name="description" content="TransKoi 锦鲤翻译 - 下一代 AI 实时翻译解决方案...">
<meta name="keywords" content="翻译，AI 翻译，实时翻译，锦鲤翻译，TransKoi, LuckyPod...">
```

### 建议添加

1. **Open Graph (社交媒体分享)**:
```html
<meta property="og:title" content="TransKoi 锦鲤翻译 - AI 实时翻译，连接世界">
<meta property="og:description" content="采用最先进的 AI 神经网络翻译技术...">
<meta property="og:image" content="https://transkoi.com/assets/og-image.jpg">
<meta property="og:url" content="https://transkoi.com">
```

2. **Twitter Card**:
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="TransKoi 锦鲤翻译">
<meta name="twitter:description" content="采用最先进的 AI 神经网络翻译技术...">
<meta name="twitter:image" content="https://transkoi.com/assets/twitter-card.jpg">
```

3. **结构化数据**:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "TransKoi",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "iOS, Android",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}
</script>
```

## 🎯 转化优化建议

### 1. 添加用户评价
```html
<section class="testimonials">
    <div class="testimonial-card">
        <p>"TransKoi 让我的海外旅行变得如此简单！"</p>
        <div class="author">
            <img src="user.jpg" alt="用户">
            <span>张三，商务人士</span>
        </div>
    </div>
</section>
```

### 2. 添加应用场景
```html
<section class="use-cases">
    <h3>使用场景</h3>
    <div class="use-case-grid">
        <div class="use-case">
            <i class="fas fa-plane"></i>
            <h4>出国旅行</h4>
        </div>
        <div class="use-case">
            <i class="fas fa-briefcase"></i>
            <h4>商务会议</h4>
        </div>
        <div class="use-case">
            <i class="fas fa-graduation-cap"></i>
            <h4>语言学习</h4>
        </div>
        <div class="use-case">
            <i class="fas fa-heart"></i>
            <h4>跨国交友</h4>
        </div>
    </div>
</section>
```

### 3. 添加实时聊天
集成 Intercom、Crisp 等客服工具，提高转化率。

### 4. 添加邮件订阅
```html
<section class="newsletter">
    <h3>获取最新动态</h3>
    <form>
        <input type="email" placeholder="您的邮箱">
        <button type="submit">订阅</button>
    </form>
</section>
```

## 📱 移动端优化

当前设计已完全响应式，但可以进一步优化：

1. **添加移动端菜单** (汉堡菜单)
2. **优化触摸体验** (更大的点击区域)
3. **添加 PWA 支持** (离线访问)

## 🔧 技术栈

- **纯 HTML/CSS/JS**: 无需构建工具，部署简单
- **Google Fonts**: Inter + Noto Sans SC
- **Font Awesome**: 图标库
- **CSS Variables**: 主题定制方便
- **CSS Grid/Flexbox**: 现代布局

## 🎨 主题定制

修改 CSS 变量即可快速换色：

```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    --dark-bg: #0a0e1a;
    --darker-bg: #050810;
}
```

## 📈 数据分析

建议添加：

1. **Google Analytics**:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

2. **Hotjar**: 用户行为分析

3. **Google Search Console**: SEO 监控

## 🚀 下一步

1. ✅ 替换真实链接（下载、社交、产品）
2. ✅ 添加产品截图/渲染图
3. ✅ 添加公司真实信息
4. ✅ 部署到生产环境
5. ✅ 配置域名 DNS
6. ✅ 添加 HTTPS
7. ✅ 配置数据分析
8. ✅ SEO 优化
9. ✅ 性能优化（图片压缩、CDN）
10. ✅ 添加更多页面（关于、博客、帮助）

---

**创建日期**: 2026-03-17  
**创建人**: Koi 🎏  
**版本**: 1.0  
**状态**: ✅ 完成，待部署
