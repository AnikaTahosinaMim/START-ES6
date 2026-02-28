// function sum(arr1, arr2) {
//   arr1[0] = 100;
//   arr2[0] = 200;
// }
// const num1 = [1, 2, 3, 4];
// const num2 = [1, 2, 3, 4];
// console.log(num1, num2);
// const result = sum(num1, num2);
// console.log(num1, num2);

let arr = [12, 34, 56];
let copyArr = [...arr];

copyArr.push(10);
console.log(arr);
console.log(copyArr);
