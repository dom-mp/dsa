/*
input: nums
return: boolean

- If any value appears at least twice in nums, return false


*/

function containsDuplicate(nums) {
    return new Set(nums).size !== nums.length; 
}

console.log(containsDuplicate([1, 2, 3, 1]));        // true
console.log(containsDuplicate([1, 2, 3, 4]));        // false
console.log(containsDuplicate([1, 2, 3, 4, 5, 5]));  // true
console.log(containsDuplicate([-1, -2, -3, -1]));    // true
console.log(containsDuplicate([-1, 0, 1, 2]));       // false
console.log(containsDuplicate([99]));                // false
console.log(containsDuplicate([]));                  // false
console.log(containsDuplicate([10, 20, 30, 40, 10])); // true
console.log(containsDuplicate([7, 7, 7, 7, 7]));     // true
console.log(containsDuplicate([3, 1, 4, 2, 4]));     // true

