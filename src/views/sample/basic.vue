<template>
  <api-container>
      <api-content-box
        :titleName="'V-IF'"
        :btnName="'flag.if = !flag.if'"
        :code="code.if"
        @btnClick="flag.if = !flag.if"
        :desc="`조건문을 통해서 렌더링 여부를 결정 할 수 있습니다.\n v-if는 값에 따라서 엘리먼트 자체를 없애거나 생성됩니다.\n v-else 또는 v-else-if 또한 사용이 가능합니다.`"
      >
        <div v-if="flag.if">v-if 엘리먼트</div>
        <div v-else>v-else 엘리먼트</div>
      </api-content-box>
      <api-content-box
        :titleName="'V-SHOW'"
        :btnName="'flag.show = !flag.show'"
        :code="code.show"
        @btnClick="flag.show = !flag.show"
        :desc="`v-show는 v-if와 다르게 엘리먼트의 style-dispaly 속성을 통해 숨겨집니다. \n 비용이 v-if에 비해 저렴하기 때문에 렌더링이 빈번하게 일어나는 곳에서는 \n v-show를 사용하시는게 좋습니다`"
      >
        <div v-show="flag.show">v-show 엘리먼트</div>
      </api-content-box>
      <api-content-box
        :titleName="'V-FOR'"
        :btnName="'()=>state.list.pop()'"
        :code="code.for"
        @btnClick="()=>state.list.pop()"
        :desc="`v-for 반복문을 통해서 렌더링이 가능합니다\n :key를 통해 색인하므로 :key를 선언을 권장합니다 \n 때로는 단순한 반복문이 필요한 경우가있습니다.`"
      >
        <ul>
          <li v-for="(item, index) in state.list" :key="'list'+index">{{item.name}}</li>
          <li v-for="(index) in 5" :key="'test'+index">{{index}}</li>
        </ul>
      </api-content-box>
  </api-container>
</template>

<script>
const INIT_STATE = () => ({
  list: [
    { name: 'one' },
    { name: 'two' },
    { name: 'three' },
    { name: 'four' },
    { name: 'five' },
  ],
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
      },
      code: {
        if: '<div v-if="flag.if">v-if 엘리먼트</div>\n<div v-else>v-else 엘리먼트</div>',
        show: '<div v-show="flag.show">v-show 엘리먼트</div>',
        for: `<ul>
  <li v-for="(item, index) in state.list" :key="'list'+index">{{item.name}}</li>
  <li v-for="(index) in 5" :key="'test'+index">{{index}}</li>
</ul>
list: [{ name: 'one' }, { name: 'two' }, { name: 'three' }, { name: 'four' }, { name: 'five' }]`,
      },
    };
  },
  watch: {
    'state.list'(val, oldVal) {
      if (val.length === 0) this.state.list = INIT_STATE().list;
    },
  },
};

</script>
<style scoped>
</style>
