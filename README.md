# TransKoi Next.js Website

TransKoi 锦鲤翻译官方网站 - Next.js 版本

## 技术栈

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Icons**: Font Awesome 6
- **Deployment**: Static Export (Vercel/Netlify 兼容)

## 项目结构

```
transkoi-website/
├── messages/              # 国际化文件
│   ├── zh.json           # 中文
│   ├── en.json           # 英文
│   └── ja.json           # 日文
├── src/
│   ├── app/
│   │   ├── [locale]/     # 国际化路由
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   └── globals.css
│   └── components/       # React 组件
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── Stats.tsx
│       ├── Products.tsx
│       ├── Download.tsx
│       └── Footer.tsx
├── i18n.ts               # i18n 配置
├── next.config.js
├── tailwind.config.js
└── package.json
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
npm run build
```

构建输出在 `dist/` 目录

### 本地预览生产构建

```bash
npm run start
```

## 国际化

支持三种语言：

- 🇨🇳 中文 (zh) - 默认
- 🇺🇸 英文 (en)
- 🇯🇵 日文 (ja)

访问不同语言版本：

- `/` - 中文 (默认)
- `/en` - 英文
- `/ja` - 日文

## 设计特点

- 🎨 科技蓝紫渐变主题
- ✨ 流畅的动画效果
- 📱 完全响应式设计
- 🌙 深色模式
- 🎯 组件化架构
- ♿ 可访问性优化

## 部署

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# 将 dist/ 目录部署到 Netlify
```

### 静态托管

构建后的 `dist/` 目录可以部署到任何静态托管服务：

- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront
- 阿里云 OSS

## 更新日志

### v1.0.0 (2026-03-29)

- ✅ 初始版本
- ✅ 完整的 Hero、Features、Stats、Products、Download、Footer 组件
- ✅ 中英日三语支持
- ✅ 响应式设计
- ✅ 动画效果
- ✅ 静态导出配置

## 许可证

© 2026 厦门智伽科技有限公司 Xiamen Zhiplus Technology Co., Ltd. All rights reserved.

## 联系方式

- 📧 support@transkoi.com
- 📍 厦门市火炬高新区软件园二期观日路 18 号 403 室
- 📞 152-8042-7319 (Hason)
