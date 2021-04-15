<template>
  <api-container>
    <div>
      <pre>store을 통해 전역 데이터의 상태를 공유 및 관리할 수 있습니다.
mapState, mapGetters, mapMutations, mapActions을 통해
vue instance 안에서도 맵핑하여 사용할 수 있습니다.
src/store의 파일들과 vuex 공식 document를 참조하십시오.</pre>
      <h3 class="api-title">APP 정보</h3>
      <pre>{{appInfoStr}}</pre>
      <h3 class="api-title">유저 정보 STATE</h3>
      <pre ref="state">{{userInfoStr}}</pre>
      <h3 class="api-title">유저 정보 Getter</h3>
      <pre ref="getter">{{getUserInfoStr}}</pre>
      <button @click="mutAppInfo">mutAppInfo</button>
      <button @click="action">actUserInfo</button>
    </div>
  </api-container>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'sample-store',
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      appInfo: (state) => state.app.info,
      userInfo: (state) => state.user.info,
    }),
    ...mapGetters({
      getUserInfo: 'getUserInfo',
    }),
    appInfoStr() {
      return JSON.stringify(this.appInfo);
    },
    userInfoStr() {
      return this.userInfo ? JSON.stringify(this.userInfo) : this.userInfo || 'null';
    },
    getUserInfoStr() {
      return JSON.stringify(this.getUserInfo);
    },
  },
  methods: {
    ...mapMutations(['mutAppInfo']),
    ...mapActions(['actUserInfo']),
    action() {
      const loader = this.$loading.show();
      this.actUserInfo()
        .then(() => {
          loader.hide();
        });
    },
  },
};

</script>

<style scoped>

</style>
