const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    compress: false,
    publicPath: '/',
    host: '0.0.0.0',
    port: 5001,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index_dev.html',
      filename: 'index.html',
      title: 'Torii(鳥居) | development',
      favicon: 'src/assets/favicon.ico',
    }),
  ],
});
