// karma.conf.js
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
    ],
    browsers: ['ChromeHeadless'],
    files: ['./simple.spec.js'],
  });
};