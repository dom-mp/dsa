function majorityElement(nums) {
    let value = 0;
    let count = 0;

    nums.forEach(num => {
        if (value !== num) {
            count--;
            if (count <= 0) {
                value = num;
                count = 0;
                count++;
            }
        } else {
            count ++
        }
    })

    return value;
}

console.log(majorityElement([3,2,3])); // 3
console.log(majorityElement([2,2,1,1,1,2,2])); // 2