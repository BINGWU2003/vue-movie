<!--
 * @Author: BINGWU
 * @Date: 2024-01-24 18:02:40
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-01-29 18:51:38
 * @FilePath: \bingwu-admin\src\components\SettingCom.vue
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
-->
<template>
  <div class="setting">
    <el-dropdown trigger="click">
      <el-icon :size="20"><Setting /></el-icon>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <span style="margin-right: 8px">黑暗模式</span>
            <DarkSwitchCom></DarkSwitchCom>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import DarkSwitchCom from '@/components/utils/DarkSwitchCom.vue'
</script>

<style lang="scss" scoped></style>
