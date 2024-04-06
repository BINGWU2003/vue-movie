<!--
 * @Author: BINGWU
 * @Date: 2024-01-20 23:24:08
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-01-23 23:18:53
 * @FilePath: \bingwu-admin\src\App.vue
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
-->
<script setup>
import { computed, ref } from 'vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import { RouterView } from 'vue-router'
import { getStateStore } from './stores'
import { useI18n } from 'vue-i18n'
const myLocale = useI18n().locale
const stateStore = getStateStore()
myLocale.value = stateStore.currentLang
// 控制element组件的语言
const langArr = ref([
  {
    lang: 'zh-cn',
    locale: zhCn
  },
  {
    lang: 'en-us',
    locale: en
  }
])
const locale = computed(() => {
  const item = langArr.value.find(
    (item) => item.lang === stateStore.currentLang
  )
  return item.locale
})
</script>

<template>
  <el-config-provider :locale="locale">
    <RouterView />
  </el-config-provider>
</template>

<style scoped></style>
