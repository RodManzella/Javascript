let grade = "Pizza";

switch (grade) {
  case "A":
    console.log("You did great!");
    break;
  case "B":
    console.log("You did good!");
    break;

  case "C":
    console.log("You did okay!");
    break;

  case "D":
    console.log("You passed... barely!");
    break;

  case "F":
    console.log("You failed!");
    break;
  default:
    console.log(grade, "is not a letter grade!");
}

// também podemos usar condições nos cases
