/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    // using sliding window

    let max = -Infinity;
    let windowStart = 0;
    let curSum = 0;

    for(let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        curSum += nums[windowEnd];
        if(windowEnd - windowStart === k-1){
            let avg = curSum/k;
            max = Math.max(max,avg);
            curSum -= nums[windowStart];
            windowStart++;
        }
    }
    return max;
};