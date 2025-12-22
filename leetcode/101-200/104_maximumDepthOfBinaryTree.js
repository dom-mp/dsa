function maxDepth(root) {
    if (root === null) return 0;

    let stack = [[root, 1]];
    let max = 1;

    while (stack.length > 0) {
        let [node, level] = stack.pop();

        if (node === null) continue;

        let left = node.left;
        let right = node.right;

        max = max > level ? max : level;

        if (left) stack.push([left, level + 1]);
        if (right) stack.push([right, level + 1]);
    }

    return max;
}