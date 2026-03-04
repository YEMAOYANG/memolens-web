<script setup lang="ts">
const { t, tm, rt } = useI18n()

type MsgNode = Parameters<typeof rt>[0]

function isMsgNode(v: unknown): v is MsgNode {
  return typeof v === 'object' && v !== null && 'type' in v && 'body' in v
}

function resolveList<T>(key: string): T[] {
  return (tm(key) as unknown[]).map((item) => {
    if (typeof item === 'string') {
      return item
    }
    if (isMsgNode(item)) {
      return rt(item)
    }
    if (typeof item === 'object' && item !== null) {
      const resolved: Record<string, unknown> = {}
      for (const [k, v] of Object.entries(item)) {
        resolved[k] = isMsgNode(v) ? rt(v) : v
      }
      return resolved
    }
    return item
  }) as T[]
}

const stats = computed(() => resolveList<{ num: string, label: string }>('stats'))

const featureMeta = [
  { icon: 'i-lucide-camera' },
  { icon: 'i-lucide-search' },
  { icon: 'i-lucide-globe' },
  { icon: 'i-lucide-network' },
  { icon: 'i-lucide-share-2' },
  { icon: 'i-lucide-shield-check', dark: true }
]
const featureItems = computed(() =>
  resolveList<{ title: string, desc: string }>('features.items').map((item, i) => ({
    ...item,
    ...featureMeta[i]
  }))
)
const stepImages = ['step-scan.jpg', 'step-ai.jpg', 'step-search.jpg']
const howSteps = computed(() =>
  resolveList<{ num: string, title: string, desc: string }>('how.steps').map((step, i) => ({
    ...step,
    image: stepImages[i] || stepImages[0]
  }))
)
const testimonials = computed(() => resolveList<{ stars: number, text: string, name: string, role: string, avatar: string }>('testimonials.items'))
const pricingFreeFeatures = computed(() => resolveList<string>('pricing.free.features'))
const pricingFreeExcluded = computed(() => resolveList<string>('pricing.free.excluded'))
const pricingProFeatures = computed(() => resolveList<string>('pricing.pro.features'))

useSeoMeta({
  title: () => t('seo.title'),
  description: () => t('seo.description'),
  keywords: () => t('seo.keywords')
})
</script>

