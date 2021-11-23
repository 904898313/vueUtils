<template>
  <div>
    <!-- loading -->
    <button @click="showLoading">showLoading</button>
    <button @click="hiddenLoading">hiddenLoading</button>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    showLoading() {
      this.$loading.open();
    },
    hiddenLoading() {
      this.$loading.close();
    }
  }
}
</script>