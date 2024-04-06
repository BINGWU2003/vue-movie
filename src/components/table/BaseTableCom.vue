<template>
  <div class="base-table">
    <el-table
      :data="props.tableData"
      v-loading="tableLoading"
      height="500"
      ref="tableRef"
    >
      <el-table-column type="selection" width="55" v-if="props.showSelect" />
      <el-table-column
        v-for="(item, index) in props.columnData"
        :prop="item.prop"
        :label="item.label"
        :key="index"
        :width="item.width"
        :sortable="item.sortable"
        show-overflow-tooltip
      >
        <!-- tag列 -->
        <template #default="{ row }" v-if="item?.tagColumn">
          <el-tag :type="row[item.prop].tagType">{{
            row[item.prop].tagName
          }}</el-tag>
        </template>
        <!-- 图片列 -->
        <template #default="{ row }" v-else-if="item?.pictureColumn">
          <el-image
            style="
              width: 100px;
              height: 100px;
              display: flex;
              align-items: center;
              justify-content: center;
            "
            :src="row[item.prop]"
            fit
            lazy
          >
            <template #error>
              <el-icon size="30"><Picture /></el-icon>
            </template>
          </el-image>
        </template>
        <!-- 开关列 -->
        <template #default="{ row }" v-else-if="item?.switchColumn">
          <el-switch
            v-model="row[item.prop]"
            size="large"
            :loading="switchLoading"
            :before-change="beforeSwitchChange"
            @change="
              (switchState) => {
                emits('updateSwitchState', switchState)
              }
            "
          />
        </template>
      </el-table-column>
      <!-- 操作列 -->
      <el-table-column label="操作" v-if="props?.dropdownData">
        <template #default="{ row }">
          <el-dropdown
            trigger="click"
            @command="
              (command) => {
                handleCommand(command, row)
              }
            "
          >
            <el-button type="primary" icon="Operation">操作 </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <template
                  v-for="(item, index) in props.dropdownData"
                  :key="index"
                >
                  <!-- 权限控制  item.auth-->
                  <div v-permission="item.auth">
                    <el-dropdown-item
                      :command="item.command"
                      :icon="item.icon"
                      >{{ item.actionName }}</el-dropdown-item
                    >
                  </div>
                </template>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="没有数据" />
      </template>
    </el-table>
    <div class="pagination" v-if="props.showPagination">
      <el-pagination
        v-model:current-page="paginationData.currentPage"
        v-model:page-size="paginationData.pageSize"
        :page-sizes="props.pageSizes"
        layout="total, sizes, prev, pager, next, jumper"
        :total="props.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTable } from '@/hooks/table'
const props = defineProps({
  columnData: {
    type: Array,
    default: () => {
      return [
        {
          prop: 'columnProp1',
          label: '列1',
          width: '100'
        },
        {
          prop: 'columnProp2',
          label: '列2',
          width: '100'
        },
        {
          prop: 'columnProp3',
          label: '列3',
          width: '120'
        },
        {
          prop: 'columnProp4',
          label: '列4'
        }
      ]
    }
  },
  tableData: {
    type: Array
  },
  dropdownData: {
    type: Array
  },
  // 开关状态改变时的弹窗内容
  messageBoxContent: {
    type: String,
    default: '默认内容'
  },
  // 开关状态改变时的弹窗标题
  messageBoxTitle: {
    type: String,
    default: '默认标题'
  },
  // 显示多选行
  showSelect: {
    type: Boolean,
    default: false
  },
  // 当前页的数据容量
  pageSizes: {
    type: Array,
    default: () => {
      return [5, 10, 15]
    }
  },
  // 表格的数据总数
  total: {
    type: Number
  },
  // 是否显示分页
  showPagination: {
    type: Boolean,
    default: false
  }
})
const tableRef = ref(null)
const emits = defineEmits(['updateSwitchState'], ['updateTableData'])
const {
  tableLoading,
  switchLoading,
  changeTableLoading,
  changeSwitchLoading,
  beforeSwitchChange,
  handleCommand,
  paginationData,
  handleCurrentChange,
  handleSizeChange
} = useTable(props, emits)
const getSelectRows = () => {
  return tableRef.value.getSelectionRows()
}
const getPaginationData = () => {
  return paginationData.value
}
defineExpose({
  changeTableLoading,
  changeSwitchLoading,
  getSelectRows,
  getPaginationData
})
</script>

<style lang="scss" scoped>
.base-table {
  .pagination {
    margin: 40px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
