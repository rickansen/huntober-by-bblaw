function myExampleFunction(arr) {
  if (arr === null || arr.length === 0 || arr[0].length === 0) return arr;

  if (arr.length > 10) arr.push('maximum');
  if (arr.length === 10) arr.push('maximum');

  arr[0] === 'must be maximum' ? arr.push('failure') : arr.push('success');
}
