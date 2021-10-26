<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/date">date</router-link> |
      <router-link to="/countdownTime">countdownTime</router-link> |
      <router-link to="/toast">toast</router-link> |
      <router-link to="/loading">loading</router-link> |
      <router-link to="/axios">axios</router-link> |
      <router-link to="/Highlight">Highlight</router-link> |
      <router-link to="/canvas">canvas</router-link> |
      <router-link to="/yiji">yiji</router-link> |
      <router-link to="/lottery"><span style="color: darkblue;">lottery 抽奖</span></router-link>
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
