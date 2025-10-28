// You are provided with a 2D grid map where each cell is either
//  marked as a tree ('T') or open land ('O'). Your goal is to
// count the number of distinct forest regions on the map. A forest
// region consists of a contiguous group of tree cells ('T'). For
// this problem, two tree cells are considered connected if they
// share an edge horizontally or vertically, but not diagonally.

// Write a function numOfForests that accepts a nested array grid
// representing the 2D map. The function should return the total
// number of forest regions in the grid.

/*
When we're on 'O' ignore it.
- We track once we hit a 'T'


*/

function listIndex(seen, row, col) {
    let location = `[${row}, ${col}]`;

    for (let i = 0; i < seen.length; i += 1) {
        let currArr = seen[i];

        if (currArr.includes(location)) return i;
    }

    seen.push([location]);

    return seen.length - 1;
}

function numOfForests(grid) {
  let seen = [];

  for (let row = 0; row < grid.length; row += 1) {
    for (let col = 0; col < grid[0].length; col += 1) {
        const curr = grid[row][col];

        if (curr === 'O') continue;

        const left = grid[row][col - 1];
        const right = grid[row][col + 1];
        const top = grid[row - 1] ? grid[row - 1][col] : undefined;
        const bottom = grid[row + 1] ? grid[row + 1][col] : undefined;
        const index = listIndex(seen, row, col);

        if (left === 'T') seen[index].push(`[${row}, ${col - 1}]`);
        if (right === 'T') seen[index].push(`[${row}, ${col + 1}]`);
        if (top === 'T') seen[index].push(`[${row - 1}, ${col}]`);
        if (bottom === 'T') seen[index].push(`[${row + 1}, ${col}]`);
    }
  }

  return seen.length;
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