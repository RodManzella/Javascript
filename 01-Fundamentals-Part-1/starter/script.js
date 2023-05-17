/*

// Linking a JavaScript File
let js = "amazing";
console.log(40 + 8 + 23 - 10);


// Values and Variables
console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);


let javascriptIsFun = true;  // let is needed when declaring for the first time.
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';  // REASSIGNMENT DOESN´T NEED 'LET'
console.log(typeof javascriptIsFun);

let year;
console.log(year)
console.log(typeof year)

year = 1991;
console.log(typeof year)

console.log(typeof null)


================================================================
- let keyword is used for variables that can change later.

let age = 30;
age = 31;
--------------------------------------------------------------

- const keyword is used for variables that don´t change.
- we cannot declare empty const variables

const birthYear = 1991;   --> can´t be reassigned

- Using const is the best practice to have as little variable mutations
- Changing variables could give you some bugs
- use let when you are sure the variable will change.

-------------------------------------------------------------------
- var is the old way of declaring variables.
- Works the same as let.

var job = 'programmer';
job = 'teacher'
--------------------------------------------------------------------
lastName = 'Schmedtmann'   --> not a good idea
console.log(lastName)


====================================================================
OPERATORS IN JAVASCRIPT

const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah)  --> 46 19
-----------------------------------------------------------------------
console.log(ageJonas * 2, ageJonas / 10 ** 3);
-----------------------------------------------------------------------
const firstName = 'Jonas'
const lastName = 'Schmedtmann'
console.log(firstName + ' ' + lastName);    --> Jonas Schmedtmann
------------------------------------------------------------------------
let x = 10 + 5;    15
x += 10;         --> x = x + 10   (25)

x *= 4;           --> x = x * 4   (100)

x++;              --> x = x + 1
x--;
---------------------------------------------------------------------------
Comparison Operators

console.log(ageJonas > ageSarah);  >, <, >=, <=
console.log(ageSarah >= 18);

constIsFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018)


=============================================================================
JAVASCRIPT HAS A WELL DEFINED ORDER OF OPERATOR PRECEDENCE.

x = y = 25 - 10 - 5;  ---> x = 10, y = 10
console.log(x, y);

const averageAge = ageJonas + ageSarah / 2  --> (/) is done before (+)
=============================================================================
Strings and Template Literals

const firstName = 'Jonas'
const job = 'teacher'
const birthYear = 1991;
const year = 2037;

const jonas = "I´m" + firstname + ',a' + (year - birthyear) + ' years old' + job +'!';
- Javascript will convert this number into a string, so it can concatenate with the other strings

console.log(jonas) -> I´m Jonas, a 46 years old teacher!

----------------------------------------------------------------------------
- Template literal: assemble multiple pieces into a new final string

const jonasNew = `I´m ${firstname}, a ${year - birthyear} year old ${job}`;

console.log(`Just a regular string...`);

- Multi-line strings:
----------------------------------------------------------------------------------
console.log(`String
multiple
lines`);
====================================================================================
Taking decisions

const age = 15;
const isOldEnough = age >= 18;


if(isOldEnough){
    console.log('Sarah can start driving license')
}else{
    const yearsleft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years.)
}


const birthYear = 1998;

if(birthYear <= 200){
    let century = 20;
}else{
    let century = 21;
}
*/