<!--
 * @Author: BINGWU
 * @Date: 2024-01-23 03:50:29
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-03-28 17:45:43
 * @FilePath: \vue-movie\bingwu-admin\src\layout\IndexCom.vue
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
-->
<template>
  <div class="index">
    <el-container>
      <el-aside style="width: auto">
        <AsideCom></AsideCom>
      </el-aside>
      <el-container style="height: 100vh">
        <el-header style="height: 6%">
          <HeaderCom></HeaderCom>
        </el-header>
        <el-divider style="margin: 0" />
        <el-main style="height: 94%">
          <main class="content">
            <RouterView />
          </main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import HeaderCom from './components/HeaderCom.vue'
import AsideCom from './components/AsideCom.vue'
</script>

<style lang="scss" scoped>
.index {
  .content {
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 30px;
    box-sizing: border-box;
    overflow: auto;
  }
}
</style>
