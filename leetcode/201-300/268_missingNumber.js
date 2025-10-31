function missingNumber(nums) {
    let numsSet = new Set(nums);

    for (let count = 0; count <= nums.length; count += 1) {
        if (!numsSet.has(count)) return count;
    }
}

console.log(missingNumber([3, 0, 1]));        // 2
console.log(missingNumber([0, 1]));           // 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // 8
console.log(missingNumber([0]));              // 1
console.log(missingNumber([1]));              // 0
console.log(missingNumber([0,2]));            // 1
console.log(missingNumber([1,0,2,4]));        // 3
console.log(missingNumber([0,1,2,3,4,5,6,7,8,10])); // 9
console.log(missingNumber([5,4,3,2,0,1,7,6,9]));    // 8
console.log(missingNumber([0,1,3,4,5]));      // 2
