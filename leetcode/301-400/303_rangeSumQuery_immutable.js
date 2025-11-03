class NumArray {
    constructor(nums) {
        this.nums = nums;
        let sum = 0;
        this.prefixedNums = nums.map(num => {
            return sum += num;
        })
        console.log(this.prefixedNums);
    }

    sumRange(left, right) {
        left = left - 1;
        let leftVal = left < 0 ? 0: this.prefixedNums[left];

        return this.prefixedNums[right] - leftVal;
    }
}

const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);

console.log(numArray.sumRange(0, 2)) // Expected return value: 1
console.log(numArray.sumRange(2, 5)) // Expected return value: -1
console.log(numArray.sumRange(0, 5)) // Expected return value: -3
