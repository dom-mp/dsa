function construct2DArray(original, rows, cols) {
    if (rows * cols !== original.length) return [];

    let results = [];
    let subArr = [];

    for (let i = 0; i < original.length; i += 1) {
        if (subArr.length === cols) {
            results.push(subArr);
            subArr = [];
        }

        subArr.push(original[i]);
    }

    results.push(subArr);

    return results;
}

console.log(construct2DArray([1, 2, 3, 4], 2, 2));
console.log(construct2DArray([1, 2, 3], 1, 3));
console.log(construct2DArray([1, 2], 1, 1));