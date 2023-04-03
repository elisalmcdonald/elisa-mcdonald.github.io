'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: Function takes in an input value and returns the input value unchanged.
 * 
 * @param {Any value} value: Function takes in any value.
 * @returns {Any value}: Function returns input value unchanged.
 */

function identity(value) {
    return value;
};

module.exports.identity = identity;

/**
 * typeOf: Function takes in any value, checks to see what datatype it is, and returns it as a string.
 * 
 * @param {Any value} value: Function takes in any value.
 * @returns {string}: Function returns the type of <value> as a string.  
 */


function typeOf(value) {
    if (Array.isArray(value)) { // checking if value is array
        return "array";
    } else if (typeof value === 'string') { // checking if value is string
        return 'string';
    } else if (value === null) { // checking if value is null
        return 'null'
    } else if (typeof value === 'number') { // checking if value is number
        return 'number';
    } else if (value instanceof Date) { // checking if value is date
        return 'date';
    } else if (typeof value === 'function') { // checking if value is function
        return 'function';
    } else if (typeof value === 'boolean') { // checking if value is boolean
        return 'boolean';
    } else if (typeof value === 'undefined') { // checking if value is undefined
        return 'undefined';
    } else if (typeof value === "object") { // cchecking if value is object
        return "object";
    }
};

module.exports.typeOf = typeOf

/**
 * first: Function takes in an array and number. If <array> isn't an array then return []. 
 * If <number> is not a number then return just the first element in <array>. If <number> is negative 
 * return []. Otherwise function returns the first <number of items of <array>.
 * 
 * @param {array} array: Function takes in an array.
 * @param {number} number: Function takes in a number.
 * @returns {[] or array}: If <array> isn't an array then or if <number> is negative function returns []. If 
 * <number> is not a number then function returns just the first element in <array>. Otherwise function
 * returns first <number> items of <array>.
 */

function first(array, number) {
    // check if array is not an array
    // return []
    if (!Array.isArray(array)) {
        return [];
        // check if number is not a number 
        // return first element in array
    } else if (typeof number !== 'number') {
        return array[0];
        // check if number is negative
        // return []
    } else if (number < 0) {
        return [];
        // otherwise return first number items of array
    } else {
        return array.slice(0, number)
    }
};

module.exports.first = first

/**
 * last: Function takes in an array and number. If <array> isn't an array then return []. 
 * If <number> is not a number then return just the last element in <array>. If <number> is negative 
 * return []. Otherwise function returns the last <number> of items of <array>.
 * 
 * @param {array} array: Function takes in an array.
 * @param {number} number: Function takes in a number.
 * @returns {[] or array} If <array> isn't an array then or if <number> is negative function returns []. If 
 * <number> is not a number then function returns just the last element in <array>. If <number> is greater
 * than array.length function returns whole array.
 * Otherwise function returns last <number items of <array>.
 */

function last(array, number) {
    // check if array is not an array
    // return []
    if (!Array.isArray(array)) {
        return [];
        // check if number is not a number 
        // return last element in array
    } else if (typeof number !== 'number') {
        return array[array.length - 1];
        // check if number is negative
        // return []
    } else if (number < 0) {
        return [];
        // check if number is greater than array.length
        // return whole array
    } else if (number > array.length) {
        return array;
        // otherwise return last number items of array
    } else {
        return array.slice(array.length - number, array.length)
    }
};

module.exports.last = last

/**
 * indexOf: Function takes in an array and value. Then it iterates through array. Function returns i
 * at the first occurance of <value>. If <value> isn't in <array> then function returns -1.
 * 
 * @param {array} array: Function takes in an array. 
 * @param {value} value: Function takes in a value. 
 * @returns {i or -1}: Function returns i at first occurance of <value> or if <value> isn't in <array> then 
 * function returns -1.
 */

function indexOf(array, value) {
    // loop through array using for loop
    for (var i = 0; i < array.length; i++) {
        // check if index of array has an occurance of value 
        // return index 
        if (array[i] === value) {
            return i;
        }
        // else return -1
    } return -1
};

module.exports.indexOf = indexOf

/**
 * contains: Function takes in an array and a value. Then it iterates through the array and checks each element
 * to see if it strictly equals the value.
 * 
 * @param {array} array: Function takes in an array.
 * @param {value} value: Function takes in a value.
 * @returns {boolean (true or false)}: If any element strictly equals the value function returns true, otherwise it 
 * returns false. 
 */

_.contains = function (array, value) {
    var flag 
    // loop through array using for loop
    for (let i = 0; i < array.length; i++) {
        // check if array contains value using ternary operator
       flag = array[i] === value? true: false;
       // if flag is true
       // return true
       if (flag === true) {
        return true
       } 
} // otherwise return false
return false
}

module.exports.contains = contains

