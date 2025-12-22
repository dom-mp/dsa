function isSubtree(root, subTree) {
    function dfs(node1, node2) {
        if (node1 === null && node2 === null) {
            return true;
        } else if (node1 === null || node2 === null) {
            return false;
        }

        if (node1.val !== node2.val) return false;

        return dfs(node1.left, node2.left) && dfs(node1.right, node2.right);
    }

    let stack = [root];

    while (stack.length > 0) {
        let node = stack.pop();

        if (node === null) continue;

        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);

        if (node.val === subTree.val) {
            if (dfs(node, subTree)) return true;
        }
    }

    return false;
}