<template>
  <div>
    <!-- ========== HERO ========== -->
    <section
      id="home"
      class="hero-section"
    >
      <div class="hero-glow"></div>
      <UContainer>
        <div class="hero-content">
          <div class="hero-eyebrow">
            <UIcon
              name="i-lucide-sparkles"
              class="eyebrow-icon"
            />
            <span>{{ t('hero.badge') }}</span>
          </div>

          <h1 class="hero-title">
            {{ t('hero.titleNormal') }}<span class="hero-title-accent">{{ t('hero.titleAccent') }}</span>
          </h1>

          <p class="hero-desc">
            {{ t('hero.description') }}
          </p>

          <div class="hero-btns">
            <UButton
              to="/download"
              size="xl"
              class="btn-primary-brand"
            >
              <template #leading>
                <UIcon
                  name="i-simple-icons-apple"
                  class="btn-icon"
                />
              </template>
              {{ t('hero.ctaIos') }}
            </UButton>
            <UButton
              to="/download"
              size="xl"
              class="btn-dark-ghost"
            >
              <template #leading>
                <UIcon
                  name="i-simple-icons-googleplay"
                  class="btn-icon"
                />
              </template>
              {{ t('hero.ctaAndroid') }}
            </UButton>
            <UButton
              size="xl"
              class="btn-dark-ghost"
            >
              <template #leading>
                <UIcon
                  name="i-lucide-play"
                  class="btn-play-icon"
                />
              </template>
              {{ t('hero.ctaDemo') }}
            </UButton>
          </div>

          <div class="hero-stats">
            <div
              v-for="s in stats"
              :key="s.num"
              class="stat-item"
            >
              <div class="stat-num">
                {{ s.num }}
              </div>
              <div class="stat-label">
                {{ s.label }}
              </div>
            </div>
          </div>
        </div>

        <!-- 手机展示 -->
        <div class="hero-phones">
          <div class="phone-mockup side-phone">
            <div class="di-small"></div>
            <div class="phone-screen">
              <NuxtImg
                src="hero-phone-left.jpg"
                alt="MemoLens App"
                class="phone-screen-img"
              />
            </div>
          </div>
          <div class="phone-mockup main-phone">
            <div class="di-small"></div>
            <div class="phone-screen">
              <NuxtImg
                src="hero-phone-main.jpg"
                alt="MemoLens App"
                class="phone-screen-img"
              />
            </div>
          </div>
          <div class="phone-mockup side-phone">
            <div class="di-small"></div>
            <div class="phone-screen">
              <NuxtImg
                src="hero-phone-right.jpg"
                alt="MemoLens App"
                class="phone-screen-img"
              />
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- ========== FEATURES ========== -->
    <section
      id="features"
      class="features-section"
    >
      <UContainer>
        <div class="section-eyebrow">
          <span class="tag">
            <UIcon
              name="i-lucide-zap"
              class="tag-icon"
            />
            {{ t('features.eyebrow') }}
          </span>
        </div>
        <h2 class="section-title">
          {{ t('features.title') }}
        </h2>
        <p class="section-desc">
          {{ t('features.subtitle') }}
        </p>

        <div class="features-grid">
          <div
            v-for="(item, i) in featureItems"
            :key="i"
            :class="['feature-card', item.dark ? 'feature-card--dark' : '']"
          >
            <div :class="['feature-icon-wrap', item.dark ? 'feature-icon-wrap--dark' : '']">
              <UIcon
                :name="item.icon"
                class="feature-icon-svg"
              />
            </div>
            <h3 :class="['feature-title', item.dark ? 'feature-title--dark' : '']">
              {{ item.title }}
            </h3>
            <p :class="['feature-desc', item.dark ? 'feature-desc--dark' : '']">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- ========== HOW IT WORKS ========== -->
    <section
      id="how"
      class="how-section"
    >
      <UContainer>
        <div class="section-eyebrow">
          <span class="tag">
            <UIcon
              name="i-lucide-list-ordered"
              class="tag-icon"
            />
            {{ t('how.eyebrow') }}
          </span>
        </div>
        <h2 class="section-title">
          {{ t('how.title') }}
        </h2>
        <p class="section-desc">
          {{ t('how.subtitle') }}
        </p>

        <div class="how-steps">
          <div
            v-for="step in howSteps"
            :key="step.num"
            class="how-step"
          >
            <div class="step-num-wrap">
              <span class="step-num">{{ step.num }}</span>
            </div>
            <NuxtImg
              :src="step.image"
              :alt="step.title"
              class="step-img"
            />
            <h3 class="step-title">
              {{ step.title }}
            </h3>
            <p class="step-desc">
              {{ step.desc }}
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- ========== PRICING ========== -->
    <section
      id="price"
      class="pricing-section"
    >
      <UContainer>
        <div class="section-eyebrow">
          <span class="tag">
            <UIcon
              name="i-lucide-tag"
              class="tag-icon"
            />
            {{ t('pricing.eyebrow') }}
          </span>
        </div>
        <h2 class="section-title">
          {{ t('pricing.title') }}
        </h2>
        <p class="section-desc">
          {{ t('pricing.subtitle') }}
        </p>

        <div class="pricing-grid">
          <!-- 免费版 -->
          <div class="price-card">
            <p class="price-name">
              {{ t('pricing.free.name') }}
            </p>
            <div class="price-amount">
              {{ t('pricing.free.price') }}<span class="price-period">{{ t('pricing.free.period') }}</span>
            </div>
            <ul class="price-features">
              <li
                v-for="f in pricingFreeFeatures"
                :key="f"
                class="price-feature"
              >
                <UIcon
                  name="i-lucide-check"
                  class="feature-check"
                />{{ f }}
              </li>
              <li
                v-for="f in pricingFreeExcluded"
                :key="f"
                class="price-feature price-feature--excluded"
              >
                <UIcon
                  name="i-lucide-circle-x"
                  class="feature-x"
                />{{ f }}
              </li>
            </ul>
            <UButton
              to="/download"
              variant="outline"
              color="primary"
              block
              size="lg"
              class="price-cta-outline"
            >
              {{ t('pricing.free.cta') }}
            </UButton>
          </div>

          <!-- Pro 版 -->
          <div class="price-card price-card--pro">
            <div class="price-glow"></div>
            <span class="price-popular-badge">{{ t('pricing.popular') }}</span>
            <p class="price-name price-name--pro">
              {{ t('pricing.pro.name') }}
            </p>
            <div class="price-amount price-amount--pro">
              {{ t('pricing.pro.price') }}<span class="price-period price-period--pro">{{ t('pricing.pro.period') }}</span>
            </div>
            <p class="price-hint">
              {{ t('pricing.pro.hint') }}
            </p>
            <ul class="price-features">
              <li
                v-for="f in pricingProFeatures"
                :key="f"
                class="price-feature price-feature--pro"
              >
                <UIcon
                  name="i-lucide-check"
                  class="feature-check feature-check--pro"
                />{{ f }}
              </li>
            </ul>
            <UButton
              to="/download"
              block
              size="lg"
              class="btn-primary-brand price-cta"
            >
              {{ t('pricing.pro.cta') }}
            </UButton>
          </div>
        </div>

        <p class="pricing-enterprise">
          {{ t('pricing.enterprise') }}
        </p>
      </UContainer>
    </section>

    <!-- ========== TESTIMONIALS ========== -->
    <section class="testimonials-section">
      <UContainer>
        <div class="section-eyebrow">
          <span class="tag">
            <UIcon
              name="i-lucide-heart"
              class="tag-icon"
            />
            {{ t('testimonials.eyebrow') }}
          </span>
        </div>
        <h2 class="section-title">
          {{ t('testimonials.title') }}
        </h2>

        <div class="testi-grid">
          <div
            v-for="(t_item, i) in testimonials"
            :key="i"
            class="testi-card"
          >
            <div class="testi-stars">
              {{ '★'.repeat(t_item.stars) }}
            </div>
            <p class="testi-text">
              {{ t_item.text }}
            </p>
            <div class="testi-user">
              <img
                :src="t_item.avatar"
                :alt="t_item.name"
                class="testi-avatar"
              />
              <div>
                <div class="testi-name">
                  {{ t_item.name }}
                </div>
                <div class="testi-role">
                  {{ t_item.role }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- ========== CTA DOWNLOAD ========== -->
    <section
      id="download"
      class="cta-section"
    >
      <div class="cta-glow"></div>
      <UContainer>
        <h2 class="cta-title">
          {{ t('cta.title') }}
        </h2>
        <p class="cta-subtitle">
          {{ t('cta.subtitle') }}
        </p>
        <div class="cta-btns">
          <NuxtLink
            to="/download"
            class="store-btn"
          >
            <UIcon
              name="i-simple-icons-apple"
              class="store-icon"
            />
            <div class="store-text">
              <span class="store-sub">Download on the</span>
              <span class="store-name">{{ t('cta.ios') }}</span>
            </div>
          </NuxtLink>
          <NuxtLink
            to="/download"
            class="store-btn"
          >
            <UIcon
              name="i-simple-icons-googleplay"
              class="store-icon"
            />
            <div class="store-text">
              <span class="store-sub">Get it on</span>
              <span class="store-name">{{ t('cta.android') }}</span>
            </div>
          </NuxtLink>
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
  padding: 90px 0 0;
  background: linear-gradient(160deg, #0C0C18 0%, #12121F 50%, #1A0F2E 100%);
  overflow: hidden;
}

.hero-glow {
  position: absolute;
  top: -200px;
  left: 50%;
  transform: translateX(-50%);
  width: 900px;
  height: 900px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba($brand-primary, 0.15) 0%, transparent 70%);
  pointer-events: none;
}

