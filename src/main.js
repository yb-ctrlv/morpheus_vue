// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/css/style.css';
import 'vue-loading-overlay/dist/vue-loading.css';

import Vue from 'vue';
import Loading from 'vue-loading-overlay';
import Fragment from 'vue-fragment';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import SlideUpDown from 'vue-slide-up-down';

import './vee-validate';
import './$mcore';
import IptText from './components/global/ipt-text';
import App from './App';
import store from './store';
import router from './router';
import plugins from './plugin';

Vue.config.productionTip = false;

Vue.use(plugins);
Vue.use(Loading);
Vue.use(Fragment.Plugin);

Vue.component('validation-provider', ValidationProvider);
Vue.component('validation-observer', ValidationObserver);
Vue.component('slide-up-down', SlideUpDown);
Vue.component('ipt-text', IptText);

ValidationObserver.prototype.anyError = function () {
  const keys = Object.keys(this.errors);
  for (let i = 0; i < keys.length; i += 1) {
    if (this.errors[keys[i]][0] !== undefined) {
      return this.errors[keys[i]][0];
    }
  }
  return undefined;
};

const ignoreName = ['sample-cycle', 'home'];
$mcore.MCommon('onback', function () {
  if (ignoreName.indexOf(this.$route.name) > -1) {
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
