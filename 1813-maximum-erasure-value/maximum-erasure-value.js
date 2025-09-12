/**
 * @param {number[]} nums
 * @return {number}
 */
//  using sliding eindow and set
var maximumUniqueSubarray = function(nums) {
    let l = 0,  sum = 0, maxSum = 0;
    let set = new Set();

    // Approach using while loop :

    // while(r < nums.length){
    //     if(!set.has(nums[r])) {
    //         set.add(nums[r]);
    //         sum += nums[r++];
    //         maxSum = Math.max(maxSum, sum);
    //     }
    //     else {
    //         set.delete(nums[l]);
    //         sum -= nums[l++];
    //     }
    // }

    // Approach using for loop:

    for (let r = 0; r < nums.length; r++) {
    // if nums[r] is already in the window, shrink left until it's removed
    while (set.has(nums[r])) {
        set.delete(nums[l]);
        sum -= nums[l];
        l++;
    }

    // now it's safe to add nums[r]
    set.add(nums[r]);
    sum += nums[r];
    maxSum = Math.max(maxSum, sum);
}
return maxSum;
};