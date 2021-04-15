<template>
  <api-container>
      <p>v-model 디렉티브를 사용한 양방향 데이터 바인딩</p>
      <api-content-box
        :titleName="'TEXT/TEXTAREA'"
        :code="code.text"
        :desc="`input:text 또는 textarea에서 v-model 사용시\n 한글 또는 중국어, 일본어등은 업데이트가 되지 않기 때문에\n 아래와 같이 사용하여야 정상적으로 동작합니다.`"
      >
        <input style="width:100%" type="text" :value="state.text" @input="evt=>state.text=evt.target.value">
        <p>state.text : {{state.text}}</p>
        <textarea style="width:100%" :value="state.textarea" @input="evt=>state.textarea=evt.target.value"></textarea>
        <p>state.textarea : {{state.textarea}}</p>
      </api-content-box>
      <api-content-box
        :titleName="'CHECKBOX/RADIO/SELECT'"
        :code="code.check"
        :desc="`체크박스, 라디오버튼, 셀렉트 박스에서 Object를 전달할 수 있습니다.`"
      >
        <input type="checkbox" class="checkbox" v-model="state.checkbox" :value="{ data: 1 }">
        <input type="checkbox" class="checkbox" v-model="state.checkbox" :value="{ data: 2 }">
        <p>state.checkbox : {{checkBoxStr}}</p>
        <input type="radio" class="radio" v-model="state.radio" :value="{ data: 1 }">
        <input type="radio" class="radio" v-model="state.radio" :value="{ data: 2 }">
        <p>state.radio : {{radioBoxStr}}</p>
        <select class="select" v-model="state.select">
          <option :value="{ data: 1 }">1</option>
          <option :value="{ data: 2 }">2</option>
        </select>
        <p>state.select : {{selectStr}}</p>
      </api-content-box>
  </api-container>
</template>

<script>
const INIT_STATE = () => ({
  text: '',
  textarea: '',
  checkbox: [],
  radio: { data: 1 },
  select: { data: 1 },
});
export default {
  name: 'sample-model',
  data() {
    return {
      state: INIT_STATE(),
      code: {
        text: '<input style="width:100%" type="text" :value="state.text" @input="evt=>state.text=evt.target.value">\n<p>state.text : {{state.text}}</p>\n<textarea style="width:100%" :value="state.textarea" @input="evt=>state.textarea=evt.target.value"></textarea>\n<p>state.textarea : {{state.textarea}}</p>',
        check: '<input type="checkbox" class="checkbox" v-model="state.checkbox" :value="{ data: 1 }">\n<input type="checkbox" class="checkbox" v-model="state.checkbox" :value="{ data: 2 }">\n<p>state.checkbox : {{checkBoxStr}}</p>\n<input type="radio" class="radio" v-model="state.radio" :value="{ data: 1 }">\n<input type="radio" class="radio" v-model="state.radio" :value="{ data: 2 }">\n<p>state.radio : {{radioBoxStr}}</p>\n<select v-model="state.select">\n  <option :value="{ data: 1 }">1</option>\n  <option :value="{ data: 2 }">2</option>\n</select>\n<p>state.select : {{selectStr}}</p>',
      },
    };
  },
  computed: {
    checkBoxStr() {
      return JSON.stringify(this.state.checkbox);
    },
    radioBoxStr() {
      return JSON.stringify(this.state.radio);
    },
    selectStr() {
      return JSON.stringify(this.state.select);
    },
  },
};

</script>
<style scoped>
</style>
