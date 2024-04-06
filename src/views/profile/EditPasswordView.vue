<!--
 * @Author: BINGWU
 * @Date: 2024-02-18 22:06:21
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-02-26 22:22:21
 * @FilePath: \vue-movie\bingwu-admin\src\views\profile\EditPasswordView.vue
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
-->
<template>
  <div class="edit-password">
    <el-form
      ref="formRef"
      :model="formData"
      status-icon
      :rules="rules"
      label-width="120px"
      class="demo-formData"
    >
      <el-form-item label="输入新密码" prop="pass">
        <el-input v-model="formData.pass" type="password" show-password />
      </el-form-item>
      <el-form-item label="再输入一遍密码" prop="checkPass">
        <el-input v-model="formData.checkPass" type="password" show-password />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { editUserService } from '@/api/user'
import { getUserStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
const router = useRouter()
const { setAsideData, setRouterData, setAuthArr, setToken } = getUserStore()
const { _id } = storeToRefs(getUserStore())
const formData = ref({
  pass: '',
  checkPass: ''
})
const formRef = ref(null)
const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else if (value.length >= 8 && value.length <= 14) {
    if (formData.value.checkPass !== '') {
      if (!formRef.value) return
      formRef.value.validateField('checkPass', () => null)
    }
    callback()
  } else {
    callback(new Error('密码长度应为8~14字符之间'))
  }
}

const validatePass2 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请再输入一遍密码'))
  } else if (value !== formData.value.pass) {
    callback(new Error('两次输入的密码不匹配!'))
  } else {
    callback()
  }
}

const rules = ref({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }]
})

const handleSubmit = () => {
  formRef.value
    .validate()
    .then(async () => {
      await editUserService({
        _id: _id.value,
        userData: {
          userPassword: formData.value.pass
        }
      }).then((res) => {
        ElMessage({
          type: 'success',
          message: res.data.msg
        })
        let index = 3
        const time = setInterval(() => {
          if (index === 1) {
            clearInterval(time)
          }
          ElMessage({
            type: 'warning',
            message: `${index}s后自动退出登陆`
          })
          index--
        }, 1000)
        setTimeout(() => {
          setToken('')
          setAsideData([])
          setRouterData([])
          setAuthArr([])
          router.push('/login')
        }, 3000)
      })
    })
    .catch(() => {
      console.log('error')
    })
}
</script>

<style lang="scss" scoped>
.edit-password {
  width: 20%;
}
</style>
