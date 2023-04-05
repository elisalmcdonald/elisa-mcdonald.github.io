/**
 * 
 * LOOPS:
 *
 * 0: Loops allow us to execute a block of code as many times as needed. They are good for iterating over 
 * collections of data. Once we have iterated through we can pull specific values out to work with them one
 * at a time.
 * 
 * 1. While loops: States a condition that while it's true will contiune to loop through and execute the block 
 * of code. 
 *
 * 2. For loops: Best for iterating over arrays. 
 * A for loop is comprised of 3 statements:
 * var index = 0; (the start statement initializes an index (in this case 0))
 * index < array.length; (the stop statement gives the condition when to stop looping)
 * index++ (the update statement increments/decrements the index (in case up by 1))
 * 
 * 3. For-in loops: Pulls out all the keys of an object one at a time. 
 * 

 */

// 1. While loops:
var count = 2
while(count < 100){ 
    console.log(count); // will print every number from 2 to 99
    count++; // incrementing the index up by 1 each time through 
}

// 2. For loops: (looping over an array forwards and backwards)
var array = ['cat', 'dog', 'human', 'bunny'];

for (var i = 0; i < array.length; i++){
    console.log(array[i]); // will print all the items in the array one by one
}
for (var i = array.length - 1; i >= 0; i--){
    console.log(array[i]); // will print all the items in the array one by one backwards
}

// 3. For-in loops: (looping over an object)
var animal = { type: 'cat', gender: 'female', age: '10' }

for (var key in animal){
    console.log(animal[key]); // must use bracket notation to access elements in the object  
} // will print all the values in the object one by one  
