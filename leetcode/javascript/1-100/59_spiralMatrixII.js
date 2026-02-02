function generateMatrix(n) {
    let results = Array.from({length: n}, () => []);
    let left = 0;
    let right = n;
    let top = 0;
    let bottom = n;
    let count = 1;

    while (left < right && top < bottom) {
        // console.log(results)
        for (let i = left; i < right; i++) {
            results[top][i] = count;
            count++;
        }
        top++;
        // console.log(results);
        for (let i = top; i < bottom - 1; i++) {
            results[i][right - 1] = count;
            count++;
        }
        right--;

        // if (left < right && top < bottom) break;

        // console.log(results);
        for (let i = right; i > left; i--) {
            results[bottom - 1][i] = count;
            count++;
        }
        bottom--;
        // console.log(results)
        for (let i = bottom; i >= top; i--) {
            results[i][left] = count;
            // console.log(count)
            count++;
        }
        left++;
        // console.log(results)
    }

    return results;
}

console.log(generateMatrix(3)) // [[1,2,3],[8,9,4],[7,6,5]]