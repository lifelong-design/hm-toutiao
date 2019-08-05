// 封装操作sessionStorage的函数，提供给其他模块使用
// 约定好value的格式，字符串格式，json数据
const KEY = 'hm-toutiao'
export default {
  // 设置用户信息
  setUser (user) {
    window.sessionStorage.setItem(KEY, JSON.stringify(user))
  },
  // 获取用户信息
  getUser () {
    return JSON.parse(window.sessionStorage.getItem(KEY) || '{}')
  }
}
