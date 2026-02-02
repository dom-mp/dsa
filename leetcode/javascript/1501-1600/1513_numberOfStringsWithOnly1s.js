const MOD = 10**9 + 7;

function numSub(s) {
    let consecutive = 0;
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let curr = s[i];
        if (curr === '1') {
            consecutive++;
        } else {
            consecutive = 0;
        }
        result = (result + consecutive) % MOD;
    }

    return result;
}