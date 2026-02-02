/*
 Given a non-empty array of integers nums, every element appears twice except for one. 
 Find that single one.
 You must implement a solution with a linear runtime complexity and use only constant extra space.
 */
function singleNumber(nums) {
    return nums.reduce((acc, num) => acc ^= num, 0);
}

console.log(singleNumber([2, 2, 1]));       // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1, 2, 1, 2, 4])); // 4
