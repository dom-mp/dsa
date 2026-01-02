// ["1->2->5","1->3"]
// ["1"]
/*
         1
      /     \
     2       3
    / \     / \
   4   5   6   7
      / \
     8   9


*/


function binaryTreePaths(root) {
    let results = [];

    function dfsString(node, str="") {
        str += node.val;

        if (node.left === null && node.right === null) {
            results.push(str);
            return ;
        }

        str += '->';

        if (node.left) dfsString(node.left, str);
        if (node.right) dfsString(node.right, str);
    }

    dfsString(root);

    return results;
}
