/**
 * @param {string} s
 * @return {boolean}
 */

//  using stack LIFO
var isValid = function(s) {
    const stack = [];

    const brackets = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    for(let char of s) {
        if(brackets[char]) {
            stack.push(char);
        }
        else {
            let top = stack.pop();
            if(!top || brackets[top] !== char) {
                return false;
            }

        }
    }
    return stack.length === 0;
}