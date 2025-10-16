/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //Input: nums = [2,7,11,15], target = 9
    // using hashmap

    const numMap = {};
    for(let i=0; i < nums.length; i++) {
        const comp = target - nums[i];
        if(comp in numMap) {
            return [numMap[comp],i];
        }
        numMap[nums[i]] = i;
    }
    
};