.hero-content {
  text-align: center;
  position: relative;
  z-index: 2;
}

.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba($brand-primary, 0.15);
  border: 1px solid rgba($brand-primary, 0.3);
  padding: 6px 16px;
  border-radius: 20px;
  color: #8B9FFF;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 24px;
}

.eyebrow-icon {
  font-size: 12px;
}

.hero-title {
  font-size: 64px;
  font-weight: 800;
  color: $white;
  line-height: 1.1;
  letter-spacing: -1.5px;
  margin-bottom: 20px;

  @media (max-width: $breakpoint-xl) { font-size: 52px; }
  @media (max-width: $breakpoint-md) { font-size: 38px; }
}

.hero-title-accent {
  background: $brand-gradient;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-desc {
  font-size: 19px;
  color: rgba($white, 0.55);
  max-width: 580px;
  margin: 0 auto 36px;
  line-height: 1.7;

  @media (max-width: $breakpoint-md) {
    font-size: 16px;
  }
}

.hero-btns {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 56px;
}

.btn-primary-brand {
  background: $brand-gradient !important;
  border: none !important;
  border-radius: 12px !important;
  font-weight: 600 !important;
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
  border-radius: 12px !important;
  font-weight: 600 !important;
  color: $white !important;
  @include transition(all);

  &:hover { background: rgba($white, 0.14) !important; }
  :deep(*) { color: $white !important; }
}

.btn-icon {
  font-size: 18px;
}

.btn-play-icon {
  font-size: 12px;
}

.hero-stats {
  display: flex;
  gap: 40px;
  justify-content: center;
  padding: 24px 0;
  border-top: 1px solid rgba($white, 0.07);
  border-bottom: 1px solid rgba($white, 0.07);
  margin: 0 40px 60px;

  @media (max-width: $breakpoint-sm) {
    gap: 20px;
    margin: 0 0 40px;
    flex-wrap: wrap;
  }
}

.stat-item {
  text-align: center;
}

.stat-num {
  font-size: 28px;
  font-weight: 800;
  color: $white;
}

.stat-label {
  font-size: 13px;
  color: rgba($white, 0.4);
  margin-top: 2px;
}

.hero-phones {
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: flex-end;
  padding: 0 40px;

  @media (max-width: $breakpoint-md) {
    padding: 0 20px;
  }
}

.phone-mockup {
  border-radius: 40px;
  background: #1C1C1E;
  padding: 3px;
  box-shadow: $shadow-phone;
  position: relative;
  flex-shrink: 0;
}

.main-phone {
  width: 240px;
  height: 520px;
}

.side-phone {
  width: 200px;
  height: 435px;
  opacity: 0.7;
  transform: scale(0.95);
  margin-bottom: 40px;

  @media (max-width: $breakpoint-md) { display: none; }
}

.phone-screen {
  width: 100%;
  height: 100%;
  border-radius: 37px;
  overflow: hidden;
}

.phone-screen-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.di-small {
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 22px;
  background: #000;
  border-radius: 14px;
  z-index: 10;
}

// ===========================
// 通用 section 样式
// ===========================
.section-eyebrow {
  text-align: center;
  margin-bottom: 16px;
}

.tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  background: rgba($brand-primary, 0.1);
  color: $brand-primary;
}

