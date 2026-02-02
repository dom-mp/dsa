/*
Problem:
Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n),
ans[i] is the number of 1's in the binary representation of i.
*/

/*
[0]
offset = 1


*/

function countBits(n) {
    let bits = [0];
    let offset = 1;

    for (let curr = 1; curr <= n; curr += 1) {
        if (offset * 2 === curr) {
            offset = curr;
        }
        
        bits.push(1 + bits[curr - offset])
    }

    return bits;
}

// Test cases given in the problem description
// console.log(countBits(2)) // [0,1,1]
// console.log(countBits(5)) // [0,1,1,2,1,2]
// // console.log(countBits(50));

// // Basic
// console.log(countBits(0)) // [0]
// console.log(countBits(1)) // [0,1]
// console.log(countBits(2)) // [0,1,1]
// console.log(countBits(3)) // [0,1,1,2]
// console.log(countBits(5)) // [0,1,1,2,1,2]

// // Larger
// console.log(countBits(8))  // [0,1,1,2,1,2,2,3,1]
// console.log(countBits(10)) // [0,1,1,2,1,2,2,3,1,2,2]

// // Edge-ish (bigger input)
// console.log(countBits(16))
// // [0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1]

console.log(countBits(20))
// [0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2]