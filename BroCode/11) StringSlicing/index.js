// slice() extracts a section of a string
// and returns it as a new string,
// without modifying the original

let fullName = "Bro Code";
let firstName;
let lastName;

//firstName = fullName.slice(0, 3); // Bro
//lastName = fullName.slice(4); //Code

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);
