function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let value = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        // console.log(`Left: ${nums[left]} || Mid: ${nums[mid]} || Right: ${nums[right]}`);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return value;
}

console.log(search([-1,0,3,5,9,12], 9)); // 4
console.log(search([-1,0,3,5,9,12], 2)); // -1
console.log(search([], 0)); // -1
