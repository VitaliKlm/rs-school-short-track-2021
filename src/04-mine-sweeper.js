/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const matrixNum = matrix.map((row) => new Array(row.length).fill(0));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === true) {
        // conditions prevent operations with undefined cells in 'border cases'
        // when the matrix element has less than 8 neighboring cells
        if (i - 1 >= 0) {
          matrixNum[i - 1][j]++;
          if (j - 1 >= 0) {
            matrixNum[i - 1][j - 1]++;
          }
          if (j + 1 < matrix[0].length) {
            matrixNum[i - 1][j + 1]++;
          }
        }

        if (i + 1 < matrix.length) {
          matrixNum[i + 1][j]++;
          if (j - 1 >= 0) {
            matrixNum[i + 1][j - 1]++;
          }
          if (j + 1 < matrix[0].length) {
            matrixNum[i + 1][j + 1]++;
          }
        }

        if (j + 1 < matrix[0].length) {
          matrixNum[i][j + 1]++;
        }
        if (j - 1 >= 0) {
          matrixNum[i][j - 1]++;
        }
      }
    }
  }
  return matrixNum;
}

module.exports = minesweeper;