.tag-icon {
  font-size: 11px;
}

.section-title {
  font-size: 42px;
  font-weight: 800;
  text-align: center;
  letter-spacing: -0.8px;
  margin-bottom: 16px;
  line-height: 1.2;
  color: $text-primary;

  @media (max-width: $breakpoint-md) { font-size: 32px; }
}

.section-desc {
  font-size: 17px;
  color: $text-secondary;
  text-align: center;
  max-width: 520px;
  margin: 0 auto 60px;
  line-height: 1.7;
}

// ===========================
// FEATURES
// ===========================
.features-section {
  padding: $section-y 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: $breakpoint-lg) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: $breakpoint-sm) { grid-template-columns: 1fr; }
}

.feature-card {
  background: $light-bg;
  border-radius: 24px;
  padding: 32px;
  border: 1px solid $light-border;
  @include transition(all);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba($brand-primary, 0.08);
  }

  &--dark {
    background: linear-gradient(135deg, #0C0C18, #1A0F2E);
    border-color: rgba($brand-primary, 0.3);
  }
}

.feature-icon-wrap {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: $brand-gradient;
  @include flex-center;
  margin-bottom: 20px;

  &--dark {
    background: rgba($brand-primary, 0.3);
  }
}

.feature-icon-svg {
  font-size: 22px;
  color: $white;
}

.feature-title {
  font-size: 19px;
  font-weight: 700;
  color: $text-primary;
  margin-bottom: 10px;

  &--dark { color: $white; }
}

.feature-desc {
  font-size: 15px;
  color: $text-secondary;
  line-height: 1.65;

  &--dark { color: rgba($white, 0.5); }
}

// ===========================
// HOW IT WORKS
// ===========================
.how-section {
  padding: $section-y 0;
  background: linear-gradient(135deg, #F8F8FF, #EEF2FF);
}

.how-steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: $breakpoint-md) { grid-template-columns: 1fr; }
}

.how-step {
  text-align: center;
}

.step-num-wrap {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: $brand-gradient;
  @include flex-center;
  margin: 0 auto 20px;
}

