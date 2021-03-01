function alternatingSums(a) {
  return a.reduce(
    (accValue, currValue, index) => {
      if (index % 2 == 0) {
        accValue[0] = accValue[0] + currValue;
        return accValue;
      } else {
        accValue[1] = accValue[1] + currValue;
        return accValue;
      }
    },
    [0, 0]
  );
}

(function () {
  let input = [50, 60, 60, 45, 70];
  console.log(alternatingSums(input));
})();
