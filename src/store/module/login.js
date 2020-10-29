import _deep from 'lodash/cloneDeep';

const INFO_DATA = () => ({});
export default {
  state: () => ({
    info: INFO_DATA(),
  }),
  // 동기적 setter
  mutations: {
    mutLoginInfo(state, payload) {
      state.info = { ...payload };
    },
  },
  // 비동기적 setter
  actions: {
    actLoginInfo(context, param) {
      context.commit('mutLoginInfo', INFO_DATA());
      return new Promise((resolve, reject) => {
        const url = 'api/ets/login';
        this._vm.$post(url, param)
          .then((data) => {
            context.commit('mutLoginInfo', data);
            resolve();
          });
      });
    },
  },
  // getter
  getters: {
    getLoginInfo(state) {
      const info = _deep(state.info);
      return info;
    },
  },
};
