/* global __dirname, process */
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const distPath = path.resolve(__dirname, 'public');

module.exports = {
  entry: {
    app: './src/js/entry.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'API_URL': JSON.stringify(process.env.API_URL),
      },
    }),
    new CleanWebpackPlugin(),
  ],
  output: {
    filename: '[name].js',
    path: distPath,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                modules: false,
                useBuiltIns: 'usage',
                corejs: 2
              },
            ],
            '@babel/preset-react',
          ],
        },
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {},
};
