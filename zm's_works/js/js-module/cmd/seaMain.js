define(function(require, factory) {
  var jq = require('./jq');
  jq.$();
  var swiper = require('./swiper'); // amd环境会产生变量提升的效果
  swiper.swiper();
  return {};
});