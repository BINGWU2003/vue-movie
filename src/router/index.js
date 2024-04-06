/*
 * @Author: BINGWU
 * @Date: 2024-04-06 16:57:02
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-04-06 17:44:40
 * @FilePath: \vue-movie\src\router\index.js
 * @Describe:
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
/*
 * ..Author: BINGWU
 * ..Date: 2024-01-20 23:24:08
 * ..LastEditors: BINGWU HuJiaCheng2003..163.com
 * ..LastEditTime: 2024-02-15 19:48:22
 * ..FilePath: \bingwu-admin\src\router\index.js
 * ..Describe:
 * ..Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
import { createRouter, createWebHistory } from 'vue-router'
// 页面组件的文件路径
const modules = import.meta.glob('../views/**/**.vue')
import { getUserStore } from '@/stores'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layout/IndexCom.vue'),
      meta: {
        name: '首页'
      },
      name: 'main',
      children: []
    },
    {
      path: '/error/not-find1',
      name: 'not-find1',
      component: () => import('../views/Error/NotFindView1.vue'),
      meta: {
        name: 'not-find1'
      }
    },
    {
      path: '/error/not-find2',
      name: 'not-find2',
      component: () => import('../views/Error/NotFindView2.vue'),
      meta: {
        name: 'not-find2'
      }
    },
    {
      path: '/error/not-find3',
      name: 'not-find3',
      component: () => import('../views/Error/NotFindView3.vue'),
      meta: {
        name: 'not-find3'
      }
    },
    // 访问不存在的路由所跳转的页面
    // {
    //   path: '/:catchAll(.*)',
    //   redirect: '/error/not-find2'
    // },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: {
        name: 'login'
      }
    }
  ]
})

router.beforeEach((to, from) => {
  if (to.name !== 'login') {
    if (!getUserStore().token) {
      return { name: 'login' }
    }
  }
  // 处理动态路由刷新白屏
  if (!to.redirectedFrom) {
    getUserStore().addUserRoute(router, modules)
    return { ...to, replace: true }
  } else {
    return true
  }
})

export default router
