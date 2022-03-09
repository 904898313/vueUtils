<template>
  <div>
    font字体引入
    <p class="font">{{text}}</p>
    <p>{{text}}</p>
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