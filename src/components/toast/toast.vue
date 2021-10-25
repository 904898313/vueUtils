<template>
  <transition name="fade">
    <div class="toast" v-if="visible">{{message}}</div>
  </transition>
</template>

<script>
export default {
  props: {
    message: String,
    visible: Boolean
  }
};
</script>

<style scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 10px 12px;
  font-size: 13px;
  border-radius: 5px;
  text-align: center;
  max-width: 200px;
  z-index: 9999999;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
