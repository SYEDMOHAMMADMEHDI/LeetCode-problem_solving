/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j]; // OVERWRITE duplicates IN-PLACE
        }
    }
    return i + 1; // New length (e.g., 2 for [1,2])
};