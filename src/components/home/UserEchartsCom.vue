<!--
 * @Author: BINGWU
 * @Date: 2024-02-27 18:23:26
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-03-28 17:53:46
 * @FilePath: \vue-movie\bingwu-admin\src\components\home\UserEchartsCom.vue
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
-->
<template>
  <div class="user-echarts">
    <div id="user-echarts" style="width: 600px; height: 300px"></div>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import * as echarts from 'echarts'
const props = defineProps({
  source: {
    type: Array,
    default: () => []
  }
})
const myEcharts = (source) => {
  const myChart = echarts.init(document.getElementById('user-echarts'))
  const option = {
    dataset: {
      source
    },
    // 光标悬浮时的提示
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(32, 33, 36,.7)',
      borderColor: 'rgba(32, 33, 36,0.20)',
      borderWidth: 1,
      textStyle: {
        // 文字提示样式
        color: '#fff',
        fontSize: '12'
      }
    },
    grid: { containLabel: true },
    xAxis: { name: '人数', minInterval: 1 },
    yAxis: { type: 'category' },
    visualMap: {
      orient: 'horizontal',
      left: 'center',
      min: 0,
      max: 100,
      text: ['角色类型'],
      dimension: 0,
      inRange: {
        color: ['#65B581', '#FFCE34', '#FD665F']
      }
    },
    series: [
      {
        type: 'bar',
        encode: {
          // Map the "amount" column to X axis.
          x: 'amount',
          // Map the "product" column to Y axis
          y: 'product'
        }
      }
    ]
  }
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option)
}

watch(
  () => props.source,
  (value) => {
    myEcharts(value)
  }
)

onMounted(() => {
  myEcharts(props.source)
})
</script>

<style lang="scss" scoped></style>
