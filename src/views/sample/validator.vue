<template>
  <api-container>
      <validation-observer ref="validator" v-slot="{ passed }">
        <vee-input type="text" name="아이디" rules="required" :showErr="true" v-model="state.id"/>
        <vee-input type="text" name="비밀번호" rules="required|min:8|verify_password" :showErr="true" v-model="state.pw"/>
        <vee-input type="text" name="이메일" rules="required|email" :showErr="true" v-model="state.email"/>
        <button @click="reset">RESET</button>
        <button :disabled="!passed" @click="submit">활성/비활성 시</button>
        <button @click="submit">POPUP 처리시</button>
      </validation-observer>

      <p>
        validator을 통해 쉽게 유효값 체크가 가능합니다. <br>
        src/vee-validate.js 파일을 통해<br>
        custom한 rule을 생성하고 에러메시지를 설정할 수 있습니다. <br>
        샘플과 vee-validator 공식 document를 참조하십시오.
      </p>
  </api-container>
</template>

<script>

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
  methods: {
    submit() {
      const err = this.$refs.validator.anyError();
      if (err) {
        M.pop.alert(err);
        return;
      }
      M.pop.alert('SUCCESS');
    },
    reset() {
      this.state = STATE_DATA();
    },
  },
  watch: {
    'state.id'(val, oldVal) {
      console.log(val, oldVal);
    },
  },
};
</script>

<style scoped>

</style>
