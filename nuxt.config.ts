export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@vueuse/nuxt',
    'nuxt-og-image',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],
  app: {
    head: {
      title: 'MemoLens — AI 驱动的第二大脑',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '用手机摄像头扫描名片、白板、文件，AI 自动归档，随时自然语言找回。' },
        { property: 'og:title', content: 'MemoLens — 拍一下，记住一切' },
        { property: 'og:description', content: 'AI 驱动的相机记忆工具' },
        { property: 'og:image', content: '/og-image.png' },
        { name: 'theme-color', content: '#5B5FEF' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css' },
      ],
    },
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL || 'https://api.memolens.app',
      appStoreUrl: process.env.APP_STORE_URL || '#',
      googlePlayUrl: process.env.GOOGLE_PLAY_URL || '#',
    },
  },
  nitro: {
    prerender: {
      routes: ['/', '/download', '/privacy', '/terms'],
    },
  },
  site: {
    url: 'https://memolens.app',
    name: 'MemoLens',
  },
})
