<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => t('download.seoTitle'),
  description: () => t('download.seoDesc')
})
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="dl-hero">
      <UContainer>
        <h1 class="dl-title">
          {{ t('download.title') }}
        </h1>
        <p class="dl-subtitle">
          {{ t('download.subtitle') }}
        </p>

        <!-- 下载卡片 -->
        <div class="download-cards">
          <div class="dl-card">
            <UIcon
              name="i-simple-icons-apple"
              class="dl-card-icon dl-card-icon--white"
            />
            <div class="dl-card-name">
              {{ t('download.ios.name') }}
            </div>
            <div class="dl-card-sub">
              {{ t('download.ios.sub') }}
            </div>
            <button class="dl-btn">
              {{ t('download.ios.btn') }}
            </button>
            <div class="version-info">
              {{ t('download.ios.version') }}
            </div>
          </div>

          <div class="dl-card">
            <UIcon
              name="i-simple-icons-android"
              class="dl-card-icon dl-card-icon--green"
            />
            <div class="dl-card-name">
              {{ t('download.android.name') }}
            </div>
            <div class="dl-card-sub">
              {{ t('download.android.sub') }}
            </div>
            <button class="dl-btn">
              {{ t('download.android.btn') }}
            </button>
            <div class="version-info">
              {{ t('download.android.version') }}
            </div>
          </div>

          <div class="dl-card dl-card--disabled">
            <UIcon
              name="i-simple-icons-windows"
              class="dl-card-icon dl-card-icon--blue"
            />
            <div class="dl-card-name">
              {{ t('download.windows.name') }}
            </div>
            <div class="dl-card-sub">
              {{ t('download.windows.sub') }}
            </div>
            <button
              class="dl-btn dl-btn--disabled"
              disabled
            >
              {{ t('download.windows.btn') }}
            </button>
            <div class="version-info">
              {{ t('download.windows.version') }}
            </div>
          </div>
        </div>

        <!-- 二维码 -->
        <div class="qr-section">
          <div class="qr-item">
            <div class="qr-box">
              <UIcon
                name="i-lucide-qr-code"
                class="qr-icon"
              />
            </div>
            <div class="qr-label">
              {{ t('download.qr.ios') }}
            </div>
          </div>
          <div class="qr-item">
            <div class="qr-box">
              <UIcon
                name="i-lucide-qr-code"
                class="qr-icon"
              />
            </div>
            <div class="qr-label">
              {{ t('download.qr.android') }}
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 系统要求 -->
    <section class="requirements">
      <UContainer>
        <h2 class="req-title">
          {{ t('download.req.title') }}
        </h2>
        <p class="req-subtitle">
          {{ t('download.req.subtitle') }}
        </p>
        <div class="req-grid">
          <div class="req-item">
            <div class="req-icon req-icon--blue">
              <UIcon name="i-simple-icons-apple" />
            </div>
            <div>
              <div class="req-label">
                {{ t('download.req.iosLabel') }}
              </div>
              <div class="req-val">
                {{ t('download.req.iosVal') }}
              </div>
            </div>
          </div>
          <div class="req-item">
            <div class="req-icon req-icon--green">
              <UIcon name="i-simple-icons-android" />
            </div>
            <div>
              <div class="req-label">
                {{ t('download.req.androidLabel') }}
              </div>
              <div class="req-val">
                {{ t('download.req.androidVal') }}
              </div>
            </div>
          </div>
          <div class="req-item">
            <div class="req-icon req-icon--orange">
              <UIcon name="i-lucide-database" />
            </div>
            <div>
              <div class="req-label">
                {{ t('download.req.storageLabel') }}
              </div>
              <div class="req-val">
                {{ t('download.req.storageVal') }}
              </div>
            </div>
          </div>
          <div class="req-item">
            <div class="req-icon req-icon--purple">
              <UIcon name="i-lucide-camera" />
            </div>
            <div>
              <div class="req-label">
                {{ t('download.req.permLabel') }}
              </div>
              <div class="req-val">
                {{ t('download.req.permVal') }}
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.dl-hero {
  background: linear-gradient(160deg, #0C0C18, #12121F);
  padding: 80px 0;
  text-align: center;
  color: $white;
}

.dl-title {
  font-size: 52px;
  font-weight: 800;
  letter-spacing: -1px;
  margin-bottom: 16px;

  @media (max-width: $breakpoint-md) { font-size: 36px; }
}

.dl-subtitle {
  font-size: 18px;
  color: rgba($white, 0.5);
  margin-bottom: 48px;
}

.download-cards {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 60px;
}

.dl-card {
  background: rgba($white, 0.05);
  border: 1px solid rgba($white, 0.1);
  border-radius: 24px;
  padding: 36px 32px;
  min-width: 260px;
  text-align: center;
  cursor: pointer;
  @include transition(all);

  &:hover {
    background: rgba($brand-primary, 0.15);
    border-color: rgba($brand-primary, 0.4);
    transform: translateY(-4px);
  }

  &--disabled {
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      background: rgba($white, 0.05);
      border-color: rgba($white, 0.1);
      transform: none;
    }
  }
}

.dl-card-icon {
  font-size: 48px;
  margin-bottom: 16px;
  display: block;

  &--white { color: $white; }
  &--green { color: #3DDC84; }
  &--blue  { color: #0078D4; }
}

.dl-card-name {
  font-size: 20px;
  font-weight: 700;
  color: $white;
  margin-bottom: 4px;
}

.dl-card-sub {
  font-size: 13px;
  color: rgba($white, 0.4);
  margin-bottom: 20px;
}

.dl-btn {
  background: $brand-gradient;
  color: $white;
  border: none;
  border-radius: 12px;
  padding: 12px 24px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;

  &--disabled {
    background: rgba($white, 0.1);
    cursor: not-allowed;
  }
}

.version-info {
  font-size: 13px;
  color: rgba($white, 0.3);
  margin-top: 12px;
}

.qr-section {
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 40px 0;
  border-top: 1px solid rgba($white, 0.07);
  flex-wrap: wrap;
}

.qr-item {
  text-align: center;
}

.qr-box {
  width: 120px;
  height: 120px;
  background: $white;
  border-radius: 16px;
  margin: 0 auto 12px;
  @include flex-center;
}

.qr-icon {
  font-size: 60px;
  color: #DDD;
}

.qr-label {
  font-size: 13px;
  color: rgba($white, 0.4);
}

.requirements {
  background: #F5F5FA;
  padding: 60px 0;
  text-align: center;
}

.req-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 8px;
  color: $text-primary;
}

.req-subtitle {
  color: $text-secondary;
  margin-bottom: 32px;
}

.req-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: $breakpoint-sm) { grid-template-columns: 1fr; }
}

.req-item {
  background: $white;
  border-radius: 16px;
  padding: 20px;
  text-align: left;
  display: flex;
  gap: 14px;
  align-items: center;
}

.req-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  @include flex-center;
  flex-shrink: 0;
  font-size: 20px;

  &--blue   { background: #F0F4FF; color: $brand-primary; }
  &--green  { background: #F0FFF4; color: #22C55E; }
  &--orange { background: #FFF7ED; color: #F97316; }
  &--purple { background: #FDF4FF; color: #A855F7; }
}

.req-label {
  font-size: 12px;
  color: $text-secondary;
  margin-bottom: 3px;
}

.req-val {
  font-size: 15px;
  font-weight: 600;
  color: $text-primary;
}
</style>
