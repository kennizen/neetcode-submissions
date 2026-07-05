func twoSum(numbers []int, target int) []int {
	i, j := 0, len(numbers)-1

	res := make([]int, 0)

	for i < j {
		val := numbers[i] + numbers[j]

		if val > target {
			j -= 1
		} else if val < target {
			i += 1
		} else {
			res = append(res, i+1)
			res = append(res, j+1)
			break
		}
	}

	return res
}
