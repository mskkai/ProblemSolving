function adjacentElementsProduct(inputArray) {
  let result;
  for (let index = 0; index < inputArray.length - 1; index++) {
    let currVal = inputArray[index];
    let nextVal = inputArray[index + 1];
    let currProduct = currVal * nextVal;
    console.log(currProduct, result, index);
    if (result === undefined) {
      result = currProduct;
    } else if (currProduct > result) {
      result = currProduct;
    }
  }
  return result;
}

(function () {
  let inputArray = [-23, 4, -3, 8, -12];
  console.log(adjacentElementsProduct(inputArray));
})();
