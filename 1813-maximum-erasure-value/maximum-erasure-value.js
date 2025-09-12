/**
 * @param {number[]} nums
 * @return {number}
 */
//  using sliding eindow and set
var maximumUniqueSubarray = function(nums) {
    let l = 0, r = 0, sum = 0, maxSum = 0;
    let set = new Set();

    while(r < nums.length){
        if(!set.has(nums[r])) {
            set.add(nums[r]);
            sum += nums[r++];
            maxSum = Math.max(maxSum, sum);
        }
        else {
            set.delete(nums[l]);
            sum -= nums[l++];
        }
    }
    return maxSum;
};