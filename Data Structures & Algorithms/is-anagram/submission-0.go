func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	arr1 := make([]int, 26)
	arr2 := make([]int, 26)

	for _, ele := range s {
		arr1[ele % 26] += 1
	}

	for _, ele := range t {
		arr2[ele % 26] += 1
	}

	for i, _ := range arr1 {
		if arr1[i] != arr2[i] {
			return false
		}
	}

	return true
}
