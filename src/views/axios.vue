<template>
  <div>
    axios
    <button @click="getListfun">请求接口</button>
  </div>
</template>
<style scoped>
</style>
<script>
import { getList } from '../api/index.js'
export default {
  data() {
    return {
    };
  },
  methods: {
    getListfun() {
      console.log(process.env,'process.envprocess.env')
      this.$loading.open();
      getList().then(res => {
        console.log(res);
        this.$loading.close();
      })
    }
  }
};
</script>