"use strict";

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function who(obj) {
  return function (target) {
    target.pName = obj.pName;
    return target;
  };
} // @who
// @who('蜗牛弟弟')


var Man = (_dec = who({
  pName: '蜗牛弟弟'
}), _dec(_class =
/*#__PURE__*/
function () {
  function Man() {
    _classCallCheck(this, Man);
  }

  _createClass(Man, [{
    key: "meeting",
    value: function meeting() {
      // console.log(`蜗牛去相亲了。`)
      console.log("".concat(Man.pName, "\u53BB\u76F8\u4EB2\u4E86\u3002"));
    }
  }]);

  return Man;
}()) || _class);
var man = new Man();
man.meeting();

var Man1 =
/*#__PURE__*/
function () {
  function Man1() {
    _classCallCheck(this, Man1);
  }

  _createClass(Man1, [{
    key: "meeting",
    value: function meeting() {
      console.log("\u5C0F\u8717\u725B\u53BB\u76F8\u4EB2\u4E86\u3002"); // console.log(`${Man.name}去相亲了。`)
    }
  }]);

  return Man1;
}();