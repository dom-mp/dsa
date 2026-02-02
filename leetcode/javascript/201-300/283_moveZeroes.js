// [0,1,0,3,12]
// [1,3,12,0,0]


// [0, 4, 0, 5, 34, 0]
// [4, 5, 34, 0, 0, 0]

function moveZeroes(nums) {
    if (nums.length < 1) return nums;

    let anchor = 0;

    while (nums[anchor] !== 0 && anchor < nums.length) {
        anchor++;
    }

    let runner = anchor + 1;

    while (nums.length > runner) {
      if (nums[runner] !== 0) {
        [nums[anchor], nums[runner]] = [nums[runner], nums[anchor]];
        anchor++;
      }  
      runner++;
    }

    return nums;
}

// console.log(moveZeroes([0, 1, 0, 3, 12]));
// console.log(moveZeroes([1, 0, 1])) // [1, 1, 0]
// console.log(moveZeroes([1, 0, 4, 5, 34, 0])) // [4, 5, 34, 0, 0, 0]
console.log(moveZeroes([2, 1]))