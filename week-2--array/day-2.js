function swapLeft(arr, key) {
  const index = arr.indexOf(key);
  const leftVal = arr[index - 1];

  if (index === 0) return arr;
  arr = arr.map((x, y, z) =>
    y === index - 1 ? arr[index] : y === index ? leftVal : x
  );
  return arr;
}

function swapRight(arr, key) {
  const index = arr.indexOf(key);
  const leftVal = arr[index + 1];

  if (index === arr.length - 1) return arr;
  arr = arr.map((x, y, z) =>
    y === index + 1 ? arr[index] : y === index ? leftVal : x
  );
  return arr;
}
myArray = ['abc', 'xyz', 1, 2, 'Hey!'];
console.log(swapLeft(myArray, 'xyz'), ['xyz', 'abc', 1, 2, 'Hey!']);
console.log(swapLeft(['xyz', 'abc', 1, 2, 'Hey!'], 'xyz'), [
  'xyz',
  'abc',
  1,
  2,
  'Hey!',
]);
console.log(swapRight(myArray, 2), ['xyz', 'abc', 1, 'Hey!', 2]);
console.log(swapRight(['abc', 'xyz', 1, 'Hey!', 2], 2), [
  'xyz',
  'abc',
  1,
  'Hey!',
  2,
]);
