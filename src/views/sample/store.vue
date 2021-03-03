<template>
  <div id="container" class="submain api">
    <section id="scroll">
      <div>
        <p>STATE</p>
        {{JSON.stringify(appInfo_s)}}
      </div>
      <div ref="loadContainer" style="height: 50px; position:relative;">
        <p>GETTER</p>
        {{JSON.stringify(appInfo_g)}}
      </div>
      <br>
      <button @click="mutation">동기적 set</button>
      <br>
      <button @click="action">비동기적 set</button>
      <br>
      <button @click="fullPage = !fullPage">전체화면로딩 on/off</button>
      <br>
      전체화면값: {{fullPage}}
      <br>
      <pre>
        store을 통해 전역 데이터의 상태를 공유 및 관리할 수 있습니다.
        mapState, mapGetters, mapMutations, mapActions을 통해
        vue instance 안에서도 간편하게 사용할 수 있습니다.
        src/store의 파일들과 vuex 공식 document를 참조하십시오.
        화면 indicator는 vue-loading-overlay를 사용하였음
      </pre>

      <br>
      <div ref="loginContainer" style="height: 200px; position:relative;">
        <pre>
          M.net.http.send 예시
          user_id: emp004
          user_pw: emp004
        </pre>
        <pre>
          결과
          {{JSON.stringify(loginInfo)}}
        </pre>
      </div>
      <button @click="login">DO LOGIN</button>
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'sample-store',
  data() {
    return {
      fullPage: false,
    };
  },
  computed: {
    ...mapState({
      appInfo_s: (state) => state.app.info,
    }),
    ...mapGetters({
      appInfo_g: 'getAppInfo',
      loginInfo: 'getLoginInfo',
    }),
  },
  methods: {
    ...mapMutations(['mutAppInfo']),
    ...mapActions(['actAppInfo', 'actLoginInfo']),
    mutation() {
      this.mutAppInfo(M.navigator.device());
    },
    action() {
      const loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.loadContainer,
      });
      this.actAppInfo(M.navigator.device())
        .then(() => {
          loader.hide();
        });
    },
    login() {
      this.actLoginInfo({
        user_id: 'emp004',
        user_pw: 'emp004',
      });
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
