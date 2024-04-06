<template>
  <div class="progress-lite">
    <!-- 假性进度条组件 -->
    <el-dialog
      v-model="dialogVisible"
      title="上传中"
      width="500"
      :show-close="false"
    >
      <div class="demo-progress">
        <template v-if="props.progressType.type1">
          <el-progress
            :percentage="percentage"
            :stroke-width="22"
            striped
            :status="status"
            :duration="80"
            striped-flow
            :text-inside="true"
          />
        </template>
        <template v-if="props.progressType.type2">
          <el-progress
            :percentage="percentage"
            :indeterminate="true"
            :status="status"
            :stroke-width="16"
          />
        </template>
        <template v-if="props.progressType.type3"
          ><el-progress
            type="dashboard"
            :percentage="percentage"
            :status="status"
          >
            <template #default="{ percentage }">
              <span class="percentage-value">{{ percentage }}%</span>
            </template>
          </el-progress></template
        >
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
import { useProgress } from '@/hooks/progress'
const props = defineProps({
  // 进度条类型
  progressType: {
    type: Object,
    default: () => {
      return {
        type1: true,
        type2: false,
        type3: false
      }
    }
  }
})
const {
  percentage,
  status,
  dialogVisible,
  changePercentage,
  offProgress,
  openProgress
} = useProgress()

defineExpose({
  changePercentage,
  offProgress,
  openProgress
})
</script>

<style lang="scss" scoped></style>
