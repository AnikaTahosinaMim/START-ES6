const user = {
  name: "Mim",
  age: 20,
  city: "Rangpur",
};
const key = Object.keys(user);
// console.log(key);
const value = Object.values(user);
// console.log(value);
const entries = Object.entries(user);
// console.log(entries);

Object.entries(user).forEach(([key, value]) => {
  //   console.log(key, value);
});

// delete ........
delete user.city;
// console.log(user);

// seal...
const person = {
  name: "Mim",
  age: 20,
};
Object.seal(person);
// person.age = 200;
// console.log(person);
// delete person.name
// console.log(person)
// person.citys = "dhaka"
// console.log(person)

// freeze.
Object.freeze(person)
person.age = 200;
console.log(person);
delete person.name
console.log(person)
person.citys = "dhaka"
console.log(person)

