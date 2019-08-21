// function zero(calFunc) {
// 	if(calFunc) {
// 		return Math.floor(eval("0" + calFunc));
// 	}
// 	return 0;
// }
// function one(calFunc) {
// 	if(calFunc) {
// 		return Math.floor(eval(1 + calFunc));
// 	}
// 	return 1;
// }
// function two(calFunc) {
// 	if(calFunc) {
// 		return Math.floor(eval(2 + calFunc));
// 	}
// 	return 2;
// }
// function three(calFunc) {
// 	if(calFunc) {
// 		return Math.floor(eval(3 + calFunc));
// 	}
// 	return 3;
// }
// function four(calFunc) {
// 	if(calFunc) {
// 		return Math.floor(eval(4 + calFunc));
// 	}
// 	return 4;
// }
// function five(calFunc) {
// 	if(calFunc) {
// 		return Math.floor(eval(5 + calFunc));
// 	}
// 	return 5;
// }
// function six(calFunc) {
// 	if (calFunc) {
// 		return Math.floor(eval(6 + calFunc));
// 	}
// 	return 6;
// }
// function seven(calFunc) {
// 	if(calFunc) {
// 		return Math.floor(eval(7 + calFunc));
// 	}
// 	return 7;
// }
// function eight(calFunc) {
// 	if(calFunc) {
// 		return Math.floor(eval(8 + calFunc));
// 	}
// 	return 8;
// }
// function nine(calFunc) {
// 	if(calFunc) {
// 		return Math.floor(eval(9 + calFunc));
// 	}
// 	return 9;
// }

// function plus(numFunc) {
// 	return "+" + numFunc;
// }
// function minus(numFunc) {
// 	return "-" + numFunc;
// }
// function times(numFunc) {
// 	return "*" + numFunc;
// }
// function dividedBy(numFunc) {
// 	if (numFunc !== 0) {
// 		return "/" + numFunc;
// 	}
// }
// console.log(zero(plus(six())))


// clever way
var n = function (digit) {
	return function (op) {
		return op ? op(digit) : digit;
	}
}
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) {
	return function(l) {
		return l + r;
	}
}
function times(r) {
	return function(l) {
		return l * r;
	}
}
function minus(r) {
	return function(l) {
		return l - r;
	}
}
function dividedBy(r) {
	return function(l) {
		return l / r;
	};
}

console.log(six(dividedBy(zero())))