const products = [
  { name: "zahid", age: 20 },
  { name: "mila", age: 20 },
  { name: "mila", age: 20 },
  { name: "nila", age: 25 },
];
// const product = products.find((nam) => nam.name[0] === "m");
const product = products.find((nam) => nam.age>18)
console.log(product);
