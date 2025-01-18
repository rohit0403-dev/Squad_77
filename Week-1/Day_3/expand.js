// it is used for to unpacked the values;
let fruits = ["apple", "mango", "orange"];
let apple = fruits[0];
let orange = fruits[2];
// console.log(apple,orange)
// if I want to print all values in singl lines .
/**
 * Spread Operator - ...
 */
// console.log(...fruits)
let vegetable = ["onion", "chilli"];
let anotherBag = [...fruits, ...vegetable, "pineapple"];
// console.log(anotherBag)

/***
 * Rest Operator - ...
 * it is used for to pack values
 *
 */
function print(a, ...kalvium) {
  console.log(a,kalvium);
}
print(1, 2, 3, 4);
