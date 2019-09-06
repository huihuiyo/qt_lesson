// es5写法
// function curry (fn, len = fn.length) {
//   return _curry.call(this, fn, len);
// }
// function _curry (fn, len, ...args) {
//   return function (...params) {
//     args = [...args, ...params];

//     if (args.length >= len) {
//       return fn.apply(this, args);
//     } else {
//       return _curry.call(this, fn, len, ...args);
//     }
//   }
// }

// es6写法
const curry = (fn, arr = []) => (...args) => (
  arg => arg.length === fn.length
    ? fn(...arg)
    :curry(fn, arg)
)([...arr, ...args]);

let fn = curry ((a, b, c) => a + b + c);

console.log(fn(1)(2)(3));