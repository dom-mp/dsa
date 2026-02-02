class NumMatrix {
    constructor(matrix) {
        this.prefixSum = this.buildPrefixSum(matrix);
    }

    buildPrefixSum(matrix) {
        let height = matrix.length;
        let width = matrix[0].length;
        let prefixSum = Array.from({length: height + 1}, () => Array(width + 1).fill(0));

        for (let i = 0; i < height; i++) {
            for (let ii = 0; ii < width; ii++) {
                let currNum = matrix[i][ii];
                let subtract = prefixSum[i][ii];
                let addNum1 = prefixSum[i + 1][ii];
                let addNum2 = prefixSum[i][ii + 1];

                prefixSum[i+1][ii+1] = currNum + addNum1 + addNum2 - subtract;
            }
        }

       return prefixSum
    }

    sumRegion(row1, col1, row2, col2) {
        let topLeft = this.prefixSum[row1][col1];
        let bottomRight = this.prefixSum[row2+1][col2+1];
        let topRight = this.prefixSum[row1][col2+1];
        let bottomLeft = this.prefixSum[row2+1][col1];

        return bottomRight - topRight - bottomLeft + topLeft;
    }
}

// const m = [
//     [ 1,  2, -1, -3,  4,  2,  0,  1],
//     [ 3, -2,  4,  5, -3, -1,  1,  0],
//     [ 0,  1, -3,  1,  3,  2,  4, -2],
//     [-1,  3,  4,  7, -2,  0,  1,  3],
//     [ 3,  4,  2,  4, -7, -1,  3,  0],
//     [-5,  4,  1, -2,  3, -4,  3,  3]
// ];

const m = [[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]];

let matrix = new NumMatrix(m);
// console.log(matrix.prefixSum);
console.log(matrix.sumRegion(2, 1, 4, 3)) // 8
console.log(matrix.sumRegion(1, 1, 2, 2)) // 11
console.log(matrix.sumRegion(1, 2, 2, 4)) // 12
// [
//     [0, 0,  0,  0,  0,  0,  0,  0,  0],
//     [0, 1,  3,  2, -1,  3,  5,  5,  6],
//     [0, 4,  4,  7,  9, 10, 11, 12, 13],
//     [0, 4,  5,  5,  8, 12, 15, 20, 19],
//     [0, 3,  7, 11, 21, 23, 26, 32, 34],
//     [0, 6, 14, 20, 34, 29, 31, 40, 42],
//     [0, 1, 13, 20, 32, 30, 28, 40, 45]
// ];