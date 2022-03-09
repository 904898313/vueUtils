<template>
  <div>
    <!-- 查询高亮 -->
    <input type="text" v-model="iptval" placeholder="输入查询高亮">
    <br>
    <br>
    <p>不区分大小写</p>
    <span v-html="PROCESSHTML" style="font-weight:600;"></span>
    <br>
    <p>区分大小写</p>
    <span v-html="processhtml" style="font-weight:600;"></span>
  </div>
</template>
<style>
.red {
  color: #42b983;
}
</style>
<script>
export default {
  data() {
    return {
      text: 'aBcdefghijklmnopqrstuvwxyzzZa',
      iptval: ''
    };
  },
  computed: {
    PROCESSHTML() {
      var REG = new RegExp(this.iptval, 'gi')
      var REG1 = new RegExp(this.iptval, 'i')
      if(this.text.match(REG1) && this.text.match(REG1)[0]) {
        return this.text.replace(REG, `<span class="red">${this.text.match(REG)[0]}</span>`)
      }
      return this.text.replace(REG, `<span class="red">${this.iptval}</span>`)
    },
    processhtml() {
      var reg = new RegExp(this.iptval, 'g');
      return this.text.replace(reg, `<span class="red">${this.iptval}</span>`)
    }
  },
  watch: {
  }
};
</script>