const webpack = require('webpack');
const Merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const config = require('../config')['prod'];
const env = require('../config/prod.env');



module.exports = Merge(commonConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(env),
    }),
  ],
});
