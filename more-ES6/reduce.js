const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let num of numbers) {
//   sum = sum + num;
// }
// console.log(sum);

// with reduce function
// const sum = numbers.reduce((acc, num) => {
//   return acc + num;
// }, 0);
// console.log(sum);

const nums = [23,22,45,44,87,90]
const sum = nums.reduce((acc,num) =>{
    return (acc+num)%2===0
},0)
console.log(sum)
