/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let res = init;
        nums.forEach((element) => {
            res = fn(res,element);
        })
        return res;
};