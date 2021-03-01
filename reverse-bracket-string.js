function reverseInParentheses(s) {
  while (true) {
    let closeParenthesis = s.indexOf(")");
    if (closeParenthesis == -1) break;
    let stringToConsider = s.substring(0, closeParenthesis);
    let openParenthesis = stringToConsider.lastIndexOf("(");
    let startPart = stringToConsider.substring(0, openParenthesis);
    let middlePart = stringToConsider
      .substring(openParenthesis + 1)
      .split("")
      .reverse()
      .join("");
    let lastPart = s.substring(closeParenthesis + 1);
    s = startPart + middlePart + lastPart;
  }

  return s;
}
(function () {
  let input = "foo(bar(baz))blim";
  //let input = "foo(bar)baz(blim)";
  console.log(reverseInParentheses(input));
})();
