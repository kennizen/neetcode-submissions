func maxArea(heights []int) int {
	i, j := 0, len(heights)-1
	count := 0

	for i < j {
		localCount := (j - i) * min(heights[i], heights[j])
		count = max(count, localCount)

		if heights[i] < heights[j] {
			i += 1 
		} else {
			j -= 1
		}
	}

	return count
}
