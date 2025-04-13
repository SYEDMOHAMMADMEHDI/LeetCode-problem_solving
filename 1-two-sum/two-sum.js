/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Beginner friendly code , this also works fine
    // for(let i=0; i < nums.length; i++) {
    //     for(let j=i+1; j < nums.length; j++) {
    //         if(nums[i]+nums[j] == target){
    //          return [i,j];   
    //         }
    //     }
    // }

    //below code using map
    const checked = new Map();
    for (let i=0; i < nums.length; i++){
        const num =nums[i];
        const complement = target - num;
        if(checked.has(complement)){
            return [checked.get(complement),i]
        }
        checked.set(num,i);
    }

};