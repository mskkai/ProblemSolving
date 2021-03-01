function matrixElementsSum(matrix) {
  let resultSum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        if (!hasGhostContact(matrix, i, j)) {
          resultSum += matrix[i][j];
        }
      }
    }
  }
  return resultSum;
}

function hasGhostContact(matrix, i, j) {
  while (i >= 0) {
    if (matrix[i][j] == 0) {
      return true;
    }
    i--;
  }
  return false;
}

(function () {
  let inputArray = [
    [1, 1, 1, 0],
    [0, 5, 0, 1],
    [2, 1, 3, 10],
  ];
  console.log(matrixElementsSum(inputArray));
})();
