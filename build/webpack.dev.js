const webpack = require('webpack');
const Merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const env = require('../config/dev.env');
const config = require('../config/index.js')['dev'];

module.exports = Merge(commonConfig, {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
          }
        }
        ],
      }
    ]
  },
  devtool: config.devtool,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(env),
    }),
  ],
  devServer: config.devServer,
});


