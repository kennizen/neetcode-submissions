class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board: string[][], word: string): boolean {
        const rows = board.length;
        const cols = board[0].length;

        const visited = new Set<string>();

        function dfs(r: number, c: number, idx: number) {
            if (idx >= word.length) return true;

            if (
                r < 0 ||
                c < 0 ||
                r >= rows ||
                c >= cols ||
                board[r][c] !== word[idx] ||
                visited.has(`${r}${c}`)
            )
                return false;

            visited.add(`${r}${c}`);

            const res =
                dfs(r - 1, c, idx + 1) ||
                dfs(r, c + 1, idx + 1) ||
                dfs(r + 1, c, idx + 1) ||
                dfs(r, c - 1, idx + 1);

            visited.delete(`${r}${c}`);

            return res;
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (dfs(i, j, 0)) return true;
            }
        }

        return false;
    }
}
