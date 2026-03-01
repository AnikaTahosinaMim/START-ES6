let x = 10;

function foo() {
  let x = 20;
  //   console.log(x);
}

foo();
// console.log(x);

function cart() {
  let total = 0;
  function add(price) {
    total = total + price;
  }
  function show() {
    console.log(total);
  }
  add(100);
  add(200);
  show();
}
// cart();

// culculate

function moral() {
  let result = 0;
  function add(n) {
    result = result + n;
  }
  function sub(n) {
    result = result - n;
  }
  function see() {
    console.log(result);
  }
  add(10);
  sub(5);
  sub(30);
  see();
}
moral();

function greenUser(name) {
  function say() {
    console.log("Hi" + name);
  }
  say();
}
greenUser("Ahsan");
