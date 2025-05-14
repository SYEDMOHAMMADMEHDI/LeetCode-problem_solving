/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let chunkedArray = [];
    while(arr.length > 0) {
        chunkedArray.push(arr.splice(0,size));
    }
    return chunkedArray;
};
