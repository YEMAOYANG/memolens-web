export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'nuxt-svgo',
    '@nuxtjs/sitemap',
    '@nuxtjs/i18n'
  ],

  i18n: {
    locales: [
      { code: 'zh-CN', name: '中文', file: 'zh-CN.json' },
      { code: 'en', name: 'English', file: 'en.json' }
    ],
    defaultLocale: 'zh-CN',
    strategy: 'no_prefix'
  },

  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://memolens.app',
    name: 'MemoLens'
  },

  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-11-01',

  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: false
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/css/variables.scss" as *;
            @use "@/assets/css/mixins.scss" as *;
          `
        }
      }
    }
  },

  eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: 'single',
        semi: false,
        commaDangle: 'never',
        braceStyle: '1tbs',
        arrowParens: true
      }
    }
  },

  image: {
    format: ['webp', 'jpg', 'png'],
    quality: 80,
    screens: { xs: 320, sm: 640, md: 768, lg: 1024, xl: 1280, xxl: 1536 },
    presets: {
      hero: { modifiers: { format: 'webp', quality: 80, fit: 'cover' } },
      icon: { modifiers: { format: 'webp', width: 80, height: 80, quality: 85 } }
    },
    dir: 'assets/images',
    provider: 'ipx'
  },

  svgo: {
    dts: true,
    autoImportPath: '~/assets/icons/',
    componentPrefix: 'icon',
    svgoConfig: {
      plugins: [{ name: 'preset-default', params: { overrides: { removeViewBox: false } } }]
    }
  }
})
