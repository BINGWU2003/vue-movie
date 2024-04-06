<!--
 * @Author: BINGWU
 * @Date: 2024-02-24 22:57:50
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-03-29 02:05:27
 * @FilePath: \vue-movie\bingwu-admin\src\components\dialog\MovieDialogCom.vue
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
-->
<template>
  <div class="movie-dialog">
    <el-dialog
      v-model="dialogVisible"
      :title="props.title"
      width="500"
      @open="handleOpen"
    >
      <el-form
        label-width="100px"
        :model="formData"
        :rules="rules"
        style="max-width: 460px"
        ref="formRef"
      >
        <el-form-item label="电影图片" prop="movieImageFile">
          <PreviewPictureCom ref="previewPictureComRef"></PreviewPictureCom>
        </el-form-item>
        <el-form-item label="电影名" prop="movieName">
          <el-input v-model="formData.movieName" />
        </el-form-item>
        <el-form-item label="电影作者" prop="movieAuthor">
          <el-input v-model="formData.movieAuthor" />
        </el-form-item>
        <el-form-item label="电影链接" prop="movieLink">
          <el-input v-model="formData.movieLink" />
        </el-form-item>
        <el-form-item label="审核状态">
          <el-tag
            :type="
              props.title === '新增电影'
                ? 'warning'
                : props.currentRow.checkStatus.tagType
            "
            >{{
              props.title === '新增电影'
                ? '待审核'
                : props.currentRow.checkStatus.tagName
            }}</el-tag
          >
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer" v-show="props.title !== '查看电影'">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleSubmit"> 确认 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import PreviewPictureCom from '../PreviewPictureCom.vue'
import { ref, computed } from 'vue'
const previewPictureComRef = ref(null)
const formRef = ref(null)
const formData = ref({
  movieName: '',
  movieAuthor: '',
  movieLink: '',
  checkStatus: 'uncheck',
  movieImageFile: null
})
const hasMovieImageFile = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请选择图片'))
  } else {
    callback()
  }
}
const rules = ref({
  movieName: [{ required: true, message: '请输入电影名', trigger: 'blur' }],
  movieAuthor: [{ required: true, message: '请输入电影作者', trigger: 'blur' }],
  movieLink: [{ required: true, message: '请输入电影链接', trigger: 'blur' }],
  movieImageFile: [{ validator: hasMovieImageFile, trigger: 'blur' }]
})

const props = defineProps({
  title: {
    type: String,
    default: '默认值'
  },
  currentRow: {
    type: Object
  },
  movieDialogVisible: {
    type: Boolean
  }
})
const dialogVisible = computed({
  get: () => props.movieDialogVisible,
  set: (val) => emits('update:movieDialogVisible', val)
})
const emits = defineEmits([
  'addMovie',
  'editMovie',
  'update:movieDialogVisible'
])

const handleSubmit = () => {
  const file = previewPictureComRef.value.fileFn().getFile()
  const imageUrl = previewPictureComRef.value.imageUrlFn().getImageUrl()
  formData.value.movieImageFile = file.value ? file.value : imageUrl.value
  formRef.value
    .validate()
    .then(() => {
      if (props.title === '修改电影') {
        const {
          checkStatus: { tagName }
        } = props.currentRow
        if (tagName === '审核未通过') {
          formData.value.checkStatus = 'blockCheck'
        } else if (tagName === '审核通过') {
          formData.value.checkStatus = 'passCheck'
        } else if (tagName === '待审核') {
          formData.value.checkStatus = 'uncheck'
        }
      }
      const params = {
        ...formData.value
      }
      if (props.title === '新增电影') {
        emits('addMovie', params, file.value)
      } else if (props.title === '修改电影') {
        emits('editMovie', params, file.value)
      }
    })
    .catch(() => {})
}
const handleOpen = () => {
  formRef.value.clearValidate()
  // 清空图片文件
  previewPictureComRef.value.fileFn().setFile(null)
  if (props.title === '新增电影') {
    previewPictureComRef.value.imageUrlFn().setImageUrl('')
    formData.value.movieName = ''
    formData.value.movieAuthor = ''
    formData.value.movieLink = ''
  } else {
    const { movieName, movieAuthor, movieImage, movieLink, checkStatus } =
      props.currentRow
    previewPictureComRef.value.imageUrlFn().setImageUrl(movieImage)
    formData.value.movieName = movieName
    formData.value.movieAuthor = movieAuthor
    formData.value.movieLink = movieLink
    formData.value.checkStatus = checkStatus.tagName
  }
}
</script>

<style lang="scss" scoped></style>
