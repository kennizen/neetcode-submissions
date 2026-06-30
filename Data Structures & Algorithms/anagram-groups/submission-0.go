import "slices"

func groupAnagrams(strs []string) [][]string {
	hashMap := make(map[string][]string)
	res := make([][]string, 0)

	for _, ele := range strs {
		byteStr := []byte(ele)
		slices.Sort(byteStr)
		sortedKey := string(byteStr)

		if _, exists := hashMap[sortedKey]; !exists {
			hashMap[sortedKey] = make([]string, 0)
		}

		hashMap[sortedKey] = append(hashMap[sortedKey], ele)
	}

	for _,v := range hashMap {
		res = append(res, v)
	}

	return res
}
