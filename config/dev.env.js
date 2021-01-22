'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')


// DEV CONSTANTS
// 기본값은 PRODENV 값을 따르기 때문에 공통으로 사용되는 상수는 prod.env.js에 선언한다.
// 변경될 경우 npm run start/build 재시작 필요
module.exports = merge(prodEnv, {
  CONSTANT: {
    ENV: 'DEV',
    isDev: true
  }
})
