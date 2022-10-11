function moveStrings(arr) {
  return arr
    .filter((x) => x.includes('a'))
    .concat(
      arr.filter((x) => !x.includes('a')).sort((a, b) => a.length - b.length)
    );
}

console.log(
  moveStrings(['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']),
  ['hola', 'hallo', 'hi', 'hej', 'hello', 'howdy', 'heyyy']
);
