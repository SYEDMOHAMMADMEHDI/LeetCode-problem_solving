/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;

    let need = new Map();
    for (let ch of s1) {
        need.set(ch, (need.get(ch) || 0) + 1);
    }

    let window = new Map();
    let matchCount = 0;
    let l = 0;

    for (let r = 0; r < s2.length; r++) {
        let ch = s2[r];

        // expand window: add current char
        if (need.has(ch)) {
            window.set(ch, (window.get(ch) || 0) + 1);
            if (window.get(ch) === need.get(ch)) {
                matchCount++;
            }
        }

        // shrink if window size > s1.length
        if (r - l + 1 > s1.length) {
            let leftChar = s2[l];
            if (need.has(leftChar)) {
                if (window.get(leftChar) === need.get(leftChar)) {
                    matchCount--;
                }
                window.set(leftChar, window.get(leftChar) - 1);
            }
            l++;
        }

        // check if all chars match
        if (matchCount === need.size) {
            return true;
        }
    }

    return false;
};