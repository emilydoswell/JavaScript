// // let arr = [1, 2, 2, 3, 2, 3, 4, 5, 4, 1, 4, 5];

// // arr.forEach((number) => {
// //   const array = [];
// //   array.push(number);
// //   array.forEach((array_number) => {
// //     if (number !== array_number) {
// //       console.log(number);
   
// //       array.push(number);
// //     };
// //   });
// //   // console.log(array);
// // });

// // output arr = [1, 2, 3, 4, 5]

// let arr = [1, 2, 2, 3, 2, 3, 4, 5, 4, 1, 4, 5];
// let output = [...new Set(arr)];
// console.log(output); //[1, 2, 3, 4, 5]

// const executorFunction = (resolve, reject) => { };
// const myFirstPromise = new Promise(executorFunction);

// // HTTP requests
// const jsonButton = document.querySelector('#generate');
// const buttonContainer = document.querySelector('#buttonContainer');
// const display = document.querySelector('#displayContainer');
// const collection = ["Another", "More", "Next", "Continue", "Keep going", "Click me", "A new one"];

// const generateJson = () => {
//   const xhr = new XMLHttpRequest();
//   xhr.responseType = 'json';
  
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//   renderResponse(xhr.response);
//       changeButton();
//     }
//   }
//   xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
//   xhr.send();
// }

// const formatJson = (resJson) => {
//   resJson = JSON.stringify(resJson);
//   let counter = 0;
//   return resJson.split('')
//   .map(char => {
//     switch (char) {
//       case ',':
//         return `,\n${' '.repeat(counter * 2)}`;
//       case '{':
//         counter += 1;
//         return `{\n${' '.repeat(counter * 2)}`;
//       case '}':
//         counter -= 1;
//         return `\n${' '.repeat(counter * 2)}}`;
//       default:
//         return char;
//     }
//   })
//   .join('');
// }

// const renderResponse = (jsonResponse) => {
//   const jsonSelection = Math.floor(Math.random() * 10);
//   display.innerHTML = `<pre>${formatJson(jsonResponse[jsonSelection])}</pre>`;
// }

// const changeButton = () => {
//   const newText = Math.floor(Math.random() * 7);
//   jsonButton.innerHTML = `${collection[newText]}!`;
// }

// jsonButton.addEventListener('click', generateJson);

// // add JSON
// console.log('First message!');
// setTimeout(() => {
//    console.log('This message will always run last...');
// }, 2500);
// console.log('Second message!');

// AJAX request using XHR object. Making a GET request to the datamuse API to search for words that rhyme. 

// Information to reach API
const url = "https://api.datamuse.com/words?";
const queryParams = 'rel_rhy=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = url + queryParams + wordQuery;
  const xhr = new XMLHttpRequest;
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderRawResponse(xhr.response)
    }
  }
  xhr.open('GET', endpoint);
  xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  };
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);

const url = https://api.datamuse.com/words?

// Element selectors
const jsonButton = document.querySelector('#generate');
const buttonContainer = document.querySelector('#buttonContainer');
const display = document.querySelector('#displayContainer');

// Text to populate button text on click
const collection = ["Another", "More", "Next", "Continue", "Keep going", "Click me", "A new one"];

// Asynchronous function
const generateJson = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if(response.ok){
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
      changeButton();
    }
  } catch(error) {
    console.log(error);
  }
};
    
// Format returned promise data
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
};

// Display formatted data
const renderResponse = (jsonResponse) => {
  const jsonSelection = Math.floor(Math.random() * 10);
  display.innerHTML = `<pre>${formatJson(jsonResponse[jsonSelection])}</pre>`;
};

// Change button text
const changeButton = () => {
  const newText = Math.floor(Math.random() * 7);
  jsonButton.innerHTML = `${collection[newText]}!`;
};

// Listen for click on button
jsonButton.addEventListener('click', generateJson);
