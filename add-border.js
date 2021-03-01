function addBoarder(picture) {
  let lengthOfRectange = picture[0].length + 2;
  return picture.reduce((accValue, currValue, index) => {
    if (index == 0) {
      accValue.push("*".repeat(lengthOfRectange));
    }
    accValue.push("*" + currValue + "*");
    if (index == picture.length - 1) {
      accValue.push("*".repeat(lengthOfRectange));
    }
    return accValue;
  }, []);
}

(function () {
  let input = ["abc", "ded"];
  console.log(addBoarder(input));
})();
