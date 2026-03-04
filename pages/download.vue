<template>
  <div>
    <nav class="bg-dark/95 backdrop-blur-xl border-b border-white/5 px-6">
      <div class="max-w-6xl mx-auto h-16 flex items-center justify-between">
        <NuxtLink to="/" class="text-xl font-black bg-gradient-primary bg-clip-text text-transparent">MemoLens</NuxtLink>
        <NuxtLink to="/" class="text-sm text-white/40 hover:text-white/70 transition-colors">← 返回首页</NuxtLink>
      </div>
    </nav>
    <section class="bg-gradient-hero py-24 text-center">
      <div class="max-w-4xl mx-auto px-6">
        <h1 class="text-5xl font-black text-white mb-4">下载 MemoLens</h1>
        <p class="text-white/50 text-lg mb-14">免费开始，iOS 和 Android 均可使用</p>
        <div class="flex flex-wrap gap-6 justify-center mb-14">
          <div v-for="app in apps" :key="app.name" :class="['rounded-3xl p-9 border cursor-pointer transition-all hover:-translate-y-1 text-center min-w-[240px]', app.disabled ? 'opacity-50 border-white/10 bg-white/3' : 'border-white/10 bg-white/5 hover:border-primary/40 hover:bg-primary/10']">
            <i :class="[app.icon, 'text-5xl block mb-4']" :style="{color: app.color}"></i>
            <div class="text-xl font-bold text-white mb-1">{{ app.name }}</div>
            <div class="text-sm text-white/40 mb-5">{{ app.sub }}</div>
            <button :disabled="app.disabled" class="w-full py-3 rounded-2xl bg-gradient-primary text-white font-semibold disabled:bg-white/10 disabled:text-white/30 transition-all">
              {{ app.btn }}
            </button>
            <div class="text-xs text-white/25 mt-3">{{ app.version }}</div>
          </div>
        </div>
        <!-- QR Codes -->
        <div class="flex justify-center gap-16 pt-10 border-t border-white/7">
          <div v-for="qr in qrs" :key="qr.label" class="text-center">
            <div class="w-28 h-28 bg-white rounded-2xl mx-auto mb-3 flex items-center justify-center">
              <i class="fa-solid fa-qrcode text-6xl text-gray-200"></i>
            </div>
            <div class="text-xs text-white/35">{{ qr.label }}</div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-20 bg-gray-50 text-center">
      <div class="max-w-2xl mx-auto px-6">
        <h2 class="text-3xl font-bold mb-2">系统要求</h2>
        <p class="text-gray-500 mb-10">确保你的设备满足以下要求</p>
        <div class="grid grid-cols-2 gap-4">
          <div v-for="req in reqs" :key="req.label" class="bg-white rounded-2xl p-5 flex items-center gap-4 border border-gray-100 text-left">
            <div :class="['w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0', req.bg]">
              <i :class="[req.icon, req.iconColor, 'text-lg']"></i>
            </div>
            <div><div class="text-xs text-gray-400 mb-0.5">{{ req.label }}</div><div class="font-semibold">{{ req.val }}</div></div>
          </div>
        </div>
      </div>
    </section>
    <AppFooter />
  </div>
</template>
<script setup>
const apps = [
  { name: 'iOS 版', sub: 'iPhone / iPad', icon: 'fa-brands fa-apple', color: 'white', btn: 'App Store 下载', version: 'v1.0.0 · 要求 iOS 16+' },
  { name: 'Android 版', sub: '手机 / 平板', icon: 'fa-brands fa-android', color: '#3DDC84', btn: 'Google Play 下载', version: 'v1.0.0 · 要求 Android 10+' },
  { name: 'Windows 版', sub: '即将推出', icon: 'fa-brands fa-windows', color: '#0078D4', btn: '敬请期待', version: '预计 2026 Q3', disabled: true },
]
const qrs = [{ label: '扫码下载 iOS' }, { label: '扫码下载 Android' }]
const reqs = [
  { label: 'iOS 最低版本', val: 'iOS 16.0+', icon: 'fa-brands fa-apple', iconColor: 'text-primary', bg: 'bg-primary/10' },
  { label: 'Android 最低版本', val: 'Android 10+', icon: 'fa-brands fa-android', iconColor: 'text-green-500', bg: 'bg-green-50' },
  { label: '存储空间', val: '约 80MB', icon: 'fa-solid fa-database', iconColor: 'text-orange-500', bg: 'bg-orange-50' },
  { label: '必需权限', val: '相机、相册', icon: 'fa-solid fa-camera', iconColor: 'text-purple-500', bg: 'bg-purple-50' },
]
useHead({ title: '下载 MemoLens' })
</script>
