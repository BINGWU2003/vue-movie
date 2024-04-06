/*
 * @Author: BINGWU
 * @Date: 2024-03-26 22:39:33
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-03-26 23:10:08
 * @FilePath: \bingwu-admin\src\hooks\table.js
 * @Describe:
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
import { ref } from 'vue'
export const useTable = (props, emits) => {
  const tableLoading = ref(false)
  const switchLoading = ref(false)
  const changeTableLoading = () => {
    tableLoading.value = !tableLoading.value
  }
  const paginationData = ref({
    currentPage: 1,
    pageSize: props.pageSizes[0]
  })
  const changeSwitchLoading = () => {
    switchLoading.value = !switchLoading.value
  }
  const beforeSwitchChange = () => {
    return ElMessageBox.confirm(
      props.messageBoxContent,
      props.messageBoxTitle,
      {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }
    )
      .then(() => {
        return new Promise((resolve) => {
          ElMessage.success('变更成功')
          return resolve(true)
        })
      })
      .catch(() => {
        return new Promise((_, reject) => {
          ElMessage.warning('取消变更')
          return reject()
        })
      })
  }
  const handleCommand = (command, row) => {
    const dropdownItem = props.dropdownData.find((item) => {
      return item.command === command
    })
    dropdownItem.handleAction(row)
  }
  const handleCurrentChange = (currentPage) => {
    paginationData.value.currentPage = currentPage
    // 传入当前页码容量大小和当前页码
    emits('updateTableData', paginationData.value.pageSize, currentPage)
  }

  const handleSizeChange = (pageSize) => {
    // 当前页的数据容量改变，重置页码为1
    paginationData.value.pageSize = pageSize
    paginationData.value.currentPage = 1
    // 传入当前页面容量大小和当前页码
    emits('updateTableData', pageSize, paginationData.value.currentPage)
  }
  return {
    tableLoading,
    switchLoading,
    changeTableLoading,
    changeSwitchLoading,
    beforeSwitchChange,
    handleCommand,
    paginationData,
    handleCurrentChange,
    handleSizeChange
  }
}
