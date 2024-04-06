<template>
  <div class="file-movie">
    <OptionsMenuCom>
      <template #options>
        <div class="options">
          <div class="left">
            <UploadFileCom
              ref="uploadFileComRef"
              @handleConfirm="handleConfirm"
              v-permission="'add-file'"
              accept=".mp4,.mkv"
            >
              <template #tip>文件容量小于等于30mb</template></UploadFileCom
            >
          </div>
          <div class="right">
            <el-input
              v-model="inputValue"
              placeholder="请输入文件名称"
              clearable
            />
            <el-button
              type="primary"
              style="margin-left: 6px"
              @click="handleSearch"
              >搜索</el-button
            >
          </div>
        </div>
      </template>
    </OptionsMenuCom>
    <BaseTableCom
      ref="baseTableComRef"
      :showSelect="true"
      :column-data="columnData"
      :dropdown-data="dropdownData"
      :table-data="tableData"
      :pageSizes="[5, 8, 10]"
      :total="total"
      :showPagination="true"
      @updateTableData="updateTableData"
    ></BaseTableCom>
    <ProgressCom ref="progressComRef"></ProgressCom>
    <FileDialogCom
      :current-row="currentRow"
      v-model:fileDialogVisible="fileDialogVisible"
    ></FileDialogCom>
  </div>
</template>

<script setup>
import OptionsMenuCom from '@/layout/OptionsMenuCom.vue'
import BaseTableCom from '@/components/table/BaseTableCom.vue'
import UploadFileCom from '@/components/file/UploadFileCom.vue'
import ProgressCom from '@/components/progress/ProgressCom.vue'
import { largeFileUpload } from '@/utils/tencentCloud'
import {
  getVideoFileService,
  addVideoFileService,
  deleteVideoFileService
} from '@/api/video-file'
import { ref, onMounted, defineAsyncComponent } from 'vue'
const baseTableComRef = ref(null)
const inputValue = ref('')
// 进度条
const progressComRef = ref(null)
const uploadFileComRef = ref(null)
const tableData = ref([])
const total = ref(0)
const dropdownData = [
  {
    command: 'delete',
    handleAction: async (row) => {
      await deleteVideoFileService({ _id: row._id }).then(async (res) => {
        ElMessage({ message: res.data.msg, type: 'success' })
        await fullParamsGetTableData()
      })
    },
    actionName: '删除',
    // 图标类型  对应element图标库
    icon: 'Delete',
    // 权限名称
    auth: 'delete-file'
  },
  {
    command: 'view',
    handleAction: (row) => {
      currentRow.value = row
      fileDialogVisible.value = true
    },
    actionName: '查看',
    icon: 'View',
    auth: 'view-file'
  }
]
const currentRow = ref({})
const columnData = [
  {
    prop: 'fileName',
    label: '文件名称',
    width: '300'
  },
  {
    prop: 'fileLink',
    label: '文件链接'
  }
]
const fileDialogVisible = ref(false)
const FileDialogCom = defineAsyncComponent(
  () => import('@/components/dialog/FileDialogCom.vue')
)
const updateTableData = async (pageSize, currentPage) => {
  await getTableData({
    pageSize,
    pageIndex: currentPage,
    fileName: inputValue.value
  })
}

const fullParamsGetTableData = async () => {
  const { pageSize, currentPage } = baseTableComRef.value.getPaginationData()
  const pageIndex = currentPage
  await getTableData({
    fileName: inputValue.value,
    pageSize,
    pageIndex
  })
}

const getTableData = async (params) => {
  baseTableComRef.value.changeTableLoading()
  await getVideoFileService(params)
    .then((res) => {
      const { videoFileArr, videoFileTotal } = res.data
      tableData.value = videoFileArr
      total.value = videoFileTotal
      baseTableComRef.value.changeTableLoading()
    })
    .catch((err) => {
      console.log('err', err)
    })
}
const updateProgress = (percentage) => {
  progressComRef.value.changePercentage(percentage)
}
const handleConfirm = async (selectFiles) => {
  if (selectFiles.length) {
    progressComRef.value.openProgress()
    await largeFileUpload(selectFiles[0], '', updateProgress).then(
      async (res) => {
        const params = {
          fileName: selectFiles[0].name,
          fileLink: res
        }
        await addVideoFileService(params).then(() => {
          progressComRef.value.offProgress()
          uploadFileComRef.value.clearFiles()
          fullParamsGetTableData()
        })
      }
    )
  } else {
    ElMessage({
      message: '请选择文件',
      type: 'error'
    })
  }
}

const handleSearch = async () => {
  await fullParamsGetTableData()
}

onMounted(async () => {
  const { pageSize, currentPage } = baseTableComRef.value.getPaginationData()
  const pageIndex = currentPage
  await getTableData({
    pageSize,
    pageIndex
  })
})
</script>

<style lang="scss" scoped>
.options {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    display: flex;
  }
  .right {
    display: flex;
    margin-right: 280px;
  }
}
</style>
