function newFunc(a, b, ...rest) {
  console.log(a, b, rest);
}
const output = newFunc(10, 30, 674, 13, 1, 3, 4);
function otherFunc(...other) {
  console.log(other);
}
otherFunc(12, 34, 12, 3, 4, 5, 67, 4, 5, 90);
