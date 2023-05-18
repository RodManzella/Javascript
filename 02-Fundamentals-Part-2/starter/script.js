/*
ALWAYS TURN ON STRICT MODE

- Strict mode makes easier for us to write a secure JS code.

- to activate strict mode write 'use strict' at the beginning.

'use strict';

- always do this at the beginning. Strict mode makes easy to avoid accidental errors

- That is because of two reasons:
1) Strict mode forbids us to do certain things.

2) It will create visible errors for us.
----------------------------------------------------------------------------
// 'use strict';

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true;      --> we made an error on purpose.

if(hasDriversLicense) console.log('I can drive :D')  --> not printed, but JS doesn´t show the error.

- if we activated strict mode, we would get an error on the console (variable hasDriverLicense not defined).

- Javascript also uses strict mode to tell us that a keyword we are using might be added in a future update.
(interface, private...)  --> So using it might be dangerous in the future!

- Also for already reserved words.
=============================================================================

Functions
- A function is a piece of code that can be reused.

function logger(){
    console.log('My name is Jonas')
}

- this function doesn´t return anything, so we don´t assign it to a variable.

logger();                     --> will call function (print: ''My name is Jonas)

---------------------------------------------------------------------------------
Functions can receive and return data.

function fruitProcessor(numberApples, numberOranges){
    console.log(numberApples, numberOranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);                   --> Juice with 5 apples and 0 oranges.


const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);              --> Juice with 2 apples and 4 oranges.
=======================================================================================

Function declaration vs expression:

// function declaration

function calcAge1(birthYear){
    return 2037 - birthYear
}

const age1 = calcAge1(1991);


// function expression

const calcAge2 = function (birthyear){
    return 2037 - birthYear
}

const age2 = calcAge2;

----------------------------------------------------------------------------------------------
- What is the difference?

the main difference is that we can actually call function declarations before they are defined in the code.

const age1 = calcAge1(1991);

// function declaration

function calcAge1(birthYear){
    return 2037 - birthYear
}
===========================================================================
Arrow functions

- shorter and faster to write

// Arrow function

const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1991);
---------------------------------------------------------------------------

const yearsUntilRetirement = birthYear =>{
    const age = 2037 - birthYear;
    const Retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1991));




const yearsUntilRetirement = (birthYea, firstName) =>{
    const age = 2037 - birthYear;
    const Retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));

- Arrow functions doest not get a this keyword.
===========================================================================

Functions calling other functions.

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`.;
    return juice;
}

console.log(fruitProcessor(2, 3));
=====================================================================


// functions challenge!


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;


const dolphins = calcAverage(44, 23, 71);
const koalas = calcAverage(85, 54, 41);

const checkWinner = function(avgDolphins, avgKoalas){
    if(avgDolphins >= 2* avgKoalas){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }else if(avgKoalas >= 2* avgDolphins){
        console.log(`Dolphins win (${avgKoalass} vs. ${avgDolphinss})`);
    }else{
        console.log('No winner...')
    }
}

checkWinner(scoreDolphins, scoreKoalas);

====================================================================
Introduction to Arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends)  -> ["Michael", "Steven", "Peter"];

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);  --> 'Michael'
console.log(friends[2]);  --> 'Peter'

console.log(friends.length); --> 3 
console.log(friends[friends.lenght - 1]) -> 2

friends[2] = 'Jay';
console.log(friends);  --> ["Michael", "Steven", "Jay"];


- We can mutate arrays, even though they were declared with const, but we can´t alter the entire array.
- An array can hold different types of values.

const firstname = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];

console.log(jonas) --> ["Jonas", "Schmedtmann", 46, "teacher", ["Michael", "Steven", "Jay"] ];
-----------------------------------------------------------------------------------------------------------------

// Exercise

const calcAge = function (birthYear){
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calculate(years[0]);
const age2 = calculate(years[1]);
const age3 = calculate(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calculate(years[0]), calculate(years[1]), calculate(years[years.length - 1]); ]
====================================================================================================================

Array methods:

// add elements
const friends = ['Michael', 'Steven', 'Peter'];
friends.push('Jay')                                     --> add a element to the array.
const newlength = friends.push('Jay');  (returns length)
console.log(friends);                                   --> ["Michael", "Steven", "Peter", "Jay"];
console.log(newLength);                                 --> 4;


friends.unshift('John');  --> add element to the beginning of the array;
console.log(friends);     --> ["John", "Michael", "Steven", "Peter", "Jay"];


// remove elements
friends.pop()   --> removes last element of array.
console.log(friends);  --> ["John", "Michael", "Steven", "Peter"];
const popped = friends.pop();  (returns popped element) --> popped = 'Jay'

friends.shift()  --> removes first element of array.
console.log(friends);  --> ["Michael", "Steven", "Peter"];


// return index
console.log(friends.indexOf('Steven'));  --> 1

- for an element that does not exist inside the array...
console.log(friends.indexOf('Bob'));  --> -1

// return true/false if element is inside or not...

console.log(friends.includes('Steven'));  --> true
console.log('Bob');  --> false


- obs: The includes() methods uses strict equality. Example: If we insert 23 inside the function and
use the include for string '23' it would be false.
---------------------------------------------------------------------------------
- We can use include method for conditionals, because it returns a boolean.

if(friends.includes('Peter')){
    console.log('You have a friend called Petter');
}
===============================================================================================

// Arrays challenge!

const calcTip = function(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;   // (ternary operator)
}

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15: bill* 0.2;  (arrow version)

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip[bills[1]],
 calcTip[bills[2]]];

 console.log(bills, tips);

 const totals = [bills[0] + tips[0], bills[1] + tips[1], 
 bills[2] + tips[2]];

 ==============================================================================================

 Introducytion to Objects in JS:
 
 example of array:

 const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', Steven]
 ];


 - In objects, we define key values pairs, so then we can give each of these values a name.

 const jonas = {
    firstname: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'Teacher',
    friends: ['Michael', 'Peter', Steven]
 };

- each of these keys is also called a property
- jonas has five properties...
- There are many ways of creating objects
- this is the easiest way (called object literal syntax)


- The difference between objects and arrays is: In objects the order of these values does not matter at all when
we want to tetrieve them.
===============================================================================================

Dot vs Bracket Notation

Dot notation:
console.log(jonas.lastname);  ---> Schmedtmann

Brackets notation: need to specify a string with the property name (key)
console.log(jonas['lastname'])  ---> Schmedtmann


- The difference is: in the brackets notation we can use expressions to retrieve values...
const nameKey = 'Name';
console.log(jonas['first' + nameKey])  --> Jonas
console.log(jonas['last' + nameKey])  --> Schmedtmann

doing this is quite common...

- the same thing would not work with the dot notation. We cannot write expressions using dot notation.
- We need to use the name of the property
-----------------------------------------------------------------------------------------------

Another example of the use of bracket notation.

const interestedIn = prompt('What do you want to know about jonas? Choose
between firstName, lastName, age, job and friends');


- if we use the dot notation, we would get undefined (the property inside the object does not exist)
console.log(jonas.interestedIn);   --> undefined

- Instead, in this case, we need to use the brackets notation. Because then we can put any expression.

- lets say we choose 'job'
console.log[interestedIn];  --> teacher
-------------------------------------------------------------------------------------------------
Remember that undefined is a falsy value. We can use that to our advantage and create some logic
whenenever a user tries to acess a property that doesn´t exist

if(jonas[interestedIn]){
    console.log(jonas[interestedIn]);
}else{
    console.log('Wrong request!')
}
------------------------------------------------------------------------------------------------------
Let´s see how we can add elements to objects using both dot and bracket notation:

jonas.location = 'Portugal';
jonas['twitter'] = @jonasschmedtman;

how the object will be now:

const jonas = {
    firstname: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'Teacher',
    friends: ['Michael', 'Peter', Steven]
    location: "Portugal",
    twitter: @jonasschmedtman
 };
 ----------------------------------------------------------------------------------------------------------
 // Challenge
 // Print: Jonas has 3 friends, and his best friend is called "Michael" (get info from object).




 */