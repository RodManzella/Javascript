// callback = a function passed as an argument to another function

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
