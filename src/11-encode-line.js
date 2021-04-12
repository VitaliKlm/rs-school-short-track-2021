/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // use reversed str for work with output as a stack,
  // where the last elem is a counter of repeat symbols
  const reverseArr = str.split('').reverse();
  const reverseOutput = [];
  let counter = 1;
  reverseArr.forEach((elem, index) => {
    if (reverseOutput[reverseOutput.length - 1] === elem) {
      counter++;
      if (index === reverseArr.length - 1) {
        reverseOutput.push(counter);
      }
    } else {
      if (counter > 1) {
        reverseOutput.push(counter);
        counter = 1;
      }
      reverseOutput.push(elem);
    }
  });
  return reverseOutput.reverse().join('');
}

module.exports = encodeLine;
