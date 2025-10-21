// Write a function named `minLengthForTargetSum` that
// determines the minimal length of a contiguous subarray
// within an array of positive integers, `nums`. This
// subarray should have a sum that is greater than or
// equal to a specified positive integer, `target`.
// The function should return the length of this
// subarray. If no such subarray exists, return 0.

// The time complexity of your solution should be O(NlogN).

// Example:
// Input: nums = [4, 2, 5, 7], target = 10
// Output: 2
// Explanation: In this example, the shortest subarray that
//              meets or exceeds the target sum of 10 is [5, 7].
//              This subarray sums to 12, which is greater than
//              the target sum of 10. The length of this subarray is 2.
// 1 2 3 4

function validSum(nums, target, mid) {
  let sum = 0;
  let anchor = 0;
  let runner = 0;

  for (;runner < mid; runner += 1) {
    sum += nums[runner];
  }

  if (sum >= target) {
    return true;
  }

  for (;runner < nums.length; runner += 1) {
    sum -= nums[anchor];
    anchor += 1;
    sum += nums[runner];
    if (sum >= target) {
      return true;
    }
  }

  return false;
} 

function minLengthForTargetSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let minLen = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (validSum(nums, target, mid)) {
      minLen = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  if (minLen === 0) {
    if (nums.reduce((acc, num) => acc += num) >= target) {
      return nums.length;
    }
  }

  return minLen;
}

console.log(minLengthForTargetSum([1, 2, 3], 5) === 2);
console.log(minLengthForTargetSum([1, 1, 1], 4) === 0);
console.log(minLengthForTargetSum([8, 2, 1, 4], 8) === 1);
console.log(minLengthForTargetSum([1, 2, 5, 4, 3], 9) === 2);
console.log(minLengthForTargetSum([1, 4, 1, 3, 6, 2], 9) === 2);
console.log(minLengthForTargetSum([1, 2, 3, 4], 10) === 4);
console.log(minLengthForTargetSum([1, 2, 6, 1, 1, 7], 9) === 3);
console.log(minLengthForTargetSum([4, 2, 2, 1, 5, 2], 14) === 5);

// All test cases should log true