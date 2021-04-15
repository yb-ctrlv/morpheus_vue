<template>
  <div id="container" class="submain api">
    <section id="scroll">
      <pre>slide up/down을 라이브러리를 통해 구현하였습니다.(only Mobile!)
당겨서 새로고침을 라이브러리를 통해 구현하였습니다.
현재 화면 이동간 라우팅되어있는 path의 깊이에 따라 슬라이드 이동이 적용되어있습니다.
App.vue에서 해당 샘플을 확인할 수 있습니다.
transition을 통해서 여러가지 애니매이션이 가능합니다.</pre>
      <div>
        <button @click="slide = !slide">슬라이드 토글</button>
        <slide-up-down :active="slide" tag="ul" :duration="500" >
            <li v-for="(item, index) in 10" :key="index">HELLO{{item}}</li>
        </slide-up-down>
      </div>
    </section>
  </div>
</template>

<script>
import PullToRefresh from 'pulltorefreshjs';

export default {
  name: 'sample-transition',
  data() {
    return {
      slide: false,
    };
  },
  mounted() {
    PullToRefresh.init({
      mainElement: '#scroll',
      onRefresh() {
        M.pop.instance('pullToRefresh');
      },
    });
  },
  beforeDestroy() {
    PullToRefresh.destroyAll();
  },
};
</script>
<style scoped>
</style>
