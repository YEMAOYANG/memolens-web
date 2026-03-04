# MemoLens 官网 (Nuxt 4)

基于 [nuxt4-web-temp](https://github.com/YEMAOYANG/nuxt4-web-temp) 模板构建的 MemoLens 官网。

## 技术栈

- **Nuxt 4** + TypeScript
- **@nuxt/ui** v4（UI 组件库）
- **@nuxtjs/i18n**（中英文国际化）
- **Tailwind CSS v4**（样式）
- **nuxt-og-image** / **@nuxtjs/sitemap**（SEO）
- **pnpm** 包管理

## 快速开始

```bash
# 使用 nvm 切换 Node 20
nvm use

# 安装依赖
pnpm install

# 本地开发
pnpm dev   # → http://localhost:3000

# 构建
pnpm build

# 预览
pnpm preview
```

## 页面

| 路由 | 说明 |
|------|------|
| `/` | 首页（Hero + 功能 + 优势 + 定价 + 下载） |
| `/privacy` | 隐私政策（App Store 必须） |
| `/terms` | 使用条款 |

## 图片资源

替换 `app/assets/images/` 中的占位图：
- `banner.png` → App 主屏截图
- `gn01/02/03.png` → 功能特性插图
- `why.png` → 优势说明插图

## 部署

推送到 GitHub，Vercel 自动部署。
