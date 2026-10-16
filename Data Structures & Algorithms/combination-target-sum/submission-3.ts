class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const res: number[][] = [];

        function recur(path: number[], idx: number, sum: number) {
            if (sum > target) return;

            if (sum === target) {
                res.push([...path]);
                return;
            }

            for (let i = idx; i < nums.length; i++) {
                path.push(nums[i]);

                if (sum < target) {
                    recur(path, i, sum + nums[i]);
                } else {
                    recur(path, i + 1, sum + nums[i]);
                }

                path.pop();
            }
        }

        recur([], 0, 0);

        return res;
    }
}
