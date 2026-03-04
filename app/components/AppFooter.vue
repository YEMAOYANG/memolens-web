<script setup lang="ts">
const { t } = useI18n()

const links = computed(() => [
  {
    label: t('footer.product'),
    children: [
      { label: t('nav.features'), to: '#features' },
      { label: t('nav.price'),    to: '#price' },
      { label: t('nav.download'), to: '#download' }
    ]
  },
  {
    label: t('footer.legal'),
    children: [
      { label: t('footer.privacy'), to: '/privacy' },
      { label: t('footer.terms'),   to: '/terms' }
    ]
  },
  {
    label: t('footer.contact'),
    children: [
      { label: 'hello@memolens.app', to: 'mailto:hello@memolens.app' },
      { label: t('footer.blog'),     to: '#' }
    ]
  }
])
</script>

<template>
  <footer class="site-footer">
    <UContainer>
      <div class="footer-top">
        <!-- 品牌 -->
        <div class="footer-brand">
          <AppLogo class="mb-3" />
          <p class="footer-tagline">{{ t('footer.tagline') }}</p>
          <div class="footer-socials">
            <UButton icon="i-simple-icons-weibo"  variant="ghost" color="neutral" size="xs" to="#" class="social-btn" />
            <UButton icon="i-simple-icons-x"      variant="ghost" color="neutral" size="xs" to="#" class="social-btn" />
            <UButton icon="i-simple-icons-github" variant="ghost" color="neutral" size="xs" to="#" class="social-btn" />
          </div>
        </div>

        <!-- 链接组 -->
        <div class="footer-links">
          <div v-for="group in links" :key="group.label" class="footer-link-group">
            <p class="footer-link-title">{{ group.label }}</p>
            <NuxtLink
              v-for="link in group.children"
              :key="link.label"
              :to="link.to"
              class="footer-link"
            >
              {{ link.label }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© 2026 MemoLens. {{ t('footer.rights') }}</span>
        <span>ICP 备 XXXXXXXX 号</span>
      </div>
    </UContainer>
  </footer>
</template>

<style lang="scss" scoped>
.site-footer {
  background: $dark-bg;
  padding-top: $spacing-4xl;
  padding-bottom: $spacing-xl;
  border-top: 1px solid rgba($white, 0.05);
}

.footer-top {
  @include flex(row, flex-start, space-between);
  flex-wrap: wrap;
  gap: $spacing-3xl;
  margin-bottom: $spacing-3xl;
}

.footer-brand {
  max-width: 240px;
}

.footer-tagline {
  font-size: $text-sm;
  line-height: 1.65;
  color: $dark-text-muted;
  white-space: pre-line;
}

.footer-socials {
  @include flex(row, center, flex-start);
  gap: $spacing-sm;
  margin-top: $spacing-md;
}

:deep(.social-btn) {
  width: 32px;
  height: 32px;
  border-radius: $radius-sm;
  background: rgba($white, 0.05);
  color: rgba($white, 0.35);

  &:hover {
    background: rgba($brand-primary, 0.25);
    color: #8B9FFF;
  }
}

.footer-links {
  @include flex(row, flex-start, flex-start);
  flex-wrap: wrap;
  gap: $spacing-3xl;
}

.footer-link-group {
  @include flex(column, flex-start, flex-start);
  gap: $spacing-sm;
}

.footer-link-title {
  font-size: $text-xs;
  font-weight: $font-bold;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: rgba($white, 0.35);
  margin-bottom: $spacing-sm;
}

.footer-link {
  font-size: $text-sm;
  color: $dark-text-muted;
  text-decoration: none;
  transition: color $transition-base;

  &:hover {
    color: rgba($white, 0.7);
  }
}

.footer-bottom {
  @include flex(row, center, space-between);
  flex-wrap: wrap;
  gap: $spacing-sm;
  padding-top: $spacing-lg;
  border-top: 1px solid rgba($white, 0.05);
  font-size: $text-xs;
  color: $dark-text-muted;
}
</style>
