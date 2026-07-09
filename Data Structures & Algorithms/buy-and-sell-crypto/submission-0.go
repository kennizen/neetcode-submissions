func maxProfit(prices []int) int {
	profit := 0
	curPrice := prices[0]

	for _, ele := range prices {
		if ele < curPrice {
			curPrice = ele
		} else if ele > curPrice {
			profit = max(profit, ele - curPrice)
		}
	}

	return profit
}
