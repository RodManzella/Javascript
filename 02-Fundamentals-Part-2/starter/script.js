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
======================================================================================























*/