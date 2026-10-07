class MinStack {
    stack: number[];
    minStack: number[];

    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        if (!this.stack.length && !this.minStack.length) {
            this.minStack.push(val);
            this.stack.push(val);
            return;
        }

        if (val <= this.minStack.at(-1)) {
            this.minStack.push(val);
        }

        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop(): void {
        if (this.stack.at(-1) === this.minStack.at(-1)) {
            this.minStack.pop();
        }
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack.at(-1);
    }
}
