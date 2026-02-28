// function outdoorFunction() {
//   function innerFunction() {
//     console.log("inner function");
//   }
//   return innerFunction;
// }
// const result = outdoorFunction();
// result();
// console.log("outside function", output);

// function countOutFunction() {
//   let count = 0;
//   function increase() {
//     count++
//     console.log("increas value ", count);
//   }
//   return increase;
// }
// const output = countOutFunction();
// output();
// output()
// output()

// function outterFunction() {
//   function innerFunction() {
//     console.log("this is the inner function");
//   }
//   return innerFunction;
// }
// const outPut = outterFunction();
// return outPut();
// console.log(outPut);

// function culculate() {
//   let cot = 0;
//   function count() {
//     cot++;
//     console.log("count function", cot);
//   }
//   return count;
// }
// const result = culculate();
// result();
// result();

// console.log(result);

// function increse() {
//   let count = 9;
//   function manage() {
//     count++;
//     console.log("inner function",count);
//   }
//   return manage;
// }
// const result = increse();
// result();
// result();
// result();

// function outerFunction(ower) {
//   let count = 0;
//   function increase() {
//     count++;
//     console.log("The of Counter of", ower, count);
//   }
//   return increase;
// }
// const owerAhsan = outerFunction("Ahsan");
// const owerMim = outerFunction("Mim");
// owerAhsan();
// owerAhsan();
// owerAhsan();
// owerAhsan();
// owerMim();
// owerMim();
// owerMim();
// owerAhsan();
// owerAhsan();

function test() {
  let x = 10;
  return function () {
    console.log(x);
  };
}
const a = test();
a();
