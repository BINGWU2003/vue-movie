<!--
 * @Author: BINGWU
 * @Date: 2024-02-18 22:05:52
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-03-27 00:59:31
 * @FilePath: \vue-movie\bingwu-admin\src\views\profile\EditImageView.vue
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
-->
<template>
  <div class="edit-image">
    <PreviewPictureCom ref="previewPictureComRef"></PreviewPictureCom>
    <div class="button">
      <el-button type="primary" @click="handleClick">提交</el-button>
    </div>
  </div>
</template>

<script setup>
import PreviewPictureCom from '@/components/PreviewPictureCom.vue'
import { getUserStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { ref, onMounted } from 'vue'
import { editUserService, getUserInfoService } from '@/api/user'
import { smallFileUpload } from '@/utils/tencentCloud'
const { userImage, _id } = storeToRefs(getUserStore())
const { setUserImage } = getUserStore()
const previewPictureComRef = ref(null)
const handleClick = async () => {
  const file = previewPictureComRef.value.fileFn().getFile()
  if (file.value) {
    await smallFileUpload(file.value).then(async (userImage) => {
      await editUserService({
        _id: _id.value,
        userData: { userImage }
      }).then(async (res) => {
        ElMessage({
          type: 'success',
          message: res.data.msg
        })
        await getUserInfoService({ _id: _id.value }).then((res) => {
          const {
            userData: { userImage }
          } = res.data
          setUserImage(userImage)
          previewPictureComRef.value.fileFn().setFile(null)
        })
      })
    })
  } else {
    ElMessage.error('请选择图片!!')
  }
}
onMounted(() => {
  previewPictureComRef.value.imageUrlFn().setImageUrl(userImage.value)
})
</script>

<style lang="scss" scoped>
.edit-image {
  width: 30%;
  .button {
    margin-top: 40px;
  }
}
</style>
@/utils/tencentCloud
