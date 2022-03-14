<template>
  <div id="app" class="home-wrap">
    <h3>切换到F12手机模式查看</h3>
    <!-- 自定义选择 -->
    <div class="input-box">
      <input class="input" type="text" v-model="base" />
      <div class="btn" @click="baseFlag = true">自定义选择</div>
    </div>
    <LinkageBase @emitCancel="baseFlag = false" @emitConfirm="handleConfirm(arguments, 'base')" :isShow="baseFlag"></LinkageBase>
    <!-- 时间选择 -->
    <div class="input-box">
      <input class="input" type="text" v-model="time" />
      <div class="btn" @click="timeFlag = true">时间选择</div>
    </div>
    <LinkageTime cancelText="cancel" confirmText="confirm" @emitCancel="timeFlag = false" @emitConfirm="handleConfirm(arguments, 'time', ':')" :isShow="timeFlag"></LinkageTime>
    <!-- 日期选择 -->
    <div class="input-box">
      <input class="input" type="text" v-model="date" />
      <div class="btn" @click="dateFlag = true">日期选择</div>
    </div>
    <LinkageDate @emitCancel="dateFlag = false" @emitConfirm="handleConfirm(arguments, 'date')" :isShow="dateFlag"></LinkageDate>
    <!-- 地址选择 -->
    <div class="input-box">
      <input class="input" type="text" v-model="addr" />
      <div class="btn" @click="addrFlag = true">地址选择</div>
    </div>
    <LinkageAddr :initVal="['陕西省', '西安市', '长安区']" @emitCancel="addrFlag = false" @emitConfirm="handleConfirm(arguments, 'addr')" :isShow="addrFlag"></LinkageAddr>
  </div>
</template>

<script>
import {
  LinkageBase,
  LinkageTime,
  LinkageDate,
  LinkageAddr
} from './components';

export default {
  name: 'Home',
  components: { LinkageBase, LinkageTime, LinkageDate, LinkageAddr },
  data() {
    return {
      base: '',
      baseFlag: false,
      time: '',
      timeFlag: false,
      date: '',
      dateFlag: false,
      addr: '',
      addrFlag: false
    };
  },
  methods: {
    handleConfirm(args, type, divide = '-') {
      let { val, bool } = args[0];
      if (bool) {
        this[type] = val.join(divide);
        this[`${type}Flag`] = false;
      }
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
}

.home-wrap {
  font-size: 14px;
  padding: 10px;
  .img-box {
    width: 150px;
    height: 150px;
    margin: 0 auto;
    .img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .input-box {
    position: relative;
    display: flex;
    align-items: center;
    height: 38px;
    margin-top: 30px;
    padding-left: 10px;
    border: 1px solid #ccc;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: calc(100% - 100px);
    }
    .input {
      display: flex;
      align-items: center;
      height: inherit;
      font-size: inherit;
      border: 0 none;
      background: none;
      width: calc(100% - 100px);
    }
    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      height: inherit;
      background: #ccc;
    }
  }
}
</style>
