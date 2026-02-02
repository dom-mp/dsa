function diameterOfBinaryTree(root) {
    let result = 0;

    function dfs(node) {
        if (node === null) {
            return 0;
        }

        let left = dfs(node.left);
        let right = dfs(node.right);

        result = Math.max(result, left + right);
        return 1 + Math.max(left, right);
    }

    dfs(root);

    return result;
}


/*
- If the node is null, return 0
- recursively call dfs for left AND dfs for right
- Since we treat each node as potentially the "root" we update result with left + right OR result
- Finally, we return 1 + highest value between left or right.


*/