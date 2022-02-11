<template>
  <div>
    <h1>canvas 验证码功能</h1>
    <div class="verification-code-box">
      <input type="text" v-model="value" placeholder="请输入验证码">
      <verificationCode :codeLength="4" @change="change" :width="200" :pool="pool"></verificationCode>
    </div>
    <button @click="submit">提交</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890', // 字符串
      imgCode: '',
      value: '',
      isSubmitting: false
    }
  },
  methods: {
    change(code) {
      this.imgCode = code;
    },
    // 提交
    submit() {
      if (this.isSubmitting) return
      // if(this.imgCode == this.value) {  //  区分大小写
      if(this.imgCode.toUpperCase() == this.value.toUpperCase()) {  //  不区分大小写
        this.$loading.open();
        this.isSubmitting = true;
        setTimeout(() => {
          this.$loading.close();
          this.$toast('验证成功,注册成功');
          this.isSubmitting = false;
        }, 1000)
      }else{
        this.$toast('验证码错误')
      }
    }
  },
  mounted() {
  }
}
</script>
<style scoped>
.verification-code-box {
  display: flex;
  justify-content: center;
  margin: 12px 0;
}
</style>
