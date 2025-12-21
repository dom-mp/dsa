function isSameTree(root1, root2) {
    if (root1 === null && root2 === null) return true;

    let stack1 = [root1];
    let stack2 = [root2];

    while (stack1.length > 0 && stack2.length > 0) {
        let node1 = stack1.pop();
        let node2 = stack2.pop();

        if (!node1 || !node2) return false;

        let left1 = !!node1.left;
        let left2 = !!node2.left;
        let right1 = !!node1.right;
        let right2 = !!node2.right;

        if (node1.left !== null) stack1.push(node1.left);
        if (node1.right !== null) stack1.push(node1.right);
        if (node2.left !== null) stack2.push(node2.left);
        if (node2.right !== null) stack2.push(node2.right);

        if (node1.val !== node2.val) return false;
        if ((!left1 && left2) || (left1 && !left2)) return false;
        if ((!right1 && right2) || (right1 && !right2)) return false;
    }

    return true;
}