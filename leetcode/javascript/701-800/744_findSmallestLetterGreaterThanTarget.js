function nextGreatestLetter(letters, target) {
    let left = 0;
    let right = letters.length - 1;
    let value = letters[0];

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (letters[mid] > target) {
            value = letters[mid];
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return value;
}

console.log(nextGreatestLetter(["c","f","j"], "a")); // "c"
console.log(nextGreatestLetter(["c","f","j"], "c")); // "f"
console.log(nextGreatestLetter(["x","x","y","y"], "z")); // "x"
