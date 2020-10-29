export default {
  state: () => ({

  }),
  // 동기적 setter
  mutations: {
    mutSample(state, payload) {

    },
  },
  // 비동기적 setter
  actions: {
    actSample(context) {
      return new Promise((resolve, reject) => {
        // ..something
        resolve();
      });
    },
  },
  // getter
  getters: {

  },
};
