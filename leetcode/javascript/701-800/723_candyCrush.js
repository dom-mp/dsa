function candyCrush(board) {
    // Build the board;
    const vertDirections = [[1, 0], [-1, 0]];
    const horiDirections = [[0, 1], [0, -1]];
    let run = true;

    while (run) {
        // Logic for filling up marker multi array
        let marker = Array.from({length: board.length}, () => new Array(board[0].length).fill(0))
        run = false;

        for (let i = 0; i < board.length; i++) {
            for (let ii = 0; ii < board[0].length; ii++) {
                let curr = board[i][ii];
                let vertCount = 0;
                let horiCount = 0;
                let vertMatches = [];
                let horiMatches = [];

                for (let iii = 0; iii < vertDirections.length; iii++) {
                    let row = vertDirections[iii][0] + i;
                    let col = vertDirections[iii][1] + ii;

                    if (board[row] && board[row][col] && board[row][col] === curr) {
                        vertCount++;
                        vertMatches.push([row, col]);
                    }
                }

                for (let iii = 0; iii < horiDirections.length; iii++) {
                    let row = horiDirections[iii][0] + i;
                    let col = horiDirections[iii][1] + ii;

                    if (board[row] && board[row][col] && board[row][col] == curr) {
                        horiCount++;
                        horiMatches.push([row, col]);
                    }
                }

                if (vertCount === 2) {
                    run = true;
                    vertMatches.push([i, ii]);
                    vertMatches.forEach(arr => marker[arr[0]][arr[1]] = 1)
                }

                if (horiCount === 2) {
                    run = true;
                    horiMatches.push([i, ii]);
                    horiMatches.forEach(arr => marker[arr[0]][arr[1]] = 1)
                }
            }
        }

        // Logic to mark the actual board with 0 based on markers array
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[0].length; col++) {
                let marked = marker[row][col];

                if (marked) {
                    board[row][col] = 0;
                }
            }
        }

        // Logic to bring down values if there are 0s present
        for (let col = 0; col < board[0].length; col++) {
            let lastRow = board.length - 1;

            for (let row = board.length - 1; row >= 0; row--) {
                if (board[row][col] !== 0) {
                    board[lastRow][col] = board[row][col];
                    if (lastRow !== row) board[row][col] = 0;
                    lastRow--;
                }
            }
        }
    }

    return board;
}

// // Test case 1: basic horizontal crush
// console.log(
//   candyCrush([
//     [1, 1, 1],
//     [0, 2, 3],
//     [4, 5, 6]
//   ])
// );
// // Expected:
// // [
// //   [0, 0, 0],
// //   [0, 2, 3],
// //   [4, 5, 6]
// // ]

// // Test case 2: basic vertical crush
// console.log(
//   candyCrush([
//     [2, 1, 3],
//     [2, 4, 5],
//     [2, 6, 7]
//   ])
// );
// // Expected:
// // [
// //   [0, 1, 3],
// //   [0, 4, 5],
// //   [0, 6, 7]
// // ]

// // Test case 3: gravity after crush
// console.log(
//   candyCrush([
//     [1, 1, 1],
//     [2, 3, 4],
//     [5, 6, 7]
//   ])
// );
// // Expected:
// // [
// //   [0, 0, 0],
// //   [2, 3, 4],
// //   [5, 6, 7]
// // ]

// // Test case 4: full board crush
// console.log(
//   candyCrush([
//     [1, 1, 1],
//     [2, 2, 2],
//     [3, 3, 3]
//   ])
// );
// // Expected:
// // [
// //   [0, 0, 0],
// //   [0, 0, 0],
// //   [0, 0, 0]
// // ]

// // Test case 5: overlapping horizontal and vertical crush
// console.log(
//   candyCrush([
//     [1, 1, 1, 2],
//     [1, 3, 4, 2],
//     [1, 5, 6, 2]
//   ])
// );
// // Expected:
// // [
// //   [0, 0, 0, 0],
// //   [0, 3, 4, 0],
// //   [0, 5, 6, 0]
// // ]

// // Test case 6: chain reaction after gravity
// console.log(
//   candyCrush([
//     [1, 1, 1],
//     [1, 2, 2],
//     [1, 2, 2]
//   ])
// );
// // Expected:
// // [
// //   [0, 0, 0],
// //   [0, 0, 0],
// //   [0, 0, 0]
// // ]

// // Test case 7: no crush
// console.log(
//   candyCrush([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ])
// );
// // Expected:
// // [
// //   [1, 2, 3],
// //   [4, 5, 6],
// //   [7, 8, 9]
// // ]
console.log(
  candyCrush([
    [110,5,112,113,114],
    [210,211,5,213,214],
    [310,311,3,313,314],
    [410,411,412,5,414],
    [5,1,512,3,3],
    [610,4,1,613,614],
    [710,1,2,713,714],
    [810,1,2,1,1],
    [1,1,2,2,2],
    [4,1,4,4,1014]
  ])
);
// Expected:
// [
//   [0,0,0,0,0],
//   [0,0,0,0,0],
//   [0,0,0,0,0],
//   [110,0,0,0,114],
//   [210,0,0,0,214],
//   [310,0,0,113,314],
//   [410,0,0,213,414],
//   [610,211,112,313,614],
//   [710,311,412,613,714],
//   [810,411,512,713,1014]
// ]

console.log(candyCrush([
  [0, 7, 7, 7],
  [7, 7, 7, 0]
]
))