<template>
  <div id="container" class="submain api">
    <section id="scroll">
      <router-link tag="button" :to="{ name: 'simple-div' }">Simple 1 Move</router-link>
      <router-link tag="button" :to="{ name: 'simple-div2' }">Simple 2 Move</router-link>
      <keep-alive :exclude="['simple-div2']">
        <router-view></router-view>
      </keep-alive>
      <p>
        컴포넌트는 기본적으로 생명주기를 가지고 있습니다. create - mount - destory <br>
        하지만 create - mount에 많은 자원이 소모된다면 <br>
        destory를 하지않도록 keep alive 태그를 통해 설정할 수 있습니다. <br>
        이는 다시 화면에 나타날때 activate 라는 생명주기 메서드를 실행합니다.
      </p>
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'sample-keepalive',
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
