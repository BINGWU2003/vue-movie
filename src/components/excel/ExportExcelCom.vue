<!--
 * @Author: BINGWU
 * @Date: 2024-01-30 22:31:39
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-01-31 23:06:46
 * @FilePath: \bingwu-admin\src\components\excel\ExportExcelCom.vue
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
-->
<template>
  <div class="export-excel">
    <el-button
      type="primary"
      icon="Download"
      @click="
        () => {
          formData.fileName = ''
          formData.fileExtension = ''
          dialogVisible = true
        }
      "
      >导出文件</el-button
    >

    <el-dialog v-model="dialogVisible" title="导出" width="30%">
      <el-form :model="formData" :rules="rules" ref="formRef">
        <el-form-item label="文件名称">
          <el-input
            v-model="formData.fileName"
            placeholder="默认为excelFile"
            clearable
          />
        </el-form-item>
        <el-form-item label="文件后缀" prop="fileExtension">
          <el-select
            v-model="formData.fileExtension"
            placeholder="请选择文件后缀"
            clearable
          >
            <el-option label="xlsx" value="xlsx" />
            <el-option label="xls" value="xls" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirm"> 确认 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
// 把数组对象数据转化为xlsx文件的时候用
import { utils, writeFileXLSX } from 'xlsx'
import { ref, reactive } from 'vue'

const dialogVisible = ref(false)

const emits = defineEmits(['handleExportData'])

const formData = reactive({
  fileName: '',
  fileExtension: ''
})

const formRef = ref(null)

const rules = ref({
  fileExtension: [
    { required: true, message: '请选择文件后缀', trigger: 'blur' }
  ]
})

const handleConfirm = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      emits(
        'handleExportData',
        exportFile,
        formData.fileName,
        formData.fileExtension
      )
      // exportFile(props.exportData, formData.fileName, formData.fileExtension)
      dialogVisible.value = false
    }
  })
}

// 自定义excel导出函数
const exportFile = (exportData, fileName, fileExtension) => {
  if (exportData.length === 0) {
    ElMessage({
      showClose: true,
      message: '没有要导出的数据',
      type: 'error'
    })
  } else {
    if (!fileName) {
      fileName = 'excelFile'
    }
    // utils.json_to_sheet(参数) 参数为数组对象
    const ws = utils.json_to_sheet(exportData)
    const wb = utils.book_new()
    // utils.book_append_sheet(参数1, 参数2, 参数3)
    // 参数1 为 utils.json_to_sheet(arr) 返回的对象
    // 参数2 为 utils.book_new() 返回的对象
    // 参数3 为 工作表的名称
    utils.book_append_sheet(wb, ws, 'Data')
    // writeFileXLSX(参数1, 参数2)
    // 参数1 为 utils.book_new() 返回的对象
    // 参数2 为 导出的excel的文件名  后缀为xlsx  例如: 'abc.xlsx'  '好看的.xlsx'
    writeFileXLSX(wb, `${fileName}.${fileExtension}`)
    dialogVisible.value = !dialogVisible.value
  }
}
</script>

<style lang="scss" scoped></style>
