/* global __dirname, process */
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const distPath = path.resolve(__dirname, 'public');

module.exports = {
  entry: {
    app: './src/js/entry.js',
  },
  output: {
    filename: '[name].js',
    path: distPath,
    assetModuleFilename: 'images/[name][ext][query]'
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      API_URL: JSON.stringify(process.env.API_URL),
    }),
    new CleanWebpackPlugin({
      verbose: true,
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: [
                    'last 2 version',
                    'not dead',
                  ],
                  modules: false,
                  useBuiltIns: 'usage',
                  corejs: 3,
                },
              ],
              '@babel/preset-react',
            ],
          },
        }
      },
      {
        test: /\.(ico|svg|jpe?g|png|webp)$/,
        type: 'asset/resource',
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
