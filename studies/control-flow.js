/**
 * 
 * CONTROL FLOW:
 *
 * 0: Control flow controls the flow of the application. It runs true or false questions and based on the 
 * answer we decide what code runs if the question is true and vise versa. We use conditional statements 
 * (If-else) to achieve this. 
 * 
 * 1. If: First step of a conditional block of code.
 *
 * 2. Else-if: Using else-if statements you can chain them together after your first if statement. Only will
 * execute if the previous conditions were false.
 * 
 * 3. Else: At the end you can add a default else statement. Only will execute if previous conditions were false.
 * 
 * 4. Switch: It evaluates an input expression and how it's compared with the values of each case. If it's a 
 * match that code gets executed. If there is no match it goes to the default statement at the end.
 * 

 */

// Switch:
var city = 'New Orleans'
switch (city){
    case 'New York':
        console.log("Let's go to New York!"); 
        break;
        // if previous case was false continue to next case
    case 'Miami': 
        console.log("Let's go to Miami!")
        break;
        // if previous cases were false continue to next case
    case 'New Orleans':
        console.log("Let's go to New Orleans!")
        break;
        // if previous cases were all false continue to default statement
    default:
        console.log('City not found.')
}

// If: 
var num1 = 12
var num2 = 10
if (num1 > num2){ 
    return num1; 
// if first if statement was false continue 
} else if (num1 < num2){ // else-if
    return num2;
// if all previous statements were false continue to default else statement 
} else {
    return 'Your numbers are the same'; // else
}
// will return num1