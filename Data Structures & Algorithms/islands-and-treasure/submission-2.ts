class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid: number[][]): void {
        const rows = grid.length;
        const cols = grid[0].length;

        const q = [];

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 0) {
                    q.push([i, j]);
                }
            }
        }

        let dist = 1;
        const dir = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        while (q.length) {
            const size = q.length;

            for (let i = 0; i < size; i++) {
                const [r, c] = q.shift();
                for (const [dr, dc] of dir) {
                    const row = r + dr;
                    const col = c + dc;

                    if (
                        row < rows &&
                        col < cols &&
                        row >= 0 &&
                        col >= 0 &&
                        grid[row][col] === 2 ** 31 - 1
                    ) {
                        grid[row][col] = dist;
                        q.push([row, col]);
                    }
                }
            }

            dist += 1;
        }
    }
}
