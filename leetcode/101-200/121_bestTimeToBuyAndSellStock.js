function maxProfit(prices) {
    let min = Infinity;
    let profit = 0;

    prices.forEach(price => {
        if (price < min) {
            min = price;
        } else {
            profit = Math.max(profit, price - min);
        }
    })

    return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));      // 5
console.log(maxProfit([7, 6, 4, 3, 1]));         // 0
console.log(maxProfit([2, 1, 4]));               // 3
console.log(maxProfit([2,1,2,1,0,1,2]));         // 2
console.log(maxProfit([1,2,4,2,5,7,2,4,9,0,9])); // 9
console.log(maxProfit([2,4,1,11,7]))              // 10
console.log(maxProfit([1,2,4,3,5,0,9,4,9,1,9]))   // 9
