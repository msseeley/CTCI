/*
Paint Fill:
Implement the "pain fill" function that one might see on many image editing programs. That is, given a screen (represented by a two-dimensional array of colors), a point, and a new color, fill in the surrounding area until the color changes from the original color.
*/

class Canvas {
  constructor() {
    this.canvas = [[]];
  }

  fillColor(row, col, colorValue) {
    this.canvas[row][col] = colorValue;
  }

  checkColor(row, col, colorValue) {
    return this.canvas[row][col] === colorValue;
  }

  paintFill(row, col, fillColor, currColor = this.canvas[row][col]) {
    if (this.checkColor(row, col, currColor)) {
      this.fillColor(row, col, fillColor)
      this.paintFill(row - 1, col, fillColor, currColor)
      this.paintFill(row + 1, col, fillColor, currColor)
      this.paintFill(row, col - 1, fillColor, currColor)
      this.paintFill(row, col + 1, fillColor, currColor)
    }

  }

}