.step-num {
  font-size: 20px;
  font-weight: 800;
  color: $white;
}

.step-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.step-title {
  font-size: 18px;
  font-weight: 700;
  color: $text-primary;
  margin-bottom: 8px;
}

.step-desc {
  font-size: 15px;
  color: $text-secondary;
  line-height: 1.6;
}

// ===========================
// PRICING
// ===========================
.pricing-section {
  padding: $section-y 0;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  max-width: 760px;
  margin: 0 auto;

  @media (max-width: $breakpoint-sm) { grid-template-columns: 1fr; }
}

.price-card {
  border-radius: 24px;
  padding: 36px;
  border: 1px solid $light-border;

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
  border-radius: 50%;
  background: radial-gradient(circle, rgba($brand-primary, 0.3), transparent);
}

.price-popular-badge {
  display: inline-block;
  background: $brand-gradient;
  color: $white;
  font-size: 12px;
  font-weight: 700;
  padding: 3px 12px;
  border-radius: 20px;
  margin-bottom: 16px;
}

.price-name {
  font-size: 20px;
  font-weight: 700;
  color: $text-primary;
  margin-bottom: 4px;

  &--pro { color: $white; }
}

.price-amount {
  font-size: 42px;
  font-weight: 800;
  color: $text-primary;
  letter-spacing: -1px;
  margin: 12px 0;

  &--pro { color: $white; }
}

.price-period {
  font-size: 15px;
  font-weight: 400;
  color: $text-secondary;

  &--pro { color: rgba($white, 0.5); }
}

.price-hint {
  font-size: 13px;
  color: rgba($white, 0.35);
  margin-bottom: 16px;
}

.price-features {
  list-style: none;
  padding: 0;
  margin: 20px 0 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.price-feature {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  color: $text-secondary;

  &--pro   { color: rgba($white, 0.85); }
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
  border-radius: 12px !important;
  :deep(*) { color: $white !important; }
}

.price-cta-outline {
  border-radius: 12px !important;
}

.pricing-enterprise {
  text-align: center;
  font-size: 14px;
  color: $text-secondary;
  margin-top: 24px;
}

// ===========================
// TESTIMONIALS
// ===========================
.testimonials-section {
  padding: $section-y 0;
  background: #F5F5FA;
}

.testi-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 60px;

  @media (max-width: $breakpoint-lg) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: $breakpoint-sm) { grid-template-columns: 1fr; }
}

.testi-card {
  background: $white;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
}

.testi-stars {
  color: #F59E0B;
  font-size: 14px;
  margin-bottom: 12px;
}

.testi-text {
  font-size: 15px;
  line-height: 1.7;
  color: $text-primary;
  margin-bottom: 16px;
}

.testi-user {
  display: flex;
  align-items: center;
  gap: 10px;
}

.testi-avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.testi-name {
  font-size: 14px;
  font-weight: 600;
  color: $text-primary;
}

.testi-role {
  font-size: 12px;
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
  border-radius: 50%;
  background: radial-gradient(circle, rgba($brand-primary, 0.2), transparent);
  pointer-events: none;
}

.cta-title {
  font-size: 48px;
  font-weight: 800;
  color: $white;
  margin-bottom: 16px;
  position: relative;
  z-index: 2;
  letter-spacing: -1px;

  @media (max-width: $breakpoint-md) { font-size: 36px; }
}

.cta-subtitle {
  font-size: 18px;
  color: rgba($white, 0.5);
  margin-bottom: 36px;
  position: relative;
  z-index: 2;
}

.cta-btns {
  display: flex;
  gap: 14px;
  justify-content: center;
  position: relative;
  z-index: 2;
  flex-wrap: wrap;
}

.store-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba($white, 0.08);
  border: 1px solid rgba($white, 0.15);
  border-radius: 14px;
  padding: 12px 22px;
  color: $white;
  cursor: pointer;
  text-decoration: none;
  @include transition(all);

  &:hover { background: rgba($white, 0.14); }
}

.store-icon {
  font-size: 28px;
  color: $white;
  flex-shrink: 0;
}

.store-text {
  text-align: left;
  display: flex;
  flex-direction: column;
}

.store-sub {
  font-size: 11px;
  opacity: 0.6;
  color: $white;
}

.store-name {
  font-size: 16px;
  font-weight: 700;
  color: $white;
}
</style>
