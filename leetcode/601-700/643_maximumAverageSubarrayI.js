// [1,12,-5,-6,50,3], 4
// (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

function findMaxAverage(nums, k) {
    let left = 0;
    let right = 0;
    let sum = 0;
    let max = 0;

    while (right !== k) {
        sum += nums[right]
        right++;
    }

    max = sum;
    console.log(max);

    for ( ; right < nums.length; right++) {
        sum += nums[right];
        sum -= nums[left];
        left++;

        max = Math.max(sum, max);
    }

    return max / k;
}