import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/toast'
import loading from './components/loading'
// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.prototype.$toast = toast
// Vue.prototype.$loading = loading
Vue.use(loading)
router.beforeEach((to, from, next) => {
  console.log(to, from)
  if(to.path == from.path) {
    next({ path: '/' });
  }else {
    next()
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
