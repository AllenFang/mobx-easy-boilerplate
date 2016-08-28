const path = require('path');
const webpack = require('webpack');
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');

const dashboard = new Dashboard();

const PATHS = {
  build: path.join(__dirname, '../dist')
};

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: PATHS.build,
    filename: '[name].js',
    publicPath: '/dist/'
  },
  module: {
    preLoaders: [
        { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'eslint' }
    ],
    loaders: [{
        test: /\.css$/,
        loader: 'style!css?sourceMap!postcss-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new DashboardPlugin(dashboard.setData),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
