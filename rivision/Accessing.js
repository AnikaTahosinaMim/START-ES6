const student = {
  name: "Mim",
  age: 20,
  result: {
    semester1: {
      math: 85,
      physics: 80,
    },
  },
};
const key = "name";
console.log(student[key]);
console.log(student?.result?.semester1?.physics);
console.log(student?.semester3)
