<!--
 * @Author: BINGWU
 * @Date: 2024-02-17 21:01:12
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-02-26 22:31:07
 * @FilePath: \vue-movie\bingwu-admin\src\views\LoginView.vue
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
-->
<template>
  <div class="login">
    <el-form
      :model="formData"
      status-icon
      label-width="120px"
      class="demo-ruleForm"
      ref="formRef"
      :rules="rules"
    >
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="formData.userName" />
      </el-form-item>
      <el-form-item label="密码" prop="userPassword">
        <el-input v-model="formData.userPassword" type="password" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="login">登陆</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getUserStore } from '@/stores'
import { loginUserService } from '@/api/user'
const modules = import.meta.glob('../views/**/**.vue')
const router = useRouter()
const {
  setAsideData,
  setRouterData,
  setAuthArr,
  setId,
  setToken,
  setUserImage,
  addUserRoute,
  setUserName,
  setUserType
} = getUserStore()
const formRef = ref(null)
const formData = ref({
  userName: '',
  userPassword: ''
})
const rules = ref({
  userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  userPassword: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

const login = async () => {
  formRef.value
    .validate()
    .then(async () => {
      await loginUserService({
        userName: formData.value.userName,
        userPassword: formData.value.userPassword
      })
        .then((res) => {
          const {
            userData: {
              asideData,
              authArr,
              routerData,
              _id,
              userImage,
              userName,
              userType
            },
            token
          } = res.data
          setAsideData(asideData)
          setRouterData(routerData)
          setAuthArr(authArr.split(','))
          setId(_id)
          setUserImage(userImage)
          setUserName(userName)
          setUserType(userType)
          addUserRoute(router, modules)
          setToken(token)
          router.push('/home')
          ElMessage({ message: res.data.msg, type: 'success' })
        })
        .catch((err) => {
          ElMessage.error(err.data.msg)
        })
    })
    .catch(() => {})
}
const resetForm = () => {
  formRef.value.resetFields()
}
</script>

<style lang="scss" scoped>
.login {
  margin-top: 60px;
  display: flex;
  justify-content: center;

  .content {
    margin-top: 100px;
  }
}
</style>
