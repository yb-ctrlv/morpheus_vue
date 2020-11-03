
> Morpheus Vue Sample Project

## Build Setup

``` bash
# install dependencies
npm install

# build for production with minification
npm run build

# build for developer,  ++ watch mode
npm run start

# lint check
npm run lint

# lint fix
npm run lintfix

# clean up dist folder /res/www..
npm run clean
```

## Description
##### webpack 설정
1. 최초 로딩시 [img, css, font] preload 적용
2. moment-locale ko만 번들에 포함되도록 플러그인 설정
3. lodash 사용한 함수만 import되도록 트리쉐이킹 적용
4. 외부모듈(node_modules)은 vendor라는 js파일로 생성되도록 설정
5. img파일, font파일 10240 byte가 넘지않으면 base64로 변환되도록 설정
6. css는 css파일로 따로 나오도록 변경(기본기능은 js파일에 포함됨)
7. build 명령시 js, css, html 난독화 및 압축


### 구조

* build: 웹팩(빌드)관련 설정 폴더 
  * clean.js  npm run clean 관련
  * webpack.common.js  웹팩 공통
  * webpack.dev.js  개발시 설정
  * webpack.prod.js  배포시 설정


* config: 설정 관련 폴더
  * index.js webpack 설정시 필요한 세팅값(개발,배포) 굳이X
  * dev.env.js 개발시 필요한 설정값
  * prod.env.js 배포시 필요한 설정값
 
 
 해당 설정값은 webpack.DefinePlugin 플러그인 통해 선언되며 전역적으로 사용되지는 않지만 사용을 원하는 곳에서 
```
 const { CONSTANT } = process.env;
 ```
 이런식으로 사용할 수 있다.
 
* src
  * /aseets 정적 소스
  * /components Vue 컴포넌트 관리
  * /router Vue-router 관련 설정
  * /store Vuex(store) 관련 설정
  * main.js Webpack 시작점
  * App.vue 가장 기본 컴포넌트
  * plugin.js vue 확장 함수 선언
  * vee-validate.js vee-validate관련 설정
  * $mcore.js Mcore 관련 확장 함수 선언
  

그외 파일들
* .babelrc 바벨 설정파일, 브라우저지원버전 또는 단말기 지원버전을 선택할 수 있다.
* .editorconfig 에디터 설정
* .eslintignore eslint 제외파일 설정
* .eslintrc eslint 설정
 

 #### Work Flow
 1. component(재사용가능한 최소 단위)로 분리
 2. vue 파일생성
 3. html,css 적용
 4. router/index 에서 라우팅 구현
 5. http 통신필요시 store에서 구현
 6. 설정한 값을 vue파일에서 mapper를 통해 사용선언

router/index.js에서   () => import ...형식으로 컴포넌트를 불러와야 **lazyload**가 적용됨
```js
const intro () => import(/* webpackChunkName: "chunk/intro" */'../components/intro');
```
 자주 사용하거나 렌더링 비용이 큰 화면은  <keep-alive>를 통해 destroy를 하지않도록 설정할 수 있다.


## ESlint (필수X)
###### 설명
1. 런타임과정에서만 확인할 수 있는 에러코드(not defined error)를
   먼저 발견할 수 있음.
2. 코딩스타일을 일관화하여 가독성을 향상시킴

#### ESLINT PLUGINS
> vue/essential
> airbnb-base

전역으로 사용하는 global 데이터가 있는 경우
.elintrc 파일 내 globals에 선언 필요

추가적으로 rules에 선언하여 룰을 추가하거나 비활성 시킬수 있음.

eslint 지원 에디터인 경우 해당 플러그인 또는 확장프로그램을 설치할 경우 에디터에서 확인이 가능하며, 아닌 경우 명령어를 통해서 확인이 가능하다