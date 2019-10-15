## AMD
异步模块化的一个方案
代表作：Require.js
define 定义
require 引入

## CMD
代表作：Sea.js 玉伯

## 共同
  都能异步加载
## 区别
  1. AMD 会提升所有的 require，只要依赖了模块，就会加载
  2. CMD 就会 按代码编程顺序，不产生变量提升的效果

## UMD
通用模块加载
AMD + Common.js
```js
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Vue = factory());
}(this, function () {}))
```

## 节日等运营活动的页面 -> 周期短、反应快 -> jq