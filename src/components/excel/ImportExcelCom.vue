<!--
 * @Author: BINGWU
 * @Date: 2024-01-30 22:31:26
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-01-31 21:31:30
 * @FilePath: \bingwu-admin\src\components\excel\ImportExcelCom.vue
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
-->
<template>
  <div class="import-excel">
    <UploadFileCom
      ref="uploadFileComRef"
      accept=".xls,.xlsx"
      @handleConfirm="handleImport"
    >
      <template #tip>文件格式要求为xls,xlsx</template>
    </UploadFileCom>
  </div>
</template>

<script setup>
// 把数组对象数据转化为xlsx文件的时候用
// import { utils, writeFileXLSX } from 'xlsx'
// 把xslx文件转化为json数据的时候用
import XLSX from 'xlsx'
import UploadFileCom from '@/components/file/UploadFileCom.vue'
import { ref } from 'vue'
const uploadFileComRef = ref(null)
const emits = defineEmits(['importData'])
const handleImport = async (selectFiles) => {
  if (selectFiles.length === 0) {
    ElMessage.error('导入失败,当前没有要导入的文件')
  } else {
    let existErrorFileType = false
    selectFiles.forEach((item) => {
      let fileExtension = item.raw.name.substring(
        item.raw.name.lastIndexOf('.') + 1
      )
      if (!(fileExtension === 'xlsx' || fileExtension === 'xls')) {
        existErrorFileType = true
      }
    })
    if (existErrorFileType) {
      ElMessage.error('导入失败,存在格式不为xls/xlsx的文件类型')
    } else {
      // 此处转换文件里的数据
      const excelFilesData = await getFilesDataSync(selectFiles)
      emits('importData', excelFilesData)
      uploadFileComRef.value.offDialog()
    }
  }
}

const readFileSync = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsBinaryString(file.raw)
    reader.onload = (event) => {
      resolve(event.target.result)
    }

    reader.onerror = (event) => {
      reject(event.target.error)
    }
  })
}

const getFilesDataSync = async (selectFiles) => {
  let excelFilesData = []

  for (const file of selectFiles) {
    try {
      const data = await readFileSync(file)
      const excelData = XLSX.read(data, { type: 'binary' })
      const wsname = excelData.SheetNames[0]
      const content = XLSX.utils.sheet_to_json(excelData.Sheets[wsname])
      excelFilesData = excelFilesData.concat(content)
    } catch (error) {
      console.error('Error reading file:', error)
    }
  }

  return excelFilesData
}

// const getFilesData = (selectFiles) => {
//   let excelFilesData = []
//   selectFiles.forEach(async (file) => {
//     // 创建fileReader对象
//     const reader = new FileReader()
//     // 读取文件属性
//     reader.readAsBinaryString(file.raw)
//     reader.onload = (re) => {
//       // 获取到二进制的文件
//       const data = re.target.result
//       // 解析二进制的xlsx文件
//       const excelData = XLSX.read(data, {
//         type: 'binary'
//       })
//       // 下标0 表示 拿到excel文件里的第一张表
//       // wsname 为表名
//       const wsname = excelData.SheetNames[0]
//       console.log('wsname', wsname)
//       const content = XLSX.utils.sheet_to_json(excelData.Sheets[wsname])
//       excelFilesData = excelFilesData.concat(content)
//       console.log('11111', excelFilesData)
//     }
//   })

//   return excelFilesData
// }
</script>

<style lang="scss" scoped></style>
