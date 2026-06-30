func twoSum(nums []int, target int) []int {
    hashMap := make(map[int]int)

	for i, ele := range nums {
		val := target - ele

		if _, exists := hashMap[val]; exists {
			return []int{hashMap[val], i}
		} else {
			hashMap[ele] = i
		}
	}

	return []int{-1, -1}
}
