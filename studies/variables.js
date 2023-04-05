/**
 * 
 * VARIABLES:
 * 
 * 0: Variables are named storage holders for data in JavaScript. You can declare a variable using either var, let, const;
 * 
 * 1. Declaration and assignment: To create a variable in JavaScript, "declare" the variable using one of the 3 
 * declarative keywords. After declaring the variable, you can then "assign" the variable a value. 
 *
 * 2. Var, Let, Const: Var, Let, and Const are the 3 declarative keywords. Var can be updated and re-declared,
 * Let can be updated but not re-declared, and const can't be updated or re-declared.
 * 
 * 3. Hoisting: A behavior of moving declarations to the top of the current scope. JavaScript
 * only hoists declarations, not initializations. A variable can be used before it's declared. Let and const 
 * variables are hoisted to the top of the block, but not initialized. Let variables used before they're 
 * declared will result in a ReferenceError and const variables used before they're declared will be 
 * a syntax error, so the code will not run.
 */

// 1. Declaration and Assignment:
var city; // declaring variable city 
console.log(city); // prints => undefined  

city = 'New Orleans'; // assgined variable to the string 'New Orleans' 
console.log(city); // prints => 'New Orleans'


// 2. Var, Let, and Const
var age = 10; // declaring variable age to the value 10
console.log(age) // prints => 10

var age = 11; // re-declaring variable age to the value 11
console.log(age) // prints => 11

let number = 2; // declaring variable number to be assigned to the value 2
console.log(number) // prints => 2

// let number = 3; won't work because you can't re-declare let 
console.log(number) // prints => error message 

number = 3; // re-assigning variable number to the value 3
console.log(number) // prints => 3

const animal = 'cat'; // declaring variable animal to be assigned to the string 'cat'
console.log(animal) // prints => 'cat'

// const animal = 'dog' // won't work because you can't re-declare const
console.log(animal) // prints => error message 

// animal = 'bunny' // won't work because you can't update const
console.log(animal) // prints => error message 

// let and const variables are block scoped
if (2 < 3){
    let color = 'pink'
}
console.log(color) // => prints reference error because let is block scoped

// 3. Hoisting 

// (var person) // var variable gets hoisted to top of global scope
console.log(person) //var variables are hoisted with no value (prints undefined)
person = 'Elisa'; // var variables can be used before they are declared
console.log(person); // prints 'Elisa'
var person;