import switchCom from './index.vue'
import Vue from 'vue'

var handler = {
  install: function() {
    Vue.component('switchDom', switchCom);
  }
}

export default handler