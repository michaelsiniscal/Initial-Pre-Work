// Learned difference between equality and strict equality which requires comparison of common types as well as common values to return true

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
console.log(testStrict(7));
