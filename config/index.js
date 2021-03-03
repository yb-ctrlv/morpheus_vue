'use strict';

const path = require('path');

module.exports = {
  common: {
    // webpack common config
    entry: { // entry 
      bundle: path.resolve(__dirname, '../src/main.js'),
    },

    output: {
      // contextRoot
      publicPath: '/res/www/', 
      // 생성될 경로 기준
      path: path.resolve(__dirname, '../../assets/res/www'), 
      // path: path.resolve(__dirname, '../dist'),
      // 생성될 js 파일명
      filename: 'js/[name].js', 
      // chunk된 js 파일명
      chunkFilename: 'js/[name].js', 
    },

    // 이미지 관련 파일 명
    imgFile: 'img/[name].[ext]',
    // base64변환 기준 byte
    imgLimit: 0, 
    // 폰트 파일 명
    fontFile: 'font/[name].[ext]',
    // base64변환 기준 byte
    fontLimit: 0, 

    alias: {
      // import시 단축하여 사용하고 싶은 경우
      'src': path.resolve(__dirname, '../src'), 
      '@': path.resolve(__dirname, '../src/components')
    },
  },
  dev: {
    // webpack dev config
    devtool: 'eval-source-map',
  },
  prod: {
    // webpack build config
    // 빌드시 사용될 css 파일명
    cssFile: 'css/[name].css',
  }
}