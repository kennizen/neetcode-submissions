import (
	"slices"
)

func threeSum(nums []int) [][]int {
	ans := make([][]int, 0)
	target := 0

	slices.Sort(nums)

	i := 0

	for i < len(nums) {
		j, k := i+1, len(nums)-1

		for i < j && i < k && j < k {
			sum := nums[i] + nums[j] + nums[k]

			if sum < target {
				j += 1
			} else if sum > target {
				k -= 1
			} else {
				ans = append(ans, []int{nums[i], nums[j], nums[k]})

				curJ := nums[j]
				curK := nums[k]

				j += 1
				k -= 1

				for curJ == nums[j] && j < k {
					j += 1
				}

				for curK == nums[k] && k > j {
					k -= 1
				}

				for i + 1 < len(nums) && nums[i] == nums[i+1] {
					i += 1
				}
			}
		}

		i += 1
	}

	return ans
}
