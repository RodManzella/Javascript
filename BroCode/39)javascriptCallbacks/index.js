// callback = a function passed as an argument to another function

// Ensures that a function is not going to run before a task is completed
// helps us develop asynchronous code(when one function has to wait for another function).
// that helps us avoid errors and potential problems
// EX: wait for file to load

sum(2, 3, displayDOM); // third is a callback

function sum(x, y, callback) {
  let result = x + y;
  callback(result); // callback to displayDOM function
}

function displayConsole(output) {
  console.log(output);
}

function displayDOM(output) {
  document.getElementById("myLabel").innerHTML = output;
}
