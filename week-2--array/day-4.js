function moveUp(grid, key) {
  let yAxis = grid.map((x) => x.some((a) => a === key)).indexOf(true);
  let xAxis = grid[yAxis].indexOf(key);
  if (yAxis - 1 < 0) return grid;
  const temp = grid[yAxis - 1][xAxis];
  grid = grid.map((x, y) =>
    y === yAxis - 1
      ? x.map((a, b) => (b === xAxis ? key : a))
      : y === yAxis
      ? x.map((a, b) => (b === xAxis ? temp : a))
      : x
  );

  return grid;
}

function moveDown(grid, key) {
  let yAxis = grid.map((x) => x.some((a) => a === key)).indexOf(true);
  let xAxis = grid[yAxis].indexOf(key);
  if (yAxis + 1 >= grid.length) return grid;
  const temp = grid[yAxis + 1][xAxis];
  grid = grid.map((x, y) =>
    y === yAxis + 1
      ? x.map((a, b) => (b === xAxis ? key : a))
      : y === yAxis
      ? x.map((a, b) => (b === xAxis ? temp : a))
      : x
  );

  return grid;
}
