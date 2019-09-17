// Used for loop to iterate through an array. Used <= to make it count the last number (6) because I couldn't see anything else wrong with the code except that (6) wasn't being counted and assumed it wasn't reading entire array. It worked, but I don't have evidence for why.

// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line

var total = 0;

for (var i = 0; i <= ourArr.length; i++) {
  total += myArr[i];

}

console.log(total)
console.log(ourTotal)
