/*
           10
         /    \
        9      8
      /   \  /   \
    11    5  1    3
   /     / \       \
 14     2   5       6

10!

[14, 2, 5, 6]

[]

*/
function averageOfLevels(root) {
    let queue = [root];
    let results = [];

    while (queue.length > 0) {
        let sum = 0;
        let size = queue.length;

        for (let count = 0; count < size; count += 1) {
            let node = queue.shift();
            sum += node.val;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        let average = sum / size 
        results.push(average);
    }

    return results;
}