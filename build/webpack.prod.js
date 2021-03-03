const webpack = require('webpack');
const Merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const config = require('../config')['prod'];
const env = require('../config/prod.env');



module.exports = Merge(commonConfig, {
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: false
          }
        }
      ],
    }]
  },
  // devtool: 'eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(env),
    }),
    new MiniCssExtractPlugin({
      filename: config.cssFile,
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        sourceMap: false,
      }),
      new TerserPlugin({
        extractComments: false,
        cache: true,
        parallel: true,
        sourceMap: false
      })
    ],
  }
});
