func trap(height []int) int {
	n := len(height)
	maxLeft := make([]int, n)
	maxRight := make([]int, n)

	curMax := 0
	sum := 0

	for i, ele := range height {
		maxLeft[i] = curMax
		
		if ele > curMax {
			curMax = ele
		}
	}

	curMax = 0

	for i := n-1; i >= 0; i-- {
		maxRight[i] = curMax

		if height[i] > curMax {
			curMax = height[i]
		}
	}

	for i, ele := range height {
		s := min(maxLeft[i], maxRight[i]) - ele

		if s > 0 {
			sum += s
		}
	}
	
	return sum
}
