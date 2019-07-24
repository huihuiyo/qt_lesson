// Math.max()
const IMath = {}   // 命名空间
/**
 * @params:number NaN Not a number
 * @return:number 返回最大值
 */
IMath.max = function (...args) {
    // console.log(arguments, arguments.length);
    
    for(var i = 0; i < args.length; i++) {
        // 类型检测
        if(typeof arguments[i] !=='number') {
            return NaN;
        }
        // console.log(arguments[i])
    }
}

console.log(IMath.max([2, 4, 3, 9]));