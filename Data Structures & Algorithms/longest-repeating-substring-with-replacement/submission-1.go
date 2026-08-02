func getFrequentCharCount(arr []int, s byte) int {
	count := arr[0]

	for _, ele := range arr {
		count = max(count, ele)
	}

	return count
}


func characterReplacement(s string, k int) int {
	maxSubStrLen := 0
	arr := make([]int, 26)

	i, j := 0,0

	for i <= j && j < len(s) {
		arr[s[j] % 26] += 1
		cnt := getFrequentCharCount(arr, s[j])

		if (j-i+1) - cnt <= k {
			maxSubStrLen = max(maxSubStrLen, j-i+1)
			j += 1
		} else {
			arr[s[i] % 26] -= 1
			arr[s[j] % 26] -= 1
			i += 1
		}
	}

	return maxSubStrLen
}
