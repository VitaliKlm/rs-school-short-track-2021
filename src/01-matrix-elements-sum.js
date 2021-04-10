/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sumAllMatrix = 0;
  let sumElemUnderZero = 0;
  const columnCount = matrix[0].length;
  for (let i = 0; i < columnCount; i++) {
    for (let j = 0; j < matrix.length; j++) {
      sumAllMatrix += matrix[j][i];
      if (matrix[j][i] === 0 && j + 1 < matrix.length) {
        sumElemUnderZero += matrix[j + 1][i];
      }
    }
  }
  return sumAllMatrix - sumElemUnderZero;
}

module.exports = getMatrixElementsSum;
