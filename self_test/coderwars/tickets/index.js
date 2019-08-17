function tickets(peopleInLine){
	// ...
	// let tempArr = [];
	// let result = 'YES';
	// tempArr.unshift(peopleInLine[0]);
	// peopleInLine.reduce((pre, next, index, arr) => {
	// 	switch(next) {
	// 		case 25:
	// 			tempArr.unshift(next);
	// 			return tempArr;
	// 		case 50:
	// 			if (tempArr.indexOf(25) != -1) {
	// 				tempArr.sort();
	// 				tempArr.shift();
	// 				tempArr.unshift(next);
	// 				return tempArr;
	// 			} else {
	// 				result = 'NO';
	// 				arr.splice(1);
	// 			}
	// 		case 100:
	// 			tempArr.sort();
	// 			if (tempArr.indexOf(25) != -1 && tempArr.indexOf(50) != -1) {
	// 				tempArr.pop();
	// 				tempArr.shift();
	// 				return tempArr;
	// 			} else if (tempArr[2] == 25) {
	// 				tempArr.splice(0, 3);
	// 			} else {
	// 				result = 'NO';
	// 				arr.splice(1);
	// 			}
	// 	}
	// })
	// return result;

	// 写好看一点
	var judge = new JudgeFunc();
	return peopleInLine.every(judge.change.bind(judge)) ? 'YES' : 'NO';
}
function JudgeFunc() {
	this.money = {
		25: 0,
		50: 0
	}
	this.change = function(element) {
		this.money[element]++;
		switch (element) {
			case 25:
				return true;
			case 50:
				this.money[25]--;
				break;
			case 100:
				this.money[50] ? this.money[50]-- : this.money[25] -= 2;
				this.money[25]--;
				break;
		}
		return this.money[25] >= 0;
	}
}

console.log(tickets([50,100,25,25,25,100,25,25,50,100,25,25,25,100,25,25,50,100]));