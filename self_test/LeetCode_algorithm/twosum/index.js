var twoSum = function(nums, target) {
    // var count = 1;
    // for(var i = 0; i < nums.length; i++) {
    //     for(var j = count; j < nums.length; j++){
    //         if(nums[i] + nums[j] == target){
    //             var result = [];
    //             result.push(i);
    //             result.push(j);
    //             console.log(result);
    //         }
    //     }
    //     count++;
	// }
	var map = {};
	for (let i = 0; i < nums.length; i++) {
		let num = nums[i];
		map[num] = i;
	}
	for (let j = 0; j < nums.length; j++) {
		let num1 = nums[j];
		let anotherNum = target - num1;
		if (map[anotherNum] !== undefined && map[anotherNum] !== j) {
			return [j, map[anotherNum]];
		}
	}
};
var nums = [2, 7, 11, 15],
    target = 26;
twoSum(nums, target);