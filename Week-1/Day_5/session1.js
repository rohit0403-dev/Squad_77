// variable rights
let name = "Rohit";
// const print=function(){
//     console.log("Hello world")
// }
// print()
// function dummy(name){
//  return name;
// }

function parent() {
  console.log("parent");
  return function () {
    console.log("child")
        return function(){
            console.log("Grand Child")
        }
  };
}
// parent();
// let x=parent();
// let y=x()
// y();
// currying --------------;
parent()()();