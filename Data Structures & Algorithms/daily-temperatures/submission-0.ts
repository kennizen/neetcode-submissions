class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const st: Array<Array<number>> = [];
        const res: number[] = new Array(temperatures.length).fill(0);

        temperatures.forEach((temp, i) => {
            while (st.length && st.at(-1)[0] < temp) {
                res[st.at(-1)[1]] = i - st.at(-1)[1];
                st.pop();
            }
            st.push([temp, i]);
        });

        return res
    }
}
