const name = "anika tahosina mim";
const age = 19;
const tamplete = `
my name is ${name} and i am ${age} years old
`;
console.log(tamplete);

const place = "rangpur";
const zila = "bhurungamari";
function green() {
  return `
  my division is ${place} and i live in ${zila}
    `;
}
console.log(green(place, zila));

function add(name, descripetion) {
  const div = `<h1>${name}</h>
<div> ${descripetion}</d>
    `;
  console.log(div);
}
add("laptop", "lucky onek");

const location = "Ranpur";
console.log(`i live in ${location}`);

function num(num1, num2) {
  const result = `the result of ${num1} and ${num2}  is ${num1 + num2}
    `;
  console.log(result);
}
num(50, 20000);
