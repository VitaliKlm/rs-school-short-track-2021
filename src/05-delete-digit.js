/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numVariations = [];
  const s = String(n);
  for (let i = 0; i < s.length; i++) {
    numVariations.push(Number(s.slice(0, i) + s.slice(i + 1, s.length)));
  }
  return numVariations.reduce((max, num) => (num > max ? num : max), 0);
}

module.exports = deleteDigit;
