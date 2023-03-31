/**
 * 
 * FUNCTIONS:
 *
 * 0: Functions are a reusable block of code designed to perform a specific task whenever and however many times 
 * we want. It's executed when something calls it.
 * 
 * 1. First we must define the function and second call/execute. Now we can use the function.
 *
 * 2. Parameters vs arguments: Parameters are listed inside of the () in the function declaration. Any data 
 * type can be used as parameters. Arguments are used to call functions. They are hard coded versions of 
 * the parameters.
 * 
 * 3. Syntax for NAMED functions: First define a function keyword, then a function name, and then (). 
 * Inside the () are the parameter(s) separated by commas. Then add curly brackets. {} 
 * Inside the curly brackets is the code that will be executed. 
 * 
 * 4. How to assign a function to a variable: Declare a variable and assign it to a function.
 * 
 * 5. How to specify inputs and how to specify outputs: Inputs are specified with parameters and 
 * outputs are specified with return statements.
 * 
 * 6. Scope: Named function definitions are hoisted to the top of their scope meaning they can be used before 
 * they appear to be defined.
 * 
 * 7. Closures: Functions form closures around the data they house. If an object is returned from the Function 
 * and is held in memory somewhere (referenced), that closure stays ALIVE, and data can continue to exist in 
 * these closures. 
 * 

 */

// 1. 
let x = subject(10, 5); // function subject is getting called with arguments of 9 and 5; result is 5

// 2. Parameters vs arguments:
function add(a, z){ // a and z are the parameters (parameters are listed inside of the function declaration)
    console.log(a + z); // code to be executed
}
add(1, 2) // 1 and 2 are the arguments (arguments are used to call the function and they're hard coded versions
// of the parameters)

// 3. Function syntax:
function nameOfFunction(parameter1, parameter2, parameter3){
    // code to be executed; 
}

// 4. Assigning function to variable:
var subtract = function(a, z) {  // declaring variable subject and assigning to function
    console.log(a - z); // code to be executed
  }
  subtract(3, 2); // => prints 1 // calling the function with hard coded numbers
  
// 5. Inputs and outputs:
function cities(city1, city2){ // 2 inputs (parameters) city1 and city2
    return city1 + city2; // outputs city1 + city2
}

// 6. Scope:
var total = subtract(100, 70); // being called before it appears to be defined
console.log(total) // => prints 30
function subtract(price1, price2){
    return price1 - price2;
}

// 7. Closures:
function multiply(x){ // outer function
    return function(y){ // inner function
        return x * y // uses variable name from parent scope + y 
    }
}

let multiply2 = multiply(2); // x = 2

console.log(multiply2(5)) // => prints 10 (2 * 5 = 10)