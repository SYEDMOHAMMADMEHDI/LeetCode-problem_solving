/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let total = 0;
    let res = nums[0];
    for(const val of nums) {
        
        total += val;
        if(total > res){
            res = total;
        }
        if(total < 0) {
            total = 0;
        }
    }
    return res;
};