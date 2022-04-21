import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/toast'
import loading from './components/loading'
import verificationCode from 'ycg-vue-verification-code'
import switchDom from 'ycg-vue-switch'
import moment from 'moment'
Vue.prototype.$moment = moment;  //  原型链注册

import './filters';// 直接运行的js代码
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
Vue.use(loading).use(toast).use(switchDom).use(verificationCode);  //  use注册
12
2
3
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
