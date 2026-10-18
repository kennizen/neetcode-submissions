class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums: number[]): number[][] {
        const res = [];
        const seen = {};

        nums.sort((a, b) => a - b);

        function dfs(path: number[], idx: number) {
            res.push([...path]);
            for (let i = idx; i < nums.length; i++) {
                if (i > idx && nums[i] === nums[i - 1]) continue;
                path.push(nums[i]);
                dfs(path, i + 1);
                path.pop();
            }
        }

        dfs([], 0);

        return res;
    }
}
