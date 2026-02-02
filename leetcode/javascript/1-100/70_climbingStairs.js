function climbStairs(n) {
    let fib = [1, 1];

    for (let index = 0; index < n; index += 1) {
        let last = fib.pop();
        let second = fib.pop();

        fib.push(second, last, second + last);
    }

    return fib[n];
}

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
