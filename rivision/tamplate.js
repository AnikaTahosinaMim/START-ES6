const product = "laptop";
const price = 2000;
const amount = `The produce ${product} and The price ${price}`;
console.log(amount);

const menu = {
  item: "laptop",
  price: 2000,
  location: "rangpur",
};
const messeage = `The items is ${menu.item} and locations ${menu.location}`;
console.log(messeage);

function green(name) {
  return `hi ${name} welcome back`;
}
console.log(green("anika"));

function greet(age) {
  //   console.log(`His age is ${age}`);
  return `his age if ${age}`;
}
console.log(greet(20));
