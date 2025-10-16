/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const seen = new Set();
    for(const val of nums) {
        if(seen.has(val)) {
            return true;
        }
        seen.add(val);
    }
    return false;

};