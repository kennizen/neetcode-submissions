class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const res: number[][] = [];

        function recur(path: number[], idx: number) {
            res.push([...path]);

            for (let i = idx; i < nums.length; i++) {
                path.push(nums[i]);
                recur(path, i + 1);
                path.pop();
            }
        }

        recur([], 0);

        return res;
    }
}
