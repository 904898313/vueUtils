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
* vue.use()
* 参数：{Object | Function}
* 用法：
* 安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。如果插件是一个函数，它会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入。
* 该方法需要在调用 new Vue() 之前被调用。
* 当 install 方法被同一个插件多次调用，插件将只会被安装一次。
*/

// Vue.prototype.$loading = loading; //  原型链注册
// Vue.prototype.$toast = toast;  //  原型链注册
Vue.use(loading).use(toast);  //  use注册

// 三级联动
import 'vue-area-linkage/dist/index.css'; // v2 or higher
import VueAreaLinkage from 'vue-area-linkage';
Vue.use(VueAreaLinkage);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
