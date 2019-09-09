// This was a difficult lesson. I looked up past lessons under hint and still had to look at solution to solve. Spent time changing console log and return to better understand how these work. Makes sense now, but wouldn't have understood on my own.

function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var removed = arr.shift();
  return(removed);  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 4)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
