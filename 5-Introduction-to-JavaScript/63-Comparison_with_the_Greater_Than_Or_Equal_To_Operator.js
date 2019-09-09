// Learned that an if function with no operators will return the first return value (typically true) even though its not true, and that if there are operators but no appropropriate true return available, evaluation will move to next if function in line if there is one and follow same rules until one of the true or false values is returned - ie easy to get incorrect return if operators are missing.

function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

// Change this value to test
console.log(testGreaterOrEqual(4));
