class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let ans = Infinity;

        let s = 0;
        let e = nums.length - 1;

        let m = Math.trunc((s + e) / 2);

        ans = nums[m];

        while (s <= e) {
            if (nums[m] < nums[e]) {
                e = m - 1;
            } else {
                s = m + 1;
            }

            m = Math.trunc((s + e) / 2);

            if (nums[m] < ans) ans = nums[m];
        }

        return ans;
    }
}
