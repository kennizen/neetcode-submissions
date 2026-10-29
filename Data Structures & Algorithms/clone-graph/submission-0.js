/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const map = new Map()

        if(!node) return null

        function dfs(n){
            if(map.has(n)){
                return map.get(n)
            }

            const clone = new Node(n.val)
            map.set(n, clone)

            for(const nei of n.neighbors){
                clone.neighbors.push(dfs(nei))
            }

            return clone
        }

        return dfs(node)
    }
}
