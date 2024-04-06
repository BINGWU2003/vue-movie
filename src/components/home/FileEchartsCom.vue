<!--
 * @Author: BINGWU
 * @Date: 2024-02-27 22:47:47
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-03-28 17:56:40
 * @FilePath: \vue-movie\bingwu-admin\src\components\home\FileEchartsCom.vue
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
-->
<template>
  <div class="file-echarts">
    <div id="file-echarts" style="height: 300px"></div>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import * as echarts from 'echarts'
const props = defineProps({
  seriesData: {
    type: Array,
    default: () => []
  }
})
const myEcharts = (data) => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('file-echarts'))

  // 指定图表的配置项和数据
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    xAxis: {
      type: 'category',
      data: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月'
      ]
    },
    yAxis: {
      type: 'value',
      minInterval: 1,
      name: '文件上传量'
    },
    series: [
      {
        data,
        type: 'line'
      }
    ]
  }

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option)
}
watch(
  () => props.seriesData,
  (value) => {
    myEcharts(value)
  }
)
onMounted(() => {
  myEcharts(props.seriesData)
})
</script>
