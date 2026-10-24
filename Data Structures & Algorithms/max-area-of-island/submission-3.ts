class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid: number[][]): number {
        let area = 0;
        let curArea = 0;

        const rows = grid.length;
        const cols = grid[0].length;

        const visited = new Set<string>();

        function dfs(r: number, c: number): number {
            if (
                r < 0 ||
                c < 0 ||
                r >= rows ||
                c >= cols ||
                grid[r][c] !== 1 ||
                visited.has(`${r}-${c}`)
            ) {
                return curArea;
            }

            visited.add(`${r}-${c}`);
            curArea += 1;

            return Math.max(dfs(r + 1, c), dfs(r - 1, c), dfs(r, c + 1), dfs(r, c - 1));
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 1 && !visited.has(`${i}-${j}`)) {
                    curArea = 0
                    area = Math.max(area, dfs(i, j));
                }
            }
        }

        return area;
    }
}
