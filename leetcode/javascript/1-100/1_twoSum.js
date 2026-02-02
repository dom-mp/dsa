function twoSum(nums, target) {
    let opp = new Map();

    for (let index = 0; nums.length > 0; index += 1) {
        let curr = nums[index];

        if (opp.has(curr)) {
            let [position, oppNum] = opp.get(curr);
            if (oppNum + curr === target) return [position, index];
        } else {
            opp.set(target - curr, [index, curr]);
        }
    }
}