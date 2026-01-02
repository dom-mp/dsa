function isSubsequence(str1, str2) {
    let i = 0;

    for (let ii = 0; ii < str2.length; ii++) {
        // console.log(str1[i])
        if (str1[i] === str2[ii]) {
            if (str1.length - 1 === i) return true;
            i++;
        }
    }

    return false;
}

console.log(isSubsequence('abc', 'ahbgdc')); // true
console.log(isSubsequence('axc', 'ahbgdc')); // false
console.log(isSubsequence('acb', 'ahbgdc')); // false