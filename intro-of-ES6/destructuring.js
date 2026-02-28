// const product = { name: "iphone", price: 1000, brand: "appple" };
// const name = product.name;
// const price = product.price;
// console.log(name, price);
// system-02

const product = { name: "iphone", price: 1000, brand: "appple", camera: 48 };
const { name, price, brand, camera } = {
  name: "iphone",
  price: 1000,
  brand: "appple",
};
// console.log(name, price, brand);
const { Location ,name:nam} = {
  name: "solali",
  job: "rangpur",
  Location: "bangkadesh",
  number: "1234",
};
console.log(Location,nam);
