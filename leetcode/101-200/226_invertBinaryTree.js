function invertTree(root) {
    function invert(node) {
        if (node === null) return node;
        
        [node.left, node.right] = [node.right, node.left];
        
        invert(node.left);
        invert(node.right);

        return node;
    }
    return invert(root);
}