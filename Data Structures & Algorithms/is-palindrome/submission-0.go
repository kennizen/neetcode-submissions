func isAlphanumeric(s rune) bool {
	if s >= 'a' && s <= 'z' || s >= '0' && s <= '9' {
		return true
	}

	return false
}

func isPalindrome(s string) bool {
	original := ""
	reversed := ""

	for _, ele := range s {
		if isAlphanumeric(unicode.ToLower(ele)) {
			original += strings.ToLower(string(ele))
		}
	}

	for i := len(original)-1; i >= 0; i-- {
		reversed += string(original[i])
	}

	if original == reversed {
		return true
	}

	return false
}
