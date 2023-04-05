/**
 * 
 * STRING MANIPULATION:
 *
 * 0: String manipulation is when strings get manipulated either using operators or string methods.
 * 
 * 1. With Operators: They can be concatenated with either the + or += operators.
 *
 * 2. With string methods: They can also make manipulated copies of themselves using built in methods for 
 * strings ex: .length, .slice, .toUpperCase, etc.
 * 
 * 


 */

// 1. Using operators: (+ and +=)

var cat = 'meow'
var dog = 'bark'
var animalSounds = cat + ' ' + dog;
console.log(animalSounds); // => prints meow bark

var animal = 'kitty';
animal += ' cat'; 
console.log(animal); // => prints kitty cat 

// 2. Using string methods: (.length, .slice, .toUpperCase)
var colors = 'pink';
console.log(colors.toUpperCase()); // => prints 'PINK

var months = 'March, April, May';
console.log(months.slice(14)); // => prints 'May'

var word = 'Hello';
console.log(word.length); // => 5