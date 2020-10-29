const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin');
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, '../src/main.js'),
    // vendor: ['moment','vue'],
  },

  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../../assets/res/www'),
    publicPath: '/res/www/',
    chunkFilename: 'js/[name].js',
  },

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
        options: {
          plugins: ['lodash'],
        }
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: 'img/[name].[ext]',
            limit: 10240,
            esModule: false
          }
        }]
      },
      {
        test: /\.(woff|woff2|ttf|eot|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: 'font/[name].[ext]',
            limit: 10240,
            esModule: false
          }
        }]
      }
    ]
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'Assets': path.resolve(__dirname, '../src/assets'),
      '@': path.resolve(__dirname, '../src'),
    }
    ,extensions: ['*', '.js', '.vue', '.json'] // 파일 찾는 순서
  },

  performance: {
    hints: false // 파일 크기에 따른 오류 끔
  },

  plugins: [
    new LodashModuleReplacementPlugin,
    new MomentLocalesPlugin({
      localesToKeep: ['ko'],
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
      fileWhitelist: [/\.(ico|png|jpg|jpeg|gif|svg|css|woff2)$/],
      fileBlacklist: [/\.txt/,/swiper/],
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/](vue|vue-router|vuex)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
        // styles: {
        //   test: /[\\/]node_modules[\\/]/,
        //   chunks: 'all',
        // }
      },
    },
  },
  target: 'web',
}
