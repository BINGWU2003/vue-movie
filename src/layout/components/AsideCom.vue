<!--
 * @Author: BINGWU
 * @Date: 2024-01-23 03:46:33
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-02-27 20:07:30
 * @FilePath: \vue-movie\bingwu-admin\src\layout\components\AsideCom.vue
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
-->
<template>
  <div class="aside">
    <el-menu
      style="height: 100%"
      :collapse="stateStore.isCollapse"
      active-text-color="#ffd04b"
      :default-active="$route.path"
      router
    >
      <template v-for="item in userStore.asideData" :key="item">
        <!-- 多级菜单 -->
        <el-sub-menu
          v-if="item.children && item.children.length > 0"
          :index="item.index"
        >
          <template #title>
            <el-icon><i :class="item.icon"></i></el-icon>
            <span>{{ item.name }}</span>
          </template>

          <!-- 开始循环遍历children -->
          <template v-for="child in item.children" :key="child">
            <!-- 如果是三级菜单 -->
            <template v-if="child.sons && child.sons.length > 0">
              <el-sub-menu :index="child.index">
                <template #title>{{ child.name }}</template>
                <!-- 三级菜单的item -->
                <el-menu-item
                  v-for="son in child.sons"
                  :key="son"
                  :index="son.index"
                  >{{ son.name }}</el-menu-item
                >
              </el-sub-menu></template
            >
            <!-- 二级菜单的item -->
            <template v-else>
              <el-menu-item :index="child.index">{{ child.name }}</el-menu-item>
            </template>
          </template>
        </el-sub-menu>
        <!-- 单级 -->
        <el-menu-item v-else :index="item.index">
          <el-icon> <i :class="item.icon"></i></el-icon>
          <template #title>{{ item.name }}</template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script setup>
import { getStateStore, getUserStore } from '@/stores/index'
const stateStore = getStateStore()
const userStore = getUserStore()
</script>

<style lang="scss" scoped>
.aside {
  height: 100vh;
}
</style>
