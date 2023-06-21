// spread operator = allows an iterable, such as an array
// or string to be expanded in places where zero or more arguments are expected
// unpacks the elements

let userName = "Bro code";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//let maximum = Math.max(numbers);
//console.log(maximum);

/*
let maximum = Math.max(...numbers);
console.log(maximum);
*/

let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr.Krabs", "Plankton"];

//class1.push(class2);  the entire array will be pushed

// class1 = ["Spongebob", "Patrick", "Sandy", array(3)]

class1.push(...class2);
console.log(class1);
// ["Spongebob", "Patrick", "Sandy","Squidward", "Mr.Krabs", "Plankton"]
