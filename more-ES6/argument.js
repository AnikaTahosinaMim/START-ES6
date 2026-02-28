function argu(num1, num2) {
  console.log("argument", arguments, arguments[1]);
  const arr = [...arguments];
  console.log(arr);
}
argu(10, 30, 54, 5, 2, 3, 23, 13, 12);
