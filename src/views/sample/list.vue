<template>
  <div id="container" class="submain">
    <section id="scroll">
      <div>
        <!-- scroll 영역 -->
        <ul class="api-list">
          <api-item :to="'/sample/basic'">Vue 튜토리얼 1</api-item>
          <api-item :to="'/sample/keepalive'">Vue KeepAlive</api-item>
          <api-item :to="'/sample/child'">Vue ChildComponent</api-item>
          <api-item :to="'/sample/cycle'">Activity Life Cycle: 생명주기</api-item>
          <api-item :to="'/sample/validator'">Vee Validator: 유효성 체크</api-item>
          <api-item :to="'/sample/store'">Store: vuex 사용 및 store</api-item>
          <api-item :to="'/sample/trans'">Transition: 트랜지션(애니메이션)</api-item>
          <api-item :to="'/sample/api'">Morpheus API</api-item>
          <api-item :to="'/sample/swiper'">Swiper</api-item>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

const apiItem = {
  template: '<router-link :to="to" tag="li"><button type="button"><slot></slot></button></router-link>',
  props: ['to'],
};

export default {
  name: 'sample-list',
  components: {
    apiItem,
  },
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
