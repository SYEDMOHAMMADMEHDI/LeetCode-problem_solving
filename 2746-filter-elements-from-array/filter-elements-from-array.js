/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filteredArray = [];
    arr.forEach((ele,i) => {
        if(fn(ele,i))
        filteredArray.push(ele);
    })
    return filteredArray;
};