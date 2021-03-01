function almostIncreasingSequence(sequence) {
  let count = 0;
  let result = true;
  let prevVal = null;

  for (let index = sequence.length - 1; index >= 0; index--) {
    let currVal = sequence[index];
    let nextVal = sequence[index - 1];

    console.log(sequence, index, prevVal, currVal, nextVal);
    if (nextVal) {
      if (currVal > nextVal) {
        prevVal = currVal;
      } else {
        if (count == 0) {
          if (prevVal === null || prevVal > nextVal) {
            sequence.splice(index, 1);
          } else {
            sequence.splice(index - 1, 1);
          }
          count++;
        } else {
          result = false;
          break;
        }
      }
    }
  }
  return result;
}

(function () {
  let inputArray = [3, 5, 67, 98, 3];
  console.log(almostIncreasingSequence(inputArray));
})();
