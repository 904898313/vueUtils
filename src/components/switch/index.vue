<template>
  <div class="toggle-switch" :class="{ disabled: disabled }">
    <div
      class="toggle"
      :class="thisValue ? 'toggle-on' : 'toggle-off'"
      :style="thisValue ? on.containerStyle : off.containerStyle"
      @click="manualChange($event)"
    >
      <p class="toggle-ring" :style="thisValue ? on.dotsStyle : off.dotsStyle">
        <slot></slot>
      </p>
    </div>
    <p class="content" :style="thisValue ? on.textStyle : off.textStyle">
      {{ thisValue ? on.text : off.text }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    },
    on: {
      type: Object,
      default: function() {
        return {
          text: 'on',
          textStyle: '',
          containerStyle: '',
          dotsStyle: ''
        }
      }
    },
    off: {
      type: Object,
      default: function() {
        return {
          text: 'off',
          textStyle: '',
          containerStyle: '',
          dotsStyle: ''
        }
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      thisValue: this.value,
    }
  },
  watch: {
    value: {
      handler(propsValue) {
        this.thisValue = propsValue;
      },
      deep: true,
      immediate: true
    },
    thisValue(val) {
      this.$emit('update:value', val);
      this.$emit('automaticChange', val)
    }
  },
  methods: {
    manualChange($event) {
      if(this.disabled) return
      this.thisValue = !this.thisValue;
      this.$emit('manualChange', $event, this.thisValue)
    }
  }
}
</script>
<style scoped lang="scss">
.toggle-switch {
  position: relative;
  display: flex;
  align-items: center;
  // disabled
  &.disabled {
    opacity: 0.3;
    filter: grayscale(1);
    .toggle {

      &:hover {
        opacity: 0.8;
      }
    }
  }
  // 开关基本样式
  .toggle {
    position: relative;
    width: 45px;
    height: 20px;
    padding: 5px;
    border-radius: 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    opacity: 0.8;
    transition: all 0.2s;
    
    &:hover {
      opacity: 1;
    }

    .toggle-ring {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      transition: all 0.2s;
    }
  }
  // 开关开启
  .toggle-on {
    background-color: rgba(0,120,215,0.8);

    .toggle-ring {
      background-color: white;
      margin-left: calc(100% - 10px);
    }
  }
  // 开关关闭
  .toggle-off {
    background-color: white;
    border: 2px solid rgba(0,0,0,0.2);
    
    .toggle-ring {
      background-color: rgba(0,0,0,1);
    }
    
  }
  // 文本基本样式
  .content {
    margin-left: 5px;
    font-size: 13px;
    cursor: default;
    transition: all 0.2s;
  }
}
</style>