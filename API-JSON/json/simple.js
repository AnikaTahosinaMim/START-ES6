const product = {
  name: "anika",
  friuts: "apple",
  isRich: false,
  age: 23,
  village: "pathordubi",
};
console.log(product);
const productJson = JSON.stringify(product);
console.log(productJson)
const productObj = JSON.parse(productJson);

console.log(productObj);
