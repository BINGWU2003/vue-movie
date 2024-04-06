/*
 * @Author: BINGWU
 * @Date: 2024-03-27 00:33:27
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-03-29 01:57:18
 * @FilePath: \vue-movie\bingwu-admin\src\hooks\progress.js
 * @Describe:
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
import { ref } from 'vue'
export const useProgress = () => {
  const percentage = ref(0)
  const status = ref('')
  const dialogVisible = ref(false)
  const changePercentage = (newPercentage) => {
    percentage.value = newPercentage
  }
  const offProgress = (newState = 'success', message = '上传成功') => {
    setTimeout(() => {
      dialogVisible.value = false
    }, 1200)
    if (newState === 'success') {
      status.value = 'success'
      ElMessage({
        message,
        type: 'success'
      })
    } else {
      ElMessage.error(`${message}`)
      status.value = 'exception'
    }
  }
  const openProgress = () => {
    status.value = ''
    percentage.value = 0
    dialogVisible.value = true
  }
  return {
    percentage,
    status,
    dialogVisible,
    changePercentage,
    offProgress,
    openProgress
  }
}
