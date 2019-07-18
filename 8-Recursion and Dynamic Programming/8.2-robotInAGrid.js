/*
  PROMPT:
  Imagine a robot sitting on the upper left corner of a grid with r Rows and c columns. The robot can only move in two directions, right and down, but certain cells are "off limits" such that the robot cannot step on them. Design an algorithm to find a path for the robot from the top left to the bottom right.
*/
/*
  [
    [0, X , X , 0 , 0],
    [0, 0 , 0 , 0 , 0],
    [0, 0 , 0 , 0 , 0],
    [0, X , 0 , 0 , 0]
  ]
*/

//review - mutation, difference between reassignment and mutation, dot vs bracket


function findPath(grid, pos = { r: 0, c: 0 }, path = []) {
  const current = grid[pos.r] ? grid[pos.r][pos.c] : null;
  if (current === "X" || current === undefined) return;
  if (pos.r === grid.length - 1 && pos.c === grid[0].length) return path;
  let rightPath = path.concat('right')
  const right = findPath(grid, { r: pos.r, c: pos.c + 1 }, rightPath)
  let downPath = path.concat('down')
  const down = findPath(grid, { r: pos.r + 1, c: pos.c }, downPath)
  return right || down
}

//getters allow you to say I'm actually accessing function while calling it like a property ** can look up **

class Cell {
  constructor(grid, row, column) {
    this.grid = grid;
    this.row = row;
    this.column = column;
  }
  get right() {
    return new Cell(this.grid, this.row, 1 + this.column);
  }
  get down() {
    return new Cell(this.grid, 1 + this.row, this.column);
  }
  get value() {
    return this.grid[this.row] && this.grid[this.row][this.column];
  }
  get isEnd() {
    return this.right.value === undefined && this.down.value === undefined;
  }
  get isValidStep() {
    return this.value === 0;
  }
  findPath(path = []) {
    if (!this.isValidStep) return undefined;
    if (this.isEnd) return path;
    return (
      this.right.findPath([...path, 'right'])
      ||
      this.down.findPath([...path, 'down'])
    );
  }
}

const findPath = (grid) => {
  return new Cell(grid, 0, 0).findPath();
};
