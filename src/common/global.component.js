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
    /**
     * input 태그 확장
     * @description v-model 버그 수정
     */
    Vue.component('ipt-text', {
      template: '<input @input="$emit(\'input\', $event.target.value)" v-on="getListeners">',
      computed: {
        getListeners() {
          const { input, ...others } = this.$listeners;
          return { ...others };
        },
      },
    });

    /**
     * textarea 태그 확장
     * @description v-model 버그 수정, 초기 데이터 미표시 버그 수정
     */
    Vue.component('txt-area', {
      template: '<textarea @input="$emit(\'input\', $event.target.value)" v-on="getListeners"></textarea>',
      computed: {
        getListeners() {
          const { input, ...others } = this.$listeners;
          return { ...others };
        },
      },
      mounted() {
        this.$el.value = this.$el.getAttribute('value');
      },
    });
  },
};
