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
      publicPath: './', 
      // 생성될 경로 기준
      path: path.resolve(__dirname, '../../assets/res/www'), 
      // path: path.resolve(__dirname, '../dist'),
      // 생성될 js 파일명
      filename: 'js/[name].js', 
      // chunk된 js 파일명
      chunkFilename: 'js/[name].js', 
    },
    // 빌드시 사용될 css 파일명
    cssFile: 'css/[name].[contenthash].css',

    // 이미지 관련 파일 명
    imgFile: 'img/[name].[contenthash].[ext]',
    // base64변환 기준 byte
    imgLimit: 1, 
    // 폰트 파일 명
    fontFile: 'font/[name].[contenthash].[ext]',
    // base64변환 기준 byte
    fontLimit: 1, 

    alias: {
      // import시 단축하여 사용하고 싶은 경우
      'src': path.resolve(__dirname, '../src'), 
      '@': path.resolve(__dirname, '../src/components'),
      'img': path.resolve(__dirname, '../src/assets/img'),
    },
  },
  dev: {
    // webpack dev config
    devtool: 'inline-source-map',
  },
  prod: {
    // webpack build config
    
  }
}