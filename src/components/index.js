import MyBread from './my-bread.vue'
import MyText from './my-text.vue'
export default {
  install (Vue) {
    Vue.component(MyBread.name, MyBread)
    Vue.component(MyText.name, MyText)
  }
}
