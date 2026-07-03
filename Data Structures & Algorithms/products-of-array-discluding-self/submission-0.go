func productExceptSelf(nums []int) []int {
    suffixArr := make([]int, len(nums))
    prefixArr := make([]int, len(nums))

    val := 1

    res := make([]int, len(nums))

    for i, ele := range nums {
        val *= ele
        prefixArr[i] = val
    }

    val = 1

    for i := len(nums)-1; i>=0; i-- {
        val *= nums[i]
        suffixArr[i] = val
    }

    i := 0
    val = 1

    for i < len(nums) {
        if i-1 >= 0 {
            val *= prefixArr[i-1]
        }
        if i+1 < len(nums) {
            val *= suffixArr[i+1]
        }

        res[i] = val
        val = 1
        i += 1
    }

    return res
}
