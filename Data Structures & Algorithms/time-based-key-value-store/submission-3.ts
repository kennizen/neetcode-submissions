class TimeMap {
    keyStore: Map<string, { timestampMap: Record<number, string>; timestampList: number[] }>;

    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        if (this.keyStore.has(key)) {
            const data = this.keyStore.get(key);

            data.timestampMap[timestamp] = value;
            data.timestampList.push(timestamp);

            this.keyStore.set(key, data);
        } else {
            this.keyStore.set(key, {
                timestampMap: { [timestamp]: value },
                timestampList: [timestamp],
            });
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        let res = "";

        if (!this.keyStore.has(key)) return res;

        const data = this.keyStore.get(key);
        const list = data.timestampList;

        let s = 0;
        let e = list.length - 1;
        let m = Math.trunc((s + e) / 2);

        let lastGreatestPrevTimestamp = 0;

        while (s <= e) {
            if (list[m] === timestamp) {
                lastGreatestPrevTimestamp = list[m];
                break;
            }

            if (list[m] <= timestamp) {
                s = m + 1;
                lastGreatestPrevTimestamp = list[m];
            } else {
                e = m - 1;
            }

            m = Math.trunc((s + e) / 2);
        }

        return data.timestampMap[lastGreatestPrevTimestamp]
            ? data.timestampMap[lastGreatestPrevTimestamp]
            : "";
    }
}
