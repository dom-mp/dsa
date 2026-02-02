function rotate(matrix) {
    let left = 0;
    let top = 0;
    let right = matrix.length - 1;
    let bottom = matrix.length - 1;

    while (left < right && top < bottom) {
        for (let i = left; i < right;  i++) {
            // Top Left
            let temp = matrix[top][left + i];

            // Top Left Assigned to Bottom Left Val
            matrix[top][left + i] = matrix[bottom - i][left];

            // Bottom Left Assigned to Bottom Right Val
            matrix[bottom - i][left] = matrix[bottom][right - i];

            // Bottom Right assigned to Top Right Val
            matrix[bottom][right - i] = matrix[top + i][right];

            // Top Right assigned to Temp (Top Left)
            matrix[top + i][right] = temp;
    }

        top++;
        left++;
        bottom--;
        right--;
    }
}

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
rotate(matrix);
console.log(matrix); // [[7,4,1],[8,5,2],[9,6,3]]

matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
rotate(matrix);
console.log(matrix); // [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]


/*
    // Top Left assigned to Top Right
    matrix[top][left + i] = matrix[top + i][right]

    // Top Right assigned Bottom Right
    matrix[top + i][right] = matrix[bottom][right - i];

    // Bottom Right assigned to Bottom Left
    matrix[bottom][right - i] = matrix[bottom - i][left];

    // Bottom Left assigned to Top Left
    matrix[bottom - i][left] = temp;
*/