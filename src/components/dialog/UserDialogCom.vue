<!--
 * @Author: BINGWU
 * @Date: 2024-02-19 00:01:40
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-03-29 02:09:10
 * @FilePath: \vue-movie\bingwu-admin\src\components\dialog\UserDialogCom.vue
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
-->
<template>
  <div class="user-dialog">
    <el-dialog
      v-model="dialogVisible"
      :title="props.title"
      width="500"
      @open="openDialog"
    >
      <el-form
        label-width="100px"
        :model="formData"
        style="max-width: 460px"
        :rules="rules"
        ref="formRef"
      >
        <el-form-item label="角色名" prop="userName">
          <el-input
            v-model="formData.userName"
            :disabled="props.title === '查看角色'"
          />
        </el-form-item>
        <el-form-item label="角色密码" prop="userPassword">
          <el-input
            v-model="formData.userPassword"
            :disabled="props.title === '查看角色'"
            type="password"
            show-password
          />
        </el-form-item>
        <el-form-item label="角色类型" prop="userType">
          <el-select
            v-model="formData.userType"
            class="m-2"
            placeholder="请选择"
            style="width: 240px"
            @change="handleSelect"
            :disabled="props.title === '查看角色'"
          >
            <el-option
              v-for="item in selectOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="菜单权限">
          <div style="width: 100%">
            <div style="margin-top: -4px">
              <el-checkbox
                v-model="checkboxData.collapse"
                label="展开/折叠"
                size="large"
                @change="handleCollapse"
              />
              <el-checkbox
                v-model="checkboxData.allChecked"
                label="全选/全不选"
                size="large"
                @change="handleAllChecked"
              />
            </div>
            <el-tree
              ref="treeRef"
              :data="authData"
              show-checkbox
              node-key="id"
              highlight-current
              style="border: 1px solid #e5e6e7; padding: 5px; width: 90%"
            />
          </div>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer" v-show="props.title !== '查看角色'">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleSubmit"> 确认 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { addUserService } from '@/api/user'
const treeRef = ref(null)
const formData = ref({
  userName: '',
  userPassword: '',
  userType: ''
})
const formRef = ref(null)
const emits = defineEmits([
  'getTableData',
  'editUser',
  'update:userDialogVisible'
])
const getRoterDataByAuth = (checkedNodes = []) => {
  // 每个用户的基本路由
  const routerData = [
    // 基本的
    {
      path: 'home',
      name: 'home',
      meta: {
        // 路由组件的路径
        url: '../views/HomeView.vue'
      }
    },
    {
      path: 'profile/image',
      name: 'image',
      meta: {
        // 路由组件的路径
        url: '../views/profile/EditImageView.vue',
        name: '修改头像'
      }
    },
    {
      path: 'profile/password',
      name: 'password',
      meta: {
        // 路由组件的路径
        url: '../views/profile/EditPasswordView.vue',
        name: '修改密码'
      }
    }
  ]
  // 需要权限控制的侧边栏数据
  const authAisdeData = []
  const userManageRouterData = getUserManageRouterData(checkedNodes)
  const fileManageRouterData = getFileManageRouterData(checkedNodes)
  const movieManageRouterData = getMovieManageRouterData(checkedNodes)
  if (userManageRouterData) {
    routerData.push(userManageRouterData)
    authAisdeData.push({
      index: '/user-manage',
      icon: 'icon iconfont icon-jiaoseguanli',
      name: '角色管理'
    })
  }
  if (fileManageRouterData) {
    routerData.push(fileManageRouterData)
    authAisdeData.push({
      index: '/movie-file',
      icon: 'icon iconfont icon-shipinwenjian',
      name: '电影文件管理'
    })
  }
  if (movieManageRouterData) {
    routerData.push(movieManageRouterData)
    // push对应的侧边栏数据
    authAisdeData.push({
      index: '/movie-info',
      icon: 'icon iconfont icon-iconshoot',
      name: '电影信息管理'
    })
  }
  return { routerData, authAisdeData }
}

const getUserManageRouterData = (checkedNodes = []) => {
  // 按钮所绑定的路由
  const userManageRouter = {
    path: 'user-manage',
    name: 'user-manage',
    meta: {
      // 路由组件的路径
      url: '../views/UserInfoMangage.vue',
      name: '角色管理'
    }
  }
  // 统一属性值
  const userManageRouterObj = {
    'add-user': userManageRouter,
    'delete-user': userManageRouter,
    'edit-user': userManageRouter,
    'view-user': userManageRouter
  }
  // item的id作为key,查找userManageRouterObj对象中是否有该属性,判断属性值是是否一样作为存在条件
  const userManageRouterData = checkedNodes.find((item) => {
    return userManageRouterObj[item.id] === userManageRouter
  })

  return userManageRouterData ? userManageRouter : userManageRouterData
}

const getFileManageRouterData = (checkedNodes = []) => {
  const fileManageRouter = {
    path: 'movie-file',
    name: 'movie-file',
    meta: {
      // 路由组件的路径
      url: '../views/FileMovieView.vue',
      name: '电影文件管理'
    }
  }
  // 统一属性值
  const fileManageRouterObj = {
    'add-file': fileManageRouter,
    'delete-file': fileManageRouter,
    'view-file': fileManageRouter
  }
  // item的id作为key,查找userManageRouterObj对象中是否有该属性,判断属性值是是否一样作为存在条件
  const fileManageRouterData = checkedNodes.find((item) => {
    return fileManageRouterObj[item.id] === fileManageRouter
  })

  return fileManageRouterData ? fileManageRouter : fileManageRouterData
}

