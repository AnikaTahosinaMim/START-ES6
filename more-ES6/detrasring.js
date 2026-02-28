let numbers = [12, 45, 23, 44, 89, 60];
let [one, two, , , , three] = numbers;
console.log(one, two, three);

const product = {
  name: "anika",
  job: "stu",
  onne: {
    roll: 34,
    age: "nai",
  },
};
let { name, onne } = product;
let { name: myname ,
    onne:other
    ,{age:num
        ,roll:n}} = product;
console.log(myname, other ,num ,n);
