<!--
 * @Author: BINGWU
 * @Date: 2024-01-23 18:29:12
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-02-10 21:46:46
 * @FilePath: \bingwu-admin\src\components\utils\CollapseAsideCom.vue
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
-->
<template>
  <div class="collapse-aside" @click="stateStore.updateCollapse">
    <el-icon :size="20" v-if="stateStore.isCollapse"><Expand /></el-icon>
    <el-icon :size="20" v-else><Fold /></el-icon>
  </div>
</template>

<script setup>
import { getStateStore } from '@/stores/index'
const stateStore = getStateStore()
</script>

<style lang="scss" scoped></style>
