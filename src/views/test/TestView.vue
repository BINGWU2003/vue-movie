<!--
 * @Author: BINGWU
 * @Date: 2024-02-17 21:01:12
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-03-29 00:23:29
 * @FilePath: \vue-movie\bingwu-admin\src\views\test\TestView.vue
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
-->
<template>
  <hello-world msg="Welcome to Your Vue.js App" />
  <T></T>
  <SkeletonCom></SkeletonCom>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import SkeletonCom from '@/components/SkeletonCom.vue'
// 定义一个耗时执行的函数，t 表示延迟的时间， callback 表示需要执行的函数，可选
const time = (t, callback = () => {}) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      callback()
      resolve()
    }, t)
  })
}
// 记录加载次数
const HelloWorld = defineAsyncComponent({
  // 工厂函数
  loader: () => {
    return new Promise((resolve, reject) => {
      ;(async function () {
        await time(4000)
        const res = await import('./HelloWorld.vue')
        resolve(res)
      })()
    })
  },
  loadingComponent: SkeletonCom
})
</script>
