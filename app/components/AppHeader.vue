<script setup lang="ts">
import { en, zh_cn } from '@nuxt/ui/locale'

const { t, locale, setLocale } = useI18n()
const route = useRoute()
const localeOptions = [en, { ...zh_cn, code: 'zh-CN' }]
const HEADER_OFFSET = 72

const isHome = computed(() => route.path === '/' || route.path === '')

const navItems = computed(() => [
  { label: t('nav.home'), to: '#home' },
  { label: t('nav.features'), to: '#features' },
  { label: t('nav.howItWorks'), to: '#how' },
  { label: t('nav.price'), to: '#price' },
  { label: t('nav.download'), to: '/download' }
])

function scrollTo(hash: string) {
  if (!hash.startsWith('#')) {
    return
  }
  const el = document.querySelector(hash)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<template>
  <!-- 首页：完整导航 -->
  <UHeader
    v-if="isHome"
    mode="slideover"
    :class="['app-header']"
    :ui="{
      toggle: 'text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800',
      body: 'text-black dark:text-white'
    }"
  >
    <template #left>
      <NuxtLink
        to="/"
        aria-label="MemoLens"
        class="flex items-center shrink-0"
      >
        <AppLogo />
      </NuxtLink>
    </template>

    <UNavigationMenu
      :items="navItems"
      variant="link"
      :ui="{ link: 'nav-link' }"
      @click="(item: any) => scrollTo(item.to)"
    />

    <template #right>
      <ULocaleSelect
        :model-value="locale"
        :locales="localeOptions"
        @update:model-value="setLocale(($event as 'zh-CN' | 'en'))"
      />
      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu
        :items="navItems"
        orientation="vertical"
        variant="link"
        @click="(item: any) => scrollTo(item.to)"
      />
    </template>
  </UHeader>

  <!-- 子页面（下载页等）：简化导航 -->
  <header
    v-else
    class="sub-header"
  >
    <div class="sub-header-inner">
      <NuxtLink
        to="/"
        aria-label="MemoLens"
        class="sub-header-logo"
      >
        <AppLogo />
      </NuxtLink>
      <NuxtLink
        to="/"
        class="sub-header-back"
      >
        {{ t('nav.backHome') }}
      </NuxtLink>
    </div>
  </header>
</template>

<style lang="scss" scoped>
:deep(.app-header) {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: $z-header;
  border: none;
  background: rgba($dark-bg, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba($white, 0.06);
}

:deep(.nav-link) {
  font-size: $text-sm;
  font-weight: $font-medium;
  color: rgba($white, 0.6);
  transition: color $transition-base;

  &:hover {
    color: $white;
  }
}

.header-cta {
  background: $brand-gradient !important;
  border: none !important;
  border-radius: $radius-md !important;
  font-weight: $font-semibold !important;
  color: $white !important;
  box-shadow: $shadow-brand !important;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 30px rgba($brand-primary, 0.45) !important;
  }
}

.sub-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: $z-header;
  background: rgba($dark-bg, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba($white, 0.06);
  padding: 0 24px;
}

.sub-header-inner {
  max-width: 1120px;
  margin: 0 auto;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sub-header-back {
  font-size: $text-sm;
  color: rgba($white, 0.4);
  transition: color $transition-base;

  &:hover {
    color: $white;
  }
}
</style>
