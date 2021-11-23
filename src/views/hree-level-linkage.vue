<template>
  <div>
    <!-- 省市区三级联动 -->
    <!-- {{Data}} -->
    <!-- <p v-for="(item, index) in Data" :key="index">{{item.name}}</p> -->
    <select name="pid">
      <option @click="pidfun(item)" v-for="(item) in Data" :key="item.pid">{{item.name}}id:{{item.pid}}</option>
    </select>
    <select name="w">
      <option v-for="(item1, index1) in cityData" :key="index1">{{item1.name}}</option>
    </select>
  </div>
</template>

<script>
import Data from "../assets/data/json"
export default {
  data() {
    return {
      Data: Data,
      pid: 5
    }
  },
  mounted() {
    setInterval(() => {
      console.log(this.pid);
    },1000)
    console.log(this.Data);
  },
  computed: {
    cityData() {
      return this.Data.filter((item) => {
        return item.pid == this.pid
      })[0].sub
    }
  },
  methods: {
    pidfun(item) {
      this.pid = item.pid;
      console.log(this.pid)
    }
  }
}
</script>

<style scoped>

</style>