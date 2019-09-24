// function Man () {}
// Man.prototype.meeting = function () {}
// Object.defineProperty(Man.prototype, meeting, {
//   value: function () {}
// })

function betterWn (target, name, descriptor) {
  // target === Man.prototype   name === meeting   descriptor.value === { value: }
  const originalFn = descriptor.value
  descriptor.value = function () {
    console.log('我家在红谷滩有房。')
    console.log('我家有车。')
    originalFn()
  }
}

class Man {
  @betterWn
  meeting () {
    console.log('和我在一起。');
  }
}
var man = new Man()
man.meeting()