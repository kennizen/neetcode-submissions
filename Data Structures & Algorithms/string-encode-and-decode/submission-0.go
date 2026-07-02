type Solution struct{}

func (s *Solution) Encode(strs []string) string {

    res := "" // len of str + $ + str
	
    for _, ele := range strs {
        length := len(ele)
        res += strconv.Itoa(length) + "$" + ele
    }

    return res
}

func (s *Solution) Decode(encoded string) []string {
    res := make([]string, 0)
    i := 0
    num := ""

    for i < len(encoded){
        if string(encoded[i]) == "$" {
            digit, _ := strconv.Atoi(num)
            str := ""

            for j := 1; j<=digit; j++ {
                str += string(encoded[i+j])
            }

            res = append(res, str)

            i += digit + 1
            num = ""
        } else {
            num += string(encoded[i])
            i += 1
        }
    }

    return res
}
