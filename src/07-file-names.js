/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let repeatNamesIndex;
  names.forEach((name, i) => {
    repeatNamesIndex = [];

    names.slice(0, i).concat(names.slice(i + 1, names.length))
      .forEach((elem, index) => {
        if (elem === name) {
          repeatNamesIndex.push(index + 1);
        }
      });

    if (repeatNamesIndex.length) {
      repeatNamesIndex.forEach((elem, index) => {
        names.splice(elem, 1, `${name}(${index + 1})`);
      });
    }
  });
  return names;
}

module.exports = renameFiles;
