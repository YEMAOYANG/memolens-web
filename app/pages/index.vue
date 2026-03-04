<script setup lang="ts">
const { t } = useI18n()

const stats = computed(() => [
  { num: t('stats.quota'), label: t('stats.quotaLabel') },
  { num: t('stats.accuracy'), label: t('stats.accuracyLabel') },
  { num: t('stats.speed'), label: t('stats.speedLabel') },
  { num: t('stats.lang'), label: t('stats.langLabel') }
])

const featureItems = computed(() => [
  { icon: 'gn01.png', title: t('features.items.0.title'), description: t('features.items.0.description'), advantage: t('features.items.0.advantage') },
  { icon: 'gn02.png', title: t('features.items.1.title'), description: t('features.items.1.description'), advantage: t('features.items.1.advantage') },
  { icon: 'gn03.png', title: t('features.items.2.title'), description: t('features.items.2.description'), advantage: t('features.items.2.advantage') }
])

const advantageItems = computed(() => [
  { label: t('advantages.items.0.label'), description: t('advantages.items.0.description') },
  { label: t('advantages.items.1.label'), description: t('advantages.items.1.description') },
  { label: t('advantages.items.2.label'), description: t('advantages.items.2.description') },
  { label: t('advantages.items.3.label'), description: t('advantages.items.3.description') }
])
</script>

