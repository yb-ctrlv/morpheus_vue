<template>
  <div id="container" class="submain api">
    <section id="scroll">
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
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
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
  created() {
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
    ...mapState({}),
    ...mapGetters({}),
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    // this.swiper.slideTo(3, 1000, false);
  },
  methods: {
    ...mapMutations([]),
    ...mapActions([]),
  },
  watch: {

  },

};
/* router에 선언된 컴포넌트에서만 사용가능합니다.(global 컴포넌트, 재사용되는 컴포넌트에서 사용 X)
 생명주기 사용하는 경우에만 주석해제 해주세요
 function안에 this는 현재 route에 바인딩된 vue instance 중 마지막 컴포넌트 객체를 리턴합니다.
 만약 default 컴포넌트가 아닌 components로 한 path에 여러개 컴포너트가 바인딩되있는 경우
 this는 default가 아닌 { default: component, comp2: component } 형태로 바인딩됩니다.
 */
// $mcore.onHide('ROUTE_NAME', function () {
//   do something...
// });
// $mcore.onRestore('ROUTE_NAME', function () {
//   do something...
// });
// $mcore.onBack('ROUTE_NAME', function () {
//   do something...
// });
// $mcore.onPause('ROUTE_NAME', function () {
//   do something...
// });
// $mcore.onResume('ROUTE_NAME', function () {
//   do something...
// });
// $mcore.onDestroy('ROUTE_NAME', function () {
//   do something...
// });
</script>
<!--
  scoped 미선언시 global 영역으로 css가 적용됩니다.
  선언할 경우 component 안에서만 적용됩니다.
 -->
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
