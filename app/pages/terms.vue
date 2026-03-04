<script setup lang="ts">
const { t } = useI18n()
useSeoMeta({ title: () => t('terms.title') })
</script>

<template>
  <div class="max-w-3xl mx-auto px-6 py-16 pb-24">
    <h1 class="text-4xl font-black mb-2 text-[#101828] dark:text-white">{{ t('terms.title') }}</h1>
    <p class="text-gray-400 text-sm mb-10">最后更新：2026年3月4日</p>
    <div class="prose prose-gray dark:prose-invert max-w-none">
      <h2>1. 接受条款</h2>
      <p>使用 MemoLens（以下简称「本服务」），即表示你同意本使用条款。如不同意，请停止使用。</p>
      <h2>2. 服务描述</h2>
      <p>MemoLens 是一款 AI 驱动的相机记忆工具，提供图片 OCR 识别、AI 归档分析和自然语言检索功能。</p>
      <h2>3. 用户账户</h2>
      <ul>
        <li>你需要提供有效手机号注册账户</li>
        <li>你对账户活动承担全部责任</li>
        <li>禁止将账户转让给他人</li>
      </ul>
      <h2>4. 可接受使用</h2>
      <p>禁止使用本服务进行以下活动：</p>
      <ul>
        <li>上传违法、色情、歧视性内容</li>
        <li>滥用 API 配额或进行恶意攻击</li>
        <li>尝试逆向工程或破解本服务</li>
      </ul>
      <h2>5. 免费与付费计划</h2>
      <ul>
        <li>免费版：每月 200 张归档额度，额度不累积</li>
        <li>Pro 版：订阅后自动续费，可随时取消</li>
        <li>退款政策：首次订阅7天内可申请全额退款</li>
      </ul>
      <h2>6. 免责声明</h2>
      <p>本服务按「现状」提供。AI 识别结果仅供参考，我们不对识别准确性作出保证。</p>
      <h2>7. 联系我们</h2>
      <p>使用条款相关问题，请联系：<strong>legal@memolens.app</strong></p>
    </div>
  </div>
</template>