const getMovieManageRouterData = (checkedNodes = []) => {
  const movieManageRouter = {
    path: 'movie-info',
    name: 'all-movie',
    meta: {
      // 路由组件的路径
      url: '../views/movie/AllMovieView.vue',
      name: '所有电影信息'
    }
  }
  // 统一属性值
  const movieManageRouterObj = {
    'add-movie': movieManageRouter,
    'export-file': movieManageRouter,
    'import-file': movieManageRouter,
    'delete-movie': movieManageRouter,
    'view-movie': movieManageRouter,
    'edit-movie': movieManageRouter,
    'lock-movie': movieManageRouter
  }
  // item的id作为key,查找userManageRouterObj对象中是否有该属性,判断属性值是是否一样作为存在条件
  const movieManageRouterData = checkedNodes.find((item) => {
    return movieManageRouterObj[item.id] === movieManageRouter
  })

  return movieManageRouterData ? movieManageRouter : movieManageRouterData
}

const getAsieData = (authAisdeData = []) => {
  // 每个用户的公共侧边栏数据
  const asideData = [
    {
      index: '/home',
      icon: 'icon iconfont icon-home',
      name: '首页'
    },
    {
      index: '/profile',
      icon: 'icon iconfont icon-gerenxinxi',
      name: '个人信息管理',
      children: [
        {
          index: '/profile/image',
          name: '修改头像'
        },
        {
          index: '/profile/password',
          name: '修改密码'
        }
      ]
    }
  ]
  return asideData.concat(authAisdeData)
}

const authData = ref([
  {
    id: 'user-manage',
    label: '角色管理',
    children: [
      {
        id: 'add-user',
        label: '新增角色'
      },
      {
        id: 'delete-user',
        label: '删除'
      },
      {
        id: 'edit-user',
        label: '修改'
      },
      {
        id: 'view-user',
        label: '查看'
      }
    ]
  },
  {
    id: 'file-manage',
    label: '电影文件管理',
    children: [
      {
        id: 'add-file',
        label: '添加'
      },
      {
        id: 'delete-file',
        label: '删除'
      },
      {
        id: 'view-file',
        label: '查看'
      }
    ]
  },
  {
    id: 'movie-manage',
    label: '电影信息管理',
    children: [
      {
        id: 'add-movie',
        label: '新增电影'
      },
      {
        id: 'export-file',
        label: '导出文件'
      },
      {
        id: 'import-file',
        label: '上传文件'
      },
      {
        id: 'delete-movie',
        label: '删除'
      },
      {
        id: 'view-movie',
        label: '查看'
      },
      {
        id: 'edit-movie',
        label: '修改'
      },
      {
        id: 'lock-movie',
        label: '审核'
      }
    ]
  }
])

const selectOptions = [
  {
    value: 'custom',
    label: '自定义'
  },
  {
    value: 'file-manage',
    label: '文件管理员'
  },
  {
    value: 'movie-manage',
    label: '电影信息管理员'
  },
  {
    value: 'lock-user',
    label: '审核员'
  }
]

const props = defineProps({
  title: {
    type: String,
    default: '默认'
  },
  currentRow: {
    type: Object
  },
  userDialogVisible: {
    type: Boolean
  }
})
const dialogVisible = computed({
  get: () => props.userDialogVisible,
  set: (val) => emits('update:userDialogVisible', val)
})
const checkboxData = ref({
  collapse: false,
  allChecked: false
})

const rules = ref({
  userName: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 6, max: 12, message: '长度应为6到12', trigger: 'blur' }
  ],
  userPassword: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 8, max: 14, message: '长度应为8到14', trigger: 'blur' }
  ],
  userType: [{ required: true, message: '请选中角色类型', trigger: 'change' }]
})

const dialog = (visible) => {
  dialogVisible.value = visible
}

const openDialog = () => {
  formRef.value.clearValidate()
  handleAllChecked(false)
  handleCollapse(false)
  if (props.title === '添加角色') {
    formData.value.userName = ''
    formData.value.userPassword = ''
    formData.value.userType = ''
  } else {
    const { authArr, userName, userPassword, userType } = props.currentRow
    formData.value.userName = userName
    formData.value.userType = userType
    formData.value.userPassword = userPassword
    const nodes = authArr.split(',')
    nodes.forEach((item) => {
      treeRef.value.setChecked(item, true, true)
    })
  }
}

const handleCollapse = (state) => {
  // 设置全部展开/不展开
  authData.value.forEach((item) => {
    treeRef.value.getNode(item.id).expanded = state
  })
}

const handleAllChecked = (state) => {
  // 设置全选/不全选
  authData.value.forEach((item) => {
    treeRef.value.setChecked(item.id, state, true)
  })
}

const handleSelect = () => {
  // 先清空所有的选中状态
  handleAllChecked(false)
  if (formData.value.userType === 'lock-user') {
    treeRef.value.setCheckedKeys(['lock-movie', 'view-movie'], false)
  } else {
    treeRef.value.setChecked(formData.value.userType, true, true)
  }
}

const handleSubmit = () => {
  formRef.value
    .validate()
    .then(async () => {
      const nodes = treeRef.value.getCheckedNodes(true)
      const { routerData, authAisdeData } = getRoterDataByAuth(nodes)
      const asideData = getAsieData(authAisdeData)
      const authArr = []
      nodes.forEach((item) => {
        authArr.push(item.id)
      })
      const params = {
        ...formData.value,
        asideData,
        routerData,
        authArr: authArr.join()
      }
      dialog(false)
      if (props.title === '修改角色') {
        emits('editUser', params)
      } else {
        await addUserService(params).then((res) => {
          ElMessage({ message: res.data.msg, type: 'success' })
          emits('getTableData')
        })
      }
    })
    .catch(() => {})
}

defineExpose({
  dialog
})
</script>

<style lang="scss" scoped></style>
