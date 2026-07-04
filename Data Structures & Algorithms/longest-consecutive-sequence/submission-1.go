func longestConsecutive(nums []int) int {
	if len(nums) <= 0 {
		return 0
	}

	hmap := make(map[int]struct{})

	for _, ele := range nums {
		if _, ok := hmap[ele]; !ok {
			hmap[ele] = struct{}{}
		}
	}

	count := 1

	for k,_ := range hmap {
		if _, ok := hmap[k-1]; !ok {
			i := k
			localCount := 1
			for {
				_, ok := hmap[i+1]

				if !ok {
					break
				}

				localCount += 1
				count = max(count, localCount)
				i += 1
			}
		}
	}

	return count
}
