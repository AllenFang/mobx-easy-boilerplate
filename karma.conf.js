import webpack from 'webpack';

module.exports = (config) => {
  config.set({
    browsers: ['Chrome'],
    browserNoActivityTimeout: 30000,
    frameworks: ['mocha', 'chai', 'sinon-chai'],
    files: ['karma.files.js'],
    preprocessors: {
      'karma.files.js': ['webpack']
    },
    webpack: require('./webpack/test.config.js'),
    webpackServer: { noInfo: true }
  });
}
