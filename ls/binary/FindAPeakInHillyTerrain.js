// Write a function `findPeakInTerrain` that finds any peak in a
// given hilly terrain. A peak is an element that is strictly
// greater than its neighbors. The first and last elements can
// be peaks if they are strictly greater than their single neighbor.
// Adjacent elements in the terrain cannot be equal.

// The function should take an array of integers as input,
// representing the elevations of spots in the terrain.
// It should return the index of any peak in the terrain.
// There is guaranteed to be at least one peak in the input array.

// Example:
// Input: terrain = [1, 3, 2, 1, 4, 5]
// Output: 1 or 5
// Explanation: Both index 1 (elevation 3) and index 5
//              (elevation 5) are peaks.
/*
1, 3, 2, 1, 4, 5
mid = 2
- We can if left or right is greater
    - 3 > 2 OR 2 < 1
- If current mid is greater than left or right side, we have a speak
- else if right > mid is greater
    - We go right, so left = mid + 1;
- else if left > mid
    - We go left, so right = mid - 1;
*/
function findPeakInTerrain(terrain) {
    let left = 0;
    let right = terrain.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let leftNeighbor = terrain[mid - 1] === undefined ? -Infinity : terrain[mid - 1];
        let rightNeighbor = terrain[mid + 1] === undefined ? -Infinity : terrain[mid + 1];

        if (terrain[mid] > leftNeighbor && terrain[mid] > rightNeighbor) {
            return mid;
        } else if (terrain[mid] > leftNeighbor) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
}

console.log(findPeakInTerrain([1, 2, 1]) === 1);
console.log(findPeakInTerrain([1, 3, 4, 1]) === 2);
console.log(findPeakInTerrain([3, 2, 1]) === 0);
console.log(findPeakInTerrain([1, 2, 3]) === 2);
console.log([1, 4].includes(findPeakInTerrain([1, 3, 2, 1, 5, 4])));
console.log(findPeakInTerrain([1, 2, 3, 4, 5, 7, 3]) === 5);
console.log(findPeakInTerrain([1, 2, 3, 4, 3, 2, 1]) === 3);
console.log([0, 8].includes(findPeakInTerrain([5, 4, 3, 2, 1, 2, 3, 4, 5])));
console.log(findPeakInTerrain([1, 2, 3, 4, 5, 4, 3, 2, 1]) === 4);
console.log(findPeakInTerrain([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]) === 0);
console.log(findPeakInTerrain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) === 9);
console.log(findPeakInTerrain([-3, -2]) === 1);
console.log(findPeakInTerrain([-3, -2, -1]) === 2);
console.log(findPeakInTerrain([-5, -4]) === 1);
console.log(findPeakInTerrain([-5, -4, -3]) === 2);
console.log(findPeakInTerrain([-3, -2, 0]) === 2);
console.log(findPeakInTerrain([-10, -9, -8, -7]) === 3);
console.log(findPeakInTerrain([-4, -3, -2, -3]) === 2);

// All test cases should log true