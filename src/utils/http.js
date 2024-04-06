/*
 * @Author: BINGWU
 * @Date: 2024-01-23 21:37:43
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-02-28 22:43:35
 * @FilePath: \vue-movie\bingwu-admin\src\utils\http.js
 * @Describe:
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
import axios from 'axios'
import { getUserStore } from '@/stores'
const userStore = getUserStore()
const instance = axios.create({
  baseURL: '/api'
})

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    config.headers.Authorization = `Bearer ${userStore.token}`
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if (response.data.code && response.data.code === 2000) {
      return Promise.reject(response)
    }
    return response
  },
  (error) => {
    const {
      response: {
        data: { msg }
      }
    } = error
    if (msg === '登陆过期') {
      // 清空token
      userStore.setToken('')
      ElMessage.error(msg)
    }
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default instance