/**
 * unqiue: Function takes in an array and iterates through the array. Using _.indexOf() it checks to see
 * if the elements in the array are duplicates and pushes the unqiue elements into a new array and returns it 
 * @param {array} array: Function takes in an array. 
 * @returns {array}: Function returns newArray with the pushed elements from <array>.
 */

function unique(array) {
    // create new array 
    var newArray = []
    // iterate using for loop
    for (let i = 0; i < array.length; i++) {
        // use _.indexOf()
        if (i === _.indexOf(array, array[i])) {
            // push nonduplicates into newArray
            newArray.push(array[i])
        }
        // return the newArray
    } return newArray;
}

module.exports.unique = unique

/**
 * filter: Function takes in an array and a callback function. Then it iterates through the array. Then it calls 
 * the function passing in 3 arguments (it's element, it's index, <array>). If true the function pushes
 * elements into the new array and returns it.
 * @param {array} array: Function takes in an array.
 * @param {func} func: Function takes in a callback function.
 * @returns {array}: Function returns the new array with pushed elements that are true.
 */

function filter(array, func) {
    // create newArray
    var newArray = []
    // iterate using for loop
    for (let i = 0; i < array.length; i++) {
        // call the function with arguments 
        if (func(array[i], i, array)) {
            // push each true elements into newArray
            newArray.push(array[i])
        }
    } return newArray
}

module.exports.filter = filter

/**
 * reject: Function takes in an array and a callback function. Then it iterates through the array. Then it calls 
 * the function passing in 3 arguments. It's element, it's index, <array>. If false the function pushes
 * elements into the new array and returns it.
 * @param {array} array: Function takes in an array.
 * @param {func} func: Function takes in a callback function.
 * @returns {array}: Function returns the new array with pushed elements that are false.
 */

function reject(array, func) {
    // create newArray
    var newArray = []
    // iterate using for loop
    for (let i = 0; i < array.length; i++) {
        // call the function with arguments 
        if (!func(array[i], i, array)) {
            // push the false elements into newArray
            newArray.push(array[i])
        }
        // return newArray
    } return newArray
}

module.exports.reject = reject

/**
 * partition: Function takes in an array and a callback function. Then it creates 3 new arrays. 1 array uses .filter() to add
 * the truthy values and push into new array. 1 array uses .reject() to add the falsey values to new array.
 * Then the function pushes both arrays into the final array to create array with 2 sub arrays and returns it.
 * @param {array} array: Function takes in an array.  
 * @param {func} func: Function takes in a func.
 * @returns {array}: Function returns array with 2 sub arrays of both values that returned truthy and falsey. 
 */

function partition(array, func) {
    // create newArray
    var newArray = []
    // create arrayPass and assign it to filter function
    var arrayPass = _.filter(array, func);
    // create arrayFail and assign it to reject function
    var arrayFail = _.reject(array, func);
    // push arrayPass and arrayFail into newArray
    newArray.push(arrayPass, arrayFail);
    // return newArray
    return newArray
}

module.exports.partition = partition

/**
 * map: Function takes in either an array or an object and a callback function. If <collection> is
 * an array it iterates through the <collection>, calls the function passing the arguments (the element, 
 * it's value, <collection>), and pushes it into a new array. If <collection> is an object it iterates 
 * through the <collection>, calls the function passing the arguments (the value, 
 * it's key, <collection>), and pushes it into a new array. Then the function returns the new array.
 * @param {array or object} collection: Function takes in either an array or an object. 
 * @param {func} func: Function takes in a callback function.
 * @returns {array}: Function returns new array with the return values of the callback function.
 */

function map(collection, func) {
    // create newArray
    var newArray = []
    // check if collection is an array
    if (Array.isArray(collection)) {
        // iterate using for loop
        // call function and push into newArray
        for (let i = 0; i < collection.length; i++) {
            newArray.push(func(collection[i], i, collection))
        }
    } else {
        // iterate using for in loop
        for (let key in collection) {
            // call function and push into newArray
            newArray.push(func(collection[key], key, collection))
        }
        // return newArray
    } return newArray
}

module.exports.map = map

/**
 * pluck: Function takes in an array of objects and a property. Then it uses _.map to iterate through an 
 * array of objects and it returns the value of the given property from each object. 
 * @param {array of objects} array: Function takes in an array of objects.
 * @param {property} property: Function takes in a property.
 * @returns {array}: Function returns an array of values.
 */
function pluck(array, property) {
    // use _.map to iterate through an array of objects
    return _.map(array, function (value, index, array) {
        // return value of the given property
        return value[property]
    })
}

module.exports.pluck = pluck

/**
 * every: Function takes in either an array or object and a callback function. If <collection> is an array, iterate 
 * through the array and call the function for each element. If all of the return values are truthy return true.
 * If even one of the return values is falsey return false. If <collection> is an object, iterate through the properties 
 * and call the function for each value. If all the return values are truthy return true. If even one of the return values 
 * is falsey return false. If <function> isn't provided iterate through the <collection> and check each element to see if 
 * it's truthy or falsey. If they're all truthy return true and if even one is falsey return false. 
 * @param {array or object} collection: Function takes in either an array or object.
 * @param {func} func: Function takes in a callback function.
 * @returns {boolean (true or false)}: Function returns true if ALL the return values are truthy or function 
 * returns false if any of the return values is falsey. 
 */

