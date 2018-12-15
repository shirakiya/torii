/* global __dirname */
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const distPath = path.resolve(__dirname, 'dist');

module.exports = {
  entry: {
    app: './src/js/entry.js',
  },
  plugins: [
    new CleanWebpackPlugin([distPath]),
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
          'presets': [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: [
                    'last 2 versions',
                    'Chrome >= 41',
                  ],
                },
                modules: false,
                useBuiltIns: 'usage',
              },
            ],
            '@babel/preset-react',
          ],
        },
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  resolve: {},
};
