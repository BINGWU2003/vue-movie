<template>
  <div class="movie-echarts">
    <div id="movie-echarts" style="width: 300px; height: 300px"></div>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import * as echarts from 'echarts'
const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
})

const myEcharts = (data) => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('movie-echarts'))

  // 指定图表的配置项和数据
  var option = {
    legend: {
      top: 'bottom'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: '电影信息饼状图',
        type: 'pie',
        radius: ['20%', '50%'],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data
      }
    ]
  }

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option)
}
watch(
  () => props.data,
  (value) => {
    myEcharts(value)
  }
)
onMounted(() => {
  myEcharts(props.data)
})
</script>
