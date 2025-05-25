/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let total = 0;
    let res = nums[0];
    for(const val of nums) {
        if(total < 0) {
            total = 0;
        }
        total += val;
        res = Math.max(res, total);
    }
    return res;
};