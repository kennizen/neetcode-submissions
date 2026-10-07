const bracketMap = {
    "[": "]",
    "(": ")",
    "{": "}",
};

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];

        for (const bracket of s) {
            if(stack.length <= 0) {
                stack.push(bracket)
            } else {
                const top = stack[stack.length-1]
                const closingBracket = bracketMap[top]

                if(closingBracket === bracket){
                    stack.pop()
                } else {
                    stack.push(bracket)
                }
            }
        }

        return stack.length <= 0
    }
}
