<template>
  <div id="container" class="submain api">
    <section id="scroll">
      <validation-observer ref="validator" v-slot="{ passed }">
        <validation-provider name="아이디" immediate rules="required" v-slot="{ errors }">
          <!-- 아이디: <input type="text" :value="state.id" @input="evt=>state.id=evt.target.value"> -->
          아이디: <ipt-text v-model="state.id"/>
          <p style="color:red;">{{errors[0]}}</p>
        </validation-provider>
        <br>
        <validation-provider name="비밀번호" immediate  rules="required|min:8|verify_password" v-slot="{ errors }">
          <!-- 비밀번호: <input type="text" :value="state.pw" @input="evt=>state.pw=evt.target.value"> -->
          비밀번호: <ipt-text v-model="state.pw"/>
          <p style="color:red;">{{errors[0]}}</p>
        </validation-provider>
        <br>
        <validation-provider name="이메일" immediate  rules="required|email" v-slot="{ errors }">
          <!-- 이메일: <input type="text" :value="state.email" @input="evt=>state.email=evt.target.value"> -->
          이메일: <ipt-text v-model="state.email"/>
          <p style="color:red;">{{errors[0]}}</p>
        </validation-provider>
        <br>
        <button @click="reset">RESET</button>

        <button :disabled="!passed" @click="submit">버튼 활성/비활성</button>

        <button @click="submit">POPUP 버튼</button>
      </validation-observer>

      <p>
        validator을 통해 쉽게 유효값 체크가 가능합니다. <br>
        src/vee-validate.js 파일을 통해<br>
        custom한 rule을 생성하고 에러메시지를 설정할 수 있습니다. <br>
        source 내용과 vee-validator 공식 document를 참조하십시오.
      </p>
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

const STATE_DATA = () => ({
  id: '',
  pw: '',
  email: '',
});
export default {
  name: 'sample-validator',
  data() {
    return {
      state: STATE_DATA(),
    };
  },
  computed: {
    ...mapState({}),
    ...mapGetters({}),
  },
  methods: {
    ...mapMutations([]),
    ...mapActions([]),
    submit() {
      if (!this.$refs.validator.flags.passed) {
        M.pop.alert(this.$refs.validator.anyError());
        return;
      }
      M.pop.alert('SUCCESS');
    },
    reset() {
      this.state = STATE_DATA();
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
