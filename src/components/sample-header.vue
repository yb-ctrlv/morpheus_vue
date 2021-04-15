<template>
  <header id="header">
    <h1>{{titleName}}</h1>
    <button class="tbtn_l tbtn_prev" v-back>이전</button>
    <p class="tbtn_r">
      <router-link :to="'/home'" tag="button" class="tbtn_home">홈</router-link>
      <button type="button" class="tbtn_menu">전체메뉴</button>
    </p>
  </header>
</template>

<script>
const titleMap = {
  'sample-list': 'API',
  'sample-cycle': 'Cycle',
  'sample-validator': 'Validator',
  'sample-store': 'Store',
  'sample-api': 'API',
  'sample-swiper': 'Swiper',
  'sample-basic': '조건문/반복문',
  'sample-child': 'Child Component',
  'simple-one': 'KeepAlive',
  'sample-trans': 'Transition',
  'sample-model': 'V-MODEL',
};

export default {
  name: 'sample-header',
  data() {
    return {
      titleName: 'API',
    };
  },
  watch: {
    $route(to, from) {
      const title = titleMap[to.name];
      if (title) this.titleName = title;
    },
  },
};
</script>
<!--
  scope 미선언시 global 영역으로 css가 적용됩니다.
  선언할 경우 component 안에서만 적용됩니다.
 -->
<style scoped>
/* Header */
  #header{position:relative;width:100%;height:4.5rem;background:#152b75; overflow: hidden;}
  #header h1 { color:#fff;font-size:1.7rem; font-weight:bold;text-align:center;letter-spacing:-.1rem; height:4.6rem; line-height:4.6rem; }
  #header h1.fs_small{font-size:1.25rem !important;}
</style>
