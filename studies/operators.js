/**
 * 
 * OPERATORS:
 *
 * 0: Operators are special symbols that act on data. They're used to perform operations on values/variables like 
 * assign them to a variable, compare them, or used in arithmetic operations.
 * 
 * 1. Assignment Operators: Used to assign a value to a variable.
 *
 * 2. Arithmetic Operators: Used to perform arthmetic on numbers (litreals or variables).
 * 
 * 3. Comparison Operators: Used to compare two values to determine equality or difference and evaluate to true or false. 
 * Loosely equal to checks if just the value is equal and strictly equal to checks both if the value and data type are equal.
 * Unless there's a good reason not to use strictly equal to and strictly not equal to.
 * 
 * 4. Logical Operators: Used to compare two variables or values and determine the logic whether it's true or false.
 * 
 * 5. Unary Operators (!, typeOf, -): 
 * 
 * 6. Ternary Operator (a ? b : c): The only JavaScript operator that takes 3 operands: a condition followed 
 * by a ?, then an expression to execute if the condition is truthy followed by a :, and then the expression 
 * to execute if the condition is falsy. This operator is an alternative to using an if else statement.


 */

// 1. Assignment Operators:  =, +=, -=, *=, /=, %=, **=
x = 2 
x += 2 // => x = x + 2
x -= 2 // => x = x - 2
x *= 2 // => x = x * 2
x /= 2 // => x = x / 2
x %= 2 // => x = x % 2
x **= 2 // => x = x ** 2

// 2. Arithmetic Operators:  +, -, *, /, **, %, ++, --
2 + 2 // => 4
2 - 2 // => 0
2 * 4 // => 8
4 / 2 // => 2
4**   // => 16
5 % 2 // => 1
x++   // => 
x--   // =>

// 3. Comparison Operators:  == (loosely equal to (returns true if value is the same)), === (strictly equal to (returns true if value 
// and datatype are the same ), != (loosely not equal to (returns true if value is not the same)), 
// !== (strictly not equal to (returns true if value and datatype aren't the same)), > (greater than), 
// < (less than), >= (greater than or equal to, <= (less than or equal to)

var x = 5

x == '5' // => true
x === '5' // => false
x != 6 // => true
x !== '5' // => true
x > 10 // => false
x < 10 // => true
x >= 10 // => false
x <= 10 // => true 

// 4. Logical Operators:  && (and), || (or), ! (not (opposite))
let x = 2
let y = 6
x < y && y === 6 // => true 
x > y || y < 6 // => false
!x === 3 // => true


// 5. Unary Operators (!, typeOf, -): 


// 6. Ternary Operator:  (a ? b : c)
let number = 99;
let lessThan100 = number < 100 ? 'Less than 100!' : 'Sorry, your number is not under 100.'
console.log(lessThan100); // 'Less than 100!'  
