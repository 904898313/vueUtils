<template>
  <div class="yiji">
    <!-- 一级路由 -->
    <h1>yiji</h1>
    <router-link :to="{name: 'erji', params: {id:1}}">router-link 跳转 erji</router-link>
    <button @click="goErji">button 跳转 erji</button>
    <router-view/>
    一级参数：{{params}}
    <child :params.sync="params"></child>
  </div>
</template>

<script>
export default {
  methods: {
    goErji() {
      this.$router.push({path:'/yiji/erji', query:{id:1}})
    }
  },
  data() {
    return {
      params: { a:1 }
    }
  },
  components: {
    child: () => import ('./component.vue' )
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