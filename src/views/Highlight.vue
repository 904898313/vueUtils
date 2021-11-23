<template>
  <div>
    <!-- 查询高亮 -->
    <input type="text" v-model="iptval" placeholder="输入查询高亮">
    <br>
    <br>
    <p>不区分大小写</p>
    <span>{{text.toLowerCase().indexOf(iptval.toLowerCase()) > -1 ? text.slice(0,text.toLowerCase().indexOf(iptval.toLowerCase())) : text}}</span>
    <span style="color:red">{{text.slice(text.toLowerCase().indexOf(iptval.toLowerCase()),text.toLowerCase().indexOf(iptval.toLowerCase())+iptval.length)}}</span>
    <span>{{text.toLowerCase().indexOf(iptval.toLowerCase()) > -1 ? text.substr(text.toLowerCase().indexOf(iptval.toLowerCase())+iptval.length) : ''}}</span>
    <br>
    <br>
    <p>区分大小写</p>
    <span>{{text.indexOf(iptval) > -1 ? text.slice(0,text.indexOf(iptval)) : text}}</span>
    <span style="color:red">{{text.slice(text.indexOf(iptval),text.indexOf(iptval)+iptval.length)}}</span>
    <span>{{text.indexOf(iptval) > -1 ? text.substr(text.indexOf(iptval)+iptval.length) : ''}}</span>
    <br>
    <br>
    <h1>全局匹配</h1>
    <br>
    <p>不区分大小写</p>
    <span v-html="PROCESSHTML"></span>
    <br>
    <br>
    <p>区分大小写</p>
    <span v-html="processhtml"></span>
  </div>
</template>
<style>
.red {
  color: red;
}
</style>
<script>
export default {
  data() {
    return {
      text: 'aBcdefghijklmnopqrstuvwxyzaBcdefghijklmnopqrstuvwxyzzzZa',
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