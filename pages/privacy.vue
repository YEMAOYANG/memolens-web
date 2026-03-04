<template>
  <div>
    <nav class="bg-white border-b border-gray-100 px-6">
      <div class="max-w-6xl mx-auto h-16 flex items-center justify-between">
        <NuxtLink to="/" class="text-xl font-black bg-gradient-primary bg-clip-text text-transparent">MemoLens</NuxtLink>
        <NuxtLink to="/" class="text-sm text-gray-400 hover:text-gray-700">← 返回首页</NuxtLink>
      </div>
    </nav>
    <div class="max-w-3xl mx-auto px-6 py-16 pb-24">
      <h1 class="text-4xl font-black mb-2">隐私政策</h1>
      <p class="text-gray-400 text-sm mb-10">最后更新：2026年3月4日 · 生效日期：2026年3月4日</p>
      <div class="bg-primary/5 border-l-4 border-primary rounded-r-2xl p-5 mb-10">
        <p class="text-primary font-medium text-sm">我们高度重视你的隐私。MemoLens 采用「本地优先」设计，照片 OCR 在设备本地处理，最大限度保护你的个人数据。</p>
      </div>
      <div class="prose prose-gray max-w-none">
        <h2>1. 我们收集的信息</h2>
        <ul>
          <li><strong>账户信息</strong>：手机号码（仅用于登录验证）</li>
          <li><strong>拍摄内容</strong>：你主动拍摄并上传的图片及 OCR 文字（存储于加密服务器）</li>
          <li><strong>使用数据</strong>：功能使用频率、崩溃日志（用于产品改进，不包含内容）</li>
          <li><strong>设备信息</strong>：操作系统版本、设备型号（用于兼容性优化）</li>
        </ul>
        <h2>2. 我们如何使用你的信息</h2>
        <ul>
          <li>提供 AI 归档和自然语言检索服务</li>
          <li>改善产品功能和用户体验</li>
          <li>发送服务通知（如配额提醒）</li>
          <li>防止欺诈和滥用</li>
        </ul>
        <h2>3. 数据存储与安全</h2>
        <ul>
          <li>中国大陆用户数据存储于中国境内服务器（符合《数据安全法》）</li>
          <li>所有数据传输使用 TLS 1.3 加密，图片存储使用 AES-256 加密</li>
          <li>本地 OCR 处理：文字识别在你的设备上完成，不上传原始图片（可设置中开启）</li>
        </ul>
        <h2>4. 你的权利</h2>
        <ul>
          <li>随时删除账户及所有关联数据</li>
          <li>导出你的全部数据（JSON 格式）</li>
          <li>选择退出数据分析统计</li>
        </ul>
        <h2>5. 联系我们</h2>
        <p>如有隐私相关问题，请联系：<strong>privacy@memolens.app</strong></p>
      </div>
    </div>
    <AppFooter />
  </div>
</template>
<script setup>
useHead({ title: '隐私政策 — MemoLens' })
</script>
