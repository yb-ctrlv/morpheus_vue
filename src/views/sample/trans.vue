<template>
  <div id="container" class="submain api">
    <section id="scroll">
      <pre>
        JQUERY의 slide up/down을 라이브러리를 통해 구현하였습니다.
        transition을 통해서 여러가지 애니매이션이 가능합니다.
      </pre>
      <div>
        <button @click="slide = !slide">슬라이드 토글</button>
        <slide-up-down :active="slide" tag="ul" :duration="500" >
            <li v-for="(item, index) in 10" :key="index">HELLO{{item}}</li>
        </slide-up-down>
      </div>
      <p>
        당겨서 새로고침 구현
      </p>
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import PullToRefresh from 'pulltorefreshjs';

window.pull = PullToRefresh;
export default {
  name: 'sample-transition',
  data() {
    return {
      slide: false,
    };
  },
  mounted() {
    PullToRefresh.init({
      mainElement: '#scroll',
      onRefresh() {
        console.log('REFRESH!');
      },
    });
  },
  computed: {
    ...mapState({}),
    ...mapGetters({}),
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
  scope 미선언시 global 영역으로 css가 적용됩니다.
  선언할 경우 component 안에서만 적용됩니다.
 -->
<style scoped>
</style>
