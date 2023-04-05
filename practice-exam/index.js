// const dogs = require('./dogData');
let dogs = [
    {
        "name": "Doggo-co-WOOF",
        "age": 3,
        "species": "dog",
        "weight": 45,
        "votes": 22
    }, {
        "name": "Space CATdet",
        "age": 4,
        "species": "cat",
        "weight": 20,
        "votes": 5
    }, {
        "name": "Solar Squirrel",
        "age": 1,
        "species": "squirrel",
        "weight": 0.5,
        "votes": 13
    }, {
        "name": "Bark Hole",
        "age": 20,
        "species": "dog",
        "weight": 19,
        "votes": 20
    }, {
        "name": "Howlling Winds",
        "age": 55,
        "species": "dog",
        "weight": 90,
        "votes": 200
    }, {
        "name": "Electron Nutria",
        "age": 7,
        "species": "nutria",
        "weight": 3,
        "votes": 0
    }, {
        "name": "Howlling Winds Sr.",
        "age": 59,
        "species": "dog",
        "weight": 101,
        "votes": 201
    }, {
        "name": "Tycho Brahe",
        "age": 35,
        "species": "moose",
        "weight": 500,
        "votes": 123
    }, {
        "name": "Johannes Kepler",
        "age": 9,
        "species": "dog",
        "weight": 5,
        "votes": 55
    }, {
        "name": "Pluto",
        "age": 89,
        "species": "dog",
        "weight": 10,
        "votes": 190
    }, {
        "name": "Quark",
        "age": 20,
        "species": "dog",
        "weight": 1,
        "votes": 45
    }, {
        "name": "Higgs",
        "age": 26,
        "species": "dog",
        "weight": 0.00001,
        "votes": 200
    }, {
        "name": "Lepton",
        "age": 12,
        "species": "dog",
        "weight": 15,
        "votes": 175
    }, {
        "name": "Boson",
        "age": 9,
        "species": "dog",
        "weight": 8,
        "votes": 141
    }
]

// 1. 
var greeting = function(greeting, location, time){
    console.log(`${greeting} ${location} ${time}`)
}

// 2.
// We have more contestants than anticipated. (We actually don't have a count!)
//     Assign a function to our `contestants` variable that will return the number of entries in our dogs array.

var contestants = function(array){
    return array.length; 
}

// 3.
// Using the native filter method with our `dogs` array, 
// create an array called `filterSpecies` that will filter out all of the species that are not dogs! 
var filterSpecies = dogs.filter(function(curr){
    return curr.species === 'dog'
})

// 4. 
// Using the spread operator, assign a copy of our `filterSpecies` array to our `dogContestants` variable.
var dogContestants = [...filterSpecies]

// Now that we have our `dogContestants` array, we need to add a `class` property to each dog object.
//     Using the native map method, add a key of `class` with the value:
//         - "red" if the dog's weight is between 0 and 10.
//         - "yellow" if the dog's weight is between 11 and 20.
//         - "green" if the dog's weight is 21 or over.

var dogsWithClasses = dogContestants.map(function(curr){
    if (curr.weight >= 21){
        curr.class = 'green'
    } else if (curr.weight >= 11){
        curr.class = 'yellow'
    } else {
        curr.class = 'red'
    } return curr
})

// 6.
// The votes are in! We have an array of the top dogs in each class
//     Using recursion, copy all of the properties into one object and return that object.
var firstInClass = function(array, output = {}){
    // base
    if (array.length === 0){
        return output
    }

    output = {...output, ...array[0]}

    // recurison
    return firstInClass(array.slice(1), output)
}

// 7.
// For statistical reasons, lets count all of the votes we recieved for our dog and non-dog contestants!
//     Using reduce, find the sum of the votes casted.
var votes = dogs.reduce(function(acc, curr){
    acc += curr.votes
    return acc
}, 0)