<script setup lang="ts">
import { en, zh_cn } from '@nuxt/ui/locale'

const { t, locale, setLocale } = useI18n()
const localeOptions = [en, { ...zh_cn, code: 'zh-CN' }]
const HEADER_OFFSET = 72

const navItems = computed(() => [
  { label: t('nav.home'),       to: '#home' },
  { label: t('nav.features'),   to: '#features' },
  { label: t('nav.howItWorks'), to: '#how' },
  { label: t('nav.price'),      to: '#price' },
  { label: t('nav.download'),   to: '#download' }
])

function scrollTo(hash: string) {
  const el = document.querySelector(hash)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<template>
  <UHeader
    mode="slideover"
    :class="['app-header']"
    :ui="{ toggle: 'text-white hover:bg-white/10', body: 'text-white' }"
  >
    <template #left>
      <NuxtLink to="/" aria-label="MemoLens" class="flex items-center shrink-0">
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
      <UButton
        to="#download"
        size="sm"
        class="header-cta"
      >
        {{ t('nav.getApp') }}
      </UButton>
    </template>

    <template #body>
      <UNavigationMenu
        :items="navItems"
        orientation="vertical"
        variant="link"
        class="-mx-2.5"
        @click="(item: any) => scrollTo(item.to)"
      />
    </template>
  </UHeader>
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
</style>
