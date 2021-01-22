const webpack = require('webpack');
const Merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const env = require('../config/prod.env');

module.exports = Merge(commonConfig, {
  mode: 'production',
  module: {
    rules: [
      {
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
      }
    ]
  },
  // devtool: 'eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(env),
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      cache: true,
      parallel: true,
      sourceMap: false
    }), new OptimizeCssAssetsPlugin({})],
  },
})