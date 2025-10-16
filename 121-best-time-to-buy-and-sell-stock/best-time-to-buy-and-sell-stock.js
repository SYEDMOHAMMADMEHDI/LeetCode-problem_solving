/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // Input: prices = [7,1,5,3,6,4] Output: 5 --
    // this is a single-pass linear scan (not sliding window) 
    //  (O(n) time, O(1) space).

    let lowestPrice = Infinity;
    let maxProfit = 0;

    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < lowestPrice) {
            lowestPrice = prices[i];
        }
        else if(prices[i] - lowestPrice > maxProfit) {
            maxProfit = prices[i] - lowestPrice;
        }
    }
    return maxProfit;
};