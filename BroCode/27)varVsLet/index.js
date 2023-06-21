// variable scope = where a variable is acessible

// let = variables are limited to a block scope{}
// var = variables are limited to a function(){}

// global variable = is declared outside any function
// (if global), var will CHANGE browser´s window properties

// for(var i = 1; i <= 3; i+=1){
//     console.log(i)
// }

// console.log(i);              a variável i pode ser acessada.

function doSomething() {
  for (var i = 1; i <= 3; i += 1) {
    console.log(i);
  }
}

console.log(i); // agora não pode mais ser acessada
