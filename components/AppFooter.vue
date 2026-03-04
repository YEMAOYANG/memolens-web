<template>
  <footer class="bg-dark text-white/40 pt-16 pb-8">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex justify-between flex-wrap gap-10 mb-12">
        <div>
          <div class="text-xl font-black bg-gradient-primary bg-clip-text text-transparent mb-3">MemoLens</div>
          <p class="text-sm text-white/30 max-w-xs leading-relaxed">AI 驱动的相机记忆工具<br>让你永不遗忘重要内容</p>
          <div class="flex gap-3 mt-4">
            <a href="#" class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary/30 hover:text-primary-100 transition-all text-sm"><i class="fa-brands fa-weibo"></i></a>
            <a href="#" class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary/30 hover:text-primary-100 transition-all text-sm"><i class="fa-brands fa-twitter"></i></a>
            <a href="#" class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary/30 hover:text-primary-100 transition-all text-sm"><i class="fa-brands fa-github"></i></a>
          </div>
        </div>
        <div class="flex gap-14 flex-wrap">
          <div v-for="col in cols" :key="col.title">
            <h4 class="text-xs font-bold text-white/50 uppercase tracking-wide mb-3">{{ col.title }}</h4>
            <a v-for="link in col.links" :key="link.label" :href="link.href" class="block text-sm text-white/30 hover:text-white/70 mb-2 transition-colors">{{ link.label }}</a>
          </div>
        </div>
      </div>
      <div class="border-t border-white/5 pt-6 flex justify-between flex-wrap gap-3 text-xs">
        <span>© 2026 MemoLens. All rights reserved.</span>
        <span>ICP 备 XXXXXXXX 号</span>
      </div>
    </div>
  </footer>
</template>
<script setup>
const cols = [
  { title: '产品', links: [{ label: '功能介绍', href: '/#features' }, { label: '定价', href: '/#pricing' }, { label: '下载', href: '/download' }, { label: '更新日志', href: '#' }] },
  { title: '公司', links: [{ label: '关于我们', href: '#' }, { label: '博客', href: '#' }, { label: '联系我们', href: '#' }] },
  { title: '法律', links: [{ label: '隐私政策', href: '/privacy' }, { label: '使用条款', href: '/terms' }] },
]
</script>
