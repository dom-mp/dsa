// Rotate a 2D matrix 90 degrees clockwise

/*
[1, 2, 3]  [7, 4, 1]
[4, 5, 6]  [8, 5. 2]
[7, 8, 9]. [9, 6, 3]

[2][0] => [0][0]
[1][0] => [0][1]
[0][0] => [0][2]

[2][1] => [1][0]
[1][1] => [1][1]
[0][0] => [1][2]
*/

function rotateMatrix(matrix) {
    if (matrix.length === 0) return [];
    if (matrix[0].length === 0) return [[]];

    let numRows = matrix.length;
    let numCols = matrix[0].length;
    let rotatedMatrix = Array.from({length: numCols}, () => [])

    for (let rowIndex = 0; rowIndex < numRows; rowIndex += 1) {
        for (let colIndex = 0; colIndex < numCols; colIndex += 1) {
            rotatedMatrix[colIndex][numRows - rowIndex - 1] = matrix[rowIndex][colIndex]
        }
    }

    return rotatedMatrix;
}

console.log(JSON.stringify(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])) === JSON.stringify([[7, 4, 1], [8, 5, 2], [9, 6, 3]]));
console.log(JSON.stringify(rotateMatrix([[1, 2], [3, 4]])) === JSON.stringify([[3, 1], [4, 2]]));
console.log(JSON.stringify(rotateMatrix([[1]])) === JSON.stringify([[1]]));
console.log(JSON.stringify(rotateMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])) === JSON.stringify([[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]]));
console.log(JSON.stringify(rotateMatrix([[]])) === JSON.stringify([[]]));
console.log(JSON.stringify(rotateMatrix([])) === JSON.stringify([]));
console.log(JSON.stringify(rotateMatrix([[-1, -2], [-3, -4]])) === JSON.stringify([[-3, -1], [-4, -2]]));
console.log(JSON.stringify(rotateMatrix([[1, 2, 3, 4, 5]])) === JSON.stringify([[1], [2], [3], [4], [5]]));