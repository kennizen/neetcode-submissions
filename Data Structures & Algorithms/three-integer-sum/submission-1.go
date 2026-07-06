import (
	"slices"
)

func threeSum(nums []int) [][]int {
	tripletHashSet := make(map[string]struct{})
	ans := make([][]int, 0)

	for i, ele := range nums {
		target := -ele
		hashSet := make(map[int]struct{})

		for j := i+1; j < len(nums); j++ {
			val := target - nums[j]

			if _, ok := hashSet[val]; ok {
				res := []int{ele, val, nums[j]}

				slices.Sort(res)

				key := fmt.Sprintf("%d,%d,%d", res[0], res[1], res[2])

				if _, ok := tripletHashSet[key]; !ok {
					tripletHashSet[key] = struct{}{}
				}
			}

			hashSet[nums[j]] = struct{}{}
		}
	}

	for k,_ := range tripletHashSet {

		parts := strings.Split(k, ",")
		triplet := make([]int, 0, 3)

		for _, p := range parts {
			num, _ := strconv.Atoi(p)
			triplet = append(triplet, num)
		}

		ans = append(ans, triplet)
	}

	return ans
}
