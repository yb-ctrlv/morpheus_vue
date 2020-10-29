<template>
  <div id="container" class="submain">
    <section id="scroll">
      <div>
        <!-- scroll 영역 -->
        <ul class="api-list">
          <router-link to="/sample/cycle" tag="li"><button type="button">Activity Life Cycle: 생명주기</button></router-link>
          <router-link to="/sample/validator" tag="li"><button type="button">Vee Validator: 유효성 체크</button></router-link>
          <router-link to="/sample/store" tag="li"><button type="button">Store: vuex 사용 및 store</button></router-link>
          <router-link to="/sample/trans" tag="li"><button type="button">Transition: 트랜지션(애니메이션)</button></router-link>
          <router-link to="/sample/api" tag="li"><button type="button">Morpheus API</button></router-link>
          <router-link to="/sample/swiper" tag="li"><button type="button">Swiper</button></router-link>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'sample-list',
  data() {
    return {
    };
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
