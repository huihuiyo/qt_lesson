/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	var currArr = s.split('');
	var tempStr = '';
	if(currArr.length < 2) {
		tempStr = s;
	}
	if(currArr.length == 2) {
		currArr[0] == currArr[1] 
		? tempStr = currArr[0] 
		: tempStr = s;
	}
	if(currArr.length > 2) {
		currArr.reduce((pre, next) => {
			if (pre.indexOf(next) == -1){
				pre += next;
				if(pre.length > tempStr.length)
					tempStr = pre;
				return pre;
			}
			if(pre.length > tempStr.length)
				tempStr = pre;
			// console.log(pre.slice(pre.indexOf(next)));
			return pre = pre.slice(pre.indexOf(next)+1) + next;
		});
	}
	console.log(tempStr)
	return tempStr.length;
};

console.log(lengthOfLongestSubstring("nfpdmpi"));