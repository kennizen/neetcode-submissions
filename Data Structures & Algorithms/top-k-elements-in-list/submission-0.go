import "slices"

type KvObj struct {
	key int
	value int
} 

func topKFrequent(nums []int, k int) []int {
	hashMap := make(map[int]int)
	sortableArr := make([]KvObj, 0)
	res := make([]int, 0)
	i := 0

	for _, ele := range nums {
		if _, exists := hashMap[ele]; exists {
			hashMap[ele] += 1
		} else {
			hashMap[ele] = 1
		}
	}

	for k,v := range hashMap {
		sortableArr = append(sortableArr, KvObj{key: v, value: k})
	}

	slices.SortFunc(sortableArr, func(a KvObj, b KvObj) int {
		return b.key - a.key
	})

	for k > 0 {
		res = append(res, sortableArr[i].value)
		i += 1
		k -= 1
	}

	return res
}
