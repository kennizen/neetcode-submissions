class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums: number[]): number[][] {
        const res = [];
        const seen = {};

        function dfs(path: number[], idx: number) {
            if (path.length) {
                const key = [...path].sort().join("");
                if (!(key in seen)) {
                    res.push([...path]);
                    seen[key] = true;
                }
            } else {
                res.push([...path]);
            }

            for (let i = idx; i < nums.length; i++) {
                path.push(nums[i]);
                dfs(path, i + 1);
                path.pop();
            }
        }

        dfs([], 0);

        return res;
    }
}
