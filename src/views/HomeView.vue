<!--
 * @Author: BINGWU
 * @Date: 2024-01-20 23:24:08
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-03-29 00:34:05
 * @FilePath: \vue-movie\bingwu-admin\src\views\HomeView.vue
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
-->

<template>
  <div class="home">
    <div class="left">
      <UserInfoCom></UserInfoCom>
      <FileEchartsCom :series-data="seriesData"></FileEchartsCom>
    </div>
    <div class="right">
      <MovieEchartsCom :data="data"></MovieEchartsCom>
      <UserEchartsCom :source="source"></UserEchartsCom>
    </div>
  </div>
</template>
<script setup>
import UserInfoCom from '@/components/home/UserInfoCom.vue'
import SkeletonCom from '@/components/SkeletonCom.vue'
import { getAllMovieService } from '@/api/movie'
import { getAllUserService } from '@/api/user'
import { getAllVideoFileService } from '@/api/video-file'
import { ref, defineAsyncComponent } from 'vue'
const data = ref([])
const source = ref([])
const seriesData = ref([])
const MovieEchartsCom = defineAsyncComponent({
  // 工厂函数
  loader: () => {
    return new Promise((resolve) => {
      getAllMovieService().then((res) => {
        data.value = res.data.data
        resolve(import('@/components/home/MovieEchartsCom.vue'))
      })
    })
  },
  loadingComponent: SkeletonCom
})

const UserEchartsCom = defineAsyncComponent({
  // 工厂函数
  loader: () => {
    return new Promise((resolve) => {
      getAllUserService().then((res) => {
        source.value = res.data.source
        resolve(import('@/components/home/UserEchartsCom.vue'))
      })
    })
  },
  loadingComponent: SkeletonCom
})

const FileEchartsCom = defineAsyncComponent({
  // 工厂函数
  loader: () => {
    return new Promise((resolve) => {
      getAllVideoFileService().then((res) => {
        seriesData.value = res.data.data
        resolve(import('@/components/home/FileEchartsCom.vue'))
      })
    })
  },
  loadingComponent: SkeletonCom
})
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  display: flex;
  .left {
    padding-top: 40px;
    width: 40%;
    height: 100%;
    margin-right: 20px;
  }
  .right {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    height: 100%;
    padding-bottom: 50px;
  }
}
</style>
