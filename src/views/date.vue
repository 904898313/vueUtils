<template>
  <div class="bigBox">
    <div class="title">
      <span class="prev" @click="handlePrev()">&lt;</span>
      {{ nowYear }}年{{ nowMonth }}月
      <span class="next" @click="handleNext()">&gt;</span>
    </div>
    <ul>
      <li>日</li>
      <li>一</li>
      <li>二</li>
      <li>三</li>
      <li>四</li>
      <li>五</li>
      <li>六</li>
    </ul>
    <ul v-for="(item, index) in list" :key="index">
      <li v-for="(it, i) in item" :key="i">{{ it }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      nowYear: "",
      nowMonth: ""
    };
  },
  mounted() {
    console.log(window)
    // 获取当前时间的年月日
    let nowDate = new Date();
    this.nowYear = nowDate.getFullYear();
    this.nowMonth = nowDate.getMonth() + 1;
    this.calendarInit(this.nowYear, this.nowMonth);
  },
  methods: {
    // 其实用js写日历，最核心的关键在于渲染出这个二维数组
    calendarInit(year, month) {
      this.list = this.renderCalendar(year, month);
    },
    // 构造渲染日历的二维数组
    renderCalendar(year, month) {
      // 记录当前月份第一天的下标
      let startDate = new Date(year + "/" + month + "/1");
      let startDayIndex = startDate.getDay();

      // 获取当前月份一共多少天
      let monthDays = new Date(year, month, 0).getDate();

      // 初始化一个数组
      let initArr = new Array(7).fill("");
      let returnArr = [initArr];
      let outIndex = 0; // 最外围的数组下标

      // 循环遍历生成数组
      for (let i = 0; i < 31; i++) {
        if (i + 1 > monthDays) break;
        let dateInfo = new Date(year + "/" + month + "/" + (i + 1)).getDate();
        returnArr[outIndex][startDayIndex] = dateInfo;
        if (startDayIndex + 1 > 6 && i + 1 < monthDays) {
          returnArr.push(new Array(7).fill(""));
          outIndex++;
        }
        startDayIndex = startDayIndex + 1 > 6 ? 0 : startDayIndex + 1;
      }
      console.log(returnArr);
      return returnArr;
    },
    // 上一月
    handlePrev() {
      let prevMonth = this.nowMonth - 1 > 0 ? this.nowMonth - 1 : 12,
        prevYear = this.nowMonth - 1 > 0 ? this.nowYear : this.nowYear - 1;
      this.nowYear = prevYear;
      this.nowMonth = prevMonth;
      this.calendarInit(this.nowYear, this.nowMonth);
    },
    // 下一月
    handleNext() {
      let nextMonth = this.nowMonth + 1 > 12 ? 1 : this.nowMonth + 1,
        nextYear = this.nowMonth + 1 > 12 ? this.nowYear + 1 : this.nowYear;
      this.nowYear = nextYear;
      this.nowMonth = nextMonth;
      this.calendarInit(this.nowYear, this.nowMonth);
    }
  }
};
</script>
<style lang="scss" scoped>
.bigBox {
  width: 100%;
  .title {
    width: 100%;
    height: 50px;
    display: flex;
    font-size: 18px;
    justify-content: center;
    line-height: 50px;
    .prev {
      display: block;
      width: 50px;
      height: 50px;
      cursor: pointer;
    }
    .next {
      display: block;
      width: 50px;
      height: 50px;
      cursor: pointer;
    }
  }
  ul {
    width: 100%;
    display: flex;
    li {
      flex: 1;
      text-align: center;
      height: 50px;
      line-height: 50px;
      border: 1px solid skyblue;
    }
  }
}
</style>