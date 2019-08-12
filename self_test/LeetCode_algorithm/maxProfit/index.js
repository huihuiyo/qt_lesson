// var maxProfit = function(prices) {
//     var maxPro = 0;
//     for (var i = 0; i < prices.length; i++) {
//         for (var j = i + 1; j < prices.length; j++) {
//             if (prices[j] - prices[i] > maxPro) {
//                 maxPro = prices[j] - prices[i];
//             }
//         }
        
//     }
//     console.log(maxPro);
// };

// const prices = [7,6,4,3,1];
// maxProfit(prices);

// 优化写法
var maxProfit = function(prices) {
    const n = prices.length;
    var dp_i_0 = 0, dp_i_1 = Number.NEGATIVE_INFINITY;
    for (var i = 0; i < n; i++) {
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
        dp_i_1 = Math.max(dp_i_1, -prices[i]);
    }
    console.log(dp_i_0);
}
const prices = [7,1,5,3,6,4];
maxProfit(prices);