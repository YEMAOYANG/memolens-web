<template>
  <nav class="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="text-xl font-black bg-gradient-primary bg-clip-text text-transparent">
        MemoLens
      </NuxtLink>
      <!-- Links (desktop) -->
      <div class="hidden md:flex items-center gap-8">
        <NuxtLink to="/#features" class="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">功能</NuxtLink>
        <NuxtLink to="/#pricing" class="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">定价</NuxtLink>
        <NuxtLink to="/download" class="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">下载</NuxtLink>
      </div>
      <!-- CTA -->
      <div class="flex items-center gap-3">
        <button class="hidden md:block text-sm text-gray-500 hover:text-gray-900 px-4 py-2 rounded-xl border border-gray-200 hover:border-primary transition-all font-medium">登录</button>
        <NuxtLink to="/download" class="inline-flex items-center gap-2 bg-gradient-primary text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg shadow-primary/30 hover:-translate-y-0.5 transition-all">
          <i class="fa-brands fa-apple text-xs"></i>免费下载
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
