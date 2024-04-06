/*
 * @Author: BINGWU
 * @Date: 2024-02-17 21:01:12
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-02-21 00:39:30
 * @FilePath: \vue-movie\bingwu-admin\src\stores\modules\user.js
 * @Describe:
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
/*
 * @Author: BINGWU
 * @Date: 2024-02-15 14:18:43
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-02-18 18:21:19
 * @FilePath: \vue-movie\bingwu-admin\src\stores\modules\user.js
 * @Describe:
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
import { ref } from 'vue'
import { defineStore } from 'pinia'
const useUserStore = defineStore(
  'user',
  () => {
    const userName = ref('')
    const userType = ref('')
    const setUserName = (newUserName) => {
      userName.value = newUserName
    }
    const setUserType = (newUserType) => {
      userType.value = newUserType
    }
    const _id = ref('')
    const setId = (newId) => {
      _id.value = newId
    }
    const userImage = ref('')
    const setUserImage = (newUserImage) => {
      userImage.value = newUserImage
    }
    // 模拟后台返回的token
    const token = ref('')
    const setToken = (newToken) => {
      token.value = newToken
    }
    // 模拟后台返回的侧边栏数据
    const asideData = ref([])
    const setAsideData = (newAsideData) => {
      asideData.value = newAsideData
    }
    // 模拟后台返回的路由数据
    const routerData = ref([])
    const setRouterData = (newRouterData) => {
      routerData.value = newRouterData
    }
    // 动态添加路由
    const addUserRoute = (router, modules) => {
      routerData.value.forEach((item) => {
        router.addRoute('main', {
          ...item,
          // item.url 匹配对应路由文件
          component: modules[item.meta.url]
        })
      })
    }
    // 模拟后台返回的权限数组
    const authArr = ref([])
    const setAuthArr = (newAuthArr) => {
      authArr.value = newAuthArr
    }
    // 判断权限
    const hasPermission = (auth) => {
      return authArr.value.indexOf(auth) !== -1
    }
    return {
      authArr,
      hasPermission,
      addUserRoute,
      routerData,
      setToken,
      token,
      asideData,
      setAsideData,
      setRouterData,
      setAuthArr,
      _id,
      setId,
      userImage,
      setUserImage,
      userName,
      setUserName,
      userType,
      setUserType
    }
  },
  {
    persist: true
  }
)

export default useUserStore
