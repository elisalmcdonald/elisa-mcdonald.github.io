/**
 * 
 * DATA TYPES:
 *
 * 0: Data types are 
 * 
 * 1. Number: A number either written with or without decimals.
 *
 * 2. String: A series of characters ex: 'Elisa McDonald'. Strings are written with either single or
 * double quotes. 
 * 
 * 3. Boolean: Either true or false.
 * 
 * 4. Array: Written with sqaure brackets. Array items are separated by commas.
 * 
 * 5. Object: Written with curly braces. Object properties are written as key value pairs, separated by commas.
 * 
 * 6. Function: A block of code designed to perform a specific task. It's executed when something calls it.
 *
 * 7. Undefined: A variable without a value. 
 * 
 * 8. Null: In JavaScript null is something that doesn't exist aka nothing. The data type of null is an object.
 * 
 * 9. NaN: Short for not a number. NaN is a number that's not a legal number.
 * 
 * 10. Infinity and -Infinity: Infinity is a poisitive infinity greater than any number and -Infinity is a negative
 * number less than any number.
 * 
 * 11. Simple vs. Complex data types: Simple data types are immutable. Operations on simple values return
 * new simple values and don't alter the orignal value. Simple data types have a fixed size in memory which
 * is 8 bytes. Complex data types are mutable and they can be any size.
 * 
 * 12. Copy by value vs. by reference: Simple data types are copied by value and complex data types are
 * copied by reference. 

 */

// 1. String:
var name = 'Elisa'; 
var name = "Elisa";

// 2. Number:
var age = '18';
var age = '18.42';

// 3. Boolean:
var animal = 'cat';
var mammals = 'cat';
var herbivores = 'zebra';

animal === mammals // => true
animal === herbivores // => false

// 4. Array:
var animals = ['Cat', 'Dog', 'Bunny']; 

// 5. Object:
var elisa = {firstName:'Elisa', lastName: 'McDonald', gender: 'female'};

// 6. Function:
function add(a, z) { // function declaration 
    console.log(a + z) // code to be executed 
}
add(1, 2) // calling the function using 1 and 2
//  => 3

// 7. Undefined:
let elisa; // no value has been defined

// 8. Null:
var elisa = {firstName:'Elisa', lastName: 'McDonald', gender: 'female'};
elisa = null; // value is null but still considered an object 

// 11. Simple vs. Complex data types:
var string = 'elisa' // simple (string, number, boolean, null, NaN, and undefined)
var array = ['one', 'two', 'three'] // complex (array, function, and object)


// 12. Copy by value vs. by reference:

// copied by value (simple):
var num = 10 
var num2 = num // value in num gets copied into num2
num2 = 20 // changing num2 to 20
console.log(num) // => 10  (doesn't get affected by num2 changing values)

// copied by reference (complex):
var obj = {one: '1'}; 
var obj2 = obj; // value gets stored in obj2 (now they both point to the same object)
obj2.one = 'uno'; // changing obj2.one to 'uno' 
console.log(obj.one); // => 'uno' (does get affected by obj2 changing values so now they're both 'uno')


