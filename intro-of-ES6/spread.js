const number = Math.max(23, 12, 67, 34, 23);
const numbers = [2, 45, 24, 23, 1, 3];
// console.log(...numbers);
const max2 = Math.max(...numbers);
// console.log(max2);
const num = [2, 22, 34, 45, 12];
function sum(x, y, z, e, f) {
  return x + y + z + e + f;
}
// console.log(sum(...num));

const arr1 = [1, 2, 3, 4];
// const arr2 = [...arr1];
const arr2 = [12, ...arr1, 45, 67, 2, 23, 24];
arr2.push(5);
// console.log(arr1);
console.log(arr2);
