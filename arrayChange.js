function arrayChange(inputArray) {
  let result = 0;

  inputArray.forEach((value, index) => {
    let nextIndex = index + 1;
    let nextval = inputArray[nextIndex];
    if (!isNaN(nextval) && value >= nextval) {
      while (value >= nextval) {
        nextval++;
        result++;
      }
      inputArray[nextIndex] = nextval;
    }
  });
  return result;
}

(function () {
  let inputArray = [-1000, 0, -2, 0];
  console.log(arrayChange(inputArray));
})();
