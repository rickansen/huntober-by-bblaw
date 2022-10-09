const solveArrayDay1 = (arr1, arr2) =>
  arr1.every((x, y) => x.every((a, b) => a === arr2[y][b]));

const arr1 = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
];

const arr2 = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
];
const arr3 = [
  ['a', 'B', 'c'],
  ['d', 'E', 'f'],
  ['g', 'H', 'i'],
];
const arr4 = [
  ['a', 'b', 'c'],
  ['g', 'h', 'i'],
  ['d', 'e', 'f'],
];
console.log(solveArrayDay1(arr1, arr2), true);
console.log(solveArrayDay1(arr1, arr3), false);
console.log(solveArrayDay1(arr1, arr4), false);
// each of these arrays have 3 nested arrays of 3 strings each
