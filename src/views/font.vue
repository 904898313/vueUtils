<template>
  <div>
    字体包1字体：<span class="font1">{{text}}</span><br>
    字体包2字体：<span class="font2">{{text}}</span><br>
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
@font-face {
  font-family: Avenir-Light;
  src: url('../font/Avenir-Light.otf');
}
@font-face {
  font-family: DIN-Medium;
  src: url('../font/DIN-Medium.otf');
}
.font1 {
  font-family: DIN-Medium;
}
.font2 {
  font-family: Avenir-Light;
}
</style>