/* eslint no-unused-vars: "off" */
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import SlideUpDown from 'vue-slide-up-down';
import AsyncBox from '@/async-box';
import veeInput from '@/vee-input';

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
    Vue.component('async-box', AsyncBox);
    Vue.component('vee-input', veeInput);

    // API-CONTAINER
    Vue.component('api-container', {
      template: `
      <div id="container" :class="className">
        <section id="scroll">
          <slot></slot>
        </section>
      </div>
      `,
      props: {
        className: {
          type: String,
          default: 'submain api',
        },
      },
    });

    Vue.component('api-content-box', {
      template: `
      <div>
        <h3 class="api-title">{{titleName}}</h3>
        <div class="result"><slot></slot></div>
        <pre v-if="code" v-text="code"></pre>
        <button v-if="btnName" @click="$emit('btnClick')" v-text="btnName"></button>
        <pre v-text="desc"></pre>
      </div>
      `,
      props: ['titleName', 'btnName', 'code', 'desc'],
    });
  },
};
