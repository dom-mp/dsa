function minDepth(root) {
    if (root === null) return 0;
    let queue = [root];
    let level = 1;
    let head = 0;

    while (queue.length > 0) {
        let length = queue.length - head;

        for (let index = 0; index < length; index += 1) {
            let node = queue[head++];
            let left = node.left;
            let right = node.right;

            if (left === null && right === null) return level;
            if (left) queue.push(left);
            if (right) queue.push(right);
        }

        level++
    }

    return level;
}


