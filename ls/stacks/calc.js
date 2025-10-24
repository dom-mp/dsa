// Create a function `calculator` that evaluates arithmetic
// expressions given as strings. The function should support
// basic arithmetic operations: addition (+), subtraction (-),
// multiplication (*), and division (/).

// The function should:
// 1. Accept a string input representing a valid arithmetic expression.
//    The input will consist of non-negative integers, arithmetic
//    operator(+, -, *, /), and may contain whitespace characters.
// 2. Evaluate the expression following the standard order of operations
//    (multiplication and division before addition and subtraction).
// 3. Return the result as an integer.

// For division operations, the result should be rounded down to
// the nearest integer (floor division).

// You can assume that the input will never contain division by zero.

// Note: Implement the calculation logic yourself without using
// any built-in expression evaluation functions.

// Examples:
//
// 1. Input: "4 + 3 * 2"
//    Output: 10
//    Explanation: 3*2 is evaluated first (6), then added to 4.
//
// 2. Input: "15 / 3 - 2"
//    Output: 3
//    Explanation: 15/3 is 5, then 2 is subtracted.
//
// 3. Input: "10 + 8 / 3"
//    Output: 12
//    Explanation: 8/3 is 2 (rounded down), then added to 10.

// function calculator(expression) {
//   let stack = [];
//   let mult = false;
//   let div = false;
//   let holder = '';

//   for (let index = 0; index < expression.length; index += 1) {
//     let char = expression[index];

//     switch(char) {
//         case "+":
//             stack.push(char);
//             break;
//         case "*":
//             mult = true;
//             break;
//         case "-":
//             stack.push(char);
//             break;
//         case "/":
//             div = true;
//             break
//         case " ":
//             continue;
//         default:
//             if (/\d/.test(expression[index + 1])) {
//                 holder += char;
//                 continue;
//             }

//             if (div || mult) {
//                 let num = stack.pop();
//                 let result = mult ? num * Number(char) : Math.floor(num / Number(char));
//                 stack.push(result);
//                 div = false;
//                 mult = false;
//             } else {
//                 if (holder) {
//                     holder += char;
//                     stack.push(Number(holder));
//                     holder = "";
//                 } else {
//                     stack.push(Number(char));
//                 }
//             }
//     }
//   }

//   let stack2 = [];
//   let result = 0;
//   let add = false;
//   let neg = false;

//   for (let index = 0; index < stack.length; index += 1) {
//     let element = stack[index];

//     switch(element) {
//         case "+":
//             add = true;
//             break;
//         case "-":
//             neg = true;
//             break
//         default:
//             if (add || neg) {
//                 let popped = stack2.pop();
//                 if (add) {
//                     stack2.push(popped + element);
//                 } else {
//                     stack2.push(popped - element);
//                 }
//                 add = false;
//                 neg = false;
//             } else {
//                 stack2.push(element);
//             }
//     }
//   }

//   return stack2[0];
// }
// "100 - 20 * 3 / 2 + 5 * 4 - 10 / 2 * 3"
// [100, -60]
function calculator(expression) {
    let holder = "";
    let action = "";
    let stack = [];

    for (let index = 0; index < expression.length; index += 1) {
        let char = expression[index];

        switch (char) {
            case '-':
                holder += '-'; 
                break;
            case '+':
                continue;
            case '*':
                action = "*";
                break;
            case '/':
                action = "/";
                break;
            case " ":
                continue;
            default:
                holder += char;
                if (!/\d/.test(expression[index + 1])) {
                    if (action === "/") {
                        let num = stack.pop();
                        stack.push(Math.floor(num / Number(holder)));
                        action = '';
                    } else if (action === "*"){
                        let num = stack.pop();
                        stack.push(num * Number(holder));
                        action = '';
                    } else {
                        stack.push(Number(holder));
                    }
                    holder = '';
                }
                break;
        }
    }

    return stack.reduce((acc, num) => acc += num);
}

console.log(calculator("6 - 2") === 4);
console.log(calculator(" 8 / 3") === 2);
console.log(calculator("2+3*4") === 14);
console.log(calculator("10 - 2 * 3 + 4 ") === 8);
console.log(calculator(" 20 / 4 * 2 + 7") === 17);
console.log(calculator("5 + 3 * 2 - 8 / 4") === 9);
console.log(calculator("10+5/4-3*2+2") === 7);
console.log(calculator(" 30 / 3 * 2 - 4 * 2 / 4 + 1 ") === 19);
console.log(calculator("100 - 20 * 3 / 2 + 5 * 4 - 10 / 2 * 3") === 75);
// All test cases should log true.