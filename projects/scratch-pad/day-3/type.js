// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
   // return ttrue if typeof value is array
  return Array.isArray(value) 
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */

function isObject(value) {
    // YOUR CODE BELOW HERE //
    // if value is array
    // return false
        if (Array.isArray(value)) {
            return false
        } // if value is null
        // return false 
        else if (value === null) { 
            return false
        } // if value is date 
        // return false
        else if (value instanceof Date) {
            return false
        } // if value is object
        // return true 
        else if (typeof value === 'object') {
            return true;
         } // if it's anything else 
         // return false 
         else {
            return false;
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //

    // if value is null
        // return false 
    if (value === null) {
        return false
    } // if value is date 
        // return false
    else if (value instanceof Date) {
        return false 
    } //if value is array or object collection
    // return true
    else if (Array.isArray(value) || typeof value === 'object') {
        return true
    } // if it's anything else 
         // return false 
         else {
            return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object" 
 *    - "undefined" 
 *    - "number"
 *    - "boolean"
 *    - "null" 
 *    - "function"
 *    - "date" 
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
  
    // check if input value is string
    // if true return string
   if (typeof value === "string") {
    return "string"
   } // check if input value is array
   // if true return array
   else if (Array.isArray(value)) {
    return "array"
   } // check if input value is undefined
   // if true return undefined
   else if (typeof value === "undefined") {
    return "undefined"
   } // check if input value is number
   // return number
   else if (typeof value === "number") {
    return "number"
   } // check if input value is boolean
   // return boolean
   else if (typeof value === "boolean") {
    return "boolean"
   } // check if input value is null
   // if true return null
   else if (value === null) {
    return "null"
   } // check if input value is function
   // if true return function
   else if (typeof value === "function") {
    return "function"
   } // check if input value is date
   // if true return date
   else if (value instanceof Date) {
    return "date"
   } // check if input value is object
   // if true return object
   else if (typeof value === "object") {
    return "object"
   } 
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
