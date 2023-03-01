// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    // loop through numbers 1-100 incrementing by 1
    for (var i = 1; i <= 100; i++) {// i = 1, 2, 3...100
        // if input is a multiple of 3 and 5 
        // print FizzBuzz
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        // else if input is a multiple of just 3 
        // print Fizz
        } else if (i % 3 === 0) {
            console.log('Fizz');
        // else if input is a multiple of just 5 
        // print Buzz
        } else if (i % 5 === 0) {
            console.log('Buzz')
        // else if input isn't a multiple of 3 or 5
        // print current i
        } else {
            console.log(i)
        }
    }

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}