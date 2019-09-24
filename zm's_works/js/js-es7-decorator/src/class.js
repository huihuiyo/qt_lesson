function who (obj) {
  return function (target) {
    target.pName = obj.pName;
    return target;
  }
}

// @who
// @who('蜗牛弟弟')
@who({
  pName: '蜗牛弟弟'
})
class Man {
  meeting () {
    // console.log(`蜗牛去相亲了。`)
    console.log(`${Man.pName}去相亲了。`)
  }
}
var man = new Man()
man.meeting()
class Man1 {
  meeting () {
    console.log(`小蜗牛去相亲了。`)
    // console.log(`${Man.name}去相亲了。`)
  }
}