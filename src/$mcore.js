/*
 1. this.$onBack(callback)으로 쉽게 사용할수 있어야한다.
 2. onback 이벤트 발생 => callback 호출 => 호출된 callback에서 현재 route정보를 토대로 분기처리 필요.
 3. 생명주기 관련 이벤트인 경우 this.$route.name을 기준으로 핸들링이 되도록한다.

  oninitpage => callback => find $route.name => 해당 object의 arr를 실행시킨다.

*/
/* eslint no-param-reassign:0 */
import _last from 'lodash/last';
import router from './router';

const CallbackController = (function () {
  const buffs = {};
  const controller = function controller(name) {
    buffs[name] = { common: [] };
    this.buffer = buffs[name];
  };
  controller.prototype = {
    batch() {
      let $instance;
      const $vues = _last(router.currentRoute.matched).instances;
      $instance = $vues;
      if (Object.keys($vues).length === 1) {
        $instance = $vues.default;
      }
      const _cbs = this.buffer[router.app.$route.name] || [];
      this.buffer.common.map((x) => {
        x.apply($instance, arguments);
      });
      _cbs.map((x) => {
        x.apply($instance, arguments);
      });
    },
    set(name, cb) {
      this.buffer[name] = this.buffer[name] || [];
      this.buffer[name].push(cb);
    },
    get() {
      return this.buffer;
    },
    common(cb = function () {}) {
      this.buffer.common.push(cb);
    },
  };

  return controller;
}());

const $mcore = {
  onhide: new CallbackController('onhide'),
  onrestore: new CallbackController('onrestore'),
  onback: new CallbackController('onback'),
  onpause: new CallbackController('onpause'),
  onresume: new CallbackController('onresume'),
  ondestroy: new CallbackController('ondestroy'),
};

// M.onReady(function () {});
M.onHide(function () { $mcore.onhide.batch(...arguments); });
M.onRestore(function () { $mcore.onrestore.batch(...arguments); });
M.onBack(function () { $mcore.onback.batch(...arguments); });
M.onPause(function () { $mcore.onpause.batch(...arguments); });
M.onResume(function () { $mcore.onresume.batch(...arguments); });
M.onDestroy(function () { $mcore.ondestroy.batch(...arguments); });

const MCommon = function (name, cb) { $mcore[name].common(cb); };
const onHide = function (name, cb) { $mcore.onhide.set(name, cb); };
const onRestore = function (name, cb) { $mcore.onrestore.set(name, cb); };
const onBack = function (name, cb) { $mcore.onback.set(name, cb); };
const onPause = function (name, cb) { $mcore.onpause.set(name, cb); };
const onResume = function (name, cb) { $mcore.onresume.set(name, cb); };
const onDestroy = function (name, cb) { $mcore.ondestroy.set(name, cb); };

export default (function (win) {
  win.$mcore = {
    MCommon,
    onHide,
    onRestore,
    onBack,
    onPause,
    onResume,
    onDestroy,
  };
}(window));
