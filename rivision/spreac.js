const numerbs = [2, 4, 5, 6, 6, 7, 1, 2, 4, 4, 5, 5, 90];
// console.log(...numerbs);
const max = Math.max(...numerbs);
// console.log(max);
const min = Math.min(...numerbs);
// console.log(min);
// copy Array.......
// wrong way
const arr1 = [23, 3, 41, 24];
const arr2 = arr1;
arr2.push(90);
// console.log(arr2,arr1)

// thats the right way
const ar1 = [23, 45, 67, 12, 78];
const ar2 = [...ar1];
ar2.push(100);
// console.log(ar1);
// console.log(ar2);
const num1 = [10, 20, 30, 40, 50];
const num2 = [...num1];
num2.push(10000);
// console.log(num1, num2);

// object copy...
const person = {
  name: "Mim",
  age: 20,
};
const newobj = { ...person };
newobj.age = 100;
// console.log(person);
// console.log(newobj);

const products = {
  name: "mobile",
  item: "laptop",
  names: "pc",
  age: 20,
};
console.log(products);
const newproduct = { ...products };
newproduct.name = "anika";
newproduct.age = 200
console.log(newproduct);
