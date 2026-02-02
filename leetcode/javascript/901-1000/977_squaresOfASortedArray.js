function sortedSquares(nums) {
    let left = 0;
    let right = nums.length - 1;
    let results = new Array(right + 1);
    let index = right;

    while (left < right) {
        let leftVal = Math.abs(nums[left]);
        let rightVal = Math.abs(nums[right]);

        if (leftVal > rightVal) {
            results[index] = leftVal * leftVal;
            left += 1;
        } else {
            results[index] = rightVal * rightVal;
            right -= 1;
        }

        index -= 1;
    }

    results[index] = nums[left] * nums[left];

    return results;
}