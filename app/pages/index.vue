<script setup lang="ts">
const { t, tm } = useI18n()

const stats         = computed(() => tm('stats') as Array<{ num: string; label: string }>)
const featureItems  = computed(() => tm('features.items') as Array<{ icon: string; title: string; desc: string; dark?: boolean }>)
const howSteps      = computed(() => tm('how.steps') as Array<{ num: string; title: string; desc: string }>)
const testimonials  = computed(() => tm('testimonials.items') as Array<{ stars: number; text: string; name: string; role: string; avatar: string }>)

useSeoMeta({
  title:       () => t('seo.title'),
  description: () => t('seo.description'),
  keywords:    () => t('seo.keywords')
})
</script>

<template>
  <div>

    <!-- ========== HERO ========== -->
    <section id="home" class="hero-section">
      <div class="hero-glow" />
      <UContainer>
        <div class="hero-inner">
          <!-- 左侧文案 -->
          <div class="hero-content">
            <div class="hero-badge">
              <span class="badge-dot" />
              <span>{{ t('hero.badge') }}</span>
            </div>

            <h1 class="hero-title">
              <span class="hero-title-accent">{{ t('hero.titleAccent') }}</span>{{ t('hero.titleNormal') }}
            </h1>

            <p class="hero-desc">{{ t('hero.description') }}</p>

            <div class="hero-btns">
              <UButton to="#download" size="xl" class="btn-primary-brand">
                <template #leading>
                  <NuxtImg src="apple.png" alt="iOS" class="btn-store-icon" />
                </template>
                {{ t('hero.ctaIos') }}
              </UButton>
              <UButton to="#download" size="xl" class="btn-dark-ghost">
                <template #leading>
                  <NuxtImg src="android.png" alt="Android" class="btn-store-icon" />
                </template>
                {{ t('hero.ctaAndroid') }}
              </UButton>
              <UButton size="xl" class="btn-dark-ghost">
                <template #leading>
                  <UIcon name="i-lucide-play" class="btn-play-icon" />
                </template>
                {{ t('hero.ctaDemo') }}
              </UButton>
            </div>

            <p class="hero-guarantee">{{ t('hero.guarantee') }}</p>

            <!-- 统计数字 -->
            <div class="hero-stats">
              <div v-for="s in stats" :key="s.num" class="stat-item">
                <div class="stat-num">{{ s.num }}</div>
                <div class="stat-label">{{ s.label }}</div>
              </div>
            </div>
          </div>

          <!-- 右侧手机 -->
          <div class="hero-phones">
            <div class="phone-wrap side-phone">
              <NuxtImg
                src="banner.png"
                alt="MemoLens App - 搜索页"
                class="phone-screen-img"
              />
            </div>
            <div class="phone-wrap main-phone">
              <NuxtImg
                src="banner.png"
                alt="MemoLens App - 首页"
                class="phone-screen-img"
              />
            </div>
            <div class="phone-wrap side-phone">
              <NuxtImg
                src="banner.png"
                alt="MemoLens App - 相册"
                class="phone-screen-img"
              />
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- ========== FEATURES ========== -->
    <section id="features" class="features-section">
      <UContainer>
        <div class="section-header">
          <span class="eyebrow">{{ t('features.eyebrow') }}</span>
          <h2 class="section-title dark-title">{{ t('features.title') }}</h2>
          <p class="section-subtitle dark-subtitle">{{ t('features.subtitle') }}</p>
        </div>

        <div class="features-grid">
          <div
            v-for="(item, i) in featureItems"
            :key="i"
            :class="['feature-card', item.dark ? 'feature-card--dark' : '']"
          >
            <div class="feature-icon-wrap">
              <NuxtImg :src="item.icon" :alt="item.title" class="feature-icon-img" />
            </div>
            <h3 :class="['feature-card-title', item.dark ? 'feature-card-title--dark' : '']">
              {{ item.title }}
            </h3>
            <p :class="['feature-card-desc', item.dark ? 'feature-card-desc--dark' : '']">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- ========== HOW IT WORKS ========== -->
    <section id="how" class="how-section">
      <UContainer>
        <div class="section-header">
          <span class="eyebrow">{{ t('how.eyebrow') }}</span>
          <h2 class="section-title">{{ t('how.title') }}</h2>
          <p class="section-subtitle">{{ t('how.subtitle') }}</p>
        </div>

        <div class="how-steps">
          <div v-for="(step, i) in howSteps" :key="step.num" class="how-step">
            <div class="step-num-wrap">
              <span class="step-num">{{ step.num }}</span>
            </div>
            <NuxtImg src="banner.png" :alt="step.title" class="step-img" />
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-desc">{{ step.desc }}</p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- ========== PRICING ========== -->
    <section id="price" class="pricing-section">
      <UContainer>
        <div class="section-header">
          <span class="eyebrow">{{ t('pricing.eyebrow') }}</span>
          <h2 class="section-title dark-title">{{ t('pricing.title') }}</h2>
          <p class="section-subtitle dark-subtitle">{{ t('pricing.subtitle') }}</p>
        </div>

        <div class="pricing-grid">
          <!-- 免费版 -->
          <div class="price-card">
            <p class="price-name">{{ t('pricing.free.name') }}</p>
            <div class="price-amount">
              {{ t('pricing.free.price') }}<span class="price-period">{{ t('pricing.free.period') }}</span>
            </div>
            <ul class="price-features">
              <li v-for="f in (t('pricing.free.features') as unknown as string[])" :key="f" class="price-feature">
                <UIcon name="i-lucide-check" class="feature-check" />{{ f }}
              </li>
              <li v-for="f in (t('pricing.free.excluded') as unknown as string[])" :key="f" class="price-feature price-feature--excluded">
                <UIcon name="i-lucide-x" class="feature-x" />{{ f }}
              </li>
            </ul>
            <UButton to="#download" variant="outline" color="primary" block size="lg" class="price-cta-outline">
              {{ t('pricing.free.cta') }}
            </UButton>
          </div>

          <!-- Pro 版 -->
          <div class="price-card price-card--pro">
            <div class="price-glow" />
            <span class="price-popular-badge">{{ t('pricing.popular') }}</span>
            <p class="price-name price-name--pro">{{ t('pricing.pro.name') }}</p>
            <div class="price-amount price-amount--pro">
              {{ t('pricing.pro.price') }}<span class="price-period price-period--pro">{{ t('pricing.pro.period') }}</span>
            </div>
            <p class="price-hint">{{ t('pricing.pro.hint') }}</p>
            <ul class="price-features">
              <li v-for="f in (t('pricing.pro.features') as unknown as string[])" :key="f" class="price-feature price-feature--pro">
                <UIcon name="i-lucide-check" class="feature-check feature-check--pro" />{{ f }}
              </li>
            </ul>
            <UButton to="#download" block size="lg" class="btn-primary-brand price-cta">
              {{ t('pricing.pro.cta') }}
            </UButton>
          </div>
        </div>

        <p class="pricing-enterprise">{{ t('pricing.enterprise') }}</p>
      </UContainer>
    </section>

    <!-- ========== TESTIMONIALS ========== -->
    <section class="testimonials-section">
      <UContainer>
        <div class="section-header">
          <span class="eyebrow">{{ t('testimonials.eyebrow') }}</span>
          <h2 class="section-title">{{ t('testimonials.title') }}</h2>
        </div>

        <div class="testi-grid">
          <div v-for="(t_item, i) in testimonials" :key="i" class="testi-card">
            <div class="testi-stars">
              <UIcon v-for="s in t_item.stars" :key="s" name="i-lucide-star" class="star-icon" />
            </div>
            <p class="testi-text">{{ t_item.text }}</p>
            <div class="testi-user">
              <NuxtImg :src="t_item.avatar" :alt="t_item.name" class="testi-avatar" />
              <div>
                <div class="testi-name">{{ t_item.name }}</div>
                <div class="testi-role">{{ t_item.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- ========== CTA DOWNLOAD ========== -->
    <section id="download" class="cta-section">
      <div class="cta-glow" />
      <UContainer>
        <h2 class="cta-title">{{ t('cta.title') }}</h2>
        <p class="cta-subtitle">{{ t('cta.subtitle') }}</p>
        <div class="cta-btns">
          <div class="store-btn">
            <UIcon name="i-simple-icons-apple" class="store-icon" />
            <div class="store-text">
              <span class="store-sub">Download on the</span>
              <span class="store-name">{{ t('cta.ios') }}</span>
            </div>
          </div>
          <div class="store-btn">
            <NuxtImg src="google-play.png" alt="Google Play" class="store-icon-img" />
            <div class="store-text">
              <span class="store-sub">Get it on</span>
              <span class="store-name">{{ t('cta.android') }}</span>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

  </div>
</template>

<style lang="scss" scoped>
// ===========================
// HERO
// ===========================
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 0 0;
  background: linear-gradient(160deg, #0C0C18 0%, #12121F 50%, #1A0F2E 100%);
  overflow: hidden;
}

.hero-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 900px;
  height: 900px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba($brand-primary, 0.15) 0%, transparent 70%);
  pointer-events: none;
}

