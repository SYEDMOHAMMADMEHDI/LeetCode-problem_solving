/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let lowestPrice = prices[0];
    let profit = 0;
    for(let i=1;i<prices.length;i++) {
        if(lowestPrice > prices[i]){
            lowestPrice = prices[i];
        }
        profit = Math.max(profit, prices[i] - lowestPrice);
    }
    return profit;
};