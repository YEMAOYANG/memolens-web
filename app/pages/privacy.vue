<script setup lang="ts">
const { t } = useI18n()
useSeoMeta({ title: () => t('privacy.title') })
</script>

<template>
  <div class="max-w-3xl mx-auto px-6 py-16 pb-24">
    <h1 class="text-4xl font-black mb-2 text-[#101828] dark:text-white">{{ t('privacy.title') }}</h1>
    <p class="text-gray-400 text-sm mb-10">{{ t('privacy.updated') }}</p>
    <div class="bg-[#5B5FEF]/8 border-l-4 border-[#5B5FEF] rounded-r-2xl p-5 mb-10">
      <p class="text-[#5B5FEF] font-medium text-sm">{{ t('privacy.highlight') }}</p>
    </div>
    <div class="prose prose-gray dark:prose-invert max-w-none">
      <h2>1. 我们收集的信息</h2>
      <ul>
        <li><strong>账户信息</strong>：手机号码（仅用于登录验证）</li>
        <li><strong>拍摄内容</strong>：你主动拍摄并上传的图片及 OCR 文字（存储于加密服务器）</li>
        <li><strong>使用数据</strong>：功能使用频率、崩溃日志（不包含内容）</li>
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
        <li>所有传输使用 TLS 1.3 加密，图片存储使用 AES-256 加密</li>
        <li>本地 OCR：文字识别在设备完成，不上传原始图片（可在设置中开启）</li>
      </ul>
      <h2>4. 第三方服务</h2>
      <ul>
        <li><strong>OpenAI API</strong>：AI 理解和问答（OCR 文字发送，不含原始图片）</li>
        <li><strong>阿里云短信</strong>：验证码发送</li>
        <li><strong>Sentry</strong>：错误追踪（匿名化处理）</li>
      </ul>
      <h2>5. 你的权利</h2>
      <ul>
        <li>随时删除账户及所有关联数据</li>
        <li>导出你的全部数据（JSON 格式）</li>
        <li>选择退出数据分析统计</li>
      </ul>
      <h2>6. 联系我们</h2>
      <p>如有隐私相关问题，请联系：<strong>privacy@memolens.app</strong></p>
    </div>
  </div>
</template>
