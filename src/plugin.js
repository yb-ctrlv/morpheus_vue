/* eslint no-param-reassign:0 */
import router from './router';

const { CONSTANT } = process.env;

export default {
  install(Vue, options) {
  // 1. 전역 메소드 또는 속성 추가
    // Vue.myGlobalMethod = function () {
    // // 필요한 로직 ...
    // };

    // 2. 전역 에셋 추가
    // Vue.directive('my-directive', {
    //   bind(el, binding, vnode, oldVnode) {
    //   // 필요한 로직 ...
    //   },
    // });
    Vue.directive('back', {
      bind(el) {
        el.addEventListener('click', (e) => {
          e.preventDefault();
          router.go(-1);
        });
      },
    });

    // 3. 컴포넌트 옵션 주입
    // Vue.mixin({
    //   data() {
    //     return {
    //     };
    //   },
    //   beforeCreate() {
    //   },
    //   created() {
    //   },
    //   beforeMount() {
    //   },
    //   activated() {
    //   },
    //   mounted() {
    //   },
    //   beforeDestroy() {
    //   },
    //   destroyed() {
    //   },
    // });

    // 4. 인스턴스 메소드 추가
    // Vue.prototype.$myMethod = function (methodOptions) {
    // // 필요한 로직 ...
    // };
    Vue.prototype.$post = function (path, param) {
      return new Promise((resolve, reject) => {
        M.net.http.send({
          server: CONSTANT.SERVER_NAME,
          path,
          method: 'POST',
          data: param,
          success: (data, setting) => {
            resolve(data, setting);
          },
          error: (code, msg, setting) => {
            reject(code, msg, setting);
          },
        });
      });
    };

    Vue.prototype.$camera = function (path = '/media', mediaType = 'PHOTO') {
      return new Promise((resolve, reject) => {
        M.media.camera({
          path,
          mediaType,
          callback: (status, result, option) => {
            if (status === 'SUCCESS') {
              resolve(result, option);
              return;
            }
            reject(result, option);
          },
        });
      });
    };
    Vue.prototype.$popup = function (message, buttons = ['확인'], title = '공지') {
      return new Promise((resolve, reject) => {
        M.pop.alert({
          title,
          buttons,
          message,
          callback: (index) => {
            resolve(index);
          },
        });
      });
    };
  },
};
