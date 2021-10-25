<template>
  <div>
    <p>距离活动开始</p>
    <span class="num">{{day}}</span><span>天</span>
    <span class="num">{{hour}}</span><span>小时</span>
    <span class="num">{{minute}}</span><span>分钟</span>
    <span class="num">{{second}}</span><span>秒</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      day: '00',
      hour: '00',
      minute: '00',
      second: '00'
    }
  },
  mounted() {
    var newdate = new Date().getTime()+240*60*60*1000
    this.showCountDown(newdate)
    setInterval(()=> {
      this.showCountDown(newdate)
    }, 1000)
  },
  methods: {
    showCountDown(timeStamp) {
      var now = new Date();
      var leftTime = timeStamp - now.getTime();
      if(leftTime <= 0) {
        this.day = '00';
        this.hour = '00';
        this.minite = '00';
        this.second = '00';
        return;
      }
      var dd = parseInt(leftTime / 1000 / 60 / 60 / 24); // 计算剩余的天数
      var hh = parseInt(leftTime / 1000 / 60 / 60 % 24); // 计算剩余的小时数
      var mm = parseInt(leftTime / 1000 / 60 % 60); // 计算剩余的分钟数
      var ss = parseInt(leftTime / 1000 % 60); // 计算剩余的秒数
      this.day = this.checkTime(dd);
      this.hour = this.checkTime(hh);
      this.minute = this.checkTime(mm);
      this.second = this.checkTime(ss); // 小于10的话加0
    },
    checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    },
  }
}
</script>
<style scoped>
  span{
    font-size: 20px;
  }
  .num{
    color: skyblue;
    margin: 0 5px;
  }
</style>