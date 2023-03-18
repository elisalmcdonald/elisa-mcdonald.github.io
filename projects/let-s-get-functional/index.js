// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./elisa-mcdonald.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    // use _.filter() to return an array of only male customers 
    // iterate through collection and pass each item to a "test function"
    // if "test function" returns true, item is pushed to output array
    let males = _.filter(array, function(customer) {
        return customer.gender === 'male';
    }); 

    return males.length;
};

var femaleCount = function(array) {
    // use _.reduce() to accumulate the number of female customers
    let females = _.reduce(array, function(accumulator, current){ // number of female customers, current item in the array
        // accumulator = 0 | current = { name: 'Adele Mullin, gender: 'female' }

        if (current.gender === 'female') {
            accumulator += 1;
        }

        return accumulator; 

    }, 0); // return number of female customers

    return females;

};

var oldestCustomer = function(array) {
    // use _.reduce to iterate through the array to find the oldest customers name 
    let oldest = _.reduce(array, function(accumulator, current) {
        // check if the accumulator age is greater than the current age 
        // if returns true return accumulator
        if (accumulator.age > current.age) {
            return accumulator 
            // else return current
        } else {
            return current; 
        }
        
   });
   // return oldest name 
   return oldest.name 
}

var youngestCustomer = function(array) {
    // use _.reduce to iterate through the array to find the youngest customers name 
    let youngest = _.reduce (array, function(accumulator, current) {
        // check if the accumulator age is less than the current age 
        // if returns true return accumulator
        if (accumulator.age < current.age) {
            return accumulator
            // else return current 
        } else {
            return current; 
        } 
 }); 
 // return youngest name 
 return youngest.name;
}

var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount = function(array) {
    // use _.reduce to create a summary of genders
    let genders = _.reduce (array, function(accumulator, current) {
        if (accumulator[current.gender]) {
            accumulator[current.gender] += 1
        } else {
            accumulator[current.gender] = 1
        }

    }, {});
// return 
return accumulator 
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
