import axios from 'axios'
import store from '@/store'

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
// axios.defaults.headers = {
//   Authorization: `Bearer ${store.getUser().token}`
// }

// 设置请求拦截器
axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${store.getUser().token}`
  return config
}, function (error) {
  return Promise.reject(error)
})

// 设置响应器
axios.interceptors.response.use(function (res) {
  return res
}, (err) => {
  if (err.response.status === 401) {
    location.hash = '#/login'
  }
  return Promise.reject(err)
})
export default axios
