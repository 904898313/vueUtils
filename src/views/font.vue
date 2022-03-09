<template>
  <div>
    字体包字体：<span class="font">{{text}}</span><br>
    普通字体：<span>{{text}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'text123'
    }
  }
}
</script>
<style scoped>
@font-face {
  font-family: DIN-Medium;
  src: url('../font/DIN-Medium.otf');
}
.font {
  font-family: DIN-Medium;
}
</style>