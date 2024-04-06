<template>
  <div>
    <el-dialog v-model="dialogVisible" title="审核电影" width="500">
      <el-radio-group v-model="radio">
        <el-radio label="passCheck">
          <template #default>
            <el-tag type="success">审核通过</el-tag>
          </template>
        </el-radio>
        <el-radio label="blockCheck">
          <template #default>
            <el-tag type="danger">审核未通过</el-tag>
          </template>
        </el-radio>
      </el-radio-group>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirm"> 确认 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const emits = defineEmits(['editMovie', 'update:checkDialogVisible'])
const props = defineProps({
  checkDialogVisible: {
    type: Boolean
  }
})
const dialogVisible = computed({
  get: () => props.checkDialogVisible,
  set: (val) => emits('update:checkDialogVisible', val)
})
const radio = ref('blockCheck')

const handleConfirm = () => {
  emits('editMovie', {
    checkStatus: radio.value
  })
  emits('update:checkDialogVisible', false)
}
</script>

<style lang="scss" scoped></style>
