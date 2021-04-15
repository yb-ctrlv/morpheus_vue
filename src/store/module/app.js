export default {
  state: () => ({
    info: M.info.app(),
  }),
  // 동기적 setter
  mutations: {
    mutAppInfo(state, payload) {
      state.info = M.info.app();
    },
  },
  // 비동기적 setter
  actions: {},
  // getter
  getters: {
    getAppInfo(state) {
      const info = _.cloneDeep(state.info);
      return info;
    },
  },
};
