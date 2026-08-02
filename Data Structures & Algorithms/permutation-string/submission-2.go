func checkInclusion(s1 string, s2 string) bool {
	if len(s1) > len(s2) {
		return false
	}

	hmap1 := make(map[string]int, 0)
	hmap2 := make(map[string]int, 0)

	for _, ele := range s1 {
		if _, ok := hmap1[string(ele)]; ok {
			hmap1[string(ele)] += 1
		} else {
			hmap1[string(ele)] = 1
		}
	}

	i, j := 0, len(s1)-1
	res := true

	for l := i; l <= j; l++ {
		if _, ok := hmap2[string(s2[l])]; ok {
			hmap2[string(s2[l])] += 1
		} else {
			hmap2[string(s2[l])] = 1
		}
	}

	for j < len(s2) {

		res = false

		for k, v := range hmap2 {
			val, ok := hmap1[string(k)]

			if !ok || val != v {
				res = false
				break;
			}

			res = true
		}

		if res {
			break
		}

		hmap2[string(s2[i])] -= 1

		if val, _ := hmap2[string(s2[i])]; val == 0 {
			delete(hmap2, string(s2[i]))
		}

		i += 1
		j += 1

		if j >= len(s2) {
			break
		}

		if _, ok := hmap2[string(s2[j])]; ok {
			hmap2[string(s2[j])] += 1
		} else {
			hmap2[string(s2[j])] = 1
		}
	}

	return res
}
