function areSimilar(a, b) {
  const ad = a.filter((v, i) => v != b[i]);
  const bd = b.filter((v, i) => v != a[i]);
  return (
    ad.length == 0 || (ad.length == 2 && ad.join("") == bd.reverse().join(""))
  );
}

(function () {
  let a = [1, 2, 3];
  let b = [3, 2, 1];
  console.log(areSimilar(a, b));
})();
