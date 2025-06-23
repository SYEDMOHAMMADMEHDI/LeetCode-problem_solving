/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let brackets = {
        '{':'}',
        '(':')',
        '[':']'
    }
    for(char of s) {
        if(brackets[char]){
            stack.push(char);
        }
        else {
            let top = stack.pop();
            if(!top || brackets[top] !== char){
                return false;
            }
        }
    }
    return stack.length === 0;
};