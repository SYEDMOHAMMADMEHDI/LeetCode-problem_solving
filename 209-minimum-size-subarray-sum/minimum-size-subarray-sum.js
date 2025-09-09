/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {

    // using slinding window technique

    let left = 0;
    let minLen = Infinity;
    let curSum = 0;

    for(let right = 0; right<nums.length; right++) {
        curSum += nums[right];
        while(curSum >= target) {
            if(right - left + 1 < minLen) {
                minLen = right - left + 1;
            }
            curSum -= nums[left];
            left++;
        }
    }

    return minLen !== Infinity ? minLen : 0;
    
};