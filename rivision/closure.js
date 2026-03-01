function totalFunc() {
  let total = 0;
  function mini() {
    total++;
    console.log(total);
  }
  return mini;
}
const output = totalFunc()
output()
output()
 
