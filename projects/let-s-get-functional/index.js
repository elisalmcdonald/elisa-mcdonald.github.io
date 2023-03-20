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

var averageBalance = function(array) {
    // use _.reduce to find the total balance
    let balance = _.reduce (array, function(accumulator, current) {
        let newCurrentBalance = '';
        // iterate through current balance 
        for (let i = 0; i < current.balance.length; i++) {
            // check if current string char isn't $ and isn't , 
            if (current.balance[i] !== '$' && current.balance[i] !== ',') {
                // if true add copy the current string char newCurrentBalance 
                newCurrentBalance += current.balance[i];
            }
        } // make newCurrentBalance a number 
        return accumulator += Number(newCurrentBalance)
    }, 0)
    // return the balance / the array length
    return balance / array.length
}


var firstLetterCount = function(array, letter) {
    // use _.reduce to return the number of people with a name that starts with that letter
    let number = _.reduce (array, function(accumulator, current) {
        // if the first char in current name equals letter 
        // increment accumulator 
        // return accumulator
       if (current.name[0].toUpperCase() === letter.toUpperCase()) {
        accumulator++ 
       } return accumulator 
    }, 0) 
    // return number
    return number 

}

var friendFirstLetterCount = function(array, customer, letter) {
    // use _.filter to return the number of friends that starts with that letter
    let customerArray = _.filter (array, function(currentObj) {
        // if the current obj name is equal to customer
        // return the current obj
        if (currentObj.name === customer) {
            return currentObj
        }
    } ) 
    // call the firstLetterCount function with the array of friends of the customer 
   return firstLetterCount(customerArray[0].friends, letter); 
}


var friendsCount = function(array, name) {
    // use _.reduce to to return an array of customers' names that have the input customers' names in the friends list
    let names = _.reduce (array, function(accumulator, current) {
        // use _.pluck to create an array of friends names for each object
        let friends = _.pluck(current.friends, 'name') 
        // use _.contains to see if friends contains the input name
        if (_.contains(friends, name)) {
            // if true push the current name into the accumulator
            accumulator.push(current.name)
        } return accumulator 

    }, []); 
    return names
}

var topThreeTags = function(array) {
    // use _.reduce 
    let commonTags = _.reduce (array, function(accumulator, current) {
        for (let i = 0; i < current.tags.length; i++) {
            if (accumulator[current.tags[i]]) {
                accumulator[current.tags[i]]++
            } else {
                accumulator[current.tags[i]] = 1;
            } 
        } return accumulator;
    }, {});

    
}


var genderCount = function(array) {
    // use _.reduce to create a summary of genders
    let genders = _.reduce (array, function(accumulator, current) {
        // check if the accumulator already has that gender
        // if truthy increment accumulator for that gender
        if (accumulator[current.gender]) {
            accumulator[current.gender]++ 
        } // otherwise create new key and set equal to 1
        else {
            accumulator[current.gender] = 1
        }
        // return accumulator
        return accumulator 
    }, {});
    // return genders
    return genders;
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
