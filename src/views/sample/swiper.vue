<template>
  <api-container>
    <h1>Component</h1>
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="item in 5" :key="'comp_'+item">Slide {{item}}</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

      <h1>Directive</h1>
      <div v-swiper:mySwiper="swiperOption_a">
        <div class="swiper-wrapper">
          <swiper-slide v-for="item in 5" :key="'comp_'+item">Slide {{item}}</swiper-slide>
        </div>
        <div class="swiper-pagination"></div>
      </div>
  </api-container>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  name: 'sample-swiper',
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
        },
      },
      swiperOption_a: {
        pagination: {
          el: '.swiper-pagination',
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
};
</script>
<style scoped>
 div {
   font-size: 2rem;
 }
 .swiper-wrapper {
   height: 100px;
 }
 h1 {
   color: black;
 }
</style>
