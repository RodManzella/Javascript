// Type conversion= change the data type of a value to another

let age = window.prompt("How old are you?");
age = Number(age);
age += 1;

console.log("Happy Birthday! You are", age, "years old");

x = Number("3.14");
y = String(3.14);
z = Boolean(""); // will be false if string is empty / true if string is not empty

// x= Number("pizza")  --> NaN
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
