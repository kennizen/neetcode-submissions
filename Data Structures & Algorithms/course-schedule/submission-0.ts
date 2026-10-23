class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        const state = new Array(numCourses).fill(0);
        const graph = {};

        for (const [key, val] of prerequisites) {
            if (key in graph) graph[key].push(val);
            else graph[key] = [val];
        }

        function dfs(node: number): boolean {
            if (state[node] === 1) return false;
            if (state[node] === 2) return true;

            state[node] = 1;

            if (graph[node]?.length) {
                for (const next of graph[node]) {
                    if (!dfs(next)) return false;
                }
            }

            state[node] = 2;
            return true;
        }

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return false;
        }

        return true;
    }
}
