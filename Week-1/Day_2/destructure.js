// pen , pencil and notebook
let box = [20, 50, 200,500];
/**
 * Normal way
 */
// let pencil = box[1];
// let notebook=box[2];

/**
 * another way for array
 */
const [pen,pencil ,notebook,scale=100] = box; // [20, 50, 200]
console.log(scale);

// let obj = {
//   pen: 20,
//   pencil: 50,
//   notebook: 200,
// };
// const { pencil, notebook } = obj;
// console.log(pencil, notebook);
