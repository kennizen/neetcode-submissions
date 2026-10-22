const map = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
};

class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits: string): string[] {
        const res = [];

        if (!digits.length) return res;

        function dfs(idx: number, path: string) {
            if (idx >= digits.length) {
                res.push(path);
                return;
            }

            const letters = map[digits[idx]];

            for (let i = 0; i < letters.length; i++) {
                dfs(idx + 1, path + letters[i]);
            }
        }

        dfs(0, "");

        return res;
    }
}
