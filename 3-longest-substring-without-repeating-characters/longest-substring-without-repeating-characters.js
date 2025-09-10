/**
 * @param {string} s
 * @return {number}
 */

//  using sliding windown and set
var lengthOfLongestSubstring = function(s) {
    // let left = 0;
    // let maxLength = 0;
    // let charSet = new Set();

    // for(let right = 0; right < s.length; right++) {
    //     while(charSet.has(s[right])) {
    //         charSet.delete(s[left]);
    //         left ++;
    //     }
    //     charSet.add(s[right]);
    //     maxLength = Math.max(maxLength, right - left + 1);
    // }
    // return maxLength;

    let l = 0;
    let maxLen = 0;
    let charSet = new Set();

    for(r=0; r < s.length; r++) {
        while(charSet.has(s[r])){
            charSet.delete(s[l]);
            l++;
        }
        charSet.add(s[r]);
        maxLen = Math.max(maxLen, r - l + 1); 
    }

    return maxLen;
    
};