<template>
  <div>
    <!-- ===== HERO ===== -->
    <section
      id="home"
      class="min-h-screen flex items-center py-24 relative overflow-hidden"
      style="background: linear-gradient(160deg, #0C0C18 0%, #12121F 50%, #1A0F2E 100%);"
    >
      <!-- 背景光晕 -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-15 pointer-events-none"
        style="background: radial-gradient(circle, #5B5FEF 0%, transparent 70%);" />

      <UContainer>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- 左侧文案 -->
          <div class="space-y-8 text-center lg:text-left">
            <!-- Badge -->
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-[#5B5FEF]/15 border border-[#5B5FEF]/30 rounded-full">
              <div class="w-1.5 h-1.5 rounded-full bg-[#5B5FEF]" />
              <span class="text-[13px] font-semibold text-[#8B9FFF]">{{ t('hero.badge') }}</span>
            </div>

            <!-- 标题 -->
            <h1 class="text-white text-[44px] sm:text-[56px] lg:text-[68px] font-black leading-[1.1] tracking-tight">
              <span class="text-brand-gradient">{{ t('hero.title').split('\n')[0] }}</span><br>
              {{ t('hero.title').split('\n')[1] }}
            </h1>

            <!-- 描述 -->
            <p class="text-white/50 text-[16px] sm:text-[18px] leading-relaxed max-w-xl mx-auto lg:mx-0">
              {{ t('hero.description') }}
            </p>

            <!-- 下载按钮 -->
            <div class="flex flex-wrap gap-4 justify-center lg:justify-start">
              <UButton
                to="#download"
                size="xl"
                class="btn-download rounded-2xl px-8 py-4 text-base"
              >
                <template #leading>
                  <NuxtImg src="apple.png" alt="App Store" class="w-5 h-5" />
                </template>
                {{ t('download.ios') }}
              </UButton>
              <UButton
                to="#download"
                size="xl"
                class="btn-dark rounded-2xl px-7 py-4 text-base"
              >
                <template #leading>
                  <NuxtImg src="android.png" alt="Android" class="w-5 h-5" />
                </template>
                {{ t('download.android') }}
              </UButton>
            </div>
            <p class="text-white/30 text-sm">{{ t('download.guarantee') }}</p>

            <!-- 数据统计 -->
            <div class="grid grid-cols-4 gap-4 pt-4 border-t border-white/8 max-w-lg mx-auto lg:mx-0">
              <div v-for="stat in stats" :key="stat.num" class="text-center">
                <div class="text-xl font-black text-white">{{ stat.num }}</div>
                <div class="text-[11px] text-white/35 mt-1 leading-tight">{{ stat.label }}</div>
              </div>
            </div>
          </div>

          <!-- 右侧手机展示 -->
          <div class="flex justify-center lg:justify-end">
            <div class="relative">
              <!-- 主手机 -->
              <div class="phone-frame main-phone">
                <NuxtImg src="banner.png" :alt="t('common.heroAlt')" class="w-full h-full object-cover rounded-[36px]" />
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- ===== FEATURES ===== -->
    <section id="features" class="py-24 bg-white dark:bg-[#0C0C18]">
      <UContainer>
        <div class="text-center mb-14">
          <UBadge variant="soft" color="primary" class="mb-4 text-xs font-bold px-3 py-1.5">核心能力</UBadge>
          <h2 class="text-[#101828] dark:text-white text-[32px] sm:text-[42px] font-black leading-tight tracking-tight mb-4">
            {{ t('features.title') }}
          </h2>
          <p class="text-gray-500 dark:text-gray-400 text-[16px] max-w-lg mx-auto">
            {{ t('features.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div
            v-for="(item, i) in featureItems"
            :key="i"
            class="bg-gray-50 dark:bg-[#12121F] rounded-3xl p-8 border border-gray-100 dark:border-[#1E1E30] hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
          >
            <div class="w-12 h-12 rounded-2xl mb-5 flex items-center justify-center" style="background: linear-gradient(135deg, #5B5FEF, #8B5CF6)">
              <NuxtImg :src="item.icon" :alt="item.title" class="w-7 h-7 object-contain" />
            </div>
            <h3 class="text-[#101828] dark:text-white text-[19px] font-bold mb-3">{{ item.title }}</h3>
            <p class="text-gray-500 dark:text-gray-400 text-[14px] leading-relaxed mb-3">{{ item.description }}</p>
            <p class="text-[#5B5FEF] text-[13px] font-medium">{{ item.advantage }}</p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- ===== ADVANTAGES ===== -->
    <section id="advantages" class="py-24 bg-gray-50 dark:bg-[#12121F]">
      <UContainer>
        <div class="text-center mb-14">
          <UBadge variant="soft" color="primary" class="mb-4 text-xs font-bold px-3 py-1.5">为什么选择我们</UBadge>
          <h2 class="text-[#101828] dark:text-white text-[32px] sm:text-[42px] font-black tracking-tight mb-4">
            {{ t('advantages.title') }}
          </h2>
          <p class="text-gray-500 dark:text-gray-400 text-[16px]">{{ t('advantages.description') }}</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <div
              v-for="(item, i) in advantageItems"
              :key="i"
              class="flex items-start gap-4"
            >
              <div class="shrink-0 mt-1">
                <NuxtImg src="check.png" alt="✓" class="w-5 h-5" />
              </div>
              <div>
                <h3 class="text-[#101828] dark:text-white text-[18px] font-bold mb-2">{{ item.label }}</h3>
                <p class="text-gray-500 dark:text-gray-400 text-[15px] leading-relaxed">{{ item.description }}</p>
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <NuxtImg src="why.png" :alt="t('common.whyAlt')" class="w-full max-w-[460px] h-auto" />
          </div>
        </div>
      </UContainer>
    </section>

    <!-- ===== PRICING ===== -->
    <section id="price" class="py-24 bg-white dark:bg-[#0C0C18]">
      <UContainer>
        <div class="text-center mb-14">
          <UBadge variant="soft" color="primary" class="mb-4 text-xs font-bold px-3 py-1.5">定价</UBadge>
          <h2 class="text-[#101828] dark:text-white text-[32px] sm:text-[42px] font-black tracking-tight mb-4">
            {{ t('pricing.title') }}
          </h2>
          <p class="text-gray-500 dark:text-gray-400">{{ t('pricing.description') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <!-- 免费版 -->
          <div class="rounded-3xl p-9 border border-gray-100 dark:border-[#1E1E30] bg-white dark:bg-[#12121F]">
            <p class="font-bold text-xl text-[#101828] dark:text-white mb-2">{{ t('pricing.planFree') }}</p>
            <div class="text-5xl font-black text-[#101828] dark:text-white mb-1">
              {{ t('pricing.priceFree') }}<span class="text-lg text-gray-400 font-normal">{{ t('pricing.perMonth') }}</span>
            </div>
            <ul class="space-y-3 my-6">
              <li v-for="f in (t('pricing.freeFeatures') as unknown as string[])" :key="f" class="flex gap-2 items-center text-[14px] text-gray-600 dark:text-gray-300">
                <UIcon name="i-lucide-check" class="text-[#5B5FEF] w-4 h-4 shrink-0" />{{ f }}
              </li>
            </ul>
            <UButton to="#download" variant="outline" color="primary" block size="lg" class="rounded-2xl">{{ t('pricing.ctaFree') }}</UButton>
          </div>

          <!-- Pro 版 -->
          <div class="rounded-3xl p-9 border border-[#5B5FEF]/40 relative overflow-hidden" style="background: linear-gradient(135deg, #0C0C18, #1A0F2E)">
            <div class="absolute top-[-60px] right-[-60px] w-40 h-40 rounded-full opacity-30" style="background: radial-gradient(circle, #5B5FEF, transparent)" />
            <UBadge color="primary" class="mb-4 text-xs font-bold">{{ t('pricing.popular') }}</UBadge>
            <p class="font-bold text-xl text-white mb-2">{{ t('pricing.planPro') }}</p>
            <div class="text-5xl font-black text-white mb-1">
              {{ t('pricing.pricePro') }}<span class="text-lg text-white/40 font-normal">{{ t('pricing.perMonth') }}</span>
            </div>
            <div class="text-xs text-white/30 mb-6">{{ t('pricing.proFirst') }}</div>
            <ul class="space-y-3 my-6">
              <li v-for="f in (t('pricing.proFeatures') as unknown as string[])" :key="f" class="flex gap-2 items-center text-[14px] text-white/80">
                <UIcon name="i-lucide-check" class="text-[#8B9FFF] w-4 h-4 shrink-0" />{{ f }}
              </li>
            </ul>
            <UButton to="#download" block size="lg" class="btn-brand rounded-2xl">{{ t('pricing.ctaPro') }}</UButton>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- ===== DOWNLOAD CTA ===== -->
    <section
      id="download"
      class="py-24 text-center relative overflow-hidden"
      style="background: linear-gradient(160deg, #0C0C18, #1A0F2E)"
    >
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div class="w-[500px] h-[500px] rounded-full opacity-20" style="background: radial-gradient(circle, #5B5FEF, transparent)" />
      </div>
      <UContainer class="relative z-10">
        <h2 class="text-white text-[38px] sm:text-[48px] font-black tracking-tight mb-4">
          {{ t('download.title') }}
        </h2>
        <p class="text-white/40 text-[17px] mb-10">{{ t('download.description') }}</p>
        <div class="flex flex-wrap gap-4 justify-center">
          <UButton to="#" size="xl" class="btn-dark rounded-2xl px-7 py-4">
            <template #leading>
              <UIcon name="i-simple-icons-apple" class="w-7 h-7" />
            </template>
            <div class="text-left">
              <div class="text-[10px] opacity-60">Download on the</div>
              <div class="text-[16px] font-bold">App Store</div>
            </div>
          </UButton>
          <UButton to="#" size="xl" class="btn-dark rounded-2xl px-7 py-4">
            <template #leading>
              <NuxtImg src="google-play.png" alt="Google Play" class="w-7 h-7 object-contain" />
            </template>
            <div class="text-left">
              <div class="text-[10px] opacity-60">Get it on</div>
              <div class="text-[16px] font-bold">Google Play</div>
            </div>
          </UButton>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<style scoped>
.phone-frame {
  background: #1C1C1E;
  border-radius: 44px;
  padding: 4px;
  box-shadow: 0 40px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05);
  overflow: hidden;
}
.main-phone {
  width: 280px;
  height: 560px;
}
</style>
