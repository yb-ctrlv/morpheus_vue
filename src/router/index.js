import Vue from 'vue';
import Router from 'vue-router';

// lazyload 미적용
import intro from '../views/intro';

// lazyload 적용
// () => import(/* webpackChunkName: "chunk/intro" */'../views/intro');

const home = () => import(/* webpackChunkName: "chunk/home" */'../views/home');
const sampleRoot = () => import(/* webpackChunkName: "chunk/sample" */'../views/sample/root');
const sampleList = () => import(/* webpackChunkName: "chunk/sample-list" */'../views/sample/list');
const sampleCycle = () => import(/* webpackChunkName: "chunk/sample-cycle" */'../views/sample/cycle');
const sampleValidator = () => import(/* webpackChunkName: "chunk/sample-validator" */'../views/sample/validator');
const sampleStore = () => import(/* webpackChunkName: "chunk/sample-store" */'../views/sample/store');
const sampleTrans = () => import(/* webpackChunkName: "chunk/sample-trans" */'../views/sample/trans');
const sampleApi = () => import(/* webpackChunkName: "chunk/sample-api" */'../views/sample/api');
const sampleSwiper = () => import(/* webpackChunkName: "chunk/sample-swiper" */'../views/sample/swiper');
const sampleBasic = () => import(/* webpackChunkName: "chunk/sample-basic" */'../views/sample/basic');
const sampleKeepalive = () => import(/* webpackChunkName: "chunk/sample-keepalive" */'../views/sample/keepalive/root');
const simpleOne = () => import(/* webpackChunkName: "chunk/simple" */ '../views/sample/keepalive/simple-one');
const simpleTwo = () => import(/* webpackChunkName: "chunk/simple" */ '../views/sample/keepalive/simple-two');
const sampleModel = () => import(/* webpackChunkName: "chunk/model" */'../views/sample/model');

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  // base: '/', // only history mode
  routes: [
    { path: '/', name: 'intro', component: intro },
    { path: '/home', name: 'home', component: home },
    { path: '/sample',
      name: 'sample-root',
      component: sampleRoot,
      children: [
        { path: 'list', name: 'sample-list', component: sampleList },
        { path: 'cycle', name: 'sample-cycle', component: sampleCycle },
        { path: 'validator', name: 'sample-validator', component: sampleValidator },
        { path: 'store', name: 'sample-store', component: sampleStore },
        { path: 'trans', name: 'sample-trans', component: sampleTrans },
        { path: 'api', name: 'sample-api', component: sampleApi },
        { path: 'swiper', name: 'sample-swiper', component: sampleSwiper },
        { path: 'basic', name: 'sample-basic', component: sampleBasic },
        { path: 'model', name: 'sample-model', component: sampleModel },
        { path: 'keepalive',
          name: 'sample-keepalive',
          redirect: 'keepalive/simpleOne',
          component: sampleKeepalive,
          children: [
            { path: 'simpleOne', name: 'simple-one', component: simpleOne },
            { path: 'simpletwo', name: 'simple-two', component: simpleTwo },
          ] },
      ] },
  ],
});
// 전역 네비게이션
router.beforeEach((to, from, next) => {
  next();
});

export default router;
