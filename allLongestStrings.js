function allLongestStrings(inputArray) {
  let longestStrings = [];
  let longestStringLength = 0;
  for (let index = 0; index < inputArray.length; index++) {
    let stringLength = inputArray[index].length;
    if (stringLength > longestStringLength) {
      longestStringLength = stringLength;
      longestStrings = [];
      longestStrings.push(inputArray[index]);
    } else if (stringLength == longestStringLength) {
      longestStrings.push(inputArray[index]);
    }
  }
  return longestStrings;
}

(function () {
  let inputArray = ["abc", "eeee", "abcd", "dcd"];
  console.log(allLongestStrings(inputArray));
})();
