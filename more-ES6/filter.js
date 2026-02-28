const numbers = [2, 4, 56, 6, 2, 3, 5, 7, 66, 90];
const even = numbers.filter((num) => num % 2 === 0);
console.log(even);

const frineds = ["nisi", "nilima", "nahid", "rasel", "fahim", "tasnim"];
const friend = frineds.filter((nam) => nam[0] === "n");
console.log(friend);
const products = [
  { name: "zahid", age: 20 },
  { name: "mila", age: 14 },
  { name: "mila", age: 17 },
  { name: "nila", age: 25 },
];
const product = products.filter((pro) => pro.age > 18);
console.log(product);
