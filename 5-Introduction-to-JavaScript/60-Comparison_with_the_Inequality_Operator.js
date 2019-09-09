// Learned how to use the Inequality Operator to reverse the true/false output of function. Not sure if it is an oversimplification to say that it returns the second value of if function rather than first if equal

// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
console.log(testNotEqual(99));
