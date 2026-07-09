func lengthOfLongestSubstring(s string) int {
	n := len(s)

	if n <= 0 {
		return 0
	}

	longest := 1
	hashMap := make(map[byte]int)
	i, j := 0, 0

	for j < n && i <= j {
		if _, ok := hashMap[s[j]]; ok {
			if hashMap[s[j]] >= i {
				i = hashMap[s[j]] + 1
			}
		}

		hashMap[s[j]] = j

		longest = max(longest, j-i+1)

		j += 1
	} 

	return longest
}
