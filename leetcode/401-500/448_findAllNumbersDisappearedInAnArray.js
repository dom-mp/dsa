function findDisappearedNumbers(nums) {
    let missingNums = [];
    let uniques = new Set(nums);

    for (let number = 1; number < nums.length + 1; number += 1) {
        let index = number - 1;

        if (!uniques.has(number)) {
            missingNums.push(number);
        }
    }

    return missingNums;
}

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1])); // [5,6]
console.log(findDisappearedNumbers([1,1]));             // [2]
// console.log(findDisappearedNumbers([2,2]));             // [1]
