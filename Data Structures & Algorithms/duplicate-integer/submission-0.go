func hasDuplicate(nums []int) bool {
    hashMap := make(map[int]struct{})

	for _,ele := range nums {
		_, exists := hashMap[ele]

		if exists {
			return true
		} else {
			hashMap[ele] = struct{}{}
		}
	}

	return false
}
