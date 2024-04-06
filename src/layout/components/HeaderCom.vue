<!--
 * @Author: BINGWU
 * @Date: 2024-01-23 03:46:53
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-02-11 00:01:53
 * @FilePath: \bingwu-admin\src\layout\components\HeaderCom.vue
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
-->
<template>
  <div class="header">
    <div class="left">
      <CollapseAsideCom></CollapseAsideCom>
      <el-breadcrumb
        separator-icon="ArrowRight"
        style="margin-left: 24px; transform: translateY(-1px)"
      >
        <el-breadcrumb-item
          v-for="item in $route.matched"
          :key="item"
          :to="item.path"
          >{{ item.meta.name }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <div class="right">
      <SwitchLanguageCom></SwitchLanguageCom>
      <AvatarCom></AvatarCom>
      <SettingCom></SettingCom>
    </div>
  </div>
</template>

<script setup>
import CollapseAsideCom from '@/components/utils/CollapseAsideCom.vue'
import SwitchLanguageCom from '@/components/utils/SwitchLanguageCom.vue'
import SettingCom from '@/components/SettingCom.vue'
import AvatarCom from '@/components/AvatarCom.vue'
</script>

<style lang="scss" scoped>
.header {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .right {
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
