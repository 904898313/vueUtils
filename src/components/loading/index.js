import loading from './loading'
import vue from 'vue'

const loadingConstructor = vue.extend(loading);
const loadingInstance = new loadingConstructor({
  el: document.createElement('div')
});
let loadingDom = null

const LOADING =  {
  open: function () {
    loadingInstance.visible = true;
    if(!loadingDom) {
      loadingDom = loadingInstance.$el;
      document.body.appendChild(loadingDom)
    }
  },
  close() {
    loadingInstance.visible = false;
  }
}

// 原型链注册
// export default LOADING

// use注册
const loadingInstall =  {
  install: function() {
    vue.prototype.$loading = LOADING
  }
}
export default loadingInstall
