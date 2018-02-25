module.exports = function solveEquation(equation) {
  // your implementation
  let a = parseInt(equation.match(/^(\-){0,1}.{0,2}[0-9]+/)[0].replace (/ /g, ''));
  let b = parseInt(equation.match(/[^(\^2)](\+|\-).{1}[0-9]+.{0,1}[ ^x]/)[0].replace (/ /g, ''));
  let c = parseInt(equation.match(/(\+|\-).[0-9]+$/)[0].replace (/ /g, ''));

  let x1 = Math.round((-b + Math.sqrt(b*b - 4 * a * c))/(2*a));

  let x2 = Math.round((-b - Math.sqrt(b*b - 4 * a * c))/(2*a));

  return (x1 < x2)? [x1, x2]: [x2, x1];
}
