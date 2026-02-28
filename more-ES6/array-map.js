const numbers = [2, 3, 4, 5, 2, 5];

const double = numbers.map((num) => num * 2);
// console.log(double);

const result = (num) => num * 3;
const dou = numbers.map(result);
// console.log(dou);

const list = ["mim", "ahsan", "anka", "habib"];
const newArr = list.map((li,index,list) => li[0] );
console.log(newArr,list);
