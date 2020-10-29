import _deep from 'lodash/cloneDeep';

const INFO_DATA = () => ({
  msg: '초기 설정값!',
  loading: true,
});

export default {
  state: () => ({
    info: INFO_DATA(),
  }),
  // 동기적 setter
  mutations: {
    mutAppInfo(state, payload) {
      state.info = { ...payload };
    },
  },
  // 비동기적 setter
  actions: {
    actAppInfo(context, param) {
      context.commit('mutAppInfo', INFO_DATA());
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('mutAppInfo', param);
          resolve();
        }, 1000);
      });
    },
  },
  // getter
  getters: {
    getAppInfo(state) {
      // _deep 필수아님
      const info = _deep(state.info);
      info.isGet = 'it is get Object';
      return info;
    },
  },
};
