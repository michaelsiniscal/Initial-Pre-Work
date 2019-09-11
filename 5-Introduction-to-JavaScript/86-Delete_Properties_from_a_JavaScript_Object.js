// Lenared how to delete an existing property from an object and getting better at being able to directly test my work - here i added a couple lines and // the deletion to see if it worked - would like to rewrite to return null or undefined.

// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line.

delete myDog.tails;

var appendage = myDog["tails"];

console.log(appendage)
