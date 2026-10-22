class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        let res = 0;
        const rows = grid.length;
        const cols = grid[0].length;

        const visited = new Set<string>();

        function dfs(r: number, c: number) {
            if (
                r < 0 ||
                c < 0 ||
                r >= rows ||
                c >= cols ||
                grid[r][c] === "0" ||
                visited.has(`${r}-${c}`)
            ) {
                return;
            }

            visited.add(`${r}-${c}`);

            dfs(r - 1, c);
            dfs(r, c + 1);
            dfs(r + 1, c);
            dfs(r, c - 1);
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === "1" && !visited.has(`${i}-${j}`)) {
                    res += 1;
                    dfs(i, j);
                }
            }
        }

        return res;
    }
}
