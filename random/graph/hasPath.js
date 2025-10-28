// Given an undirected graph represented by an edge list, determine if
// there is a path between specified source and destination vertices.

// Implement the function `hasPath` that takes three arguments:
// an edge list representing the graph, a source vertex, and a
// destination vertex. The function should return true if a path
// exists between the source and destination, and false otherwise.
function createAdjList(edgeList) {
    let adjList = new Map();

    edgeList.forEach((arr) => {
        let vert1 = arr[0];
        let vert2 = arr[1];

        if (adjList.has(vert1)) {
            if (!adjList.get(vert1).includes(vert2)) adjList.get(vert1).push(vert2);
        } else {
            adjList.set(vert1, []);
            adjList.get(vert1).push(vert2);
        }

        if (adjList.has(vert2)) {
            if (!adjList.get(vert2).includes(vert1)) adjList.get(vert2).push(vert1);
        } else {
            adjList.set(vert2, []);
            adjList.get(vert2).push(vert1);
        }
    })

    return adjList;
}

function hasPath(edgeList, src, dst) {
    const adjList = createAdjList(edgeList);
    let seen = new Set();
    seen.add(src);
    let stack = [src];

    while (stack.length !== 0) {
        let vert = stack.pop();
        let neighbors = adjList.get(vert);

        if (dst === vert) return true;

        neighbors.forEach(innerVert => {
            if (!seen.has(innerVert)) {
                seen.add(innerVert);
                stack.push(innerVert);
            }
        })
    }

    return false;
}

console.log(hasPath([[1, 2], [2, 3], [3, 4]], 1, 4) === true);
console.log(hasPath([[1, 2], [3, 4]], 1, 4) === false);
console.log(hasPath([[1, 2], [1, 3], [2, 4], [3, 4], [3, 5], [5, 6]], 1, 6) === true);
console.log(hasPath([], 1, 1) === true);
console.log(hasPath([[1, 2], [1, 3], [4, 5], [6, 7]], 2, 5) === false);
console.log(hasPath([[1, 2], [2, 3], [3, 4], [4, 5], [1, 5], [2, 6], [6, 7], [7, 8], [8, 5]], 1, 8) === true);
console.log(hasPath([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 3], [2, 7], [7, 8], [8, 7], [7, 9], [9, 10], [10, 11], [11, 12], [12, 10], [7, 13]], 1, 13) === true);
console.log(hasPath([[1, 2], [2, 3], [3, 1], [4, 5], [5, 6], [6, 4], [7, 8], [8, 9], [9, 10], [10, 7], [11, 12], [13, 14], [14, 15], [15, 13]], 1, 12) === false);
// All test cases should log true