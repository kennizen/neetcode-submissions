class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const col = matrix[0].length;
        const row = matrix.length;

        let ans = false;

        for (let i = 0; i < row; i++) {
            if (target <= matrix[i][col - 1]) {
                const res = this.binarySearch(matrix[i], target);
                if (res > -1) ans = true;
                break;
            }
        }

        return ans;
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
