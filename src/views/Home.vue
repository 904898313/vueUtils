<template>
  <div>
    <h1>多行文本隐藏</h1>
    <ellipsis v-if="show" :content="content" :rows="1" @click-btn="fun" class="c"></ellipsis>
    <span v-else>{{content}}</span>
  </div>
</template>

<script>
import ellipsis from 'vue-overflow-ellipsis'
import "vue-overflow-ellipsis/dist/index.css"

const content = `
五百里滇池，奔来眼底，披襟岸帻，喜茫茫空阔无边。看东骧神骏，西翥灵仪，北走蜿蜒，南翔缟素。高人韵士，何妨选胜登临。趁蟹屿螺洲，梳裹就风鬟雾鬓；更苹天苇地，点缀些翠羽丹霞，莫辜负四围香稻，万顷晴沙，九夏芙蓉，三春杨柳。数千年往事，注到心头，把酒凌虚，叹滚滚英雄谁在。想汉习楼船，唐标铁柱，宋挥玉斧，元跨革囊。伟烈丰功，费尽移山心力。尽珠帘画栋，卷不及暮雨朝云；便断碣残碑，都付与苍烟落照。只赢得几杵疏钟，半江渔火，两行秋雁，一枕清霜。
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
      console.log('dianji l ')
      this.show = false;
    }
  }
}
</script>
<style scoped>
.c {
  font-size: 12px;
}
</style>