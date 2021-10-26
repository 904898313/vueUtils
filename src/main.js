import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/toast'
import loading from './components/loading'

/** 
 * 大转盘/九宫格 抽奖 文档：https://100px.net/
 * 完整加载 */
import VueLuckyCanvas from '@lucky-canvas/vue'
Vue.use(VueLuckyCanvas)
/**
* 按需引入
* import { LuckyWheel, LuckyGrid } from '@lucky-canvas/vue'
* 大转盘抽奖
* Vue.components('LuckyWheel', LuckyWheel)
* 九宫格抽奖
* Vue.components('LuckyGrid', LuckyGrid)
*/

// Vue.prototype.$loading = loading; //  原型链注册
Vue.use(loading);  //  use注册

// Vue.prototype.$toast = toast;  //  原型链注册
Vue.use(toast);  //  use注册

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
