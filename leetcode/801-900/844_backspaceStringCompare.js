function backspaceCompare(s, t) {
    let skip = 0;
    let index1 = s.length - 1;
    let index2 = t.length - 1;

    while (index1 >= 0 || index2 >= 0) {
        let curr1 = s[index1];
        let curr2 = t[index2];

        while (curr1 === '#' || skip) {
            if (curr1 === '#') {
                index1 -= 1;
                skip += 1
                curr1 = s[index1];
            } else if (skip) {
                index1 -= 1;
                skip -= 1;
                curr1 = s[index1];
                continue;
            }
        }

        while (curr2 === '#' || skip) {
            if (curr2 === '#') {
                index2 -= 1;
                skip += 1
                curr2 = t[index2];
            } else if (skip) {
                index2 -= 1;
                skip -= 1;
                curr2 = t[index2];
                continue;
            }
        }

        if (curr1 !== curr2) return false;
        index1 -= 1;
        index2 -= 1;
    }

    return true;
}

console.log(backspaceCompare('ab#c', 'ad#c')); // true
console.log(backspaceCompare('ab##', 'c#d#')); // true
console.log(backspaceCompare('nzp#o#g', 'b#nzp#o#g')) // true
console.log(backspaceCompare("a", "aa#a")) // false