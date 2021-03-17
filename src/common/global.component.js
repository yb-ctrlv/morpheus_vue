/* eslint no-unused-vars: "off" */
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import SlideUpDown from 'vue-slide-up-down';

// ValidateionObserver 확장
/**
 * anyError
 * @function
 * @return string Error Message 리턴 또는 undefiend
 */
ValidationObserver.prototype.anyError = function () {
  const keys = Object.keys(this.errors);
  for (let i = 0; i < keys.length; i += 1) {
    if (this.errors[keys[i]][0] !== undefined) {
      return this.errors[keys[i]][0];
    }
  }
  return undefined;
};

export default {
  install(Vue, optioons) {
    Vue.component('slide-up-down', SlideUpDown);
    Vue.component('validation-provider', ValidationProvider);
    Vue.component('validation-observer', ValidationObserver);
  },
};
