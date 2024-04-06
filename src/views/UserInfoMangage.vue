<template>
  <div class="user-info-mangage">
    <OptionsMenuCom>
      <template #options>
        <div class="options">
          <div class="left">
            <el-button
              type="primary"
              style="margin-right: 6px"
              v-permission="'add-user'"
              @click="
                () => {
                  title = '添加角色'
                  userDialogVisible = true
                }
              "
              >新增角色</el-button
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
    <UserDialogCom
      :title="title"
      v-model:userDialogVisible="userDialogVisible"
      @get-table-data="getTableData"
      @edit-user="editUser"
      :current-row="currentRow"
    ></UserDialogCom>
  </div>
</template>

<script setup>
import OptionsMenuCom from '@/layout/OptionsMenuCom.vue'
import BaseTableCom from '@/components/table/BaseTableCom.vue'
import { ref, onMounted, defineAsyncComponent } from 'vue'
import { getUserService, deleteUserService, editUserService } from '@/api/user'
const baseTableComRef = ref(null)
const title = ref('')
const tableData = ref([])
const total = ref(0)
let _id = ''
const currentRow = ref({})
const dropdownData = [
  {
    command: 'delete',
    handleAction: async (row) => {
      ElMessageBox.confirm(`确认要删除${row.userName}?`, 'Warning', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          const { _id } = row
          await deleteUserService({ _id })
            .then(async (res) => {
              ElMessage({ message: res.data.msg, type: 'success' })
              await getTableData()
            })
            .catch((err) => {
              ElMessage.error(err.data.msg)
            })
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: 'Delete canceled'
          })
        })
    },
    actionName: '删除',
    // 图标类型  对应element图标库
    icon: 'Delete',
    // 权限名称
    auth: 'delete-user'
  },
  {
    command: 'edit',
    handleAction: async (row) => {
      title.value = '修改角色'
      userDialogVisible.value = true
      _id = row._id
      currentRow.value = row
    },
    actionName: '修改',
    icon: 'Edit',
    auth: 'edit-user'
  },
  {
    command: 'view',
    handleAction: (row) => {
      title.value = '查看角色'
      currentRow.value = row
      userDialogVisible.value = true
    },
    actionName: '查看',
    icon: 'view',
    auth: 'view-user'
  }
]

const columnData = [
  {
    prop: 'userName',
    label: '角色名'
  },
  {
    prop: 'userPassword',
    label: '角色密码'
  },
  {
    prop: 'userType',
    label: '角色类型'
  }
]
const userDialogVisible = ref(false)
const UserDialogCom = defineAsyncComponent(
  () => import('@/components/dialog/UserDialogCom.vue')
)
const editUser = async (params) => {
  await editUserService({ _id, userData: params })
    .then(async (res) => {
      ElMessage({ message: res.data.msg, type: 'success' })
      await getTableData()
    })
    .catch((err) => {
      ElMessage.error(err.data.msg)
    })
}

const getTableData = async (pageSize = -1, currentPage = -1) => {
  // 没有传参数就使用表格当前的分页数据
  const pageSizeParams =
    pageSize === -1
      ? baseTableComRef.value.getPaginationData().pageSize
      : pageSize
  const currentPageParams =
    currentPage === -1
      ? baseTableComRef.value.getPaginationData().currentPage
      : currentPage
  baseTableComRef.value.changeTableLoading()
  await getUserService({
    pageSize: pageSizeParams,
    pageIndex: currentPageParams
  })
    .then((res) => {
      const { userArr, userTotal } = res.data
      tableData.value = userArr
      total.value = userTotal
      baseTableComRef.value.changeTableLoading()
    })
    .catch((err) => {
      ElMessage.error(err.data.msg)
    })
}
// 页面变化和页面数据容量被修改时触发的函数
const updateTableData = async (pageSize, currentPage) => {
  await getTableData(pageSize, currentPage)
}

onMounted(async () => {
  await getTableData()
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
}
</style>
