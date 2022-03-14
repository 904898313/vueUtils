<template>
  <div>
    <h1>多行文本隐藏与展示</h1>
    <div id="box">
      <ellipsis v-if="show" :content="content" :rows="2" @click-btn="fun"></ellipsis>
      <span v-else>{{content}}<span @click="fun" class="hidden-btn">收起</span></span>
    </div>
  </div>
</template>

<script>
import ellipsis from 'vue-overflow-ellipsis'
import "vue-overflow-ellipsis/dist/index.css"
// 文档：https://www.npmjs.com/package/vue-overflow-ellipsis
const content = `
醉里挑灯看剑，梦回吹角连营。八百里分麾下炙，五十弦翻塞外声，沙场秋点兵。
马作的卢飞快，弓如霹雳弦惊。了却君王天下事，赢得生前身后名。可怜白发生！
`

export default {
  name: 'App',
  components: {
    ellipsis,
  },
  data () {
    return {
      content: content,
      show: true
    }
  },
  methods: {
    fun() {
      this.show = !this.show;
    }
  }
}
</script>
<style scoped>
#box {
  font-size: 12px;
  width: 350px;
  padding: 12px;
  background-color: aliceblue;
  margin: 0 auto;
  line-height: 1.5;
}
.hidden-btn {
  cursor: pointer;
  color: #4791ff;
}
</style>