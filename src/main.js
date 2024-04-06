/*
 * @Author: BINGWU
 * @Date: 2024-01-20 23:24:08
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-03-28 18:34:29
 * @FilePath: \vue-movie\bingwu-admin\src\main.js
 * @Describe:
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */

import 'element-plus/theme-chalk/dark/css-vars.css'
import 'normalize.css'
import 'vue3-virtual-scroller/dist/vue3-virtual-scroller.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import i18n from './language'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import VueVirtualScroller from 'vue3-virtual-scroller'
// 导入插件
import permission from './plugins/permission'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app
  .use(pinia)
  .use(router)
  .use(i18n)
  .use(permission)
  .use(VueVirtualScroller)
  .mount('#app')
