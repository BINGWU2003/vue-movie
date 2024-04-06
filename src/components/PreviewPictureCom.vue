<!--
 * @Author: BINGWU
 * @Date: 2024-02-17 16:40:17
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-02-25 16:52:35
 * @FilePath: \vue-movie\bingwu-admin\src\components\PreviewPictureCom.vue
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
-->
<template>
  <div class="preview-picture">
    <el-upload
      class="avatar-uploader"
      :show-file-list="false"
      :auto-upload="false"
      :on-change="uploaderFile"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
    </el-upload>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// 图片的base64编码
const imageUrl = ref('')
// 图片文件
const file = ref(null)
const uploaderFile = async (imagefile) => {
  file.value = imagefile
  await fileToBase64(imagefile)
    .then((base64Url) => {
      imageUrl.value = base64Url
    })
    .catch((error) => {
      ElMessage.error(error)
    })
}

const fileToBase64 = (imagefile) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(imagefile.raw)
    reader.onload = () => {
      const base64Url = reader.result

      resolve(base64Url)
    }
    // 加载失败时
    reader.onerror = function () {
      reject(new Error('Failed to load file'))
    }
  })
}
// 获取和设置图片的url
const imageUrlFn = () => {
  return {
    getImageUrl() {
      return imageUrl
    },
    setImageUrl(newImageUrl) {
      imageUrl.value = newImageUrl
    }
  }
}

// 获取和设置文件
const fileFn = () => {
  return {
    getFile() {
      return file
    },
    setFile(newFile) {
      file.value = newFile
    }
  }
}

defineExpose({
  imageUrlFn,
  fileFn
})
</script>

<style lang="scss" scoped>
:deep(.avatar-uploader .avatar) {
  width: 178px;
  height: 178px;
  display: block;
}

:deep(.avatar-uploader .el-upload) {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

:deep(.avatar-uploader .el-upload:hover) {
  border-color: var(--el-color-primary);
}

:deep(.el-icon.avatar-uploader-icon) {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
