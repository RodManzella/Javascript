// let age;

// age = 21;

let age = 21; // number data type
let firstName = "Rodrigo"; // String data type
let student = true; // Boolean data type

console.log("Hello", firstName);
console.log("You are", age, " years old");
console.log("Enrolled:", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;
