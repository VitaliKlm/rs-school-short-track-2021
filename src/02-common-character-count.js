/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const repeatElemArr = [];
  let s1CharNum;
  let s2CharNum;
  let commonCharsNum = 0;

  s1.split('').forEach((elem) => {
    s1CharNum = s1.split('').filter((char) => char === elem).length;
    s2CharNum = s2.split('').filter((char) => char === elem).length;
    if (!repeatElemArr.includes(elem) && s1CharNum && s2CharNum) {
      repeatElemArr.push(elem);
      commonCharsNum += Math.min(s1CharNum, s2CharNum);
    }
  });
  return commonCharsNum;
}

module.exports = getCommonCharacterCount;
