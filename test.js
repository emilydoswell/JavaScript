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

// HTTP requests
const jsonButton = document.querySelector('#generate');
const buttonContainer = document.querySelector('#buttonContainer');
const display = document.querySelector('#displayContainer');
const collection = ["Another", "More", "Next", "Continue", "Keep going", "Click me", "A new one"];

const generateJson = () => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
  renderResponse(xhr.response);
      changeButton();
    }
  }
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.send();
}

const formatJson = (resJson) => {
  resJson = JSON.stringify(resJson);
  let counter = 0;
  return resJson.split('')
  .map(char => {
    switch (char) {
      case ',':
        return `,\n${' '.repeat(counter * 2)}`;
      case '{':
        counter += 1;
        return `{\n${' '.repeat(counter * 2)}`;
      case '}':
        counter -= 1;
        return `\n${' '.repeat(counter * 2)}}`;
      default:
        return char;
    }
  })
  .join('');
}

const renderResponse = (jsonResponse) => {
  const jsonSelection = Math.floor(Math.random() * 10);
  display.innerHTML = `<pre>${formatJson(jsonResponse[jsonSelection])}</pre>`;
}

const changeButton = () => {
  const newText = Math.floor(Math.random() * 7);
  jsonButton.innerHTML = `${collection[newText]}!`;
}

jsonButton.addEventListener('click', generateJson);

// add JSON
// console.log('First message!');
// setTimeout(() => {
//    console.log('This message will always run last...');
// }, 2500);
// console.log('Second message!');
