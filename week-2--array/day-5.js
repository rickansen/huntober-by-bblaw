console.time(1);
function shuffleDIY(arr) {
  const elements = arr.flat();
  const shuffledArr = [];
  const finalShuffled = [];

  while (elements.length !== 0) {
    const random = Math.ceil(Math.random() * (elements.length - 1));
    shuffledArr.push(elements[random]);
    elements.splice(random, 1);
  }

  for (let i = 0; i < arr.length; i++) {
    finalShuffled.push(shuffledArr.splice(0, 3));
  }
  return finalShuffled;
}

console.log(
  shuffleDIY([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.timeEnd(1);

console.time(2);
function shufflePreMade(array) {
  const shuffleFlat = array.flat().sort(() => Math.random() - 0.5);
  const final2d = [];
  for (let i = 0; i < array.length; i++) {
    final2d.push(shuffleFlat.splice(0, 3));
  }
  return final2d;
}

console.log(
  shufflePreMade([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.timeEnd(2);
