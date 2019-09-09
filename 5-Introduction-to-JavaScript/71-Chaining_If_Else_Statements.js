// Learned how to chain else if statements in order to have multiple possible return values

function testSize(num) {
  // Only change code below this line
  if (num < 5) { return "Tiny"}
  else if (num < 10) { return "Small" }
  else if (num < 15) { return "Medium" }
  else if (num < 20) { return "Large" }
  else { return "Huge" }
  // Only change code above this line
}

// Change this value to test
console.log(testSize(18));
