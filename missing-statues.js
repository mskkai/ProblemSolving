function makeArrayConsecutive2(statues) {
  let sortedStatues = statues.sort((a, b) => b - a);
  let resultCount = 0;
  sortedStatues.reduce((a, b) => {
    let tempCount = a - b - 1;
    resultCount = resultCount + tempCount;
    return b;
  });
  return resultCount;
}

(function () {
  let inputArray = [6, 2, 3, 8];
  console.log(makeArrayConsecutive2(inputArray));
})();
