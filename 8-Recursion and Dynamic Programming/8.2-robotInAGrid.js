/*
  PROMPT:
  Imagine a robot sitting on the upper left corner of a grid with r Rows and c columns. The robot can only move in two directions, right and down, but certain cells are "off limits" such that the robot cannot step on them. Design an algorithm to find a path for the robot from the top left to the bottom right.
*/
/*
  [
    [0, 0 , 0, 0 , 0],
    [0, 0 , 1, 0 , 0],
    [0, 0 , 1, 1 , 0],
    [0, 1 , 0, 1 , 1]
  ]
*/

//review - mutation, difference between reassignment and mutation, dot vs bracket


function findPath(grid, pos = { r: 0, c: 0 }, path = []) {
  const current = grid[pos.r] ? grid[pos.r][pos.c] : null;
  if (!current || current === undefined) return;
  if (pos.r === grid.length - 1 && pos.c === grid[0].length) return path;
  let rightPath = path.concat('right')
  const right = findPath(grid, { r: pos.r, c: pos.c + 1 }, rightPath)
  let downPath = path.concat('down')
  const down = findPath(grid, { r: pos.r + 1, c: pos.c }, downPath)
  return right || down
}

//getters allow you to say I'm actually accessing function while calling it like a property ** can look up

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

//CTCI solution unoptimized:
//Time Complexity: O(2^r+c)
//I'm assuming the invalid paths  here are marked with 0s and valids are 1.


function getPath(grid, row, col, path) {
  if (col < 0 || row < 0 || !grid[row][col]) { //check to make sure row, col, and placement are on the board/valid
    return false;
  }
  let atOrigin = (row === 0) && (col === 0); //0,0 coordinate would be origin point
  if (atOrigin || getPath(grid, row, col - 1, path) || getPath(grid, row - 1, col, path)) {
    path.push([row, col]);
    return true;
  }
  return false;
}

function pathfinder(grid) {
  if (grid === null || grid.length === 0) return null;
  let path = [];
  if (getPath(grid, grid.length - 1, grid[0].length - 1, path)) { //starts w/lower right corner
    return path;
  }
  return null;
}


//CTCI solution optimized w/memoization:
//Run Time: O(rc)
/*
 [
   [1,1],
   [1,1]
 ]

*/

function getPath(grid, row, col, path, failedPoints) {
  if (col < 0 || row < 0 || !grid[row][col]) return false;
  const coordKey = `${row},${col}`
  if (failedPoints.has(coordKey)) return false;
  let atOrigin = (row === 0) && (col === 0); //0,0 coordinate would be origin point
  if (atOrigin || getPath(grid, row, col - 1, path) || getPath(grid, row - 1, col, path)) { // or statments prevent overlap/over righting of path
    path.push(coordKey)
    return true;
  }
  failedPoints.add(coordKey);
  return false;
}

function pathfinder(grid) {
  let failedPoints = new Set();
  if (grid === null || grid.length === 0) return null;
  let path = [];
  if (getPath(grid, grid.length - 1, grid[0].length - 1, path, failedPoints)) { //starts w/lower right corner
    return path
  }
  return null
}

