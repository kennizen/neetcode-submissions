class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const st: string[] = [];
        let first = "";
        let second = "";

        for (const token of tokens) {
            if (this.isDigit(token)) {
                st.push(token);
            } else if (token === "+") {
                second = st.pop();
                first = st.pop();
                st.push(this.add(first, second));
            } else if (token === "-") {
                second = st.pop();
                first = st.pop();
                st.push(this.subtract(first, second));
            } else if (token === "*") {
                second = st.pop();
                first = st.pop();
                st.push(this.multiply(first, second));
            } else if (token === "/") {
                second = st.pop();
                first = st.pop();
                st.push(this.divide(first, second));
            }
        }

        return Number(st.at(-1));
    }

    isDigit(val: string) {
        if (val === "+" || val === "-" || val === "*" || val === "/") return false;
        return true;
    }

    add(a: string, b: string): string {
        return String(Number(a) + Number(b));
    }

    subtract(a: string, b: string): string {
        return String(Number(a) - Number(b));
    }

    multiply(a: string, b: string): string {
        return String(Number(a) * Number(b));
    }

    divide(a: string, b: string): string {
        return String(Math.trunc(Number(a) / Number(b)));
    }
}
