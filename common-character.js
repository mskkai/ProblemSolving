function commonCharacterCount(s1, s2) {
  let resultCount = 0;
  let s1Array = s1.split("");
  let s2Array = s2.split("");
  s1Array.forEach((element) => {
    let curEleIndex = s2Array.findIndex((char) => char == element);
    if (curEleIndex > -1) {
      s2Array.splice(curEleIndex, 1);
      resultCount++;
    }
  });
  return resultCount;
}

function countCharacters(s) {
  let stringArray = s.split("");
  console.log("Array", s, stringArray);
  let countObject = {};
  stringArray.forEach((element) => {
    if (countObject[element]) {
      countObject[element] = countObject[element] + 1;
    } else {
      countObject[element] = 1;
    }
  });
  return countObject;
}

(function () {
  s1 = "aabcc";
  s2 = "adcaa";
  console.log(commonCharacterCount(s1, s2));
})();