.hero-inner {
  @include flex(row, center, space-between);
  gap: $spacing-3xl;

  @media (max-width: $breakpoint-lg) {
    flex-direction: column;
    text-align: center;
  }
}

.hero-content {
  flex: 1;
  max-width: 580px;

  @media (max-width: $breakpoint-lg) {
    max-width: 100%;
  }
}

.hero-badge {
  @include flex(row, center, flex-start);
  display: inline-flex;
  gap: $spacing-sm;
  padding: 6px 16px;
  background: rgba($brand-primary, 0.15);
  border: 1px solid rgba($brand-primary, 0.3);
  border-radius: $radius-full;
  margin-bottom: $spacing-xl;
  font-size: $text-xs;
  font-weight: $font-semibold;
  color: #8B9FFF;

  @media (max-width: $breakpoint-lg) {
    justify-content: center;
  }
}

.badge-dot {
  width: 6px;
  height: 6px;
  border-radius: $radius-full;
  background: $brand-primary;
  flex-shrink: 0;
}

.hero-title {
  font-size: $text-hero;
  font-weight: $font-black;
  color: $white;
  line-height: 1.08;
  letter-spacing: -0.03em;
  margin-bottom: $spacing-lg;

  @media (max-width: $breakpoint-xl) { font-size: $text-5xl; }
  @media (max-width: $breakpoint-md) { font-size: $text-4xl; }
}

