func maxScore(s string) int {
    score := 0

	i, j := 0, 0
	k := len(s)-1

	for j < k {
		zeroCount := 0
		oneCount := 0

		for l := i; l <= j; l++ {
			if s[l] == '0' {
				zeroCount += 1
			}
		}

		for m := j+1; m <= k; m++ {
			if s[m] == '1' {
				oneCount += 1
			}
		}

		score = max(score, zeroCount + oneCount)

		j += 1
	}

	return score
}