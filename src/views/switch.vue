<template>
  <div class="main">
    <!-- <switchDom
      :value.sync="val"
      :on="{text:'开启', textStyle:'color:green;',containerStyle:'width:100px;padding:0px;border:0px;',dotsStyle:'width:20px;height:20px;background-color: chocolate;margin-left: calc(100% - 20px);border-radius: 0;'}"
      :off="{text:'关闭', textStyle:'color:red;',containerStyle:'width:100px;background-color: yellow;padding:0px;border:0px;',dotsStyle:'background-color: fuchsia;'}"
      :disabled="false"
      @automaticChange='automaticChange'
      @manualChange='manualChange'
    >
      <slot><img src="../assets/img/loading/loading1.gif" alt="" style="width:100%;height:100%;">开启</slot>
    </switchDom> -->
    
    <switchDom
      :value.sync="val"
      :on="{text:'开启', textStyle:'color:green;',containerStyle:'width:100px;'}"
      :off="{text:'关闭', textStyle:'color:red;',containerStyle:'width:200px;',dotsStyle:'background-color: fuchsia;'}"
      :disabled="false"
      @automaticChange='automaticChange'
      @manualChange='manualChange'
    ></switchDom>

    <switchDom
    :value.sync="val"
    :on="{text:'开启', textStyle:'color:green;'}"
    :off="{text:'关闭', textStyle:'color:red;'}"
    :disabled="false"
    @automaticChange='automaticChange'
    @manualChange='manualChange'></switchDom>
    
    <!-- <switchDom></switchDom> -->
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