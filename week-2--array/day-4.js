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

  return curGrid;
}

function moveDown(curGrid, blankGrid) {
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

  return curGrid;
}
