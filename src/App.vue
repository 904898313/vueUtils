<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">多行文本隐藏</router-link> |
      <router-link to="/about">拖拽</router-link> |
      <router-link to="/date">日历</router-link> |
      <router-link to="/countdownTime">倒计时</router-link> |
      <router-link to="/toast">toast</router-link> |
      <router-link to="/loading">loading</router-link> |
      <router-link to="/axios">axios请求</router-link> |
      <router-link to="/Highlight">搜索高亮</router-link> |
      <router-link to="/canvas">canvas 验证码</router-link> |
      <router-link to="/switch">滑块开关</router-link> |
      <router-link to="/font">字体引入</router-link> |
      <router-link to="/hree-level-linkage">省市区三级联动</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  mounted() {
    console.log(this.$moment().format('YYYY-MM-DD HH:MM:ss'),'momentmomentmomentmoment');
  }
}
</script>
<style lang="scss">
@import "@/assets/style/main.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    line-height: 100%;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
