<!--
 * @Author: BINGWU
 * @Date: 2024-02-27 18:22:31
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-02-27 22:31:57
 * @FilePath: \served:\File\vue项目\vue-movie\bingwu-admin\src\components\home\UserInfoCom.vue
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
-->
<template>
  <div class="user-info">
    <div class="avatar">
      <img :src="userImage" alt="加载失败" style="height: 100%; width: 100%" />
    </div>
    <div class="content">
      <p class="name">用户名:{{ userName }}</p>
      <p class="auth">
        权限:<span style="color: #f00">{{ userType }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { getUserStore } from '@/stores'
import { storeToRefs } from 'pinia'
const { userImage, userName, userType } = storeToRefs(getUserStore())
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
.user-info {
  display: flex;
  justify-content: space-around;
  .avatar {
    height: 150px;
    width: 150px;
  }
  .content {
    font-family: 'Roboto', sans-serif; /* 使用谷歌字体 Roboto */
    font-size: 20px; /* 调整字体大小 */
    font-weight: bold;
    color: #333;
  }
  margin-bottom: 180px;
}
</style>
