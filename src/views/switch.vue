<template>
  <div class="main">
    
    <switchDom
      :value.sync="val"
    ></switchDom>

    <switchDom
    :value.sync="val"
    :on="{text:'开启', textStyle:'color:green;font-weight:900;',dotsStyle:'background-color: rgba(0,120,215,0.8);',containerStyle:'background-color: white;border: 2px solid rgba(0,0,0,0.2);'}"
    :off="{text:'关闭', textStyle:'color:red;font-weight:900;',dotsStyle:'background-color: white;',containerStyle:'background-color: rgba(0,120,215,0.8);'}"
    :disabled="false"
    @manualChange='manualChange'></switchDom>

  </div>
</template>
<script>
export default {
  data() {
    return {
      val: true
    }
  },
  methods: {
    automaticChange(val) {
      console.log('自动更改', val)
    },
    manualChange(val) {
      console.log('手动更改', val)
    }
  }
}
</script>
<style scoped lang="scss">
  .main {
    display: flex;
    justify-content: center;
    // .a >>> .b { 
    //   /* ... */ 
    // }
    // /deep/ .b { 
    //   /* ... */ 
    // }
    ::v-deep .toggle-on {
      // background-image: url('../assets/img/loading/loading1.gif');
    }
  }
</style>