// nested functions = Functions inside other functions.

// outer functions have acess to inner functions
// Inner functions are "hidden" from outside functions
// used in closures

let userName = "Bro";
let userInbox = 0;

function login() {
  displayUserName();
  displayUserInbox();

  function displayUserName() {
    console.log(`Welcome ${userName}`);
  }

  function displayUserInbox() {
    console.log(`You have ${userInbox}`);
  }
}

// adds a layer of security to these functions, because i need to log in first.
