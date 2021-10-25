import loading from './loading'
import vue from 'vue'

const loadingConstructor = vue.extend(loading);
const loadingInstance = new loadingConstructor({
  el: document.createElement('div')
});
let loadingDom = null

const LOADING =  function() {
  vue.prototype.$loading = {
    open: function () {
      console.log(loadingInstance,'loadingInstance')
      console.log(vue,'vue')
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
}

export default { install: LOADING }