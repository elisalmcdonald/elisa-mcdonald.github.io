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
 * 3. Hoisting: 
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

// 3. Hoisting 