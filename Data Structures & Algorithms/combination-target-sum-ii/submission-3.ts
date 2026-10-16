class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
        const res: number[][] = [];
        const sortedNums = [...candidates].sort((a, b) => a - b);

        function recur(path: number[], idx: number, sum: number) {
            if (sum > target) return;

            if (sum === target) {
                res.push([...path]);
                return;
            }

            for (let i = idx; i < sortedNums.length; i++) {
                if (i > idx && sortedNums[i] === sortedNums[i - 1]) continue;

                path.push(sortedNums[i]);
                sum += sortedNums[i];

                recur(path, i + 1, sum);

                sum -= sortedNums[i];
                path.pop();
            }
        }

        recur([], 0, 0);

        return res;
    }
}
