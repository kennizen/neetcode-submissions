func isValidSudoku(board [][]byte) bool {
	isValid := true

	for row := 0; row < 9; row++ {
		hmap := make(map[byte]struct{})

		for col := 0; col < 9; col++ {
			val := board[row][col]

			if _, exists := hmap[val]; exists {
				return false
			} else if val != '.' {
				hmap[val] = struct{}{}
			}
		}
	}

	for col := 0; col < 9; col++ {
		hmap := make(map[byte]struct{})

		for row := 0; row < 9; row++ {
			val := board[row][col]

			if _, exists := hmap[val]; exists {
				return false
			} else if val != '.' {
				hmap[val] = struct{}{}
			}
		}
	}

	row, col := 0, 0
	checks := 9

	for checks > 0 {
		hmap := make(map[byte]struct{})

		for i := row; i < row + 3; i++ {
			for j := col; j < col + 3; j++ {
				val := board[i][j]

				if _, exists := hmap[val]; exists {
					return false
				} else if val != '.' {
					hmap[val] = struct{}{}
				}
			}
		}

		checks -= 1

		if checks == 6 {
			row += 3
			col = 0
		} else if checks == 3 {
			row += 3
			col = 0
		} else {
			col += 3
		}
	}

	return isValid
}
