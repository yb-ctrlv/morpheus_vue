<template>
  <api-container :className="'submain'">
    <div>
        <!-- scroll 영역 -->
        <ul class="api-list">
          <api-item :to="'/sample/basic'">조건문/반복문</api-item>
          <api-item :to="'/sample/model'">양방향 데이터 바인딩</api-item>
          <api-item :to="'/sample/keepalive'">KeepAlive</api-item>
          <api-item :to="'/sample/store'">Store (vuex)</api-item>
          <api-item :to="'/sample/validator'">Vee Validator: 유효성 체크</api-item>
          <api-item :to="'/sample/cycle'">Activity Life Cycle: 생명주기</api-item>
          <api-item :to="'/sample/api'">Morpheus API</api-item>
          <api-item :to="'/sample/trans'">Transition: 트랜지션(애니메이션)</api-item>
          <api-item :to="'/sample/swiper'">Swiper</api-item>
        </ul>
      </div>
  </api-container>
</template>

<script>
const apiItem = {
  template: '<router-link :to="to" tag="li"><button type="button"><slot></slot></button></router-link>',
  props: ['to'],
};

export default {
  name: 'sample-list',
  components: {
    apiItem,
  },

};

</script>

<style scoped>
</style>
