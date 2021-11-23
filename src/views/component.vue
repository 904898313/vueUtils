<template>
  <div>
    <!-- 递归组件 -->
    二级参数：{{params}}
    <br>
    <button @click="change">修改二级props参数</button>
    /./递归组件
  </div>
</template>
<script>
export default {
  props: ['params'],
  data() {
    return {

    }
  },
  methods: {
    change() {
      // this.$props.params['b'] = 'b'
      // console.log(this.$props);
      this.$emit("update:params", {a:2})
    }
  }
}
</script>