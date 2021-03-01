/**
 * function to evaluate the expression
 * @param {} op
 * @param {*} e1
 * @param {*} e2
 */

var evaluate = function (op, e1, e2) {
  switch (op) {
    case "^":
      return Math.pow(e1, e2);
    case "*":
      return e1 * e2;
    case "/":
      return Math.floor(e1 / e2);
    case "+":
      return e1 + e2;
    case "-":
      return e1 - e2;
  }
  return 0;
};

/**
 * Function to check if a character is operator or not.
 * @param {*} ch
 */
var isOperator = function (ch) {
  if ("^" === ch || "/" === ch || "*" === ch || "+" === ch || "-" === ch)
    return true;
  return false;
};

var isVariables = function (ch) {
  if (isNaN(ch)) return true;
  return false;
};

/**
 * Function to parse and evaluate the expression
 * @param {*} expression
 */
var evalPrefix = function (expression, variables) {
  let op = expression.trim().split(" ");
  let stack = [];
  for (let i = op.length - 1; i >= 0; i--) {
    let exp = op[i].trim();

    if (exp != "") {
      // If operator pop two operands, evaluate them and push result to stack
      if (isOperator(exp)) {
        let a = parseInt(stack.pop());
        let b = parseInt(stack.pop());
        console.log(exp, a, b);
        if (!isNaN(a) && !isNaN(b)) {
          let res = evaluate(exp, a, b);

          stack.push(res);
          console.log(res, stack);
        } else {
          return null;
        }
      } else if (isVariables(exp)) {
        //If variable, retrieve its value and push to stack
        stack.push(variables[exp]);
      } else {
        //If value push to stack
        stack.push(exp);
      }
    }
  }
  if (stack.length > 1) return null;
  let output = stack.pop();
  if (!isFinite(output)) return null;
  return parseInt(output);
};

(function () {
  let exp = " + 1 0 ";
  console.log("Prefix: ", exp);
  console.log("Result: ", evalPrefix(exp, {}));
})();
