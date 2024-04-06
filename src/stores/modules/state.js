import { ref } from 'vue'
import { defineStore } from 'pinia'
const useStateStore = defineStore(
  'state',
  () => {
    const isCollapse = ref(false)
    const updateCollapse = () => {
      isCollapse.value = !isCollapse.value
    }
    const currentLang = ref('zh-cn')
    const updateCurrentLang = (lang) => {
      currentLang.value = lang
    }
    return { isCollapse, updateCollapse, currentLang, updateCurrentLang }
  },
  {
    persist: true
  }
)

export default useStateStore
