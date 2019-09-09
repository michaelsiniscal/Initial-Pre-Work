// Learned how to make comparison with greater than Operator. Can be used with multiple just true (single arguement if > function) to return value based on closest arguement. A true/false option can be used at the end of function, but any single arguement functions after will not be evaluated.

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
console.log(testGreaterThan(88));
