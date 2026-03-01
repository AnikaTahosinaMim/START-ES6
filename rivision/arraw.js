// normal perametter
function add(a, b) {
  return a + b;
}
// console.log(add(5, 8));

// arraw function...
const added = (a, b) => a + b;
// console.log(added(5, 5));

// practice.......
// double array
const num = [2, 3, 4, 5, 5];
const arrFunc = num.map((num) => num * 2);
// const output = arrFunc(num);
// console.log(arrFunc);
// even number filter
const numbers = [2, 3, 4, 5, 6, 6, 7, 7, 8, 9, 10];
const even = numbers.filter((numbers) => numbers % 2 === 1);
// console.log(even);

const products = [
  { name: "laptop", price: 50000 },
  { name: "mobile", price: 20000 },
  { name: "tablet", price: 30000 },
];
const proobj = products.map((products) => products.price);
console.log(proobj);
const total = products.reduce((sum, products) => sum + products.price, 0);
// console.log(total);

const menu = [
  { name: "Mobile", price: 2000 },
  { name: "Laptop", price: 50000 },
  { name: "Headphone", price: 30000 },
];
// const totalPrice = menu.reduce((sumMetion, menu) => sumMetion + menu.price, 0);
// console.log(totalPrice);
const totalprice = menu
  .filter((item) => item.price > 10000)
  .reduce((sumMetion, item) => sumMetion + item.price, 0);
console.log(totalprice);
