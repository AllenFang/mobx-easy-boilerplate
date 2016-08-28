const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  output: {
    path: `${__dirname}/../dist/`,
    publicPath: './dist/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  entry: [
    './src/index'
  ],
  module: {
    loaders: [{
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    })
  ]
};
