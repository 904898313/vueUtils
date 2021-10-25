<template>
  <div class="yiji">
    <h1>yiji</h1>
    <router-link to="/yiji/erji">router-link 跳转 erji</router-link>
    <button @click="goErji">button 跳转 erji</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    goErji() {
      this.$router.push('/yiji/erji')
    }
  }
}
</script>
<style scoped>
.yiji{
  width: 100%;
  height: 100vh;
  background-color: skyblue;
  text-align: center;
}
</style>