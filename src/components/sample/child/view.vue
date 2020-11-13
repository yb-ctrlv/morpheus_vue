<template>
  <div id="container" class="submain api">
    <section id="scroll">
      <div>부모의 state.msg : {{state.msg}}</div>
      <child
      @callback="childCallback" :msg="'부모 메시지'"
      :obj="{msg:'부모 데이터'}"
      v-model="state.msg"
      >slot 값 전달!</child>
      <p>
        단방향 데이터 구조의 Vue는 부모의 데이터를 자식 컴포넌트내에서 수정되지 않습니다 <br>
        ex) child component 에서 props로 전달받은 상태값 msg <br>
         this.msg = '자식에서 수정 안됨!'; 실행시 에러 및 경고를 발생시킵니다 <br>
         때문에 emit 또는 v-model을 통해 부모의 이벤트를 전달받아 실행 시켜야합니다.
      </p>
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import Child from './component/Child';

export default {
  name: 'sample-child',
  components: {
    Child,
  },
  data() {
    return {
      state: {
        msg: '',
      },
    };
  },
  computed: {
    ...mapState({}),
    ...mapGetters({}),
  },
  methods: {
    ...mapMutations([]),
    ...mapActions([]),
    childCallback() {
      console.log(arguments);
    },
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