.hero-title-accent {
  background: $brand-gradient;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-desc {
  font-size: $text-lg;
  color: rgba($white, 0.55);
  line-height: 1.7;
  margin-bottom: $spacing-2xl;

  @media (max-width: $breakpoint-lg) {
    font-size: $text-base;
    max-width: 520px;
    margin-left: auto;
    margin-right: auto;
  }
}

.hero-btns {
  @include flex(row, center, flex-start);
  flex-wrap: wrap;
  gap: $spacing-md;
  margin-bottom: $spacing-md;

  @media (max-width: $breakpoint-lg) { justify-content: center; }
}

.btn-primary-brand {
  background: $brand-gradient !important;
  border: none !important;
  border-radius: $radius-xl !important;
  font-weight: $font-semibold !important;
  color: $white !important;
  box-shadow: $shadow-brand !important;
  @include transition(all);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba($brand-primary, 0.45) !important;
  }

  :deep(*) { color: $white !important; }
}

.btn-dark-ghost {
  background: rgba($white, 0.08) !important;
  border: 1px solid rgba($white, 0.12) !important;
  border-radius: $radius-xl !important;
  font-weight: $font-semibold !important;
  color: $white !important;
  @include transition(all);

  &:hover { background: rgba($white, 0.14) !important; }
  :deep(*) { color: $white !important; }
}

.btn-store-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.btn-play-icon {
  font-size: 12px;
}

.hero-guarantee {
  font-size: $text-xs;
  color: rgba($white, 0.3);
  margin-bottom: $spacing-2xl;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: $spacing-lg;
  padding: $spacing-xl 0;
  border-top: 1px solid rgba($white, 0.07);

  @media (max-width: $breakpoint-sm) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.stat-item {
  text-align: center;
}

.stat-num {
  font-size: $text-2xl;
  font-weight: $font-black;
  color: $white;
}

.stat-label {
  font-size: $text-xs;
  color: rgba($white, 0.4);
  margin-top: 2px;
  line-height: 1.4;
}

.hero-phones {
  @include flex(row, flex-end, center);
  gap: $spacing-lg;
  padding-bottom: 0;
  flex-shrink: 0;

  @media (max-width: $breakpoint-lg) {
    justify-content: center;
  }
}

.phone-wrap {
  background: #1C1C1E;
  padding: 3px;
  box-shadow: $shadow-phone;
  overflow: hidden;
  flex-shrink: 0;
}

.main-phone {
  width: 240px;
  height: 520px;
  border-radius: 40px;
}

.side-phone {
  width: 200px;
  height: 435px;
  border-radius: 35px;
  opacity: 0.7;
  margin-bottom: 40px;

  @media (max-width: $breakpoint-md) { display: none; }
}

.phone-screen-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

// ===========================
// 通用 section 样式
// ===========================
.section-header {
  text-align: center;
  margin-bottom: $spacing-4xl;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 14px;
  border-radius: $radius-full;
  background: rgba($brand-primary, 0.1);
  color: $brand-primary;
  font-size: $text-xs;
  font-weight: $font-bold;
  margin-bottom: $spacing-md;
}

.section-title {
  font-size: $text-4xl;
  font-weight: $font-black;
  color: $text-primary;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-bottom: $spacing-md;

  @media (max-width: $breakpoint-md) { font-size: $text-3xl; }
}

.dark-title { color: $white; }

.section-subtitle {
  font-size: $text-lg;
  color: $text-secondary;
  max-width: 520px;
  margin: 0 auto;
  line-height: 1.7;
}

.dark-subtitle { color: rgba($white, 0.5); }

// ===========================
// FEATURES
// ===========================
.features-section {
  padding: $section-y 0;
  background: $dark-bg;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $spacing-lg;

  @media (max-width: $breakpoint-lg) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: $breakpoint-sm) { grid-template-columns: 1fr; }
}

