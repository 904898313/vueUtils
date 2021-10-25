<template>
  <div>
     <!-- ref="mySwiper" -->
    <swiper :options="swiperOption">
      <swiper-slide class="item">I'm Slide 1</swiper-slide>
      <swiper-slide class="item">I'm Slide 2</swiper-slide>
      <swiper-slide class="item">I'm Slide 3</swiper-slide>
      <swiper-slide class="item">I'm Slide 4</swiper-slide>
      <swiper-slide class="item">I'm Slide 5</swiper-slide>
      <swiper-slide class="item">I'm Slide 6</swiper-slide>
      <swiper-slide class="item">I'm Slide 7</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
    </swiper>
  </div>
</template>
<style>
.item {
  width: 40%;
  height: 200px;
  background-color: skyblue;
  text-align: center;
  line-height: 200px;
}
.swiper-pagination-bullet-active {
  background: red !important;
}
</style>
<script>
// 引入插件
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        // autoplay: {
        //   delay: 3000,
        //   stopOnLastSlide: false,
        //   disableOnInteraction: false
        // },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true //允许分页点击跳转
        },
        // 设置点击箭头
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev"
        // },
        slidesPerView: 'auto'
      }
    };
  },
  computed: {
    // swiper() {
    //   return this.$refs.mySwiper.swiper;
    // }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  }
};
</script>