function every(collection, func) {
    // determine if func does not resolve to truthy data
    if (!func) {
        // determine if array
        if (Array.isArray(collection)) {
            // iterate
            for (let i = 0; i < collection.length; i++) {
                // determine if current value is not truthy 
                if (!collection[i]) {
                    return false;
                }
            }
        } else { // else it's an object 
            for (let key in collection) {
                // determine if current value is not truthy
                if (!collection[key]) {
                    return false;
                }
            }

        }
    } else {
        // determine if array
        if (Array.isArray(collection)) {
            // iterate 
            for (let i = 0; i < collection.length; i++) {
                // determine if the result of invoking test function on current element, index, and collection is not truthy
                if (!func(collection[i], i, collection)) {
                    return false;
                }
            }
        } else { // collection
            // determine if the result of invoking test function on current value, key, and collection is not truthy 
            for (let key in collection) {
                if (!func(collection[key], key, collection)) {
                    return false;
                }
            }
        }
    } return true
}

module.exports.every = every

/**
 * some: Function takes in either an array or object and a callback function. If <collection> is an array, iterate 
 * through the array and call the function for each element. If all of the return values are falsey return false.
 * If at least one of the return values is truthy return true. If <collection> is an object, iterate through the properties 
 * and call the function for each value. If all the return values are falsey return false. If at least one of the return values 
 * is truthy return true. If <function> isn't provided iterate through the <collection> and check each element to see if it's 
 * truthy or falsey. If they're all falsey return false and if at least one is truthy return true. 
 * @param {array or object} collection: Function takes in an array or object.
 * @param {func} func: Function takes in a callback function.
 * @returns {boolean (true or false)}: Function returns false if ALL the return values are falsely or function 
 * returns true if any of the return values is truthy. 
 */
_.some = function (collection, func) {
    // determine if func resolves to truthy data
    if (!func) {
        // determine if array
        if (Array.isArray(collection)) {
            // iterate
            for (let i = 0; i < collection.length; i++) {
                // determine if current value is not truthy 
                if (collection[i]) {
                    return true;
                }
            }
        } else { // else it's an object 
            for (let key in collection) {
                // determine if current value is truthy
                if (collection[key]) {
                    return true;
                }
            }

        }
    } else {
        // determine if array
        if (Array.isArray(collection)) {
            // iterate 
            for (let i = 0; i < collection.length; i++) {
                // determine if the result of invoking test function on current element, index, and collection is truthy
                if (func(collection[i], i, collection)) {
                    return true;
                }
            }
        } else { // collection
            // determine if the result of invoking test function on current value, key, and collection is truthy 
            for (let key in collection) {
                if (func(collection[key], key, collection)) {
                    return true;
                }
            }
        }
    } return false
}

module.exports.some = some 

/**   
 * reduce: Function takes in an array, a callback function, and a seed. The function iterates through the array and calls 
 * the callback function for every element in the array. It accumulates a return value based on the "previous result". On
 * the first iteration use <seed> as the "previous result". If <seed> doesn't exist instead use the first element of 
 * <collection> as <seed> and start the iteration at 2nd element. 
 * @param {array} array: Function takes in an array.
 * @param {func} func: Function takes in a callback function.
 * @param {seed} seed: Function takes in a seed.
 * @returns {Any value}: Function returns the return value of the final callback.
 */

function reduce(array, func, seed) {
    // create result variable
    let result;
    // determine if seed is undefined
    if (seed === undefined) {
        result = array[0];
        // iterate using a for loop
        for (let i = 1; i < array.length; i++) {
            // reassign result to invoking function on result, current item, current index, and array
            result = func(result, array[i], i, array);
        }
    } else { // else seed is defined
        result = seed;
        // iterate using for loop
        for (let i = 0; i < array.length; i++) {
            // reassign result
            result = func(result, array[i], i, array)
        }
    }
    // return result 
    return result;
}

module.exports.reduce = reduce 

/**
 * extend: Function takes in an obj1 and an unknown number of additional objects. It copies properties from
 * additional objects into obj1 and returns it.
 * @param {obj1} obj1: Function takes in an object.
 * @param  {obj} moreObjs: Function takes in an unknown number of additional objects. 
 * @returns {obj1}: Function returns obj1 with new key/value pairs from additional objects.
 */

function extend(obj1, ...moreObjs) {
    // iterate through the array of moreObjs 
    for (var i = 0; i < moreObjs.length; i++) {
        // iterate through each object
        // add new key/value pairs to obj1
        for (let key in moreObjs[i]) {
            obj1[key] = moreObjs[i][key];
        }
    } // return obj1
    return obj1
}

module.exports.extend = extend 
