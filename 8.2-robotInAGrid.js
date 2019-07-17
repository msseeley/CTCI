/*
  PROMPT:
  Imagine a robot sitting on the upper left corner of a grid with r Rows and c columns. The robot can only move in two directions, right and down, but certain cells are "off limits" such that the robot cannot step on them. Design an algorithm to find a path for the robot from the top left to the bottom right.
*/
/*
  [
    [0, 0 , 1 , 0 , 0],
    [0, 0 , 0 , 0 , 0],
    [1, 0 , 0 , 0 , 0],
    [0, 0 , 0 , 0 , 0]
  ]
*/

function path(grid, pos = { r: 0, c: 0 }, validPath = [], ) {
  const current = grid[pos.r][pos.c];
  const right = grid[pos.r][pos.c + 1];
  const left = grid[pos.r + 1][pos.c];

}
