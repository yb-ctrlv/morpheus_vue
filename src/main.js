// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/css/global.css';
import 'vue-loading-overlay/dist/vue-loading.css';

import Vue from 'vue';
import Loading from 'vue-loading-overlay';

import './common/config.validate';
import './common/$mcore';
import App from './App';
import store from './store';
import router from './router';
import plugin from './plugin';
import global from './common/global.component';

Vue.config.productionTip = false;

Vue.use(plugin);
Vue.use(Loading);
Vue.use(global);

const ignoreRoute = ['sample-cycle', 'home'];

$mcore.MCommon('onback', function () {
  if (ignoreRoute.indexOf(this.$route.name) > -1) {
    return;
  }
  this.$router.go(-1);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
