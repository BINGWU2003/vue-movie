<!--
 * @Author: BINGWU
 * @Date: 2024-01-23 21:13:17
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-02-10 23:52:44
 * @FilePath: \bingwu-admin\src\components\utils\SwitchLanguageCom.vue
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
-->
<template>
  <div class="switch-language">
    <el-dropdown trigger="click" @command="changeLang">
      <el-icon> <i class="icon iconfont icon-yuyan1"></i></el-icon>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="zh-cn">中文</el-dropdown-item>
          <el-dropdown-item command="en-us">English</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import { getStateStore } from '@/stores'
const stateStore = getStateStore()
const changeLang = (lang) => {
  stateStore.updateCurrentLang(lang)
  // 刷新页面更换语言
  location.reload()
}
</script>

<style lang="scss" scoped>
.switch-language {
  margin-right: 12px;
}
</style>
