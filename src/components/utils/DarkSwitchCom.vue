<!--
 * @Author: BINGWU
 * @Date: 2024-01-23 17:57:13
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-01-23 18:24:27
 * @FilePath: \bingwu-admin\src\components\utils\DarkSwitchCom.vue
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
-->
<template>
  <div class="dark-switch">
    <el-switch
      v-model="switchState"
      style="--el-switch-on-color: #2c2c2c"
      @change="toggleDark"
      size="large"
    >
      <template #active-action>
        <el-icon><Moon /></el-icon>
      </template>
      <template #inactive-action>
        <el-icon><Sunny /></el-icon>
      </template>
    </el-switch>
  </div>
</template>

<script setup>
import { Moon, Sunny } from '@element-plus/icons-vue'
import { useDark, useToggle } from '@vueuse/core'
import { ref } from 'vue'
const toggleDark = useToggle(useDark())
const switchState = ref(false)
const colorName = localStorage.getItem('vueuse-color-scheme')
switchState.value = colorName === 'light' ? false : true
</script>

<style lang="scss" scoped></style>
