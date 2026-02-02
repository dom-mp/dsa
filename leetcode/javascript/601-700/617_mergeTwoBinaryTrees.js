function mergeTrees(root1, root2) {
    function dfs(node1, node2) {
        if (node1 === null && node2 === null) {
            return null;
        } else if (node1 === null) {
            return node2;
        } else if (node2 === null) {
            return node1;
        }



        let newNode = new TreeNode(node1.val + node2.val);
        newNode.left = dfs(node1.left, node2.left);
        newNode.right = dfs(node1.right, node2.right);

        return newNode;
    }

    return dfs(root1, root2);
}