import Vue from 'vue';
import Router from 'vue-router';

// lazyload 적용
// () => import(/* webpackChunkName: "chunk/intro" */'../components/intro');
const intro = () => import(/* webpackChunkName: "chunk/intro" */'../components/intro');
const home = () => import(/* webpackChunkName: "chunk/home" */'../components/home');
const sampleRoot = () => import(/* webpackChunkName: "chunk/sample" */'../components/sample/root');
const sampleList = () => import(/* webpackChunkName: "chunk/sample-list" */'../components/sample/list');
const sampleCycle = () => import(/* webpackChunkName: "chunk/sample-cycle" */'../components/sample/cycle');
const sampleValidator = () => import(/* webpackChunkName: "chunk/sample-validator" */'../components/sample/validator');
const sampleStore = () => import(/* webpackChunkName: "chunk/sample-store" */'../components/sample/store');
const sampleTrans = () => import(/* webpackChunkName: "chunk/sample-trans" */'../components/sample/trans');
const sampleApi = () => import(/* webpackChunkName: "chunk/sample-api" */'../components/sample/api');
const sampleSwiper = () => import(/* webpackChunkName: "chunk/sample-swiper" */'../components/sample/swiper');
const sampleBasic = () => import(/* webpackChunkName: "chunk/sample-basic" */'../components/sample/basic');
const samplekeepalive = () => import(/* webpackChunkName: "chunk/sample-keepalive" */'../components/sample/keepalive');
const simpleDiv = () => import(/* webpackChunkName: "chunk/simple-div" */'../components/sample/component/simple');
const simpleDiv2 = () => import(/* webpackChunkName: "chunk/simple-div" */'../components/sample/component/simple2');
const sampleChild = () => import(/* webpackChunkName: "chunk/child" */'../components/sample/child/view');
Vue.use(Router);

const router = new Router({
  mode: 'hash',
  base: '/', // context Root
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
        { path: 'child', name: 'sample-child', component: sampleChild },
        { path: 'keepalive',
          name: 'sample-keepalive',
          redirect: 'keepalive/simpleDiv',
          component: samplekeepalive,
          children: [
            { path: 'simpleDiv', name: 'simple-div', component: simpleDiv },
            { path: 'simpleDiv2', name: 'simple-div2', component: simpleDiv2 },
          ] },
      ] },
  ],
});
// 전역 네비게이션
router.beforeEach((to, from, next) => {
  next();
});

export default router;
