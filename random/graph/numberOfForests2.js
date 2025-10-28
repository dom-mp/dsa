// You are provided with a 2D grid map where each cell is either
//  marked as a tree ('T') or open land ('O'). Your goal is to
// count the number of distinct forest regions on the map. A forest
// region consists of a contiguous group of tree cells ('T'). For
// this problem, two tree cells are considered connected if they
// share an edge horizontally or vertically, but not diagonally.

// Write a function numOfForests that accepts a nested array grid
// representing the 2D map. The function should return the total
// number of forest regions in the grid.

function numOfForests(grid) {
    let stack = [];
    let seen = new Set();
    let count = 0;

    for (let row = 0; row < grid.length; row += 1) {
        for (let col = 0; col < grid[0].length; col += 1) {
            let curr = grid[row][col];

            if (curr === 'T' && !seen.has(`[${row}, ${col}]`)) {
                stack.push([row, col])
                count += 1;
            };

            while (stack.length) {
                let [row, col] = stack.pop();
                let position = `[${row}, ${col}]`;

                if (seen.has(position)) continue;

                seen.add(position);

                let left = grid[row][col - 1] === 'T';
                let right = grid[row][col + 1] === 'T';
                let bot = grid[row + 1] && grid[row + 1][col] === 'T';
                let top = grid[row - 1] && grid[row - 1][col] === 'T';

                if (left) stack.push([row, col - 1]);
                if (right) stack.push([row, col + 1]);
                if (top) stack.push([row + 1, col]);
                if (bot) stack.push([row - 1, col]);
            }
        }
    }

    return count;
}

const grid1 = [];
console.log(numOfForests(grid1) === 0);

const grid2 = [
  ['O', 'O', 'O'],
  ['O', 'O', 'O'],
  ['O', 'O', 'O']
];
console.log(numOfForests(grid2) === 0);
const grid3 = [
  ['T', 'T', 'O'],
  ['T', 'T', 'O'],
  ['O', 'O', 'O']
];
console.log(numOfForests(grid3) === 1);
const grid4 = [
  ['O', 'O', 'T', 'T', 'O'],
  ['T', 'T', 'O', 'T', 'O'],
  ['T', 'T', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'T', 'T'],
  ['O', 'O', 'O', 'O', 'O'],
];
console.log(numOfForests(grid4) === 3);

const grid5 = [
  ['T', 'T', 'T'],
  ['T', 'O', 'T'],
  ['T', 'T', 'T']
];
console.log(numOfForests(grid5) === 1);

const grid6 = [
  ['T', 'O', 'T', 'O', 'T'],
  ['O', 'O', 'O', 'O', 'O'],
  ['T', 'O', 'T', 'O', 'T'],
  ['O', 'O', 'O', 'O', 'O'],
  ['T', 'O', 'T', 'O', 'T']
];
console.log(numOfForests(grid6) === 9);

const grid7 = [
  ['T', 'T', 'T'],
  ['T', 'T', 'T'],
  ['T', 'T', 'T']
];
console.log(numOfForests(grid7) === 1);

const grid8 = [
  ['T','O','T'],
  ['T','T','T'],
  ['T','O','T']
];
console.log(numOfForests(grid8) === 1);

// All test cases should log true