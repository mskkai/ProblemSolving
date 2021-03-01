function verifyPalindrome(inputString) {
  let inputStrArray = inputString.split("");
  let countMap = new Map();
  inputStrArray.forEach((value) => {
    if (!countMap.get(value)) {
      countMap.set(value, 1);
    } else {
      let count = countMap.get(value);
      countMap.set(value, count + 1);
    }
  });

  let count = 0;

  for (let value of countMap.values()) {
    if (value % 2 == 1) {
      count++;
    }
    if (count > 1) {
      break;
    }
  }

  return count > 1 ? false : true;
}

(function () {
  var inputStr = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc";
  console.log(verifyPalindrome(inputStr));
})();
