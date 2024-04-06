<!--
 * @Author: BINGWU
 * @Date: 2024-02-17 21:01:12
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-02-23 17:21:16
 * @FilePath: \vue-movie\bingwu-admin\src\components\AvatarCom.vue
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
-->
<template>
  <div class="avatar">
    <div class="left">
      <el-avatar :size="28" :src="userImage" />
      <el-dropdown trigger="click" @command="handlCommand">
        <span class="el-dropdown-link">
          <el-icon class="el-icon--right"><CaretBottom /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item icon="SwitchButton" command="/login"
              >退出登陆</el-dropdown-item
            >
            <el-dropdown-item icon="Unlock" command="/profile/password">
              修改密码
            </el-dropdown-item>
            <el-dropdown-item icon="Picture" command="/profile/image"
              >修改头像</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { getUserStore } from '@/stores'
import { storeToRefs } from 'pinia'
const { setAsideData, setRouterData, setAuthArr, setToken } = getUserStore()
const { userImage } = storeToRefs(getUserStore())
const router = useRouter()
const handlCommand = (command) => {
  if (command === '/login') {
    setToken('')
    setAsideData([])
    setRouterData([])
    setAuthArr([])
  }
  router.push(command)
}
</script>

<style lang="scss" scoped>
.avatar {
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 14px 0 12px;
}
:deep(.el-dropdown) {
  transform: translateY(15px);
}
</style>
