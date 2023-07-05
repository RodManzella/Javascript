// closure = A function with preserved and private data.
// Give you acess to an outer function´s scope from an inner function

document.getElementById("loginButton").onclick = login;

function login() {
  let userName = "Bro";
  let userInbox = 1;
  function alertUser() {
    alert(`${userName} you have ${userInbox} new messages!`);
    userInbox = 0;
  }
  return alertUser;
}
