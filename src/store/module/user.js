const INFO_DATA = () => ({
  name: '길동',
  id: 'id123',
  sex: 'm',
  birth: '19941126',
});

export default {
  state: () => ({
    info: null,
  }),
  // 동기적 setter
  mutations: {
    mutUserInfo(state, payload) {
      state.info = { ...payload };
    },
  },
  // 비동기적 setter
  actions: {
    actUserInfo({ commit }, param) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const data = INFO_DATA();
          resolve(data);
          commit('mutUserInfo', data);
        }, 1000);
      });
    },
  },
  // getter
  getters: {
    getUserInfo(state) {
      if (state.info === null) return {};
      const info = _.cloneDeep(state.info);
      info._birth = moment(info.birth, 'YYYYMMDD').format('YYYY-MM-DD');
      return info;
    },
  },
};
