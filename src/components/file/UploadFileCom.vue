<!--
 * @Author: BINGWU
 * @Date: 2024-01-30 22:31:39
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-02-26 17:38:59
 * @FilePath: \vue-movie\bingwu-admin\src\components\file\UploadFileCom.vue
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
-->
<template>
  <div class="export-file">
    <el-button type="primary" icon="Upload" @click="dialogVisible = true">
      上传文件
    </el-button>

    <el-dialog v-model="dialogVisible" title="上传文件" width="30%">
      <el-upload
        ref="uploadRef"
        :auto-upload="false"
        :on-change="
          (_, files) => {
            selectFiles = files
          }
        "
        drag
        :accept="props.accept"
      >
        <el-icon size="30"><upload-filled /></el-icon>
        <div class="el-upload__text">将文件拖到此处或 <em>点击上传</em></div>
        <template #tip>
          <div class="tip"><slot name="tip"></slot></div>
        </template>
      </el-upload>
      <template #footer>
        <span>
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button
            type="primary"
            @click="
              () => {
                emits('handleConfirm', selectFiles)
              }
            "
          >
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const selectFiles = ref([])
const dialogVisible = ref(false)
const uploadRef = ref(null)
const emits = defineEmits(['handleConfirm'])
const getSelectFiles = () => {
  return selectFiles.value
}
const props = defineProps({
  // 文件上传类型  默认为所有类型
  accept: {
    type: String
  }
})
// 清空文件
const clearFiles = () => {
  selectFiles.value = []
  uploadRef.value.clearFiles()
}
const offDialog = () => {
  dialogVisible.value = !dialogVisible.value
}

defineExpose({
  getSelectFiles,
  offDialog,
  clearFiles
})
</script>
<style lang="scss" scoped>
.export-file {
  width: 20%;
  .tip {
    margin-top: 10px;
    font-size: 14px;
  }
}
</style>
