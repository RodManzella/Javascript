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
===================================================================================
Type Conversion and Coercion

- Convertion: when you manually convert from one type to another

- Coercion: when js automatically converts types behind the scenes for us.

---------------------------------------------------------------------------------------------
TYPE CONVERTION

const inputYear = '1991';
console.log(inputYear + 18);    --> 199118 (concatenate to string)

- How to convert, so we can do this addition?
const inputYear = '1991';
console.log(Number(inputYear) + 18); --> will print the sum.
console.log(inputYear + 18);   --> The result is still a string(variable inputYear is still a string)

// console.log(Number('Jonas'));  --> NaN (Not a Number)

console.log(String(23));  --> converts 23 to string

- We rarelly have do convert values manually because JS automatically does this for us
----------------------------------------------------------------------------------------------------
TYPE COERCION

console.log('I am' + 23 + ' Years old');  --> JS converts the 23 to String

console.log ('23' - '10' - 3);  --> minus operator triggers the opposite conversion (10)

console.log('23' * '2');  --> 46

console.log('23' / '2');  --> 11.5


let n = '1' + 1;  --> 11 (string concatenation)
n = n - 1  --> minus signal triggers opposite convertion, n is now a number (11-1 = 10)
console.log(n);  --> 10


2 + 3 + 4 + '5' = '95'    why???
2 + 3 + 4 = 9, now we do a concatenation with '5', and the number becomes a string -> '95'


'10' - '4' - '3' - 2 + '5'
It doesn´t make sense to subtract two strings, so it gets converted to a number
'10' - '4' - '3' - 2 = 1 (Type Number)
1 + '5' = '15' (Type String)
======================================================================================================
Truthy and Falsy values

- Falsy values are values that are not exactly false,
 but will become false when we try to convert them into
 a boolean.

 - 5 falsy values: 0, '', undefined, null, NaN


 - Everything else are so called truthy values.

----------------------------------------------------------
 console.log(Boolean(0));       --> false
 console.log(Boolean(undefined));  --> false
 console.log(Boolean('Jonas'));  --> true
 console.log(Boolean({}));  --> true

 const money = 0;

 if(money){  --> 0 is a falsy value, and in the context of if/else it gets converted to false
    console.log("Don´t spend it at all");
 }else{
    console.log("You should get a job")
 }

 - if money was any other value, it would be a truthy value, and get converted to true
-----------------------------------------------------------------

 let height;  --> height is a falsy value(undefined), in if/else it will be converted to false

 if(height){
    console.log('Yay! Height is defined')
 }else{
    console.log('Height is undefined')
 }

 ===============================================================
 Equality Operators: ==  vs ===

 const age = 18;

 if(age === 18) console.log(You just became an adult!)
--------------------------------------------------------------------
 - Difference(=== / ==):

 ===: Does not perform type coercion (Strict equality operator)
 example: 18 == '18'(false)

 ==: Perfoms type coercion (Loose equality operator) 
 example: '18' == 18 (true)

 avoid to use the loose equality operator

 const age = '18'

 if( age === 18){
    console.log('(strict)')   --> does not get printed
 }

  if( age == 18){
    console.log('(loose)')  --> gets printed
 }
 ----------------------------------------------------------------------
 - getting the value from any webpage (prompt function):
 - prompt function always returns a string.

 const number = prompt("What´s your favorite number?")  --> 23
 console.log(favorite)
 console.log(typeof favorite)  --> String


 if(favorite == 23){ // '23' == 23
    console.log('Cool! 23 is an amazing number!')  --> gets printed
 }

 if(favorite === 23){ // '23' == 23
    console.log('Cool! 23 is an amazing number!')  --> does not get printed
 }
---------------------------------------------------------------------------
 -let´s convert the string to a number:

 const number = Number(prompt("What´s your favorite number?"))

 if(favorite == 23){ // 23 == 23
    console.log('Cool! 23 is an amazing number!')  --> gets printed
 }

 if(favorite === 23){ // 23 == 23
    console.log('Cool! 23 is an amazing number!')  --> gets printed
 }
 ---------------------------------------------------------------------------
More conditions!

if(favorite === 23){ 
    console.log('Cool! 23 is an amazing number!')
}
else if(favorite === 7){
    console.log('7 is also a cool number')
}
else if(favorite === 9)
    console.log('9 is also a cool number')
}
else{
    console.log('Number is not 23 or 7')
}

-Different operator

if(favorite !== 23){  --> Strict
    console.log('Why not 23?')
}

!= (loose) 
=======================================================================

LOGICAL OPERATORS (&&, ||, !)

const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);  --> true
console.log(hasDriversLicense || hasGoodVision);  --> true
console.log(!hasDriversLicense);  --> false

const shouldDrive = hasDriversLicense && hasGoodVision;

if(shouldDrive){
    console.log('Sarah is able to drive!')
}else{
    console.log('Someone else should drive...')  --> is printed out
}

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired)  --> returns false
------------------------------------------------------------------------------
if(hasDriversLicense && hasGoodVision && !isTired){
    console.log('Sarah is able to drive!')
}else{
    console.log('Someone else should drive...') 
}
================================================================================

Switch statement: alternative way of writing a complicated if/else statement when all you
                  want to do is compare a single value to multiple options.

const day = 'monday';

switch(day){
    case 'monday':   // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log(Write code examples);
    case 'friday':
        console.log('Record videos')
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!')
 
}
- without a break statement, the code will continue executing until it finds the next break.

==================================================================================================
expressions produce a value!

3 + 4 --> expression

1991 --> expression

true && false && !false --> expression


if(23 > 10){
    const str = '23 is bigger'
}

statement!  --> does not produce a value (ends with ;)
=======================================================================================================
The Conditional(Ternary) operator: allows us to write something similar to if/else but inside one single line

const age = 23;

age >= 18 ? console.log('I link to drink wine') : console.log('I link to drink water');

same thing as:
if(age >= 18){
    console.log('I link to drink wine')
}
else{
    console.log('I link to drink water')
}
--------------------------------------------------------------------------------------------
const drink = age >= 18 ? 'Wine' : 'Water';

- if the age >= 18, drink = Wine. Else, drink = water

console.log(drink)  --> Wine

- without the ternary operator, we would have to use an if else statement.
- we would also have to declare the variable as let, outside the code block.

let drink2;

if(age >= 18){
    drink2 = 'wine';
}
else{
    drink2 = 'water';
}

console.log(drink2)  --> wine
-----------------------------------------------------------------------------------------------

console.log(`I like to drink ${age >= 18 ? 'Wine' : 'Water'}`);

-----------------------------------------------------------------------------------------------







 








*/