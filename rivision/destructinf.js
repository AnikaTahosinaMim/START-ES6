const arr = [12, 34, 23, 56, 76];
// const [num1, , , , num2] = arr;
const [num1, ...rest] = arr;
console.log(num1, rest);

// object destructing.......
const person = {
  name: "Mim",
  age: 20,
  city: "Rangpur",
  camera:'12200'
};

const { name: userName } = person;
console.log(userName);
const { country = "bangladesh", camera = "12mmp" } = person;
console.log(country);
console.log(camera);
const { name, age } = person;
// console.log(name, age);
