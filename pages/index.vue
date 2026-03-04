<template>
  <div>
    <AppNav />

    <!-- HERO -->
    <section class="bg-gradient-hero min-h-screen flex flex-col justify-center overflow-hidden relative pb-0 pt-24">
      <div class="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-radial-gradient-primary opacity-20 pointer-events-none rounded-full"></div>
      <div class="max-w-6xl mx-auto px-6 text-center relative z-10">
        <!-- Eyebrow -->
        <div class="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 px-4 py-1.5 rounded-full text-primary-100 text-xs font-semibold mb-6">
          <i class="fa-solid fa-sparkles text-[10px]"></i>2026 年最值得期待的 AI 工具
        </div>
        <!-- Title -->
        <h1 class="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-5">
          拍一下，<span class="bg-gradient-primary bg-clip-text text-transparent">记住一切</span>
        </h1>
        <p class="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
          用手机摄像头扫描名片、白板、菜单、合同… AI 自动理解归档，用自然语言随时找回。
        </p>
        <!-- CTA Buttons -->
        <div class="flex flex-wrap gap-4 justify-center mb-14">
          <NuxtLink to="/download" class="inline-flex items-center gap-3 bg-gradient-primary text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl shadow-primary/40 hover:-translate-y-1 transition-all">
            <i class="fa-brands fa-apple"></i>App Store 下载
          </NuxtLink>
          <NuxtLink to="/download" class="inline-flex items-center gap-3 bg-white/8 border border-white/12 text-white px-7 py-4 rounded-2xl text-lg font-semibold hover:bg-white/14 transition-all">
            <i class="fa-brands fa-google-play"></i>Google Play
          </NuxtLink>
          <button class="inline-flex items-center gap-2 bg-white/8 border border-white/12 text-white px-6 py-4 rounded-2xl text-base font-semibold hover:bg-white/14 transition-all">
            <i class="fa-solid fa-play text-xs"></i>观看演示
          </button>
        </div>
        <!-- Stats -->
        <div class="flex flex-wrap gap-10 justify-center py-6 border-t border-b border-white/7 mb-16">
          <div v-for="s in stats" :key="s.num" class="text-center">
            <div class="text-3xl font-black text-white">{{ s.num }}</div>
            <div class="text-xs text-white/40 mt-1">{{ s.label }}</div>
          </div>
        </div>
        <!-- Phone Mockups -->
        <div class="flex justify-center items-end gap-5">
          <div class="phone-mockup opacity-70 mb-10" style="width:200px;height:435px">
            <NuxtImg src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=400&h=870&fit=crop" class="w-full h-full object-cover rounded-[35px]" />
          </div>
          <div class="phone-mockup" style="width:240px;height:520px">
            <NuxtImg src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=480&h=1040&fit=crop" class="w-full h-full object-cover rounded-[37px]" />
          </div>
          <div class="phone-mockup opacity-70 mb-10" style="width:200px;height:435px">
            <NuxtImg src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=870&fit=crop" class="w-full h-full object-cover rounded-[35px]" />
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURES -->
    <section id="features" class="py-28">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16">
          <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4"><i class="fa-solid fa-bolt text-[10px]"></i>核心能力</span>
          <h2 class="text-4xl md:text-5xl font-black tracking-tight mb-4">相机 × AI = 完美记忆</h2>
          <p class="text-gray-500 text-lg max-w-lg mx-auto">五大核心功能，打通「拍照→理解→检索」完整闭环</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="f in features" :key="f.title"
            :class="['p-8 rounded-3xl border transition-all hover:-translate-y-1 hover:shadow-xl', f.dark ? 'bg-gradient-hero border-primary/30' : 'bg-gray-50 border-gray-100']">
            <div class="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5">
              <i :class="['text-white text-xl', f.icon]"></i>
            </div>
            <h3 :class="['text-xl font-bold mb-2', f.dark ? 'text-white' : 'text-gray-900']">{{ f.title }}</h3>
            <p :class="['text-sm leading-relaxed', f.dark ? 'text-white/50' : 'text-gray-500']">{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- PRICING -->
    <section id="pricing" class="py-28 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16">
          <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4"><i class="fa-solid fa-tag text-[10px]"></i>定价</span>
          <h2 class="text-4xl font-black tracking-tight mb-4">简单透明的定价</h2>
          <p class="text-gray-500">免费开始，随时升级</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div class="bg-white rounded-3xl p-9 border border-gray-100">
            <p class="font-bold text-xl mb-2">免费版</p>
            <div class="text-5xl font-black mb-1">¥0<span class="text-lg text-gray-400 font-normal">/月</span></div>
            <ul class="space-y-3 my-6 text-sm">
              <li v-for="f in freeFeatures" :key="f.text" class="flex gap-2 items-center" :class="f.ok ? 'text-gray-700' : 'text-gray-300'">
                <i :class="f.ok ? 'fa-solid fa-check text-primary' : 'fa-regular fa-circle-xmark'" class="text-xs w-4"></i>{{ f.text }}
              </li>
            </ul>
            <NuxtLink to="/download" class="block text-center py-3 rounded-2xl border-2 border-primary/30 text-primary font-semibold hover:bg-primary/5 transition-all">免费下载</NuxtLink>
          </div>
          <div class="bg-gradient-hero rounded-3xl p-9 border border-primary/40 relative overflow-hidden">
            <div class="absolute top-[-80px] right-[-80px] w-48 h-48 bg-primary/30 rounded-full blur-3xl"></div>
            <span class="inline-block bg-gradient-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-4">最受欢迎</span>
            <p class="font-bold text-xl text-white mb-2">Pro 版</p>
            <div class="text-5xl font-black text-white mb-1">¥28<span class="text-lg text-white/40 font-normal">/月</span></div>
            <div class="text-xs text-white/30 mb-6">首月仅 ¥9.9</div>
            <ul class="space-y-3 my-6 text-sm">
              <li v-for="f in proFeatures" :key="f" class="flex gap-2 items-center text-white/80">
                <i class="fa-solid fa-check text-primary-100 text-xs w-4"></i>{{ f }}
              </li>
            </ul>
            <NuxtLink to="/download" class="block text-center py-3 rounded-2xl bg-gradient-primary text-white font-bold hover:-translate-y-0.5 transition-all shadow-lg shadow-primary/30">立即升级 →</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-gradient-hero py-28 text-center relative overflow-hidden">
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div class="w-[600px] h-[600px] rounded-full bg-primary/20 blur-3xl"></div>
      </div>
      <div class="relative z-10 max-w-3xl mx-auto px-6">
        <h2 class="text-5xl font-black text-white mb-4 tracking-tight">开始你的第二大脑</h2>
        <p class="text-white/40 text-lg mb-10">免费下载，200 张/月额度，无需信用卡</p>
        <div class="flex gap-4 justify-center flex-wrap">
          <NuxtLink to="/download" class="inline-flex items-center gap-3 bg-white/8 border border-white/15 text-white rounded-2xl px-6 py-4 hover:bg-white/14 transition-all">
            <i class="fa-brands fa-apple text-3xl"></i>
            <div class="text-left"><div class="text-xs opacity-60">Download on the</div><div class="text-lg font-bold">App Store</div></div>
          </NuxtLink>
          <NuxtLink to="/download" class="inline-flex items-center gap-3 bg-white/8 border border-white/15 text-white rounded-2xl px-6 py-4 hover:bg-white/14 transition-all">
            <i class="fa-brands fa-google-play text-2xl"></i>
            <div class="text-left"><div class="text-xs opacity-60">Get it on</div><div class="text-lg font-bold">Google Play</div></div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
const stats = [
  { num: '200张', label: '免费额度/月' },
  { num: '96%+', label: 'AI 识别准确率' },
  { num: '<3s', label: '归档响应速度' },
  { num: '中英日', label: '多语言支持' },
]
const features = [
  { icon: 'fa-solid fa-camera', title: '扫一扫存入脑', desc: '拍照即触发 OCR + 多模态 AI 理解，自动打标签归档。支持名片、白板、文件、菜单、票据。' },
  { icon: 'fa-solid fa-magnifying-glass', title: '自然语言检索', desc: '直接问「上周那张白板写了什么？」AI 秒级回答，附带原图来源，告别翻找相册。' },
  { icon: 'fa-solid fa-globe', title: '跨语言理解', desc: '英文菜单、日文标识、中文合同，自动互译存储，海内外场景全通吃。' },
  { icon: 'fa-solid fa-diagram-project', title: '知识关联图谱', desc: 'AI 自动发现你记录之间的隐藏联系，将零散信息织成知识网络。' },
  { icon: 'fa-solid fa-share-nodes', title: '一键导出分享', desc: '转为飞书文档、Notion 页面、PDF，或直接分享给同事。知识不再孤立。' },
  { icon: 'fa-solid fa-shield-halved', title: '隐私优先设计', desc: '本地 OCR 处理，可选端侧存储，数据主权完全在你手中。国内/海外双架构合规。', dark: true },
]
const freeFeatures = [
  { text: '200 张/月归档额度', ok: true }, { text: '基础 AI 问答', ok: true },
  { text: '中英文识别', ok: true }, { text: '30 天历史记录', ok: true },
  { text: '高级 AI 分析', ok: false }, { text: '无限存储', ok: false },
]
const proFeatures = ['无限归档额度', '高级 AI 问答（GPT-4o）', '中英日韩等 10 语言', '无限历史记录', '知识关联图谱', '导出飞书/Notion/PDF']

useHead({ title: 'MemoLens — 拍一下，记住一切' })
useSeoMeta({ description: '用手机摄像头扫描名片、白板、文件，AI 自动归档，随时自然语言找回。' })
</script>

<style scoped>
.phone-mockup {
  background: #1C1C1E;
  border-radius: 40px;
  padding: 3px;
  box-shadow: 0 40px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05);
  overflow: hidden;
}
</style>
