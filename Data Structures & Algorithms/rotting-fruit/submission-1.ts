class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid: number[][]): number {
        const rows = grid.length;
        const cols = grid[0].length;

        let freshOranges = 0;
        let time = 0;
        const q = [];

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 1) freshOranges += 1;
                if (grid[i][j] === 2) q.push([i, j]);
            }
        }

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        while (q.length !== 0 && freshOranges > 0) {
            const size = q.length;
            for (let i = 0; i < size; i++) {
                const [row, col] = q.shift();
                for (const [dr, dc] of directions) {
                    const r = dr + row;
                    const c = dc + col;

                    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] !== 1) {
                        continue;
                    }

                    q.push([r, c]);
                    freshOranges -= 1;
                    grid[r][c] = 2;
                }
            }
            time += 1;
        }

        return freshOranges > 0 ? -1 : time;
    }
}
