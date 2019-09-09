// Learned how to use the == equality operator to get a true or false reading if a variable input is equal to the parameter set in the function

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
console.log(testEqual(12));
