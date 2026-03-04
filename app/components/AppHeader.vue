<script setup lang="ts">
import { en, zh_cn } from '@nuxt/ui/locale'

const title = 'MemoLens'
const { t, locale, setLocale } = useI18n()

const localeOptions = [en, { ...zh_cn, code: 'zh-CN' }]

const items = computed(() => [
  { label: t('nav.home'), to: '#home' },
  { label: t('nav.features'), to: '#features' },
  { label: t('nav.advantages'), to: '#advantages' },
  { label: t('nav.price'), to: '#price' },
  { label: t('nav.download'), to: '#download' }
])

const HEADER_OFFSET = 80

function scrollToSection(hash: string) {
  const el = document.querySelector(hash)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

const navMenuUi = {
  link: 'text-gray-700 dark:text-gray-200 hover:text-[#5B5FEF] dark:hover:text-[#8B5CF6] font-medium'
}
</script>

<template>
  <UHeader
    :title="title"
    mode="slideover"
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-none',
      'bg-white/90 dark:bg-[#0C0C18]/90 backdrop-blur-xl shadow-sm'
    ]"
    :ui="{
      toggle: 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800',
      body: 'text-gray-700 dark:text-gray-200'
    }"
  >
    <template #left>
      <NuxtLink to="/" :aria-label="title" class="flex items-center shrink-0">
        <AppLogo class="w-auto h-6" />
      </NuxtLink>
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
      :ui="navMenuUi"
      @click="(item: any) => scrollToSection(item.to)"
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
        :items="items"
        orientation="vertical"
        variant="link"
        :ui="navMenuUi"
        class="-mx-2.5"
        @click="(item: any) => scrollToSection(item.to)"
      />
    </template>
  </UHeader>
</template>
