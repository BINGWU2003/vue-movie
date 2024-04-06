<template>
  <div class="all-movie">
    <OptionsMenuCom>
      <template #options>
        <div class="options">
          <div class="left">
            <el-button
              type="primary"
              style="margin-right: 6px"
              v-permission="'add-movie'"
              @click="handleAdd"
              >新增电影</el-button
            >
            <ExportExcelCom
              @handleExportData="handleExportData"
              style="margin-right: 6px"
              v-permission="'export-file'"
            >
            </ExportExcelCom>
            <ImportExcelCom
              @importData="importData"
              style="margin-right: 6px"
              v-permission="'import-file'"
            ></ImportExcelCom>
            <el-select
              v-model="checkStatus"
              class="m-2"
              placeholder="请选择"
              style="width: 160px"
              @change="handleChange"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div class="right">
            <el-input
              v-model="inputValue"
              placeholder="请输入电影名称"
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
      :pageSizes="[5, 8]"
      :total="total"
      :showPagination="true"
      @updateTableData="updateTableData"
    ></BaseTableCom>
    <MovieDialogCom
      ref="movieDialogComRef"
      :title="title"
      :current-row="currentRow"
      @add-movie="addMovie"
      @edit-movie="editMovie"
      v-model:movieDialogVisible="movieDialogVisible"
    ></MovieDialogCom>
    <CheckDialogCom
      @edit-movie="editMovie"
      v-model:checkDialogVisible="checkDialogVisible"
    ></CheckDialogCom>
  </div>
</template>

<script setup>
import OptionsMenuCom from '@/layout/OptionsMenuCom.vue'
import BaseTableCom from '@/components/table/BaseTableCom.vue'
import ExportExcelCom from '@/components/excel/ExportExcelCom.vue'
import ImportExcelCom from '@/components/excel/ImportExcelCom.vue'
import { ref, onMounted, defineAsyncComponent } from 'vue'
import {
  getMovieService,
  editMovieService,
  addMovieService,
  deleteMovieService,
  addManyMovieService
} from '@/api/movie'
import { smallFileUpload } from '@/utils/tencentCloud'
const baseTableComRef = ref(null)
const title = ref('')
const inputValue = ref('')
const checkStatus = ref('')
const total = ref(0)
const options = [
  {
    value: 'uncheck',
    label: '待审核'
  },
  {
    value: 'passCheck',
    label: '审核通过'
  },
  {
    value: 'blockCheck',
    label: '审核未通过'
  },
  {
    value: '',
    label: '全部'
  }
]
const tableData = ref()
let _id = ''
const currentRow = ref({})
const dropdownData = [
  {
    command: 'delete',
    handleAction: (row) => {
      deleteMovieService({ _id: row._id })
        .then(async (res) => {
          ElMessage({
            type: 'success',
            message: res.data.msg
          })
          await fullParamsGetTableData()
        })
        .catch((err) => {
          console.log('err', err)
        })
    },
    actionName: '删除',
    // 图标类型  对应element图标库
    icon: 'Delete',
    // 权限名称
    auth: 'delete-movie'
  },
  {
    command: 'view',
    handleAction: (row) => {
      currentRow.value = row
      title.value = '查看电影'
      movieDialogVisible.value = true
    },
    actionName: '查看',
    icon: 'View',
    auth: 'view-movie'
  },
  {
    command: 'edit',
    handleAction: (row) => {
      _id = row._id
      currentRow.value = row
      title.value = '修改电影'
      movieDialogVisible.value = true
    },
    actionName: '修改',
    icon: 'Edit',
    auth: 'edit-movie'
  },
  {
    command: 'lock',
    handleAction: (row) => {
      _id = row._id
      checkDialogVisible.value = true
    },
    actionName: '审核',
    icon: 'Lock',
    auth: 'lock-movie'
  }
]

const columnData = [
  {
    prop: 'movieImage',
    label: '电影图片',
    pictureColumn: true
  },
  {
    prop: 'movieName',
    label: '电影名'
  },
  {
    prop: 'movieAuthor',
    label: '电影作者'
  },
  {
    prop: 'movieLink',
    label: '电影链接'
  },
  {
    prop: 'checkStatus',
    label: '审核状态',
    tagColumn: true
  }
]

const checkDialogVisible = ref(false)
const movieDialogVisible = ref(false)
const CheckDialogCom = defineAsyncComponent(
  () => import('@/components/dialog/CheckDialogCom.vue')
)
const MovieDialogCom = defineAsyncComponent(
  () => import('@/components/dialog/MovieDialogCom.vue')
)

