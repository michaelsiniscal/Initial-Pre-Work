// Learned how to use the comparison equality (or strict equality) function to compare two variable imputs rather than just one variable input to a static value

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
console.log(compareEquality(10, 10));
