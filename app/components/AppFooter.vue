<script setup lang="ts">
const { t } = useI18n()

const footerLinks = [
  {
    label: t('footer.product'),
    children: [
      { label: t('nav.features'), to: '#features' },
      { label: t('nav.price'), to: '#price' },
      { label: t('nav.download'), to: '#download' }
    ]
  },
  {
    label: t('footer.legal'),
    children: [
      { label: t('footer.privacyPolicy'), to: '/privacy' },
      { label: t('footer.termsOfService'), to: '/terms' }
    ]
  }
]
</script>

<template>
  <UFooter class="bg-[#0C0C18] border-t border-white/5">
    <template #top>
      <UContainer class="py-12">
        <div class="flex flex-wrap gap-10 justify-between">
          <div>
            <AppLogo class="mb-3 block" />
            <p class="text-sm text-white/30 max-w-xs leading-relaxed">
              {{ t('footer.tagline') }}
            </p>
            <div class="flex gap-3 mt-4">
              <UButton icon="i-simple-icons-weibo" variant="ghost" color="neutral" size="xs" class="text-white/30 hover:text-white/70" to="#" />
              <UButton icon="i-simple-icons-x" variant="ghost" color="neutral" size="xs" class="text-white/30 hover:text-white/70" to="#" />
              <UButton icon="i-simple-icons-github" variant="ghost" color="neutral" size="xs" class="text-white/30 hover:text-white/70" to="#" />
            </div>
          </div>
          <div class="flex gap-14 flex-wrap">
            <div v-for="group in footerLinks" :key="group.label">
              <p class="text-xs font-bold text-white/40 uppercase tracking-wider mb-3">
                {{ group.label }}
              </p>
              <div class="flex flex-col gap-2">
                <NuxtLink
                  v-for="link in group.children"
                  :key="link.label"
                  :to="link.to"
                  class="text-sm text-white/30 hover:text-white/70 transition-colors"
                >
                  {{ link.label }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </template>

    <template #bottom>
      <UContainer>
        <div class="flex justify-between flex-wrap gap-3 text-xs text-white/25 py-4 border-t border-white/5">
          <span>© 2026 MemoLens. {{ t('footer.allRightsReserved') }}</span>
          <span>ICP 备 XXXXXXXX 号</span>
        </div>
      </UContainer>
    </template>
  </UFooter>
</template>
