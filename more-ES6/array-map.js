const numbers = [2, 3, 4, 5, 2, 5];

const double = numbers.map((num) => num * 2);
// console.log(double);

const result = (num) => num * 3;
const dou = numbers.map(result);
// console.log(dou);

const list = ["mim", "ahsan", "anka", "habib"];
const newArr = list.map((li, index, list) => li[0]);
// console.log(newArr, list);

const products = [
  { name: "anika", location: "rangpur", age: 19 },
  { name: "AHsan", location: "kusthia", age: 21 },
];
const product = products.map((pro, index, productArray) => {
  const upper = pro.name.toUpperCase();
  //   console.log(index, upper, productArray);
  return upper;
});
// console.log(product);

// forEach************
products.forEach((num) => {
  console.log(num);
});
const numberrius = [2, 4, 5, 6, 6];
numberrius.forEach((num) => {
  console.log(num * 2);
});

const memories = ["yor", "me"];
const forthem = memories.forEach((meno) => {
  console.log(meno);
});
