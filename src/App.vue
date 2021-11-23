<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">拖拽</router-link> |
      <router-link to="/date">日历</router-link> |
      <router-link to="/countdownTime">倒计时</router-link> |
      <router-link to="/toast">toast</router-link> |
      <router-link to="/loading">loading</router-link> |
      <router-link to="/axios">axios请求</router-link> |
      <router-link to="/Highlight">搜索高亮</router-link> |
      <router-link to="/canvas">canvas 验证码</router-link> |
      <router-link to="/yiji">二级路由</router-link> |
      <router-link to="/lottery"><span style="color: darkblue;">lottery 抽奖</span></router-link> |
      <router-link to="/hree-level-linkage">省市区三级联动</router-link>
    </div>
    <router-view/>
  </div>
</template>
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

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
