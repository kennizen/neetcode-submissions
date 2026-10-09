class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let ans = -1;

        let start = 0;
        let end = nums.length - 1;

        let mid = Math.trunc((start + end) / 2);

        while (start <= end) {
            if (nums[mid] === target) {
                ans = mid;
                break;
            }

            if (nums[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }

            mid = Math.trunc((start + end) / 2);
        }

        return ans;
    }
}
