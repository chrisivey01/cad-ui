var webpackMerge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var commonConfig = require('./webpack.common.js');
const path = require('path');

module.exports = webpackMerge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  entry: [
    path.join(process.cwd() ,'src/polyfills.ts'),
    path.join(process.cwd() ,'src/vendor.ts'),
    path.join(process.cwd() ,'src/main.ts'),
  ],
  
  output: {
    path: path.resolve(process.cwd(), 'html'),
    filename: '[name].js',
    // publicPath: '/' 
  },

  module:{
    rules:[
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[ext]&publicPath=./&outputPath=./assets/',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',

      inject: true,
    }),
  ],
  performance: {
    assetFilter: assetFilename =>
      !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
  },
});