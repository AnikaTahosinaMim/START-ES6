const division = (p, q) => p / q;
// console.log(division(10, 5));
const add = (a, b, c, d) => a + b + c + d;
// console.log(add(2, 2, 2, 2));

const single = (a) => a * 10;
// console.log(single(10));

const multiply = (a, b, c) => a * b * c;
// console.log(multiply(10, 20, 30));

// arrray ar sate arraw function
const array = [1, 2, 3, 5, 6];
const double = array.map((num) => num * 2);
// console.log(double);

const numbers = [10.15, 18, 19, 20];
const find = numbers.filter((num) => num > 18);
console.log(find);


const nums = [10,20,30]
const news = nums.reduce((nums) => nums )