class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s: string): string[][] {
        const res = [];

        function isPalindrome(str: string) {
            if (!str.length) return false;

            let i = 0;
            let j = str.length-1;

            while (i <= j) {
                if (str[i] !== str[j]) return false;
                i += 1;
                j -= 1;
            }

            return true;
        }

        function dfs(idx: number, path: string[]) {
            if (idx >= s.length) {
                res.push([...path])
                return;
            }

            for (let i = idx; i < s.length; i++) {
                const subStr = s.slice(idx, i + 1);
                if (isPalindrome(subStr)) {
                    path.push(subStr);
                    dfs(i + 1, path);
                    path.pop();
                }
            }
        }

        dfs(0, []);

        return res;
    }
}
