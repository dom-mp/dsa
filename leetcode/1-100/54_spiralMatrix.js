function spiralOrder(matrix) {
    let left = 0;
    let right = matrix[0].length;
    let top = 0;
    let bottom = matrix.length;
    let results = [];

    while (left < right && top < bottom) {

        for (let i = left; i < right; i += 1) {
            results.push(matrix[top][i]);
        }
        top += 1;

        for (let i = top; i < bottom; i += 1) {
            results.push(matrix[i][right - 1]);
        }
        right -= 1;

        if (!(left < right && top < bottom)) break;

        for (let i = right - 1; i >= left; i -= 1) {
            results.push(matrix[bottom - 1][i]);
        }
        bottom -= 1;

        for (let i = bottom - 1; i >= top; i -= 1) {
            results.push(matrix[i][left])
        }
        left += 1;
    }

    return results;
}

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])); // [1,2,3,6,9,8,7,4,5]
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])); // [1,2,3,4,8,12,11,10,9,5,6,7]

