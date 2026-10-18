class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n: number): string[] {
        const res: string[] = [];

        function dfs(path: string, obc: number, cbc: number) {
            if (path.length === n * 2) {
                res.push(path);
                return;
            }

            if (cbc && cbc !== obc) dfs(path + ")", obc, cbc - 1);
            if (obc) dfs(path + "(", obc - 1, cbc);
        }

        dfs("(", n-1, n);

        return res;
    }
}
