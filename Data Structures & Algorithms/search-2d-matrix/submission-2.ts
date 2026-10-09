class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const n = matrix[0].length; // number of columns
        const m = matrix.length; // number of rows

        let s = 0,
            e = m * n - 1;
        while (s <= e) {
            const mid = Math.trunc((s + e) / 2);
            const val = matrix[Math.floor(mid / n)][mid % n];
            if (val === target) return true;
            if (val < target) s = mid + 1;
            else e = mid - 1;
        }
        return false;
    }

    binarySearch(arr: number[], target: number): number {
        let s = 0;
        let e = arr.length - 1;

        let ans = -1;

        let mid = Math.trunc((s + e) / 2);

        while (s <= e) {
            if (arr[mid] === target) {
                ans = mid;
                break;
            }

            if (arr[mid] < target) {
                s = mid + 1;
            } else {
                e = mid - 1;
            }

            mid = Math.trunc((s + e) / 2);
        }

        return ans;
    }
}
