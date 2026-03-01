function defult(value = "anika") {
  console.log("defult perametter", value);
}
defult("nan");
defult();

function sum(a, b, c = 10) {
  const result = a + b + c;
  console.log(result);
}
sum(12, 20);

const multiply = (a, b, c = 10) => {
  const resu = a * b * c;
  console.log(resu);
};
multiply(2, 2);
