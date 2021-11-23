<template>
  <div class="bigBox">
    <!-- 日历 -->
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
      <li v-for="(it, i) in item" :key="i" :class="it.galaName ? 'red' : ''" @click="it.galaName ? showDate(it) : ''">{{ it.num }}</li>
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
      // 获取当前月份第一天的下标(周几) 注:最小为周天=0,最大为周六=6
      let startDayIndex = new Date(year + "/" + month + "/1").getDay();

      // 获取当前月份一共多少天
      let monthDays = new Date(year, month, 0).getDate();

      // 初始化一个数组
      let initArr = new Array(7).fill({num: '', galaName : ''});  //  [{}, {}, {}, {}, {}, {}, {}]
      let returnArr = [initArr];  //  [[{}, {}, {}, {}, {}, {}, {}]]
      let outIndex = 0; // 最外围的数组下标

      // 循环遍历生成数组
      for (let i = 1; i <= 31; i++) {
        if (i > monthDays) break;
        // new Date(year + "/" + month + "/" + i).getDate();  //  获取该日期是所属月份的第几天,与下标i相同.
        var galaName = this.showGala(year,month,i)
        if(galaName) {
          returnArr[outIndex][startDayIndex] = {num: i, galaName};
        }else {
          returnArr[outIndex][startDayIndex] = {num: i, galaName : false};
        }
        if (startDayIndex >= 6) {  //  日历数组最后一位为周六,>=时换下一个数组push
          returnArr.push(new Array(7).fill({num: '', galaName : ''}));
          outIndex++;
        }
        startDayIndex = startDayIndex >= 6 ? 0 : startDayIndex + 1;
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
    },
    // 节日显示高亮
    showGala(year,month,day) {
      if ((month == 1) && (day == 1)) return '元旦'
      if ((month == 2) && (day ==13 )) return '除夕'
      if ((month == 2) && (day ==14 )) return '情人节'
      if ((month == 3) && (day == 1)) return '国际海豹日'
      if ((month == 3) && (day == 8)) return '国际劳动妇女节/中国保护母亲河日'
      if ((month == 3) && (day == 12)) return '植树节'
      if ((month == 4) && (day == 1)) return '愚人节'
      if ((month == 4) && (day == 5)) return '清明节'
      if ((month == 5) && (day == 1)) return '国际劳动节'
      if ((month == 5) && (day == 9)) return '母亲节'
      if ((month == 6) && (day == 1)) return '国际儿童节'
      if ((month == 6) && (day == 26)) return '国际禁毒日'
      if ((month == 8) && (day == 1)) return '建军节'
      if ((month == 8) && (day == 15)) return '日本无条件投降日/世纪婚纱日'
      if ((month == 8) && (day == 16)) return '七夕情人节'
      if ((month == 10) && (day == 20)) return '世界厨师日'
      if ((month == 10) && (day == 22)) return '世界传统医药日'
      if ((month == 10) && (day == 24)) return '联合国日/世界发展信息日'
      if ((month == 10) && (day == 25)) return '世界骨质疏松日/抗美援朝纪念日/环卫工人节'
      if ((month == 10) && (day == 31)) return '世界勤俭日/中国男性健康日'
      if ((month == 12) && (day == 24)) return '平安夜' 
      if ((month == 12) && (day == 25)) return '圣诞节'
      return false
    },
    // 点击事件
    showDate(it) {
      console.log(it);
      alert('今天是:' + it.galaName);
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
.red {
  background-color: cadetblue;
  cursor: pointer;
}
</style>