const handleExportData = async (exportFile, fileName, fileExtension) => {
  // exportData 为要导出的数据
  const rows = baseTableComRef.value.getSelectRows()
  const exportData = rows.map((item) => {
    item.checkStatus = item.checkStatus.tagName
    return item
  })
  exportFile(exportData, fileName, fileExtension)
  await fullParamsGetTableData()
}

const importData = async (excelFilesData) => {
  const movieArr = excelFilesData.map((item) => {
    let { checkStatus, movieAuthor, movieImage, movieLink, movieName } = item
    if (checkStatus === '待审核') {
      checkStatus = 'uncheck'
    } else if (checkStatus === '审核未通过') {
      checkStatus = 'blockCheck'
    } else if (checkStatus === '审核通过') {
      checkStatus = 'passCheck'
    }
    return {
      checkStatus,
      movieAuthor,
      movieImage,
      movieLink,
      movieName
    }
  })
  await addManyMovieService({ movieArr })
    .then((res) => {
      console.log('res', res)
    })
    .catch((err) => {
      console.log('err', err)
    })
  await fullParamsGetTableData()
}

const fullParamsGetTableData = async () => {
  const { pageSize, currentPage } = baseTableComRef.value.getPaginationData()
  const pageIndex = currentPage
  await getTableData({
    movieName: inputValue.value,
    pageSize,
    pageIndex,
    checkStatus: checkStatus.value
  })
}

// 页面变化和页面数据容量被修改时触发的函数
const updateTableData = (pageSize, currentPage) => {
  const pageIndex = currentPage
  getTableData({
    movieName: inputValue.value,
    pageIndex,
    pageSize,
    checkStatus: checkStatus.value
  })
}
const getTableData = async (params) => {
  baseTableComRef.value.changeTableLoading()
  await getMovieService(params)
    .then((res) => {
      const { movieArr, movieTotal } = res.data
      tableData.value = movieArr.map((item) => {
        if (item.checkStatus === 'uncheck') {
          item.checkStatus = {
            tagName: '待审核',
            tagType: 'warning'
          }
        } else if (item.checkStatus === 'passCheck') {
          item.checkStatus = {
            tagName: '审核通过',
            tagType: 'success'
          }
        } else if (item.checkStatus === 'blockCheck') {
          item.checkStatus = {
            tagName: '审核未通过',
            tagType: 'danger'
          }
        }
        return item
      })
      total.value = movieTotal
      baseTableComRef.value.changeTableLoading()
    })
    .catch((err) => {
      ElMessage.error(err.data.msg)
    })
}
const handleAdd = () => {
  title.value = '新增电影'
  movieDialogVisible.value = true
}

const addMovie = async (params, file) => {
  await smallFileUpload(file).then(async (res) => {
    params.movieImage = res
    await addMovieService(params)
      .then(async (res) => {
        ElMessage({
          type: 'success',
          message: res.data.msg
        })
        movieDialogVisible.value = false
        fullParamsGetTableData()
      })
      .catch((err) => {
        console.log('err', err)
      })
      .catch((err) => {
        console.log('txerr', err)
      })
  })
}

const editMovie = async (params, file) => {
  if (file) {
    await smallFileUpload(file).then(async (res) => {
      params.movieImage = res
      await editMovieService({ _id, movieData: params })
        .then(async (res) => {
          ElMessage({
            type: 'success',
            message: res.data.msg
          })
          // 关闭dialog
          movieDialogVisible.value = false

          await fullParamsGetTableData()
        })
        .catch((err) => {
          console.log('err', err)
        })
    })
  } else {
    await editMovieService({ _id, movieData: params })
      .then(async (res) => {
        ElMessage({
          type: 'success',
          message: res.data.msg
        })
        // 关闭dialog
        movieDialogVisible.value = false
        checkDialogVisible.value = false
        fullParamsGetTableData()
      })
      .catch((err) => {
        console.log('err', err)
      })
  }
}
const handleChange = (checkStatus) => {
  const movieName = inputValue.value
  const { pageSize, currentPage } = baseTableComRef.value.getPaginationData()
  const pageIndex = currentPage
  getTableData({ pageSize, pageIndex, checkStatus, movieName })
}
const handleSearch = () => {
  const movieName = inputValue.value
  const { pageSize, currentPage } = baseTableComRef.value.getPaginationData()
  const pageIndex = currentPage
  // 下拉选项改为全部
  checkStatus.value = ''
  getTableData({ pageSize, pageIndex, movieName })
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
@/utils/tencentCloud
