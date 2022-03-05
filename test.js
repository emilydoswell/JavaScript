// let arr = [1, 2, 2, 3, 2, 3, 4, 5, 4, 1, 4, 5];

// arr.forEach((number) => {
//   const array = [];
//   array.push(number);
//   array.forEach((array_number) => {
//     if (number !== array_number) {
//       console.log(number);
   
//       array.push(number);
//     };
//   });
//   // console.log(array);
// });

// output arr = [1, 2, 3, 4, 5]

let arr = [1, 2, 2, 3, 2, 3, 4, 5, 4, 1, 4, 5];
let output = [...new Set(arr)];
console.log(output); //[1, 2, 3, 4, 5]

const executorFunction = (resolve, reject) => { };
const myFirstPromise = new Promise(executorFunction);