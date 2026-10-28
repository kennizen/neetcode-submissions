class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses: number, prerequisites: number[][]): number[] {
        const n = numCourses
        const state = new Array(n).fill(0)
        const graph = {}
        const res = []

        for(const [key, val] of prerequisites){
            if(key in graph) graph[key].push(val)
            else graph[key] = [val]
        }

        function dfs(node: number){
            if(state[node] === 2) return false
            if(state[node] === 1) return true

            state[node] = 1

            if(graph[node]?.length){
                for(const next of graph[node]){
                    if(dfs(next)) return true
                }
            }

            state[node] = 2
            res.push(node)
            return false
        }

        for(let i = 0; i<state.length; i++){
            if(dfs(i)) return []
        }

        return res
    }
}
