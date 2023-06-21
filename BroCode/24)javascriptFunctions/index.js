// function = reuse of code

startProgram();

function startProgram() {
  let userName = "Rod";
  let age = 20;

  happyBirthday(userName, age);
}

function happyBirthday(name, age) {
  console.log("Happy birthday to you!", name);
  console.log("You are", age, "years old!");
}
