function sortByHeight(a) {
  let persons = a.filter((val) => val != -1).sort((a, b) => a - b);
  for (let index = 0; index < a.length; index++) {
    if (a[index] != -1) {
      if (persons.length > 0) {
        a[index] = persons.shift();
      }
    }
  }
  return a;
}

(function () {
  let input = [-1, 150, 190, 170, -1, -1, 160, 180];
  console.log(sortByHeight(input));
})();
