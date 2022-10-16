// Day 1

const checkWin = (arr1, arr2) =>
  arr1.every((x, y) => x.every((a, b) => a === arr2[y][b]))
    ? setIsWin(true)
    : setIsWin(false);

// Day 2
function moveBlankLeft(curGrid, blankChar) {
  const index = curGrid.indexOf(blankChar);
  const leftVal = curGrid[index - 1];

  if (index === 0) return curGrid;
  curGrid = curGrid.map((x, y, z) =>
    y === index - 1 ? curGrid[index] : y === index ? leftVal : x
  );
  return curGrid;
}

function moveBlankRight(curGrid, blankChar) {
  const index = curGrid.indexOf(blankChar);
  const leftVal = curGrid[index + 1];

  if (index === curGrid.length - 1) return curGrid;
  curGrid = curGrid.map((x, y, z) =>
    y === index + 1 ? curGrid[index] : y === index ? leftVal : x
  );
  checkWin(gridWithBlank, curGrid);
  return curGrid;
}

// Day 4

function moveBlankUp(curGrid, blankGrid) {
  let yAxis = curGrid.map((x) => x.some((a) => a === blankGrid)).indexOf(true);
  let xAxis = curGrid[yAxis].indexOf(blankGrid);
  if (yAxis - 1 < 0) return curGrid;
  const temp = curGrid[yAxis - 1][xAxis];
  curGrid = curGrid.map((x, y) =>
    y === yAxis - 1
      ? x.map((a, b) => (b === xAxis ? blankGrid : a))
      : y === yAxis
      ? x.map((a, b) => (b === xAxis ? temp : a))
      : x
  );
  checkWin(gridWithBlank, curGrid);
  return curGrid;
}

function moveBlankDown(curGrid, blankGrid) {
  let yAxis = curGrid.map((x) => x.some((a) => a === blankGrid)).indexOf(true);
  let xAxis = curGrid[yAxis].indexOf(blankGrid);
  if (yAxis + 1 >= curGrid.length) return curGrid;
  const temp = curGrid[yAxis + 1][xAxis];
  curGrid = curGrid.map((x, y) =>
    y === yAxis + 1
      ? x.map((a, b) => (b === xAxis ? blankGrid : a))
      : y === yAxis
      ? x.map((a, b) => (b === xAxis ? temp : a))
      : x
  );
  checkWin(gridWithBlank, curGrid);
  return curGrid;
}
