<!--
 * @Author: BINGWU
 * @Date: 2024-02-23 18:04:42
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-02-26 19:03:40
 * @FilePath: \vue-movie\bingwu-admin\src\components\dialog\FileDialogCom.vue
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
-->

<template>
  <div class="file-dialog">
    <el-dialog
      v-model="dialogVisible"
      title="文件信息"
      width="500"
      @open="handleOpen"
    >
      <el-form label-width="100px" :model="formData" style="max-width: 460px">
        <el-form-item label="文件名称">
          <el-input v-model="formData.fileName" ref="inputNameRef">
            <template #append>
              <el-button
                icon="DocumentCopy"
                @click="
                  () => {
                    handleCopy(inputNameRef, formData.fileName)
                  }
                "
              /> </template
          ></el-input>
        </el-form-item>
        <el-form-item label="文件链接">
          <el-input v-model="formData.fileLink" ref="inputLinkRef">
            <template #append>
              <el-button
                icon="DocumentCopy"
                @click="
                  () => {
                    handleCopy(inputLinkRef, formData.fileLink)
                  }
                "
              />
            </template>
          </el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const inputLinkRef = ref(null)
const inputNameRef = ref(null)
const formData = ref({
  fileName: '',
  fileLink: ''
})
const props = defineProps({
  currentRow: {
    type: Object
  },
  fileDialogVisible: {
    type: Boolean
  }
})
const emits = defineEmits(['update:fileDialogVisible'])
const dialogVisible = computed({
  get: () => props.fileDialogVisible,
  set: (val) => emits('update:fileDialogVisible', val)
})
const handleOpen = () => {
  const { fileLink, fileName } = props.currentRow
  formData.value.fileName = fileName
  formData.value.fileLink = fileLink
}

const handleCopy = (ref, content) => {
  ref.select()
  navigator.clipboard.writeText(content).then(
    function () {
      ElMessage({
        type: 'success',
        message: '复制成功'
      })
    },
    function () {
      ElMessage({
        type: 'danger',
        message: '复制失败'
      })
    }
  )
}
</script>
