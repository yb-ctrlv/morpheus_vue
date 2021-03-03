<template>
  <div id="container" class="submain api">
    <section id="scroll">
      <div style="fo.pnt-size: 2rem;">{{state.msg}}</div><br>
      <p>vue는 data에 선언된 데이터(상태)를 템플릿을 통해 '{{state.bracket}}'를 통해 렌더링을 합니다.</p>
      <div :class="['always', {on : flag.on}]" @click="flag.on = !flag.on">클릭하여 class bind를 확인하세요</div>
      <p>
        :class="'클래스명'" 또는<br>
        :class="{클래스명: true or false}" 또는<br>
        :class="['클래스명', { 클래스명: true or false }]" 로 바인딩이 가능합니다.<br>
      </p>
      <div v-show="flag.show">v-show 보입니다!</div>
      <button @click="flag.show = !flag.show">v-show on/off</button>
      <div v-if="flag.if">v-if 보입니다!</div>
      <div v-else>v-else 보입니다!</div>
      <button @click="flag.if = !flag.if">v-if on/off</button>
      <p>
        조건문을 통해서 렌더링 여부를 결정할 수 있습니다.
        <br>
        v-show는 display: none; 상태로 엘리먼트가 남아있는 상태의 ON/OFF <br>
        v-if는 element가 존재하지않는 상태와 생성된다는 차이점이있습니다.
      </p>
      <ul>
        <li v-for="(item, index) in state.list" :key="'list'+index">{{item.name}}</li>
      </ul>
      <p>
        v-for 반복문을 통해서 렌더링이 가능합니다
        <br>
        :key를 통해 색인하므로 :key를 선언할 필요가 있습니다.
      </p>
      <ul>
        <template v-for="(index) in 5">
          <li :key="'test'+index">{{index}}</li>
        </template>
      </ul>
      <p>
          때로는 단순한 반복문이 필요한 경우가있습니다. <br>
          v-for (index) in 5// 5회실행<br>
          추가적으로 template를 통해 원하는 만큼의 엘리먼트를 정의할 수 있습니다.
      </p>
      <input type="text" :value="state.text" @input="evt=>state.text=evt.target.value">
      <div>입력한 내용{{state.text}}</div>
      <p>
        ---오동작 v-model을 통해 input의 값을 자동으로 변경사항을 최신화 할수 있습니다. <br>
        :value="state.text" @input="evt=>state.text=evt.target.value" <br>
        이런식으로 해야 정상작동합니다.
      </p>
      <div>이전 값: {{state.old}} 새로운 값 {{state.text}}</div>
      <p>
        this.$watch('state.text', function(oldVal, newVal) {})...을 통해서 데이터를 감시할 수 있습니다.
        <br>
        object가 아닌 string, number, boolean 등은 해당 watch: {} 에서 선언하여 사용할 수 있습니다.
      </p>
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

const INIT_STATE = () => ({
  msg: 'HelloWorld',
  bracket: '{{}}',
  list: [
    { name: 'one' },
    { name: 'two' },
    { name: 'three' },
    { name: 'four' },
    { name: 'five' },
  ],
  old: '',
  text: '',
});
export default {
  name: 'sample-basic',
  data() {
    return {
      state: INIT_STATE(),
      flag: {
        show: true,
        if: true,
        flag: true,
        on: true,
      },
    };
  },
  created() {
    this.$watch('state.text', function (newVal, oldVal) {
      this.state.old = oldVal;
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

</script>
<!--
  scope 미선언시 global 영역으로 css가 적용됩니다.
  선언할 경우 component 안에서만 적용됩니다.
 -->
<style scoped>
  .always{
    font-weight: bold;
  }
  .always.on {
    color: brown;
  }
</style>
