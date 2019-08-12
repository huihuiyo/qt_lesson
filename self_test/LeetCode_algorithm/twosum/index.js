var twoSum = function(nums, target) {
    var count = 1;
    for(var i = 0; i < nums.length; i++) {
        for(var j = count; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                var result = [];
                result.push(i);
                result.push(j);
                console.log(result);
            }
        }
        count++;
    }
};
var nums = [2, 7, 11, 15],
    target = 26;
twoSum(nums, target);