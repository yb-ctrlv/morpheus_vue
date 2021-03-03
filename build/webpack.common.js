const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const config = require('../config')['common'];
const { NODE_ENV } = process.env;
const { entry, output } = config;
module.exports = {
  mode: NODE_ENV,
  entry,
  output,

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: config.imgFile,
            limit: config.imgLimit,
            esModule: false
          }
        }]
      },
      {
        test: /\.(woff|woff2|ttf|eot|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: config.fontFile,
            limit: config.fontLimit,
            esModule: false
          }
        }]
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      ...config.alias
    }
    ,extensions: ['.js', '.vue', '.json', '*'] // 파일 찾는 순서
  },

  performance: {
    hints: NODE_ENV === 'production' ? 'warning' : false, // 파일 크기에 따른 오류 표시
  },

  plugins: [
    new webpack.ProvidePlugin({
      '_': 'lodash',
      'moment': 'moment',
    }),
    new MomentLocalesPlugin({
      localesToKeep: ['ko'], // locale 중 ko 만 사용
    }),
    new HtmlWebPackPlugin({
      template: 'index.html',
      filename: 'index.html',
      chunks: ['bundle', 'vendor']
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      as(entry) {
        if (/\.css$/.test(entry)) return 'style';
        if (/\.(woff|woff2|ttf|eot|otf)$/.test(entry)) return 'font';
        if (/\.(ico|png|jpg|jpeg|gif|svg)$/.test(entry)) return 'image';
        return 'script';
      },
      include: 'allAssets',
      fileWhitelist: [/bundle/,/vendor.js/],
      fileBlacklist: [/\.txt/,/swiper/],
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/](vue|vue-router|vuex)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  target: 'web',
}
