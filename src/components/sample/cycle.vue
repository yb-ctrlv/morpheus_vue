<template>
  <div id="container" class="submain api">
    <section id="scroll">
      <div style="font-size: 2rem;">{{msg}}</div>
      <pre>공통적으로 전역으로 설정이 필요한 경우 main.js 파일 또는 main.js import하는 방식으로
$mcore.MCommon('onback', function () {
  if (this.$route.name === 'sample-cycle') {
    return;
  }
  this.$router.go(-1);
});
사용 가능
      </pre>
      <pre>현재 페이지에 선언된 함수
$mcore.onHide('sample-cycle', function () {
  this.msg = 'onHide';
});
$mcore.onRestore('sample-cycle', function () {
  this.msg = 'onRestore';
});
$mcore.onBack('sample-cycle', function () {
  this.msg = 'onBack';
});
$mcore.onPause('sample-cycle', function () {
  this.msg = 'onPause';
});
$mcore.onResume('sample-cycle', function () {
  this.msg = 'onResume';
});
$mcore.onDestroy('sample-cycle', function () {
  this.msg = 'onDestroy';
});</pre>
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'sample-cycle',
  data() {
    return {
      msg: '기본 메세지',
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
$mcore.onHide('sample-cycle', function () {
  this.msg = 'onHide';
});
$mcore.onRestore('sample-cycle', function () {
  this.msg = 'onRestore';
});
$mcore.onBack('sample-cycle', function () {
  this.msg = 'onBack';
});
$mcore.onPause('sample-cycle', function () {
  this.msg = 'onPause';
});
$mcore.onResume('sample-cycle', function () {
  this.msg = 'onResume';
});
$mcore.onDestroy('sample-cycle', function () {
  this.msg = 'onDestroy';
});
</script>
<!--
  scope 미선언시 global 영역으로 css가 적용됩니다.
  선언할 경우 component 안에서만 적용됩니다.
 -->
<style scoped>

</style>
