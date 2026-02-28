// const employee = {
//     name:'jhon Deo',
//     position : "sovf en"
// }
// console.log(employee.name)

const employees = {
  name: "jhon Deo",
  selary: 5000,
  position: "sovf en",
  1: "desh one",
  "select-one": "from-multiple",
};
// const key = 'position'
// console.log(employees[key])
// const money = employees['selary']
// console.log(employees[money])
// console.log(employees[1])

// console.log(employees[name])
// console.log(employees["select-one"]);

const user = { place: "rangpur" };
const zip = user?.address;
// console.log(zip);
const details = {
  bussenss: "garder",
  area: "dhaka",
  people: {
    oder: "anika",
    self: "ahsan",
  },
};
console.log(details.people?.name);
