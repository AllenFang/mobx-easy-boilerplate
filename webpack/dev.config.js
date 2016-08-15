const path = require('path');
const webpack = require('webpack');

const PATHS = {
  app: path.join(__dirname, '../src'),
  build: path.join(__dirname, '../dist'),
};

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    PATHS.app
  ],
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    preLoaders: [
        { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'eslint' }
    ],
    loaders: [{
      test: /\.(js|jsx)$/,
      loaders: ['babel'],
      exclude: /node_modules/,
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', PATHS.app]
  }
};
