class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        const maxK = Math.max(...piles);

        let s = 1;
        let e = maxK;

        let k = Math.trunc((s + e) / 2);

        let ans = k;

        while (s <= e) {
            let totalHours = 0;

            for (const pile of piles) {
                totalHours += Math.ceil(pile / k);
            }

            if (totalHours <= h) {
                e = k - 1;
            } else {
                s = k + 1;
            }

            if (totalHours <= h) ans = k;

            k = Math.trunc((s + e) / 2);
        }

        return ans;
    }
}
