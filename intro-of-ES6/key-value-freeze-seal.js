const king = { name: "Mufasa", age: 55, kingdom: "united stated" };
// Object.freeze(king);
Object.seal(king);
console.log(king);
// console.log(king);

// const keys = Object.keys(king);
// console.log(keys);

// const value = Object.values(king);
// console.log(value);

// // entries::
// const entries = Object.entries(king);
// console.log(entries);

// delete onek element
delete king.age;
console.log(king);

// add element
king.queen = "Radha rani";
console.log(king);
// change element

king.name = "sarabi";
console.log(king);
