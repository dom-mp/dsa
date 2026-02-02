function hasPathSum(root, targetSum) {
    function dfs(node, sum=0) {
        if (node === null) return false;

        let left = node.left;
        let right = node.right;

        sum += node.val;

        if (left === null && right === null) {
            return sum === targetSum;
        }

        return dfs(left, sum) || dfs(right, sum);
    }

    return dfs(root);
}