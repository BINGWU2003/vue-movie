/*
 * @Author: BINGWU
 * @Date: 2024-01-23 22:17:57
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-01-23 22:45:53
 * @FilePath: \bingwu-admin\src\language\index.js
 * @Describe:
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
import { createI18n } from 'vue-i18n'
import zhCN from './locales/zh-CN'
import enUS from './locales/en-US'

const i18n = createI18n({
  legacy: false,
  locale: 'zh-cn', // 默认显示语言
  messages: {
    'zh-cn': zhCN,
    'en-us': enUS
  }
})

export default i18n