.feature-card {
  background: $dark-surface;
  border-radius: $radius-3xl;
  padding: $spacing-2xl;
  border: 1px solid $dark-border;
  @include hover-lift;

  &--dark {
    background: linear-gradient(135deg, #0C0C18, #1A0F2E);
    border-color: rgba($brand-primary, 0.3);
  }
}

.feature-icon-wrap {
  width: 52px;
  height: 52px;
  border-radius: $radius-xl;
  background: $brand-gradient;
  @include flex-center;
  margin-bottom: $spacing-lg;
}

.feature-icon-img {
  width: 28px;
  height: 28px;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.feature-card-title {
  font-size: $text-xl;
  font-weight: $font-bold;
  color: $dark-text;
  margin-bottom: $spacing-sm;

  &--dark { color: $white; }
}

.feature-card-desc {
  font-size: $text-sm;
  color: rgba($white, 0.45);
  line-height: 1.65;

  &--dark { color: rgba($white, 0.45); }
}

// ===========================
// HOW IT WORKS
// ===========================
.how-section {
  padding: $section-y 0;
  background: linear-gradient(135deg, $light-bg, #EEF2FF);
}

.how-steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $spacing-2xl;

  @media (max-width: $breakpoint-md) { grid-template-columns: 1fr; }
}

.how-step {
  text-align: center;
}

.step-num-wrap {
  width: 48px;
  height: 48px;
  border-radius: $radius-full;
  background: $brand-gradient;
  @include flex-center;
  margin: 0 auto $spacing-lg;
}

.step-num {
  font-size: $text-lg;
  font-weight: $font-black;
  color: $white;
}

.step-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: $radius-xl;
  margin-bottom: $spacing-lg;
  box-shadow: $shadow-lg;
}

.step-title {
  font-size: $text-xl;
  font-weight: $font-bold;
  color: $text-primary;
  margin-bottom: $spacing-sm;
}

.step-desc {
  font-size: $text-sm;
  color: $text-secondary;
  line-height: 1.65;
}

// ===========================
// PRICING
// ===========================
.pricing-section {
  padding: $section-y 0;
  background: $dark-bg;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: $spacing-lg;
  max-width: 760px;
  margin: 0 auto;

  @media (max-width: $breakpoint-sm) { grid-template-columns: 1fr; }
}

.price-card {
  border-radius: $radius-3xl;
  padding: $spacing-3xl;
  border: 1px solid $light-border;
  background: $light-surface;

  &--pro {
    background: linear-gradient(135deg, #0C0C18, #1A0F2E);
    border-color: rgba($brand-primary, 0.4);
    position: relative;
    overflow: hidden;
  }
}

.price-glow {
  position: absolute;
  top: -80px;
  right: -80px;
  width: 200px;
  height: 200px;
  border-radius: $radius-full;
  background: radial-gradient(circle, rgba($brand-primary, 0.3), transparent);
}

.price-popular-badge {
  display: inline-block;
  background: $brand-gradient;
  color: $white;
  font-size: $text-xs;
  font-weight: $font-bold;
  padding: 3px 12px;
  border-radius: $radius-full;
  margin-bottom: $spacing-md;
}

.price-name {
  font-size: $text-xl;
  font-weight: $font-bold;
  color: $text-primary;
  margin-bottom: 4px;

  &--pro { color: $white; }
}

.price-amount {
  font-size: 42px;
  font-weight: $font-black;
  color: $text-primary;
  letter-spacing: -0.03em;
  margin: $spacing-sm 0;

  &--pro { color: $white; }
}

.price-period {
  font-size: $text-base;
  font-weight: $font-normal;
  color: $text-secondary;

  &--pro { color: rgba($white, 0.45); }
}

.price-hint {
  font-size: $text-sm;
  color: rgba($white, 0.35);
  margin-bottom: $spacing-md;
}

.price-features {
  list-style: none;
  padding: 0;
  margin: $spacing-lg 0 $spacing-xl;
  display: flex;
  flex-direction: column;
  gap: $spacing-sm;
}

.price-feature {
  @include flex(row, center, flex-start);
  gap: $spacing-sm;
  font-size: $text-sm;
  color: $text-secondary;

  &--pro   { color: rgba($white, 0.8); }
  &--excluded { color: $text-tertiary; }
}

.feature-check {
  color: $brand-primary;
  width: 14px;
  height: 14px;
  flex-shrink: 0;

  &--pro { color: #8B9FFF; }
}

.feature-x {
  color: $text-tertiary;
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}

.price-cta {
  border-radius: $radius-xl !important;
  :deep(*) { color: $white !important; }
}

.price-cta-outline {
  border-radius: $radius-xl !important;
}

.pricing-enterprise {
  text-align: center;
  font-size: $text-sm;
  color: $dark-text-sub;
  margin-top: $spacing-xl;
}

// ===========================
// TESTIMONIALS
// ===========================
.testimonials-section {
  padding: $section-y 0;
  background: $light-bg;
}

.testi-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $spacing-lg;

  @media (max-width: $breakpoint-lg) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: $breakpoint-sm) { grid-template-columns: 1fr; }
}

.testi-card {
  background: $light-surface;
  border-radius: $radius-2xl;
  padding: $spacing-xl;
  box-shadow: $shadow-md;
}

.testi-stars {
  @include flex(row, center, flex-start);
  gap: 2px;
  margin-bottom: $spacing-sm;
}

.star-icon {
  color: $warning;
  width: 14px;
  height: 14px;
}

.testi-text {
  font-size: $text-sm;
  color: $text-primary;
  line-height: 1.7;
  margin-bottom: $spacing-md;
}

.testi-user {
  @include flex(row, center, flex-start);
  gap: $spacing-sm;
}

.testi-avatar {
  width: 38px;
  height: 38px;
  border-radius: $radius-full;
  object-fit: cover;
  flex-shrink: 0;
}

.testi-name {
  font-size: $text-sm;
  font-weight: $font-semibold;
  color: $text-primary;
}

.testi-role {
  font-size: $text-xs;
  color: $text-secondary;
}

// ===========================
// CTA DOWNLOAD
// ===========================
.cta-section {
  padding: $section-y 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #0C0C18, #1A0F2E);
}

.cta-glow {
  @include absolute-center;
  width: 600px;
  height: 600px;
  border-radius: $radius-full;
  background: radial-gradient(circle, rgba($brand-primary, 0.2), transparent);
  pointer-events: none;
}

.cta-title {
  font-size: $text-5xl;
  font-weight: $font-black;
  color: $white;
  letter-spacing: -0.03em;
  margin-bottom: $spacing-md;
  position: relative;
  z-index: 1;

  @media (max-width: $breakpoint-md) { font-size: $text-4xl; }
}

.cta-subtitle {
  font-size: $text-lg;
  color: rgba($white, 0.45);
  margin-bottom: $spacing-3xl;
  position: relative;
  z-index: 1;
}

.cta-btns {
  @include flex(row, center, center);
  flex-wrap: wrap;
  gap: $spacing-md;
  position: relative;
  z-index: 1;
}

.store-btn {
  @include flex(row, center, flex-start);
  gap: $spacing-sm;
  background: rgba($white, 0.08);
  border: 1px solid rgba($white, 0.15);
  border-radius: $radius-xl;
  padding: $spacing-sm $spacing-lg;
  cursor: pointer;
  @include transition(all);

  &:hover { background: rgba($white, 0.14); }
}

.store-icon {
  font-size: 28px;
  color: $white;
  flex-shrink: 0;
}

.store-icon-img {
  width: 28px;
  height: 28px;
  object-fit: contain;
  flex-shrink: 0;
}

.store-text {
  @include flex(column, flex-start, flex-start);
}

.store-sub {
  font-size: 11px;
  color: rgba($white, 0.5);
}

.store-name {
  font-size: $text-lg;
  font-weight: $font-bold;
  color: $white;
}
</style>
