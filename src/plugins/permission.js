import { getUserStore } from '@/stores'
// 判断权限的插件
export default {
  install: (app, options) => {
    // options use插件的时候传入的第二个参数
    // console.log('options', options)
    // 权限内容存在user中
    const userStroe = getUserStore()
    console.log('我的permission插件')
    // 使用自定义指令
    app.directive('permission', {
      mounted(el, binding) {
        let permission = binding.value // 获取到传入 v-permission的值
        if (permission) {
          let hasPermission = userStroe.hasPermission(permission)
          if (!hasPermission) {
            // 没有权限 移除Dom元素
            el.parentNode && el.parentNode.removeChild(el)
          }
        }
      }
    })
  }
}
