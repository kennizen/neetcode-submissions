class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
        const res = []

        function recur(path: number[]){
            if(path.length === nums.length){
                res.push([...path])
                return
            }

            const set = new Set<number>(path)

            for(let i = 0; i<nums.length; i++) {
                if(set.has(nums[i])) continue
                path.push(nums[i])
                recur(path)
                path.pop()
            }
        }

        recur([])

        return res
    }
}
