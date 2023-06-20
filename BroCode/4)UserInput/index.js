// How to accept user input

// Easy way with a window prompt

// let username = window.prompt("What´s your name?");
// console.log(username);

// Difficult WAY html textbox
// Ater clicking our submit button, whatever text is within our text box, we will assign it to a variable

let username;

document.getElementById("myButton").onclick = function () {
  username = document.getElementById("myText").value;
  console.log(username);
  document.getElementById("myLabel").innerHTML = "Hello" + username;
};
