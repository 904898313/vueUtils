import toast from './toast.vue'
import Vue from 'vue'

const toastConstructor = Vue.extend(toast);

// 创建组件实例
const toastInstance = new toastConstructor({
    el: document.createElement('div')
  })
let toastDom = null;

const TOAST = message => {
  toastInstance.message = message;
  toastInstance.visible = true;
  if(!toastDom) {
    toastDom = toastInstance.$el
    document.body.appendChild(toastDom)
  }

  Vue.nextTick(function() {
    setTimeout(() => {
      toastInstance.visible = false;
    }, 2000);
  })
}

export default TOAST