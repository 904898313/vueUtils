<template>
  <div class="home">
    <!-- 二级 -->
    <h1>erji</h1>
    <h1>erji</h1>
    <h1>erji</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route, 'this.$routethis.$routethis.$route')
  }
}
</script>
<style scoped>
h1{
  width: 100%;
  height: 50px;
  background-color: cadetblue;
  text-align: center;
  line-height: 50px;
}
</style>