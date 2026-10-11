class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let ans = -1;

        let s = 0;
        let e = nums.length - 1;

        let m = Math.trunc((s + e) / 2);

        while (s <= e) {
            if (target === nums[m]) {
                ans = m;
                break;
            }

            if (nums[m] <= nums[e]) {
                if (nums[m] <= target && target <= nums[e]) {
                    s = m + 1;
                } else {
                    e = m - 1;
                }
            } else {
                if (nums[s] <= target && target <= nums[m]) {
                    e = m - 1;
                } else {
                    s = m + 1;
                }
            }

            m = Math.trunc((s + e) / 2);
        }

        return ans;
    }
}
