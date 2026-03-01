const product = {
  name: "apple",
  weight: "10kg",
  place: "dokan",
};
for (let item in product) {
  console.log(item, "=", product[item]);
}
const arr = ["apple", "banana", "orange"];
for (let menu of arr) {
  console.log(menu);
}
