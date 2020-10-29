import Vue from 'vue';
import Vuex from 'vuex';

import app from './module/app';
import login from './module/login';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    login,
  },
});
