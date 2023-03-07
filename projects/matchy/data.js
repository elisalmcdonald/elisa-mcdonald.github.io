/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create variable and assign to empty object 
var animal = {};
// use dot notation to assign key/value pair
animal.species = 'cat';
// use bracket notation to assign key/value pair
animal['name'] = 'Coco';
// use dot notation to assign property with empty array
animal.noises = [];
// print to the console
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create variable and assign to empty array
var noises = [];
// use bracket notation to add first element
noises[0] = 'meow';
// use .push to add last element
noises.push('purr');
// use .unshift to add element to beginning of array
noises.unshift('rawr');
// use bracket notation to add element to end of array using length property
noises[noises.length] = 'buzz';
// log the length to the console
console.log(noises.length);
// log the last element 
console.log(noises[noises.length - 1]);
// log the whole array
console.log(noises)


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// use bracket notation to assign noises property to new array
animal['noises'] = noises;
// use dot notation to add another noise
animal.noises.push('hiss');
// log to console
console.log(animal.noises);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create variable and assign to empty array
var animals = [];
// use .push to add animal to array
 animals.push(animal);
 // log to console
 console.log(animals);
 // create variable and assign to data
 var duck = {
  species: 'duck', 
  name: 'Daffy', 
  noises: ['quack', 'honk', 'coo']
 };

 // use .push to add duck to animals array
 animals.push(duck);
 // log to console
 console.log(animals);
 // create two more animal objects
 // add to animals array

 var bird = {
  species: 'bird', 
  name: 'Tweety', 
  noises: ['chirp', 'whistle', 'croak']
 };
  animals.push(bird);

 var frog = {
  species: 'frog', 
  name: 'Tiana', 
  noises: ['clicks', 'grunts', 'trills']
 };
  animals.push(frog);

  // log to the console
  console.log(animals);
  console.log(animals.length);



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I chose an array as my data structure because arrays are good for making lists 

// create variable and assign to empty array
var friends = [];
// write function that takes animals array 
// returns random index # using Math.random
function getRandom(array) {
  return Math.floor(Math.random() * array.length)
}

// using random index function, get random animal and add its name to friends
friends.push(animals[getRandom(animals)].name);
// log to console
console.log(friends)
// use bracket notation to add friends list to friends 
animal['friends'] = friends
// log to console
console.log(animal);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}