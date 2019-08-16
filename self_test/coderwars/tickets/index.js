function tickets(peopleInLine){
	// ...
	let tempArr = peopleInLine[0];
	peopleInLine.reduce((pre, next) => {
		switch(next) {
			case 25:
				tempArr.unshift(next);
				return tempArr;
			case 50:
				if (tempArr.contains(25)) {
					tempArr.sort();
					tempArr.shift();
					tempArr.unshift(next)
					console.log(tempArr);
					return tempArr;
				} else {
					return 'No';
				}
			case 100:
				if (tempArr.contains(25) && tempArr.contains(50)) {
					tempArr.sort();
					tempArr.pop();
					tempArr.shift();
					return tempArr;
				} else {
					return tempArr;
				}
				
		}

	})
}

console.log(tickets([25, 25, 50, 50]));