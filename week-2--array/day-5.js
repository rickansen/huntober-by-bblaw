function shuffleDIY(arr) {
  const elements = arr.reduce((a, b) => a.concat(b));
  const shuffledArr = [];
  const finalShuffled = [];

  while (elements.length !== 0) {
    const random = Math.ceil(Math.random() * (elements.length - 1));
    shuffledArr.push(elements[random]);
    elements.splice(random, 1);
  }

  for (let i = 0; i < arr.length; i++) {
    finalShuffled.push(
      shuffledArr.slice(i * arr.length, i * arr.length + arr.length)
    );
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

function shufflePreMade(array) {
  return array.sort(() => Math.random() - 0.5);
}

console.log(
  shufflePreMade([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

// console.log(
//   shufflePreMade([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

// console.log(shufflePreMade([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(shufflePreMade([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(shufflePreMade([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(shufflePreMade([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(shufflePreMade([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(shufflePreMade([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(shufflePreMade([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(shufflePreMade([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(shufflePreMade([1, 2, 3, 4, 5, 6, 7, 8, 9]));
