# MemoLens 官网 (Nuxt 4)

AI 驱动相机记忆工具官网，使用 Nuxt 4 + Tailwind CSS 构建。

## 环境要求

- Node.js >= 20（推荐用 nvm 管理：`nvm use`）
- pnpm >= 9（包管理器）

## 快速开始

```bash
# 安装依赖
pnpm install

# 本地开发
pnpm dev

# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview
```

## 部署

推送到 GitHub，Vercel 自动部署。

## 环境变量

```bash
cp .env.example .env
# 填写 API_BASE_URL 等
```

## 技术栈

- Nuxt 4 + TypeScript
- Tailwind CSS
- nuxt-og-image / @nuxtjs/sitemap / @nuxtjs/robots
