const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');

const PATHS = {
  app: path.join(__dirname, '../src')
};

const common = {
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loaders: ['babel'],
      exclude: /node_modules/
    }, {
      test: /\.png$/,
      loader: 'file?name=[name].[ext]'
    }, {
      test: /\.jpg$/,
      loader: 'file?name=[name].[ext]'
    }]
  },
  resolve: {
    extensions: ['', '.jsx', '.js', '.json', '.css'],
    modulesDirectories: ['node_modules', PATHS.app],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: process.env.NODE_ENV === 'development' ? '"development"' : '"production"',
      }
    })
  ],

  postcss: (webpack) => {
    return [
      autoprefixer({
        browsers: ['last 2 versions'],
      }),
      postcssImport({
        addDependencyTo: webpack,
      }),
    ];
  }
};

if (process.env.NODE_ENV === 'development') {
  module.exports = merge(require('./dev.config.js'), common);
}

if (process.env.NODE_ENV === 'production') {
  module.exports = merge(require('./prod.config.js'), common);
}
